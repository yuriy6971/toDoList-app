<template>
    <div class="completed-tasks">
        <h3>list of completed tasks</h3>
        <ul class="completed-list">
            <transition-group  name="completed-list" >
                <completed-item v-for="completedTask in completedTasksList" :key="completedTask.id"
                    :completedTask="completedTask" @delete="deleteCompletedTask" />
            </transition-group>
        </ul>
    </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex';
import CompletedItem from './CompletedItem.vue';
export default {
    name: "completed-tasks-list",
    components: { CompletedItem },

    computed: {
        ...mapState({
            completedTasksList: state => state.todos.completedTasks
        })
    },
    methods: {
        ...mapMutations({
            deleteCompletedTask: "todos/deleteCompleted"
        })
    }
}
</script>


<style scoped >
.completed-tasks {
    flex: 1;
}

.completed-tasks h3 {
    text-align: left;
    font-size: 1.7rem;
    color: green;
    margin-bottom: 20px;
    padding-left: 40px;
}

.completed-list {
    list-style: none;
    padding-left: 30px;
}

.completed-list-item {
  display: inline-block;
  margin-right: 10px;
}
.completed-list-enter-active,
.completed-list-leave-active {
  transition: all 0.4s ease;
}
.completed-list-enter-from,
.completed-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.completed-list-move {
  transition: transform 0.8s ease;
}
</style>