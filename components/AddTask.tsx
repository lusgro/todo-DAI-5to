import { Input, Stack, Button, Text } from "native-base";
import { View } from "react-native";
import { useTasks } from "@/hooks/useTasks";
import { useState } from "react";


export default function AddTask() {
    const [ newTask, setNewTask ] = useState('')
    const { addToList } = useTasks()

    const handleSubmit = () => {
        if(newTask != "") addToList(newTask)
    }

    return (
        <View>
            <Stack space={1} w="75%" maxW="300px" mx="auto">
                <Input size="sm" placeholder="Agregar Tarea" onChangeText={setNewTask} value={newTask}/>
            </Stack>
            <Button onPress={handleSubmit}>
                Crear
            </Button>
        </View>
    )
}