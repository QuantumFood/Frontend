import { ref } from "vue";
import axios from "axios";

export default function useGetOrderedFood() {
  const error = ref(null);

  const getOrderedFood = async () => {
    console.log("logout in the useLogout");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://pinto/orderedfood",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(response.data.message || "Failed to logout");
      }

      error.value = null;
      console.log(response.data);
      return response.data;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, getOrderedFood };
}
