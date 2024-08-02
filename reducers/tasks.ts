import { Task } from "@/modules/Task";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

export const tasksInitialState = [];

export const updateTaskStorage = async (tasks: Task[]) => {
    try {
        const jsonData = JSON.stringify(tasks)
        await AsyncStorage.setItem('user_data', jsonData)
    } catch (error) {
        Alert.alert(error)
    }
}

export const TASKS_ACTION_TYPES = {
    ADD_TO_LIST: "ADD_TO_LIST",
    REMOVE_FROM_LIST: "REMOVE_FROM_LIST",
    CLEAR_LIST: 'CLEAR_LIST',
    ASSIGN_TASK_COMPLETED: 'ASSIGN_TASK_COMPLETED',
    GET_FASTEST_TASK: 'GET_FASTEST_TASK',
    SET_INITIAL_STATE: 'SET_INITIAL_STATE'
}

interface Action {
    type: "ADD_TO_LIST" | "REMOVE_FROM_LIST" | "CLEAR_LIST" | "ASSIGN_TASK_COMPLETED" | "GET_FASTEST_TASK" | "SET_INITIAL_STATE";
    payload?: any;
}

function convertirAFecha(cadenaFecha: string) {
    var partes = cadenaFecha.split("/");
    var dia = parseInt(partes[0]);
    var mes = parseInt(partes[1]) - 1;
    var añoHora = partes[2].split(" ");
    var año = parseInt(añoHora[0]);
    var horaMinSeg = añoHora[1].split(":");
    var hora = parseInt(horaMinSeg[0]);
    var minuto = parseInt(horaMinSeg[1]);
    var segundo = parseInt(horaMinSeg[2]);

    return new Date(año, mes, dia, hora, minuto, segundo);
}

export const tasksReducer = (state: Task[], action: Action) => {
    const { type: actionType, payload: actionPayload } = action
    
    switch (actionType){
        case TASKS_ACTION_TYPES.SET_INITIAL_STATE: {
            return actionPayload
        }

        case TASKS_ACTION_TYPES.ADD_TO_LIST: {
            const newTask = new Task(actionPayload)
            const newList = [...state, newTask]
            return newList
        }

        case TASKS_ACTION_TYPES.REMOVE_FROM_LIST: {
            const { id } = actionPayload
            const newState = state.filter(item => item.id !== id)
            return newState
        }

        case TASKS_ACTION_TYPES.CLEAR_LIST: {
            return []
        }

        case TASKS_ACTION_TYPES.ASSIGN_TASK_COMPLETED: {
            const { id } = actionPayload
            const newTasks = state.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        checked: !item.checked,
                        fechaTachado: !item.checked ? `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}` : null,
                        fastest: item.fastest ? false : false
                    }
                }
                return item
            })
            
            return newTasks
        }

        case TASKS_ACTION_TYPES.GET_FASTEST_TASK: {

            let map1 = state.filter(element => element.checked == true).map(element => {
                return {
                    ...element,
                    tiempoTardado: convertirAFecha(element.fechaTachado) - convertirAFecha(element.fechaCreado)
                }
            });

            if(map1.length > 0) {
                let minimo = map1.reduce((minimo, actual) => {
                    return actual.tiempoTardado < minimo.tiempoTardado ? actual : minimo;
                });
                
                return state.map((item) => {
                    if (item.id === minimo.id) {
                        return {
                            ...item,
                            fastest: true
                        }
                    }
                    if (item.id !== minimo.id && item.fastest) {
                        return {
                            ...item,
                            fastest: false
                        }
                    }
                    return item
                })
            }
            
            return state
        }
    }

    return state
}