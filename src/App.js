import React, { Component } from 'react'
import './style.css';
import ListItem from './ListItem';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';
 class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
  }
  
  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem=this.state.currentItem;
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
   
  }

  setUpdate(text, key){
     const items=this.state.items;
     items.map(item =>{
       if(item.key === key){
         item.text=text;
       }
     })
     this.setState({
       items:items
     })
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item=> item.key !== key);
    this.setState({
       items:filteredItems,
    })
  }
  render() {
    return (
      <div className="MyApp">
         <header>
            <form id="to-do-form" onSubmit={this.addItem}>
            <h2 className="todo-head"><ListAltSharpIcon className="myicon"/> TO DO List App</h2>
              <input type="text" onChange={this.handleInput} value={this.state.currentItem.text} placeholder="Enter Your Note.."></input>
              <button className="form-button">Add</button>
              
            </form>
            <small className="small-para">To Edit type in input field </small>
         </header>
         <ListItem items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
      </div>
    )
  }
}
export default App;