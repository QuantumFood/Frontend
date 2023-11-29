import { ref } from "vue";
import axios from "axios";

export default function useSignup() {
  const error = ref(null);

  const signup = async (username, email, password) => {
    console.log(email, "the email in the useAuth");
    console.log(username);
    console.log(password);
    try {
      const response = await axios.post(
        "http://192.168.126.15:8000/api/v1/auth/register",
        {
          username,
          email,
          password,
        }
      );

      if (response.status !== 201) {
        throw new Error(response.data || "Failed to register");
      }
      localStorage.setItem("token", response.data.token.access_token);
      localStorage.setItem("user", response.data.user.username);

      // console.log(response.data.user.username);
      error.value = null;

      return response.data;
    } catch (err) {
      error.value = err.response.data.detail;
    }
  };

  return { error, signup };
}
