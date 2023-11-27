import { ref } from "vue";
import axios from "axios";

export default function useLogout() {
  const error = ref(null);

  const logout = async () => {
    console.log("logout in the useLogout");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://pinto/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(response.data.message || "Failed to logout");
      }

      // Removing the token and user details from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("userDetails");

      error.value = null;
      return response.data;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, logout };
}
