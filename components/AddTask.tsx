import { Input, Stack } from "native-base";
import { View } from "react-native";
import { Button } from "native-base";
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
                <Input size="sm" placeholder="sm Input" onChangeText={setNewTask} value={newTask}/>
            </Stack>;
            <Button onPress={handleSubmit} colorScheme="success">
                Crear
            </Button>
        </View>
    )
}