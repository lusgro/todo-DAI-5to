import { Input, Stack } from "native-base";
import { View, StyleSheet } from "react-native";
import { Button } from "native-base";
import { useTasks } from "@/hooks/useTasks";
import { useState } from "react";


export default function AddTask() {
    const [ newTask, setNewTask ] = useState('')
    const { addToList } = useTasks()

    const handleSubmit = () => {
        console.log(newTask)
        if(newTask != "") addToList(newTask)
    }

    return (
        <View style={styles.addTask}>
            <Stack space={1} w="40%" maxW="200px" mx="auto">
                <Input size="sm" placeholder="Agregar tarea" onChangeText={setNewTask} value={newTask}/>
            </Stack>;
            <Button onPress={handleSubmit} colorScheme="success">
                Crear
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    addTask: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    }
})