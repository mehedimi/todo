<template>
  <div id="app">
    <div class="container">
      <TodoApp/>
    </div>
  </div>
</template>

<script>
import TodoApp from './components/TodoApp'

export default {
  name: 'app',
  components: {
    TodoApp
  }
}
</script>

<style>
  @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');
</style>
