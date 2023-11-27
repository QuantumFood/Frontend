import { ref } from "vue";
import axios from "axios";

export default function useOrderFood() {
  const errorOrder = ref(null);

  const orderFood = async (food) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://pinto/order",
        { food },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(response.data.message || "Failed to order food");
      }

      error.value = null;
      return response.data;
    } catch (err) {
      errorOrder.value = err.message;
    }
  };

  return { errorOrder, orderFood };
}
