import { Input, Stack, Button, Text } from "native-base";
import { StyleSheet } from 'react-native'
import { View } from "react-native";
import { useTasks } from "@/hooks/useTasks";
import { useState } from "react";


export default function AddTask() {
    const [ newTask, setNewTask ] = useState('')
    const { addToList } = useTasks()

    const handleSubmit = () => {
        if(newTask != "") {
            addToList(newTask)
            setNewTask('')
        }
    }

    return (
        <View style={styles.addTask}>
            <Stack space={1} w="70%">
                <Input size="sm" placeholder="Agregar Tarea" onChangeText={(text) => setNewTask(text)} value={newTask}/>
            </Stack>
            <Button onPress={handleSubmit}>
                Crear
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    addTask: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})