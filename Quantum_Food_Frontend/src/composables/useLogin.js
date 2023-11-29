import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default function useLogin() {
  const router = useRouter();
  const error = ref(null);

  const login = async (email, password) => {
    console.log(email, "the email in the useAuth");
    try {
      const response = await axios.post(
        "http://192.168.126.15:8000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status !== 200) {
        throw new Error(response.data || "Failed to Login");
      }
      localStorage.clear()
      localStorage.setItem("token", response.data?.token.access_token);
      localStorage.setItem("user", response.data?.user.username);
      console.log("token", response?.data?.token.access_token);
      error.value = null;
      router.push("/order");

      // console.log(response.data.token.access_token);
      // console.log(response.data.user.username);
      return response.data;
    } catch (err) {
      console.log(err.response.data);
      error.value = err.response.data.detail;
    }
  };

  return { error, login };
}
