<script setup>

</script>

<template>
  <hr>
  <h4 class="text-center text-warning">Perfil do AUmigo</h4>
  <hr>
  <main class="pt-3 row">
    <div class="col-5 text-center">
      <img src="@/assets/images/dog2.jpg" alt="Foto de perfil do cachorro" class="w-50 rounded">
    </div>
    <div class="col-4 ps-5">
      <p><strong>Nome: </strong>Leonardo</p>
      <p><strong>Idade: </strong>3 anos</p>
      <p><strong>Peso: </strong>7kg</p>
      <div class="input-group mb-3">
        <p><strong>Porte: </strong></p>
        <div class="col-md-3">
        <select class="form-select form-select-sm" disabled>
          <option selected>Médio</option>
          <option value="1">Pequeno</option>
          <option value="2">Médio</option>
          <option value="3">Grande</option>
        </select>
        </div>
      </div>
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
      <div class="input-group mb-3">
        <p><strong>Status: </strong></p>
        <div class="col-md-5">
        <select class="form-select form-select-sm" disabled>
          <option selected>Residente no campus</option>
          <option value="1">Residente no campus</option>
          <option value="2">Adotado</option>
          <option value="3">Desaparecido</option>
        </select>
        </div>
      </div>
      <a href="#" class="text-dark"><strong>Histórico de vacinas </strong></a>
      <hr>
      <h5 class="text-center"><strong>Observações:</strong></h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Observação</th>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>O animal está se recusando a comer ração.</td>
            <td>23/09/2022</td>
          </tr>
        </tbody>
      </table>            
    </div>
    <div class="col-2">
      <router-link to="dogHistoryMedical" class="link-dark text-dark"><img src="@/assets/images/saude.png" class="img-saude"><strong>Histórico médico do animal</strong></router-link>
      <button type="button" class="btn btn-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
        </svg> Editar Perfil
      </button>
    </div>
  </main>
</template>
<style scoped>
.img-saude {
  width: 12%;
}
</style>
