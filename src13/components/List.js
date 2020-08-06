import React from "react";
function List(props) {
  const filteredGrocs = props.groceries.filter(function(food){
    if(food.purchased){
      return false
    } else {
      return true
    }
  })
  const grocLis = filteredGrocs.map(function(item){
  return <li key={item.id}>{item.name}</li>
  })
  console.log(filteredGrocs)
  return (
    <ul className="list-group">
      {grocLis}
     {props.groceries.filter(food=>!food.purchased).map((item)=> <li key={item.id} className="list-group-item">{item.name}</li>)}
    </ul>
  );
}

export default List;
