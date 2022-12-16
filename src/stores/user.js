import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    users: [],
  }),
  actions: {
    async saveUser(user) {
        return await this.addUser(user);
      },
    async addUser(user) {
      try {

        const { data } = await axios.post(
          "http://localhost:4000/users",
          user
        );

        this.users.push(data);
        return Promise.resolve("Usuário cadastrado com sucesso!");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
    async loginUser(user) {
      try {

        const { data } = await axios.post(
          "http://localhost:4000/users",
          user
        );

        this.users.push(data);
        return Promise.resolve("Login realizado com sucesso!");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
  },
});
