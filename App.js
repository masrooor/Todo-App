import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
/*class App extends  React.Component{
	constructor(props){
				super(props);
				this.state = {
					data: ''
				}
			}
			update(e){
				this.setState  ({data: e.target.value});
			}
			clear(){
				this.setState  ({data : ''});
				ReactDOM.findDOMNode(this.refs.text);
			}
	render(){
		return(
			<div>
				
				<input type="text" value = {this.state.data} onChange = {this.update.bind(this)} refs = "text"/>
				<h2>{this.state.data}</h2>
				<button onClick = {this.clear.bind(this)}>Clear</button>
				
			</div>
			
			
		);
		
	}
}*/
class App extends React.Component{
	constructor(){
		super();
			this.state = {
					data : []
				}
	}
	/*change(e){
		this.setState ({data : e.target.value})
	}*/
	clear(){
				this.setState  ({data : ''});
				//ReactDOM.findDOMNode(this.refs.text);
			}
	update(){
			var item = "Mas ";
			var array = this.state.data.slice();
			array.push(item);
			this.setState({data: array})
	};
	render(){
		return(
			<div>
				<input type = "text" />
				<button onClick = {this.update.bind(this)} >Clcik to Add Item in Array</button>
				<button onClick = {this.clear.bind(this)} >Clcik to Add Item in Array</button>
				<h4>{this.state.data}</h4>
			</div>
		)
	}
}
export default App;



/*class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading/>
		<Content/>
      </div>
    );
  }
}
class Heading extends Component{
	render(){
		return (
			<h1>Heading</h1>
			
		
		)
	}
};
class Content extends Component{
	render(){
		return (
			<p>COntent</p>
		)
	}
};
class App extends Component{
	constructor(){
		super();
		this.state = {
			count : 0
		};
	}
	Click(){
		this.setState ({
			count : this.state.count + 1
		});
	}
	render(){
		return(
			<div>
				<h1>Value : {this.state.count}</h1>
				<button onClick = {this.Click.bind(this)}>Increment</button>
			</div>
		);
	}
}*/

/*lass Header extends Component{
	render(){
		return(
			/*<div>
				<h1>{this.props.heading}</h1>
			</div>
		)
	}
}
class Content extends Component{
	render(){
		return(
			/*<div>
				<p>{this.props.para}</p>
			</div>
		)
	}
}
/*App.defaultProps = {
	header : "This is a Heading",
	COntent : "this is Content"
}*/