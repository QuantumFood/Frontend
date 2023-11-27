import { ref } from "vue";
import axios from "axios";

export default function useSignup() {
  const error = ref(null);

  const signup = async (username, email, password) => {
    console.log(email, "the email in the useAuth");
    try {
      const response = await axios.post("http://localhost:8080", {
        email,
        password,
        username,
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

  return { error, signup };
}
