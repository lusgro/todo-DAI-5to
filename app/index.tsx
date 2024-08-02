import React, { useState, useEffect } from 'react';
import { Text } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';
import { Box, HStack, Icon, Pressable } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons'
import TaskCard from '@/components/TaskCard';
import AddTask from '@/components/AddTask';
import { useTasks } from '@/hooks/useTasks';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    const { tasks, assignTaskCompleted, removeFromList } = useTasks()
    const renderItem = ({ item, index }) => {
        <TaskCard taskObj={item} onPress={assignTaskCompleted(item)} />
    }
    const renderHiddenItem = (data, rowMap) => {
        <HStack flex={1} pl={2}>
            <Pressable
             w={70}
             ml='auto'
             bg='red.500'
             justifyContent='center'
             onPress={() => removeFromList(data)}
             _pressed={{ opacity: 0.5 }}
            >
                <Icon as={Ionicons} name='trash' size='sm' color='white'/>
            </Pressable>
        </HStack>
    }
    return (
        <SafeAreaView>
            {
                tasks.length > 0 
                ? 
                    <SwipeListView 
                     data={tasks}
                     renderItem={renderItem}
                     renderHiddenItem={renderHiddenItem}
                     rightOpenValue={-70}
                     previewRowKey='0'
                     previewOpenValue={-40}
                     previewOpenDelay={3000}
                     keyExtractor={(item, index) => index.toString()}
                    />
                :
                    <Text style={{ fontSize: 18}}>No hay tareas guardadas</Text>
            }
            <AddTask />
        </SafeAreaView>
    )
}