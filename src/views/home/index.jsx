
import React from "react";

import Container from "@components/container";
import TaskItem from "@components/task-item";


export default function(props){

    return (
        <Container>
            <TaskItem status={'DONE'} />
            <TaskItem title='Daily Standup Meeting' />
        </Container>
    )
}