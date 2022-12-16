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
            name: "",
            role: "",
        }
    };
  },
  methods: {
    ...mapActions(useUserStore, ["saveUser"]),
    async save() {
      try {
        const msg = await this.saveUser(this.user);
        alert(msg);
        Object.assign(this.user, {
          id: "",
          email: "",
          password: "",
          name: "",
          role: "",
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
        <h2 class="text-center text-warning">Cadastre-se</h2>
        <hr>
        <div class="mb-3">
            <div class="row">
                <label for="userName" class="form-label">Nome</label>
                <input type="text" class="form-control" id="userName" placeholder="Exemplo: João da Silva" v-model="user.name">
            </div>
        </div>
        <div class="mb-3">
            <div class="row">
                <label for="userEmail" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="exemplo@gmail.com" v-model="user.email">
            </div>
        </div>
        <div class="mb-3">
            <div class="row">
                <label for="userPassword" class="form-label">Senha</label>
                <input type="password" class="form-control" id="userPassword" placeholder="*********" v-model="user.password">
            </div>
        </div>
        <div class="mb-3">
            <div class="row">
                <div class="col">
                    <label for="userPassword" class="form-label">Confirmar senha</label>
                </div>
                <div class="col">
                    <div id="emailHelp" class="form-text text-danger">* Informe a mesma senha do campo acima.</div>
                </div>
                <input type="password" class="form-control" id="userPasswordRepeat" placeholder="*********">
            </div>
        </div>
        <button @click="save" type="submit" class="btn btn btn-outline-success">Cadastrar</button>
    </form>
</template>