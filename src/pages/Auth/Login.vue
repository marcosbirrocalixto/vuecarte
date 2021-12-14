<template>
<div>

<!--Login-->
<div class="container" style="display: grid; grid-template-columns: 940px;">

  <div class="row">
    <div class="col-4">
        <div class="card" style="width: 18rem;">
        <img src="https://www.whatcar.com/car-leasing/images/vehicles/medium/100895.jpg" width="200" heigth="200" alt="" class="img-fluid mx-auto d-block">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>
    </div>
    
    <div class="col-8">
        <p></p>
        <span v-if="!cadastro">
        <h2>Login</h2>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail.</div>
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="password">
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="deacordo">
            <label class="form-check-label" for="exampleCheck1">De acordo com LGPD</label>
        </div>

        <div class="row">
            <div class="col-md-6">
                <button class="btn btn-primary" v-on:click="login()">Entrar</button>    
            </div>
            <div class="col-md-6">
            <button class="btn btn-success"><a href="http://projetosalacarte.local/forgot-password"  target="_blank" class="me-4 text-reset">Esqueci minha senha</a></button>    
            </div>
        </div>
        </span>

        <span v-if="cadastro">
        <h2>Cadastro</h2>

        <div class="row">
            <div class="col-md-12">
                <label class="form-label">Nome</label>
                <input type="text" class="form-control" id="name" required>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <label for="exampleInputEmail1" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
                <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail.</div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <label for="exampleInputEmail1" class="form-label">Senha</label>
                <input type="password" class="form-control" id="password" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Conforme sua Senha</label>
                <input type="password" class="form-control" id="confirm_password" required>
            </div> 
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="deacordo">
            <label class="form-check-label" for="exampleCheck1">De acordo com LGPD</label>
        </div>

        <div class="row">
        <div class="col-md-6">
            <button class="btn btn-primary">Enviar</button>    
        </div>
            <div class="col-md-6">
            <button class="btn btn-success"><a href="http://projetosalacarte.local/forgot-password"  target="_blank" class="me-4 text-reset">Esqueci minha senha</a></button>    
            </div>
        </div>
        </span>

    </div>
  </div>
</div>   

<!--Fim login -->
</div>

</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
        cadastro: false,
   
    }
  },
  components:{

  },
  methods:{
  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
