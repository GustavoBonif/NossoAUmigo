<script setup>

</script>

<template>
  <main class="container">
    <hr>
      <h4 class="text-center text-warning">Histórico Médico</h4>
    <hr>
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <img class="card-img-top" src="@/assets/images/dog3.webp" alt="Card image cap">
          <div class="card-body">
            <p><strong>Nome: </strong>Leonardo</p>
            <p><strong>Idade: </strong>3 anos</p>
            <div class="input-group mb-3">
              <p><strong>Sexo: </strong></p>
              <div class="col-md-3">
              <select class="form-select form-select-sm" disabled>
                <option selected>Macho</option>
                <option value="1">Fêmea</option>
                <option value="2">Macho</option>
              </select>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">

            <div class="container">
              <div class="row">
                <div class="col">
                  <h5 class="card-title">Procedimentos Realizados</h5>
                </div>
                <div class="col">
                  <router-link to="dogHistoryMedical" class="link-dark text-dark"><img src="@/assets/images/saude.png" class="img-saude"><strong>Incluir Procedimento</strong></router-link>
                </div>
              </div>
            </div>

            <hr>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Procedimento</th>
                  <th scope="col">Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Corte de unhas</td>
                  <td>23/09/2022</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Tosa</td>
                  <td>23/09/2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.img-saude {
  width: 12%;
}
</style>
