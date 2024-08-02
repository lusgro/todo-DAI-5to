import React from 'react';
import { Pressable, Box, HStack, VStack, Text, Icon, IconButton } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Task from '@/modules/Task';

interface TaskProps {
    taskObj: Task;
    onPress: () => void;
    onDelete?: () => void;
}

export default function TaskCard({ taskObj, onPress, onDelete }: TaskProps) {
    return (
        <Pressable onPress={onPress} mb={2}>
            <Box 
                bg={taskObj.checked ? "green.100" : "coolGray.100"} 
                p={4} 
                rounded="lg" 
                borderWidth={taskObj.fastest ? 3 : 1} 
                borderColor={taskObj.checked ? taskObj.fastest ? "blue.300" : "green.300" : "coolGray.300"}
                shadow={2}
            >
                <HStack justifyContent="space-between" alignItems="center">
                    <VStack width="80%">
                        <Text
                            fontSize="md"
                            fontWeight="medium"
                            strikeThrough={taskObj.checked}
                            color={taskObj.checked ? "green.600" : "coolGray.800"}
                        >
                            {taskObj.texto}
                        </Text>
                        {taskObj.fechaCreado && (
                            <Text fontSize="xs" color="coolGray.500" mt={1}>
                                {taskObj.fechaCreado}
                            </Text>
                        )}
                    </VStack>
                    <HStack space={2} alignItems="center">
                        <Icon
                            as={Ionicons}
                            name={taskObj.checked ? "checkmark-circle" : "ellipse-outline"}
                            size="md"
                            color={taskObj.checked ? "green.600" : "coolGray.400"}
                        />
                    </HStack>
                </HStack>
            </Box>
        </Pressable>
    );
}