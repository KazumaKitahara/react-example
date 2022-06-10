import React from "react";
import {Table, TableHead, TableBody, TableRow, TableCell} from "@mui/material";

function TodoTable(props) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>名称</TableCell>
                    <TableCell>説明</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.todos.map((todo) => (
                    <TableRow>
                        <TableCell>{todo.name}</TableCell>
                        <TableCell>{todo.description}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TodoTable