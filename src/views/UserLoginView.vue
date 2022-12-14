<template>
    <form class="m-auto w-50 pt-3">
        <h2 class="text-center">Logar</h2>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn btn-outline-success">Entrar</button>
        </div>
        <div class="text-center mt-2">
            <router-link to="/userRegister" class="text-dark">Cadastra-se</router-link>
        </div>
    </form>
</template>