import {useState} from 'react'
import styled from 'styled-components'
import TodoTable from './TodoTable'
import TodoInputForm from './TodoInputForm'
import {Description, Separator} from './common'
import * as React from 'react'
import {TodoData} from '../types/todo'
import { v4 as uuidv4 } from 'uuid'

const ScContentsRoot = styled.div`
    padding: calc(50px + 16px) 32px 16px;
`;

function Contents() {
    const [todos, setTodos] = useState([] as TodoData[]);
    const addTodo = (name: string, description: string = "") => {
        setTodos([...todos, {id: uuidv4(), name, description}])
    };
    const deleteTodo = (uuid: string) => {
      const deleteTargetTodoIdx: number = todos.findIndex((todo) => todo.id === uuid)
      todos.splice(deleteTargetTodoIdx, 1);
      setTodos([...todos]);
    };

    return (
        <ScContentsRoot>
            <TodoInputForm addTodo={addTodo}/>
            <Separator/>
            {todos.length === 0
                ? <Description>追加したTODOがここに表示されます</Description>
                : <TodoTable todos={todos} deleteTodo={deleteTodo}/>
            }
        </ScContentsRoot>
    )
}

export default Contents;