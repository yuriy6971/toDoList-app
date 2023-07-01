
export const TodosModule = {

    state : () => {
        return {
           tasksToComplete : [
            {id : 1000, text : "Сходить в магазин"},
            {id : 1001, text : "Выгулять собаку"}
           ],
           completedTasks : [],
           editVisible : false,
           editTask : {
            text : "",
            id : null
           }

        }
    },

    getters : {
    LengthTasksToComplete(state){
        return state.tasksToComplete.length
    },
    LengthCompletedTasks(state){
        return state.completedTasks.length
    },
  
    },

    mutations : {
     addTask(state,todo){
        state.tasksToComplete = [...state.tasksToComplete,todo]
     },
     deleteCompleteTask(state,task){
        state.tasksToComplete = state.tasksToComplete.filter(item => item.id !== task.id)
     },

     addCompletedTask(state,task){
        state.completedTasks = [...state.completedTasks,task]
     },
     deleteCompleted(state,task){
        state.completedTasks = state.completedTasks.filter(item => item.id !== task.id)
     },
     editShow(state,boolean){
      state.editVisible = boolean
     },
     saveText(state,task){
        state.editVisible = true
       state.editTask.id = task.id
       state.editTask.text = task.text
     },
     editText(state,event){
        state.editTask.text = event.target.value
     },
     editTaskText(state){
        state.tasksToComplete = state.tasksToComplete.map(item => {
            if(item.id === state.editTask.id){
                return {...item,text:state.editTask.text}
            }
            return item
        })
        state.editVisible = false
     }
    },

    actions : {
  completedActions({commit},task){

    commit("deleteCompleteTask",task)
    commit("addCompletedTask",task)

  }

    },

    namespaced : true
}