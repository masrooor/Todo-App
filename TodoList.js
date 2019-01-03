import React from 'react';
/*class TodoList extends React.Component {
  render(props) {
    return (
      <ul>
        {props.items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}
export default TodoList;*/
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