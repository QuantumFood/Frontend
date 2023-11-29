<template>
    <Background>
      
      <div class="relative">
    <button @click="showMenu = !showMenu" class="focus:outline-none absolute top-0 right-0 m-4 z-30">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" :class="showMenu ? 'text-black' : 'text-white'" stroke="currentColor" class="h-6 w-6 text-black">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button> 
    <div v-if="showMenu" @click="showMenu = false" class="fixed inset-0 bg-gray-900 opacity-75 z-10"></div>
    <div v-if="showMenu" class="fixed inset-0 flex items-center justify-end z-20">
      <div @click.stop class="w-1/3 h-full bg-white text-black">
        <div class="space-y-8 text-center text-2xl flex flex-col items-center justify-center h-screen">
          
           <button class="    rounded font-extrabold " @click="handleLogout"  >Logout {{username}}</button>
          
        </div>
      </div>
    </div>
  </div>




  <h1 class=" font-extrabold  text-5xl  text-green-700  justify-start mt-10 pl-10">Quantum<span class=" text-white">Food</span></h1>
  
  <!-- <div class="text-white items-center justify-center flex flex-col mt-4 font-extrabold "><h1 class="font-extrabold text-4xl  text-green-700">Quantum<span class="text-white">Food</span></h1></div> -->

      <div class="flex flex-col items-center justify-center h-screen">
 

        <div class="absolute top-20 left-0 right-0 flex flex-col items-center pt-5">
    <button @click="handleShowOrderForm" class="px-4 py-2 bg-slate-500 text-white rounded hover:bg-blue-700  font-extrabold mb-4 w-36 h-12  focus:outline-none" >Place Order</button>
    <button @click="handleShowOrderHistory" class="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-green-700  font-extrabold w-36 h-12">My Order</button>
</div>

       



        <!-- <div class="absolute  top-20 left-0 right-0 flex flex-col items-centre pt-5">
          
        <button @click="handleShowOrderForm" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 italic font-extrabold mr-10 w-32 h-14">Place Order</button>
        <button @click="handleShowOrderHistory" class="px-4 py-4 bg-green-500 text-white rounded hover:bg-green-700 italic font-extrabold w-32 h-14">My Order</button>
      </div> -->
      <div v-if="showOrderForm">
    <form @click.prevent="" class="flex flex-col items-center">
    <input v-model="food" type="text" placeholder="Type your order here" class="px-4 py-2 border rounded w-full max-w-md mb-4 font-bold italic" >
    <button @click="placeOrder" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 italic  font-extralight">Send Order</button>
    <p v-if="errorOrder" class="text-2xl text-white font-bold align-middle ">You have already place an order  </p>
    </form>
    </div>

  
        <div v-if="showOrderHistory">
          <p  class=" font-bold italic text-2xl   text-white" v-if="myfood" >You ordered: {{ myfood }}</p>
        </div>
      </div>
    </Background>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Background from '../components/Background.vue';
  import useLogout from "../composables/useLogout"
  import useOrder from "../composables/useOrder"
  import useGetOrderedFood from "../composables/useGetOrderedFood"
  export default {
    components: {
      Background
    },
    setup() {
      const username = ref("")
      const food = ref('');
      const myfood = ref("");
      const showOrderForm = ref(false);
      const showOrderHistory = ref(false);
      const showMenu = ref(false);
      const {error, logout} = useLogout()
      const {orderFood,errorOrder} = useOrder()
      const router  = useRouter()
      const {getOrderedFood,errorForGetFood} = useGetOrderedFood()
      if(myfood){
      console.log(myfood)
      
      }
      username.value = localStorage.getItem("user")
      const placeOrder = () => {
        console.log(`Placing order for: ${food.value}`);
        showOrderForm.value = false;
        showOrderHistory.value = true;
        orderFood(food.value);

      };
      const handleShowOrderForm = ()=>{
        showOrderForm.value = !showOrderForm.value
        showOrderHistory.value = false
      }

      const handleShowOrderHistory = async()=>{
        showOrderForm.value = false
        showOrderHistory.value = !showOrderHistory.value
       myfood.value =  await getOrderedFood();

      }

      const toggleMenu =()=>{
        showMenu.value = !showMenu.value
      }

      const handleLogout = async ()=>{
        console.log("logout");
        await logout()
        if(!error){
          console.log("You have sucessfully logout")
          router.push("/")
        }
      }

      const handleOrderdFood =()=>{
        getOrderedFood();
      } 
     
  
  
      return {
        food,
        showOrderForm,
        showOrderHistory,
        showMenu,
        error,
        myfood,
        errorOrder,
        username,
        orderFood,
        placeOrder,
        handleShowOrderForm,
        handleShowOrderHistory,
        toggleMenu,
        handleLogout,
        handleOrderdFood
        
      };
    }
  }
  </script>
  