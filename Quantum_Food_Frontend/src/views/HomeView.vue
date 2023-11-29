<template>
  <Background>
    <div class=" ">
     <div>
      <!-- <p class=" text-white font-bold">Quantum Food</p> -->
      
     </div>
     <h1 class=" font-extrabold  text-5xl  text-green-700  justify-start mt-10 pl-10">Quantum<span class=" text-white">Food</span></h1>
       
      <div class=" flex flex-col items-center justify-center h-screen">
        <p class=" text-center  text-white  italic font-extrabold   mt-10  w-60 h-30">
          Order your food from the comfort of your home
          
        </p>
        <button class="px-10 py-3  bg-slate-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75  mt-8" @click="redirectToSignup" >Signup</button>
        <button class="px-10 py-3  bg-cyan-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75  mt-8" @click="redirectToLogin" >Login</button>

      </div>
    </div>
  </Background>
</template>

<script >

import Background from "../components/Background.vue"
import { ref } from "vue";
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

    const redirectToSignup = ()=>{
      router.push("/signup")
    }
    return { redirectToLogin,redirectToSignup };

    
  },
};
</script>

