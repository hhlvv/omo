<template>
  <div class="main">
    <h1>This is an Main page</h1>
    <Header/>
    <div>
      <Gallery/>
      <Map/>
      <Phone/>
      <Board/>
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Gallery from "../components/Gallery";
  import Map from "../components/Map";
  import Phone from "../components/Phone";
  import Board from "../components/Board";

  export default {
    name : "app",
    components : {
      Header,
      Gallery,
      Map,
      Phone,
      Board
    }
  };
</script>

<style scoped>

</style>