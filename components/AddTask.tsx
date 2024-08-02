import { Input, Stack, Button, Text } from "native-base";
import { View } from "react-native";
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
        <View>
            <Stack space={1} w="75%" maxW="300px" mx="auto">
<<<<<<< HEAD
                <Input size="sm" placeholder="Agregar Tarea" onChangeText={setNewTask} value={newTask}/>
            </Stack>
            <Button onPress={handleSubmit}>
=======
                <Input size="sm" placeholder="sm Input" onChangeText={setNewTask} value={newTask}/>
            </Stack>;
            <Button onPress={handleSubmit} colorScheme="success">
>>>>>>> b9fcd41ed49f92bdc23e6ef3794086e9429209a7
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