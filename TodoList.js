import React from 'react';

const Todolist = (props) =>{
	return (
			<li>  <span > {props.items} </span>
				<span onClick = {()=> {
				props.del(props.index)}}
				 > x </span>
			</li>
			
		
	)
}	
export default Todolist;
