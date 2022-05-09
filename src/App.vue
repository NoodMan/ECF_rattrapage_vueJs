<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxAnx92StKvAoBkL3ilEapAMpBiskDz_Yb1A&usqp=CAU"
      width="125"
      height="125"
    />

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" /> -->

    <nav>
      <h3>👋🏼 Hello </h3>
       <h1>Welcome to My Converter "конвертер" Euro € - Ruble ₽ </h1>
       <h1>  and vice versa!! </h1>
      <!-- <RouterLink to="/">Home</RouterLink> -->
      <br />
      <RouterLink to="/Converter"> ==> The Super конвертер  </RouterLink>
      <br />

      <br />
    </nav>
    
    <!-- </div> -->
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
h1 {
  color: rgb(226, 43, 131);
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: rgb(189, 47, 0);
  transition: 0.4s;
  font-size: 30px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
