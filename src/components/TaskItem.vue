<template>
    <li class="block-item" >
        <my-checkbox @change="moveTask" />
      <span class="task-text" >
        {{ task.text }}
      </span>
      <button class="butt" @click="editTask" >edit</button>
      <span class="delete" @click="deleteTask"  >&times;</span>
    </li>
</template>


<script>

export default {
    name : "task-item",
    props : {
        task: {
            type : Object,
            default : () => {}
        }
    },

    methods : {
        deleteTask(){
            this.$emit("delete",this.task)
        },
        moveTask(){
            this.$emit("move", this.task)
        },
        editTask(){
            this.$emit("edit",this.task)
        }
    }
  

}
</script>


<style scoped >

.block-item {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.9rem;
    margin-bottom: 12px;
}
.task-text {
    font-size: 1.5rem;
    font-style: italic;
}
.butt {
    font-size: 1.2rem;
    padding: 3px 15px;
    border: none;
    border-radius: 5px;
    background-color:lightslategray;
    cursor: pointer;
}
.delete {
    font-size: 1.5rem;
    color: red;
    cursor: pointer;
}
</style>