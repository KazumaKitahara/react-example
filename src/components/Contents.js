import styled from "styled-components";
import TodoTable from "./TodoTable";
import TodoInputForm from "./TodoInputForm";
import {useState} from "react";

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
            <TodoInputForm addTodo={addTodo} />
            <TodoTable todos={todos}/>
        </ScContentsRoot>
    )
}

export default Contents;