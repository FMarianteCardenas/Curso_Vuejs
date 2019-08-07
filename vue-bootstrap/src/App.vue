<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-container>
        <!-- logo -->
        <b-navbar-brand href="#">TROLL</b-navbar-brand>
        <!-- logo -->

        <!-- boton de collapso -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- boton de collapso -->

        <!-- elementos colapsados que se ocultaran-->
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item :to="{name:'home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name:'about'}">About</b-nav-item>
            <b-nav-item :to="{name:'grid'}">Grid</b-nav-item>
            <b-nav-item :to="{name:'cards'}">Cards</b-nav-item>
            <b-nav-item :to="{name:'form'}">Form</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <!-- elementos colapsados -->

      </b-container>
    </b-navbar>

    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style>

</style>
