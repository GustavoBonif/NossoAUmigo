<template>
    <form class="m-auto w-50 pt-3">
        <h2 class="text-center">Cadastrar-se</h2>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Seu e-mail</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Confirmar senha</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
            <div id="emailHelp" class="form-text">Informe a mesma senha do campo acima. </div>
        </div>
        <button type="submit" class="btn btn btn-outline-success">Enviar</button>
    </form>
</template>