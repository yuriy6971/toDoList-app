<template>
    <div class="container">
        <div class="interface">
            <todo-form @create="addTask" />
            <div class="statistic-block">
                <p>Total tasks : {{ complete + completed }}</p>
                <p>Task to complete : {{ complete }}</p>
                <p>Сompleted tasks : {{ completed }}</p>
            </div>
        </div>

        <div class="block-lists">
            <tasks-list @editing="editText" />
            <completed-tasks-list />
        </div>
    
    </div>
</template>


<script>
import TodoForm from './TodoForm.vue';
import TasksList from './TasksList.vue';
import CompletedTasksList from "./CompletedTasksList.vue"
import { mapMutations, mapGetters } from 'vuex';
export default {
    name: 'todo-container',
    components: { TodoForm, TasksList, CompletedTasksList },

 

    computed: {
        ...mapGetters({

            complete: 'todos/LengthTasksToComplete',
            completed: 'todos/LengthCompletedTasks'
        })
    },

    methods: {
        ...mapMutations({
            addTask : "todos/addTask",
            
        })
      
        }

}
</script>


<style scoped >
.container {
    margin-top: 20px;
}

.interface {
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.statistic-block {
    padding-right: 30px;
    font-size: 1.3rem;
}

.block-lists {
    display: flex;
    margin-top: 40px;
}
</style>