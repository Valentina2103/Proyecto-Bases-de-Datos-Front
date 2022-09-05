<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand href="#">PEERING VIRTUAL BUSINESS</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>            
            <router-link to="/home" active-class="active" exact>Home</router-link>
            <router-link to="/formulario" active-class="active" exact>Llenar Formulario</router-link>
            <router-link to="/login" active-class="active" exact>Iniciar Sesión</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({}),
};
</script>




 