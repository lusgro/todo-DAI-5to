import { Button } from "native-base";
import { View } from "react-native";


export default function Tools () {
    return(
        <View>
            <Button size="sm" variant="subtle">
                Eliminar todas las tareas
            </Button>
            <Button size="sm" variant="subtle" colorScheme="secondary">
                Tarea más rapida
            </Button>
        </View>
    )
}
