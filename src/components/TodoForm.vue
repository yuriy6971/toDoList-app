<template>
   <form @submit.prevent="createTodo"  class="form">
   
   <label class="label" >create a task : 
      <input  class="input" type="text" id="text"
      
      v-model.trim = "todo.text" >
   </label>
   <p v-if="v$.todo.text.minLength.$invalid" class="invalid-feedback">
                 
                 {{ v$.todo.text.minLength.$message }}
            </p>
   </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { minLength } from '@vuelidate/validators'
export default {
   setup () {
    return { v$: useVuelidate() }
  },

 name : "todo-form",

 data(){
    return {
        todo : {
            id : null,
            text : ""
        }
    }
 },

 validations (){
        return {
           todo : {
            text : {minLength : minLength(5)},
          
           } 
        }
    },

 methods : {

    createTodo(){
      this.todo.id = +String(Date.now()).slice(-5)
      if(!this.todo.text.trim().length){
         alert("Пустая строка")
      }

      else if(!this.v$.todo.text.minLength.$invalid){
         this.$emit("create",this.todo)
         this.resetField()
      }

      
    },
    resetField() {
            this.v$.todo.$reset()
            this.todo = {
               id : null,
               text : ""
            }
        }

    
 }

}
</script>


<style scoped >
.form {
   flex: 2;
}
.label {
    display: block;
    padding-left: 20px;
    font-size: 1.2rem;
    color: green;
}
.input {
    font-size: 1.5rem;
    width: 60%;
    border-radius: 5px;
    
}
.invalid-feedback {
   color: red;
}
</style>