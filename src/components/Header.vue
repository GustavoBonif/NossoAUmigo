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
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Cachorros</a>
                    </li>
                </ul>

                <div class="btn-group">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/userLogin" class="nav-link">Entrar</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/userRegister" class="nav-link">Registrar-se</router-link>
                        </li>
                    </ul>
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
