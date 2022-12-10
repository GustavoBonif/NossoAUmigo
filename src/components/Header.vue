<script setup>
    // 
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container-fluid">
            <div class="navbar-brand">
                <img class="header-logo" src="@/assets/images/logo-aumigo.png" alt="#">
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item badge badge-light">
                        <button class="btn btn-light">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </button>
                    </li>
                    <li class="nav-item badge">
                        <button class="btn btn-light">
                            <a class="nav-link" aria-current="page" href="#">Cachorros</a>
                        </button>
                    </li>
                </ul>

                <div class="btn-group">
                    <a href="#" class="btn btn-secondary">Entrar</a>
                    <a href="#" class="btn btn-secondary">Registrar-se</a>
                </div>
            </div>
            
        </div>
    </nav>
</template>

<style scoped>
.header-logo {
    width: 60%;
    margin-left: 10%;
}
</style>
