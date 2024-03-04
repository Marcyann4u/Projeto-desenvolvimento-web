<!-- TemplateRegister.vue -->
<template>
    <main class="container">

        <div class="content-img">
            <img :src="src" alt="Dynamic Image" @error="handleError" />
        </div>
        <div class="content-txt">
            <slot></slot>
        </div>
    </main>
  </template>
  
  <script>
  export default {
    props: {
      src: String,
    },
    methods: {
      handleError() {
        console.error('Error loading image:', this.src);
        // You can implement additional error handling logic here
      },
    },
  };
  </script>
  
  <style scoped>
    .container{
        display: flex;
        height: 100vh;
        width: 100vw;
        gap: 0;
    }
    .content-img {
    width: 50%;
    overflow: hidden; /* Add this line to hide any overflow */
}

    .content-img img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .content-txt{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 860px) {
  .container {
    flex-direction: column; /* Stack content in a column on smaller screens */
    justify-content: center;
  }

  .content-img {
    display: none; /* Hide the image on smaller screens */
  }

  .content-txt {
    width: 100%; /* Make the text content full width on smaller screens */
  }
}
</style>
  