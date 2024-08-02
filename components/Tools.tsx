import { useTasks } from "@/hooks/useTasks";
import { Button } from "native-base";
import { StyleSheet, View } from "react-native";


export default function Tools () {
    const { clearList, getFastestTask} = useTasks()

    return(
        <View style={styles.tools}>
            <Button size="sm" colorScheme="blue" onPress={getFastestTask}>
                Tarea más rapida
            </Button>
            <Button size="sm" colorScheme="danger" onPress={clearList}>
                Eliminar todas las tareas
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    tools: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
        marginTop: 10
    }
})
