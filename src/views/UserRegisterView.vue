<template>
    <form class="m-auto w-50 pt-3">
        <hr>
        <h2 class="text-center text-warning">Cadastre-se</h2>
        <hr>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="exemplo@gmail.com">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="*********">
        </div>
        <div class="mb-3">
            <div class="row">
                <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Confirmar senha</label>
                </div>
                <div class="col">
                    <div id="emailHelp" class="form-text text-danger">* Informe a mesma senha do campo acima. 
                </div>
            </div>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="*********">
        </div>
        </div>
        <button type="submit" class="btn btn btn-outline-success">Cadastrar</button>
    </form>
</template>