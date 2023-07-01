<template>
 <li class="completed-item" >
 <span class="completed-text" >
  {{ completedTask.text }}
 </span>
 <span class="delete" @click="deleteCompletedTask"  >&times;</span>
 </li>
</template>


<script>

export default {
    name : "completed-item",
    props : {
        completedTask : {
            type : Object,
            default : () => {}
        }
    },
    methods : {
        deleteCompletedTask(){
          this.$emit("delete",this.completedTask)
        }
    }
}
</script>


<style scoped >
.completed-item {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.9rem;
    margin-bottom: 12px;
}
.completed-text {
    font-size: 1.5rem;
    font-style: italic;
}
.delete {
    font-size: 1.5rem;
    color: red;
    cursor: pointer;
}
</style>