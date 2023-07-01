<template>
<div class="app" >
  <h1>Todo List</h1>
 <todo-container />
</div>
</template>

<script>
import TodoContainer from './components/TodoContainer.vue';
export default {
 components : {TodoContainer}
}
</script>




<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;


}


.app {
  width: 1250px;
  min-height: 100vh;
  background-color: #D3D3D3;
  margin: 0 auto;
  padding: 5px 10px 30px;
  font-family: 'Nunito', sans-serif;

}
.app h1 {
  text-align: center;
  padding-top: 15px;
  font-size: 2rem;
  font-style: italic;
  color: brown;
 
  
}

</style>
