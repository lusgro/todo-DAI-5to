import { createContext, useReducer } from "react";
import { tasksInitialState, tasksReducer } from "../reducers/tasks";
import { Task } from "@/modules/Task";

export const TasksContext = createContext({
    tasks: [],
    addToList: (taskText: string) => {},
    removeFromList: (task: Task) => {},
    clearList: () => {},
    assignTaskCompleted: (task: Task) => {},
    getFastestTask: () => {}
})

function useTasksReducer () {
    const [state, dispatch] = useReducer(tasksReducer, tasksInitialState)

    const addToList = (taskText: string) => dispatch({
        type: 'ADD_TO_LIST',
        payload: taskText
    })

    const removeFromList = (task: Task) => dispatch({
        type: 'REMOVE_FROM_LIST',
        payload: task
    })

    const assignTaskCompleted = (task: Task) => dispatch({
        type: 'ASSIGN_TASK_COMPLETED',
        payload: task
    })

    const clearList = () => dispatch({ type: 'CLEAR_LIST' })

    const getFastestTask = () => dispatch({ type: 'GET_FASTEST_TASK' })

    return { state, addToList, removeFromList, clearList, assignTaskCompleted, getFastestTask }
}

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) =>  {
    const { state, addToList, removeFromList, clearList, assignTaskCompleted, getFastestTask } = useTasksReducer()

    return (
        <TasksContext.Provider value={{
            tasks: state,
            addToList,
            removeFromList,
            clearList,
            assignTaskCompleted,
            getFastestTask
        }}>
            {children}
        </TasksContext.Provider>
    )
}