import { Button } from "native-base";
import { StyleSheet, View } from "react-native";


export default function Tools () {
    return(
        <View style={styles.tools}>
            <Button size="sm" variant="subtle" colorScheme="blue">
                Tarea más rapida
            </Button>
            <Button size="sm" variant="subtle" colorScheme="danger">
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
        paddingHorizontal: 20
    }
})
