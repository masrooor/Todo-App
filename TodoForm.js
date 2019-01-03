import React from 'react';
import Todolist from './TodoList';
class Todo extends React.Component{
	constructor(props){
	super(props);
	this.state = {
		name : '',
		ed: 0,
		items : [{id: '1' , name: 'Masroor'}, {id: '2' ,  name: 'Ahmed'}, {id: '3' , name: 'Waris'} ,{id: '4' ,  name: 'Shaan'}],
	}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.deleteItem = this.deleteItem.bind(this);
//	this.editTask = this.editTask.bind(this);
	//this.onDelete = this.onDelete.bind(this);
	
	}
 handleChange(e) {
    this.setState({ name: e.target.value });
  }

/*handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      name: ''
    }));
  }*/
deleteItem(index) {
    let array = this.state.items;
	array.splice(index,1);
	this.setState({
		items : array,
	
	})
	
	 /*const newItem = {
      //id: Date.now(),
	  name: this.state.name,
      
    };
	array.splice(newItem , 1);*/
	
	
	
  }
  
   
handleSubmit(e){
	e.preventDefault();
	let tasks = this.state.items;
	let currTask = this.state.name;
	tasks.push({
		//id: Date.now(),
		id: this.state.items.length + 1,
		name : currTask
	})
	this.setState ({
		items : tasks,
		name : ''
	})
	
}
/*editTask(index, newValue){
	var arr = this.state.items;
	var ar = arr[index];
	ar['name'] = newValue;
	this.setState({
		items : arr
	})
}
updateItem(evt){
	evt.preventDefault();
	this.editTask(this.index , this.input.value);
}*/

	render(){
		return(
		
		<div id = "mainDiv">
		<br/><br/><br/>
			<h1>Todo App</h1>
			
			<form onSubmit = {this.handleSubmit}   >
				<input type = "text" value = {this.state.name}   onChange = {this.handleChange} ref = {(value) => {
					this.input = value
				}}/>
				<button >Add #{this.state.items.length + 1}</button>
			</form>
			<ol>
			{
				this.state.items.map((item,index) => {
					return <Todolist 
							
								key = {item.id} 
								items = {item.name} 
								del = {this.deleteItem} 
								index = {index}
								edit = {this.editTask}
						    />
				})
			} 
			</ol>
		</div>
		)
	}
}
export default Todo;
