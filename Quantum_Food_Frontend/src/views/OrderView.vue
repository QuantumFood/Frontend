<template>
    <Background>
      
      <div class="flex flex-col items-center justify-center h-screen">

        <div class="absolute top-0 right-0 m-4 cursor-pointer" @click="toggleMenu">
        <div class="w-1 h-1 bg-white rounded-full"></div>
        <div class="w-1 h-1 bg-white rounded-full mt-1"></div>
        <div class="w-1 h-1 bg-white rounded-full mt-1"></div>
      </div>

      <!-- Menu with Logout button -->
      <div v-if="showMenu" class="absolute top-0 right-0 mt-10 bg-red-500 p-2 rounded shadow mr-4">
        <button @click="handleLogout" class="px-3 py-1 text-black-500 hover:text-black-700">Logout Pinto</button>
       
      </div>




        <div class="absolute  top-20 left-0 right-0 flex justify-around pt-5">
        <button @click="handleShowOrderForm" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 italic font-extrabold mr-10">Place Order</button>
        <button @click="handleShowOrderHistory" class="px-4 py-4 bg-green-500 text-white rounded hover:bg-green-700 italic font-extrabold">Ordered Food</button>
      </div>
      <div v-if="showOrderForm">
    <form class="flex flex-col items-center">
    <input v-model="food" type="text" placeholder="Type your order here" class="px-4 py-2 border rounded w-full max-w-md mb-4 font-bold italic">
    <button @click.prevent="placeOrder" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 italic  font-extralight">Send Order</button>
    </form>
    </div>

  
        <div v-if="showOrderHistory">
          <p  class=" font-semibold italic text-stone-100">You ordered: {{ food }}</p>
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
      const food = ref('');
      const showOrderForm = ref(false);
      const showOrderHistory = ref(false);
      const showMenu = ref(false);
      const {error, logout} = useLogout()
      const {orderFood,errorOrder} = useOrder()
      const router  = useRouter()
      const {getOrderedFood} = useGetOrderedFood()
  
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

      const handleShowOrderHistory = ()=>{
        showOrderForm.value = false
        showOrderHistory.value = !showOrderHistory.value
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
        getOrderedFood(food);
      } 
     
  
  
      return {
        food,
        showOrderForm,
        showOrderHistory,
        showMenu,
        error,
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
  