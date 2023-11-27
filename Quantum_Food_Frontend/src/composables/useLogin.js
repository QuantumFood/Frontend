import { ref } from "vue";
import axios from "axios";

export default function useLogin() {
  const error = ref(null);

  const login = async (email, password) => {
    console.log(email, "the email in the useAuth");
    try {
      const response = await axios.post("http://localhost:8080", {
        email,
        password,
      });

      if (response.status !== 200) {
        throw new Error(response.data.message || "Failed to register");
      }

      error.value = null;
      return response.data;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, login };
}
