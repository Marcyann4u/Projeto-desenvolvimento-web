import sqlite3

class Almoxarifado:
    def __init__(self, db_file):
        self.conn = sqlite3.connect(db_file)
        self.cursor = self.conn.cursor()
        self.create_tables()

    def create_tables(self):
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS Produtos (
                            ID INTEGER PRIMARY KEY,
                            Nome TEXT,
                            Tipo TEXT,
                            Descricao TEXT,
                            Preco REAL,
                            QtdEstoque INTEGER
                            )''')
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS Empresas (
                            ID TEXT PRIMARY KEY,
                            Nome TEXT
                            )''')
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS Colaboradores (
                            ID INTEGER PRIMARY KEY AUTOINCREMENT,
                            IdEmpresa TEXT,
                            Nome TEXT,
                            Tipo TEXT,
                            FOREIGN KEY (IdEmpresa) REFERENCES Empresas(ID)
                            )''')
        self.conn.commit()

    def cadastrar_produto(self, nome, tipo, descricao, preco, qtd_estoque):
        if self.produto_existe(nome):
            print("Erro: Produto já cadastrado.")
            return
        self.cursor.execute('''INSERT INTO Produtos (Nome, Tipo, Descricao, Preco, QtdEstoque)
                            VALUES (?, ?, ?, ?, ?)''', (nome, tipo, descricao, preco, qtd_estoque))
        self.conn.commit()

    def cadastrar_empresa(self, id_empresa, nome):
        if self.empresa_existe(id_empresa):
            print("Erro: Empresa já cadastrada.")
            return
        self.cursor.execute('''INSERT INTO Empresas (ID, Nome) VALUES (?, ?)''', (id_empresa, nome))
        self.conn.commit()

    def cadastrar_colaborador(self, id_empresa, nome, tipo):
        if self.colaborador_existe(nome):
            print("Erro: Colaborador já cadastrado.")
            return
        self.cursor.execute('''INSERT INTO Colaboradores (IdEmpresa, Nome, Tipo)
                            VALUES (?, ?, ?)''', (id_empresa, nome, tipo))
        self.conn.commit()

    def produto_existe(self, nome):
        self.cursor.execute("SELECT * FROM Produtos WHERE Nome=?", (nome,))
        return self.cursor.fetchone() is not None

    def empresa_existe(self, id_empresa):
        self.cursor.execute("SELECT * FROM Empresas WHERE ID=?", (id_empresa,))
        return self.cursor.fetchone() is not None

    def colaborador_existe(self, nome):
        self.cursor.execute("SELECT * FROM Colaboradores WHERE Nome=?", (nome,))
        return self.cursor.fetchone() is not None

    def fechar_conexao(self):
        self.conn.close()

if __name__ == "__main__":
    almoxarifado = Almoxarifado("almoxarifado.db")

    # Exemplo de cadastro de produtos
    almoxarifado.cadastrar_produto("Placa 1", "Periférico", "Asus", 2.500, 10)



    # Exemplo de cadastro de empresas
    almoxarifado.cadastrar_empresa("222222244", "Porto Digital 2")

    # Exemplo de cadastro de colaboradores
    almoxarifado.cadastrar_colaborador("45566565", "Gerente 2", "Vinicius")


    almoxarifado.fechar_conexao()
