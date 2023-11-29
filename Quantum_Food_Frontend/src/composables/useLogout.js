import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default function useLogout() {
  const error = ref(null);
  const router = useRouter();
  const logout = async () => {
    console.log("logout in the useLogout");
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://pinto/logout",
        {},
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(response.data || "Failed to logout");
      }

      // Removing the token and user details from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      error.value = null;
      router.push("/");
      return response.data;
    } catch (err) {
      error.value = err.response.data.detail;
    }
  };

  return { error, logout };
}
