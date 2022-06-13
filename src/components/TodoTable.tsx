import {Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material'
import * as React from 'react'
import styled from 'styled-components'
import {TodoData} from '../types/todo'

function TodoTable(props: any) {
    const deleteTodo = (event: any) => {
        const deleteTargetTodoId = event.currentTarget.getAttribute('data-id');
        props.deleteTodo(deleteTargetTodoId);
    };
    const ScDeleteTodoLink = styled.div`
        color: #ef5350;
        cursor: pointer;
    `

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>名称</TableCell>
                    <TableCell>説明</TableCell>
                    <TableCell />
                </TableRow>
            </TableHead>
            <TableBody>
                {props.todos.map((todo: TodoData) => (
                    <TableRow>
                        <TableCell>{todo.name}</TableCell>
                        <TableCell>{todo.description}</TableCell>
                        <TableCell>
                            <ScDeleteTodoLink onClick={deleteTodo} data-id={todo.id}>
                                削除
                            </ScDeleteTodoLink>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TodoTable