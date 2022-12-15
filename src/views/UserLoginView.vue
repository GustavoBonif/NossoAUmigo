<template>
    <form class="m-auto w-50 pt-3">
        <hr>
        <h2 class="text-center text-warning">Logar</h2>
        <hr>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="exemplo@gmail.com">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="*********">
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn btn-outline-success">Entrar</button>
        </div>
        <div class="text-center mt-2">
            <router-link to="/userRegister" class="text-dark"> <button type="button" class="btn btn-light">Cadastre-se</button></router-link>
        </div>
    </form>
</template>