<template>
  <navbar></navbar>
  <div class="pages">
    <router-view/>
  </div>
</template>

<script>
  import NavBarTop from "./components/NavBarTop.vue";
  export default{
    components:{
      navbar: NavBarTop
    }
  }
</script>
<style>
#app {
  font-family: 'Montserrat', sans-serif;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100%;
  z-index: -1;
  overflow-y: scroll;
  --vc-nav-color: white;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  scroll-behavior: smooth;
  background: radial-gradient(at 100% 100%, #45204b 20%, #03014C 70%);
}
#app::-webkit-scrollbar {
  display: none;
}
.pages {
  margin-top: 8vh;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  cursor: default;
}
</style>
