<script setup>

</script>

<template>
  <main class="container">
    <hr>
      <h4 class="text-center text-warning">Nossos AUmigos</h4>
    <hr>
    <div class="row mt-2 d-flex justify-content-center mb-5">
      <router-link to="/dogProfile" class="col-sm-6 col-md-4">
        <img src="@/assets/images/dog1.webp" alt="" class="img-dog rounded ">
      </router-link>
      <router-link to="/dogProfile" class="col-sm-6 col-md-4">
        <img src="@/assets/images/dog2.jpg" alt="" class="img-dog rounded ">
      </router-link>
      <router-link to="/dogProfile" class="col-sm-6 col-md-4">
        <img src="@/assets/images/dog3.webp" alt="" class="img-dog rounded">
      </router-link>
    </div>
    <hr>
    <h4 class="text-center text-warning">Notícias</h4>
    <hr>
    <div class="row">
      <div class="row col-12 m-1 d-flex mb-3">
        <div class="d-flex align-items-center mb-1">
          <img src="@/assets/images/sem-foto.png" alt="" class="img-perfil-user rounded-circle me-2">
          <a href="#" class="m-auto ms-0 fw-bolder text-dark text-decoration-none">Brenon Paul</a>
        </div>
        <div class="d-flex">
          <img src="@/assets/images/dog1.webp" alt="" class="img-dog w-25 rounded me-2">
          <div>
            <router-link to="/viewPost" class="nav-link">
              <h5 class="text-left">Fora do Campus</h5>
              <p class="text-left">O cachorrinho estava fora do campus brincando com um cachorro de fora.</p>
            </router-link>
          </div>
        </div>
        <p class="fw-lighter fs-6">Postado em 14/12/2022 às 14:26</p>
      </div>
      <hr>
      <div class="row col-12 m-1 d-flex mb-3">
        <div class="d-flex align-items-center mb-1">
          <img src="@/assets/images/sem-foto.png" alt="" class="img-perfil-user rounded-circle me-2">
          <a href="#" class="m-auto ms-0 fw-bolder text-dark text-decoration-none">Brenon Paul</a>
        </div>
        <div class="d-flex">
          <img src="@/assets/images/dog3.webp" alt="" class="img-dog w-25 rounded me-2">
          <div>
            <router-link to="/viewPost" class="nav-link">
              <h5 class="text-left">Fora do Campus</h5>
              <p class="text-left">O cachorrinho estava fora do campus brincando com um cachorro de fora.</p>
          </router-link>
          </div>
        </div>
        <p class="fw-lighter fs-6">Postado em 14/12/2022 às 14:40</p>
      </div>
      <hr>
      <div class="row col-12 m-1 d-flex mb-3">
        <div class="d-flex align-items-center mb-1">
          <img src="@/assets/images/sem-foto.png" alt="" class="img-perfil-user rounded-circle me-2">
          <a href="#" class="m-auto ms-0 fw-bolder text-dark text-decoration-none">Joãozinho Gamer</a>
        </div>
        <div class="d-flex">
          <img src="@/assets/images/dog3.webp" alt="" class="img-dog w-25 rounded me-2">
          <div>
            <router-link to="/viewPost" class="nav-link">
              <h5 class="text-left">Outro lado da BR</h5>
              <p class="text-left">Vi ele brincando do outro lado da BR numa poça de água.</p>
          </router-link>
          </div>
        </div>
          <p class="fw-lighter fs-6">Postado em 14/12/2022 às 14:55</p>
      </div>
      <hr>
      <div class="row col-12 m-1 d-flex mb-3">
        <div class="d-flex align-items-center mb-1">
          <img src="@/assets/images/sem-foto.png" alt="" class="img-perfil-user rounded-circle me-2">
          <a href="#" class="m-auto ms-0 fw-bolder text-dark text-decoration-none">Gustavo Bonifácio</a>
        </div>
        <div class="d-flex">
          <img src="@/assets/images/dog2.jpg" alt="" class="img-dog w-25 rounded me-2">
          <div>
            <router-link to="/viewPost" class="nav-link">
              <h5 class="text-left">Ownt!</h5>
              <p class="text-left">Ele é muito fofoo!!.</p>
          </router-link>
          </div>
        </div>
          <p class="fw-lighter fs-6">Postado em 14/12/2022 às 14:59</p>
      </div>
    </div>
  </main>
</template>
<style scoped>
.img-perfil-user {
  width: 3%;
}

.img-dog {
  width: 200px;
  height: 150px;
}
</style>
