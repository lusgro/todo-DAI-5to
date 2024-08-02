import React from 'react';
import { Text } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Box, HStack, Icon, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import TaskCard from '@/components/TaskCard';
import AddTask from '@/components/AddTask';
import { useTasks } from '@/hooks/useTasks';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tools from '@/components/Tools';

export default function Index() {
    const { tasks, assignTaskCompleted, removeFromList } = useTasks();

    const renderItem = ({ item }) => (
        <TaskCard taskObj={item} onPress={() => assignTaskCompleted(item)} />
    );

    const renderHiddenItem = (data) => (
        <HStack flex={1} pl={2}>
            <Pressable
                w={70}
                ml="auto"
                bg="red.500"
                justifyContent="center"
                onPress={() => removeFromList(data.item)}
                _pressed={{ opacity: 0.5 }}
            >
                <Icon as={Ionicons} name="trash" size="sm" color="white" />
            </Pressable>
        </HStack>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tools/>
            <AddTask />
            {tasks.length > 0 ? (
                <SwipeListView
                    data={tasks}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-70}
                    previewRowKey="0"
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    keyExtractor={(item, index) => index.toString()}
                    style={{paddingHorizontal: 15, marginTop: 20}}
                />
            ) : (
                <Text style={{ fontSize: 18, paddingHorizontal: 15, marginTop: 20 }}>No hay tareas guardadas</Text>
            )}
        </SafeAreaView>
    );
}