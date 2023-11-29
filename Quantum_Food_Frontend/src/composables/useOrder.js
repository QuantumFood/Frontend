import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default function useOrderFood() {
  const errorOrder = ref(null);
  const router = useRouter();

  const orderFood = async (food) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://192.168.126.15:8000/api/v1/requests/food",
        { food: food },
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status == 401) {
        localStorage.setItem("token", null);
        router.push("/");
        return;
      }
      if (response.status !== 200) {
        throw new Error(response?.data || "Failed to order food");
      }

      error.value = null;
      return response?.data;
    } catch (err) {
      errorOrder.value = err.response?.data;
      console.log(err.response?.data.detail);
    }
  };

  return { errorOrder, orderFood };
}
