<template>
  <Background>
    <div class=" ">
     <div>
      <p>Quantum Food</p>
      
     </div>
      <div class=" flex flex-col items-center justify-center h-screen">
        <h1 class="">Quantum Food</h1>
        <p class=" text-center  text-white  italic font-extrabold   mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatibus quae doloribus quidem. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatibus quae doloribus quidem.
        </p>
        <button class="px-12 py-4 bg-violet-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75  mt-24" @click="redirectToLogin" >Login</button>
      </div>
    </div>
  </Background>
</template>

<script >

import Background from "../components/Background.vue"
import { useRouter } from "vue-router";

 

export default {
  components: {
    Background,
  },
  setup() {
    const router = useRouter()
    const redirectToLogin = ()=>{
      router.push("/login")
    }
    return { redirectToLogin };

    
  },
};
</script>

