import { useRef, useState} from 'react'
import {TextField, FormGroup, Button} from '@mui/material'
import styled from 'styled-components'
import {mixins} from '../mixins'
import {FormErrorMessage} from './common/index'
import * as React from 'react'

const ScTodoInputFormRoot = styled.div`
    ${mixins.flexColumn}
    max-width: 300px;
    
    > *:not(:last-child) {
        margin-bottom: 8px;
    }
`;

function TodoInputForm(props: any) {
    const nameRef = useRef(null);
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [namePristine, setNamePristine] = useState(true);
    const handleChangeName = (event: any) => {
        const ref: any = nameRef.current;
        if (ref) {
            setNameError(!ref.validity.valid);
            setName(event.target.value);
            if (namePristine) setNamePristine(false);
        }
    };
    const [description, setDescription] = useState("");
    const handleChangeDescription = (event: any) => {
        setDescription(event.target.value);
    };

    const addTodo = () => {
        initializeTodoForm();
        props.addTodo(name, description);
    };

    const initializeTodoForm = () => {
        setName("");
        setDescription("")
        setNamePristine(true);
    }

    return (
        <ScTodoInputFormRoot>
            <FormGroup>
                <TextField
                    label="名称"
                    inputProps={{required: true}}
                    error={nameError}
                    inputRef={nameRef}
                    variant="standard"
                    size="small"
                    value={name}
                    onChange={handleChangeName}
                />
                { nameError &&
                    <FormErrorMessage errorMessage="名称は入力必須です" />
                }
            </FormGroup>
            <TextField
                label="説明"
                variant="standard"
                size="small"
                value={description}
                onChange={handleChangeDescription}
            />
            <Button
                variant="contained"
                color={"primary"}
                disabled={namePristine || nameError}
                onClick={addTodo}
            >
                TODOを追加
            </Button>
        </ScTodoInputFormRoot>
    )
}

export default TodoInputForm