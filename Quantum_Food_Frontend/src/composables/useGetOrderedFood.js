import { ref } from "vue";
import axios from "axios";

export default function useGetOrderedFood() {
  const errorForGetFood = ref(null);
  const myFood = ref("");

  const getOrderedFood = async () => {
    console.log("logout in the useLogout");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://192.168.126.15:8000/api/v1/requests/food",

        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(response.data.message || "Failed to logout");
      }

      errorForGetFood.value = null;
      console.log(response.data[0].food);
      myFood.value = response.data[0]?.food;

      // console.log(myfood.value, "this is my food");
      return response.data[0]?.food;
    } catch (err) {
      errorForGetFood.value = err.response.data.detail;
    }
  };

  return { errorForGetFood, getOrderedFood };
}
