<template>
    <div class="block-tasks">
        <h3>
            list of tasks to perform
        </h3>
        <ul class="tasks-list">
            <transition-group name="tasks-list">
                <task-item v-for="Itemtask in tasksList" :key="Itemtask.id" :task="Itemtask" @delete=deleteTask
                    @move="moveTask" @edit="saveText" />
            </transition-group>
            <my-edit-dialog :show="editVisible" @update:show="newValue => editShow(newValue)">
                <input class="input" :value="editTask.text" @input="event => editText(event)" >
                <button class="butt-save"  @click="editTaskText" >save</button>
            </my-edit-dialog>
        </ul>
    </div>
</template>


<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import TaskItem from './TaskItem.vue';
export default {
    components: { TaskItem },
    name: "todos-list",

    computed: {
        ...mapState({
            tasksList: state => state.todos.tasksToComplete,
            editVisible : state => state.todos.editVisible,
            editTask : state => state.todos.editTask
            
        })
    },

    methods: {
        ...mapMutations({
            deleteTask: "todos/deleteCompleteTask",
            editShow : "todos/editShow",
            saveText : "todos/saveText",
            editText : "todos/editText",
            editTaskText : "todos/editTaskText"
        }),
        ...mapActions({
            moveTask: "todos/completedActions",
            
        }),

   
    }

}
</script>


<style scoped >
.block-tasks {
    flex: 1;
}

.block-tasks h3 {
    text-align: left;
    font-size: 1.7rem;
    color: blueviolet;
    margin-bottom: 20px;
    padding-left: 70px;

}

.tasks-list {
    list-style: none;
    padding-left: 20px;
}

.input {
    width: 550px;
    font-size: 1.5rem;
}

.butt-save {
    display: block;
    margin-top: 15px;
    font-size: 1.2rem;
    border: none;
    padding: 3px 7px;
    background-color: green;
    color: white;
    border-radius: 6px;
    margin-left: auto;
    margin-right: 15px;
}

.tasks-list-item {
    display: inline-block;
    margin-right: 10px;
}

.tasks-list-enter-active,
.tasks-list-leave-active {
    transition: all 0.4s ease;
}

.tasks-list-enter-from,
.tasks-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}

.tasks-list-move {
    transition: transform 0.8s ease;
}</style>