
import React, { useEffect } from "react";

import Container from "@components/container";
import TaskItem from "@components/task-item";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import EmptyList from "@components/empty-list";


export default function HomeScreen(props){

    const tasks = useSelector(store => store?.tasks);

    // RE RENDER TASKS SCREEN
    useEffect(() => {

    }, [tasks]);

    return (
        <Container>

            <FlatList 
            data={tasks ?? []}
            renderItem={({item}) => <TaskItem {...item} />}
            keyExtractor={(item) => `task_id_${item?.id}`}
            extraData={tasks}
            ListEmptyComponent={<EmptyList />}
            />
        </Container>
    )
}