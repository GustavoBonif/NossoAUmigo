<template>
    <form class="m-auto w-50 pt-3">
        <h2 class="text-center">Nova Postagem <img src="@/assets/images/add.png" class="img-add"></h2>
        <div class="input-group mb-3">
            <input type="file" accept="image/png, image/jpeg"  multiple class="form-control" id="inputGroupFile02">
            <label class="input-group-text" for="inputGroupFile02">Upload</label>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Título do post</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
             <div id="emailHelp" class="form-text">Texto destacado de sua postagem. </div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Descriçao</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
             <div id="emailHelp" class="form-text">Descrição detalhada sobre o conteúdo compartilhado. </div>
        </div>
        <button type="submit" class="btn btn btn-outline-success">Postar</button>
    </form>
</template>
<style scoped>
.img-add {
    width: 5%;
}
</style>