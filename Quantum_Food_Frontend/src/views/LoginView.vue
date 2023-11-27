<template>
    <div class="min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center italic">Login@QuantumFood</h2>
  
        <form @submit.prevent="login">
          <input type="hidden" name="remember" value="true">
  
          <div class="mb-4">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              v-model="email"
              required
              class="w-full  px-4 py-4 border rounded font-semibold italic"
              placeholder="Email address"
            />
          </div>
  
          <div class="mb-4">
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              required
              class="w-full px-4 py-4 border rounded font-semibold italic"
              placeholder="Password"
            />
          </div>
  
          <div>
            <button type="submit" class="w-full bg-blue-500 text-white py-4 rounded hover:bg-blue-600 font-extrabold italic" @click="handleLogin">
              Login
            </button>
            <p v-if="error" class="text-red-500">{{ error }}</p>
          </div>
        </form>
  
        <p class="mt-4 text-center">
           <router-link to="/signup" class="text-blue-500 font-semibold italic">Sign up</router-link>
        </p>
      </div>
    </div>
  </template>
  
  
  <script>
 import useLogin from "../composables/useLogin";

  import {ref} from "vue"
  export default {
    setup() {

        const {login, error} = useLogin()
        const email = ref("")
        const password = ref("")
        
     
        const handleLogin =()=>{
             
            login(email.value, password.value)
            
        }

      return {
        email,
        password,
        handleLogin,
        error
      }
    }
  };
  </script>
  