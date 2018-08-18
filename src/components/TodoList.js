import React from 'react';
import TodoItem from './Todo';


const TodoList = props => {
	return (
		<ul> {props.list} </ul>
	)
}


export default TodoList;