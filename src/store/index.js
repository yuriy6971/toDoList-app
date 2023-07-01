import { createStore } from "vuex";
import {TodosModule} from "./TodosModule"

export default createStore({
    modules : {
        todos : TodosModule
    }
})