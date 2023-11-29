<template>
    <div class="fixed inset-0 bg-cover backdrop:blur-sm  bg-black opacity-120">
      <div v-for="(image, index) in images" :key="index" :style="{ backgroundImage: `url(${image})`, opacity: currentImageIndex === index ? 1 : 0 }" class="absolute inset-0 bg-cover transition-opacity duration-1000">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import image1 from "../assets/image1.jpg"
  import image2 from "../assets/image2.jpg"
  import image3 from "../assets/image3.jpg"
  import image4 from "../assets/image4.jpg"
  import image5 from "../assets/image5.jpg"
  
  export default {
    setup() {
      const images = [image1, image2, image3, image4,image5];
      const currentImageIndex = ref(0);
      let intervalId;
  
      const changeImage = () => {
        currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
      };
  
      onMounted(() => {
        intervalId = setInterval(changeImage, 5000);
      });
  
      onUnmounted(() => {
        clearInterval(intervalId);
      });
  
      return { images, currentImageIndex };
    },
  };
  </script>
  
  <style scoped>
  .absolute {
    position: absolute;
  }
  .transition-opacity {
    transition: opacity 1s;
  }
  </style>




  