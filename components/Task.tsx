import { Text } from 'react-native';
import {Pressable, Box, HStack} from 'native-base';
import Task from '@/modules/Task';

interface TaskProps {
    taskObj: Task
}

export default function TaskCard({taskObj}: TaskProps) {
    return (
        <Pressable onPress={() => console.log('presionado')} rounded='8' overflow='hidden' bg='coolGray.300'>
            <Box>
                <HStack>
                    <Text>{taskObj.texto}</Text>
                </HStack>
            </Box>
        </Pressable>
    )
}