import {useState} from "react";
import styled from "styled-components";
import {TodoTable, TodoInputForm} from ".";
import {Description, Separator} from "./common";

const ScContentsRoot = styled.div`
    padding: calc(50px + 16px) 32px 16px;
`;

function Contents() {
    const [todos, setTodos] = useState([]);
    const addTodo = (name, description) => {
        setTodos([...todos, {name, description}]);
    };

    return (
        <ScContentsRoot>
            <TodoInputForm addTodo={addTodo}/>
            <Separator/>
            {todos.length === 0
                ? <Description>追加したTODOがここに表示されます</Description>
                : <TodoTable todos={todos}/>
            }
        </ScContentsRoot>
    )
}

export default Contents;