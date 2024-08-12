import axios from "axios";

export const authRemote = {
  authenticate: async (type, { name, email, password }) => {
    const url =
      type === "login"
        ? "http://127.0.0.1:8000/api/v1/auth/login"
        : "http://127.0.0.1:8000/api/v1/auth/register";

    try {
      const payload =
        type === "login" ? { email, password } : { name, email, password };

      const { data } = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      throw error;
    }
  },
};
