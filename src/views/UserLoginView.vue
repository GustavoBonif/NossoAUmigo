<script>
import { mapActions } from "pinia";
import { useUserStore } from "@/stores/user";

export default {
  data() {
    return {
      user: {
            id: "",
            email: "",
            password: "",
        }
    };
  },
  methods: {
    ...mapActions(useUserStore, ["loginUser"]),
    async login() {
      try {
        const msg = await this.loginUser(this.user);
        alert(msg);
        Object.assign(this.user, {
          id: "",
          email: "",
          password: "",
        });
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
  },
};
</script>

<template>
    <form class="m-auto w-50 pt-3">
        <hr>
        <h2 class="text-center text-warning">Login</h2>
        <hr>
        <div class="mb-3">
            <label for="userEmail" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="emailUser" aria-describedby="emailHelp" placeholder="exemplo@gmail.com" v-model="user.email">
        </div>
        <div class="mb-3">
            <label for="userPassword" class="form-label">Senha</label>
            <input type="password" class="form-control" id="userPassword" placeholder="*********" v-model="user.password">
        </div>
        <div class="text-center">
            <button @click="login" type="submit" class="btn btn btn-outline-success">Entrar</button>
        </div>
        <div class="text-center mt-2">
            <router-link to="/userRegister" class="text-dark"> <button type="button" class="btn btn-light">Cadastre-se</button></router-link>
        </div>
    </form>
</template>