import React, {useState} from "react";
import {TextField, Button} from "@mui/material";
import styled from "styled-components";
import {mixins} from "../mixins";

const ScTodoInputFormRoot = styled.div`
    ${mixins.flexColumn}
    max-width: 300px;
    
    > *:not(:last-child) {
        margin-bottom: 8px;
    }
`;

function TodoInputForm(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    };
    const addTodo = () => {
        props.addTodo(name, description)
    }

    return (
        <ScTodoInputFormRoot>
            <TextField label="名称" variant="standard" size="small" value={name} onInput={handleChangeName} />
            <TextField label="説明" variant="standard" size="small" value={description} onInput={handleChangeDescription}/>
            <Button variant="contained" color={"primary"} onClick={addTodo}>TODOを追加</Button>
        </ScTodoInputFormRoot>
    )
}

export default TodoInputForm