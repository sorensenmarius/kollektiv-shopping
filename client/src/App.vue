<template>
  <div>
    <h1 style="margin-left: 35px">Kjøp detta!</h1>
    <ShoppingList />
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'

export default {
  name: 'Handleliste',
  components: {
    ShoppingList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
