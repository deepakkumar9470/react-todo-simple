import React from 'react';
import './ListItem.css';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import FlipMove from 'react-flip-move';

const ListItem = (props) => {
    const items= props.items;
    const listItems=items.map( item =>{
       return <div className="list" key={item.key}>
          <p className="todo-row">
            <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value, item.key)} }>
            </input>
                <span>
                  <DeleteRoundedIcon onClick={()=>props.deleteItem(item.key)} className="mat_icon"/>
                </span>
          </p>
         

       </div>
    })
    return (
        <div>
        <FlipMove duration={300} easing="ease-in-out">
          {listItems}
        </FlipMove>
           
        </div>
    )
}

export default ListItem
