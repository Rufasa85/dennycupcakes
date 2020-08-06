import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends:friends,
    cartoon:true
  }
  removeFriend = idToDelete=>{
    const friendsCopy = [...this.state.friends];
    const filteredFriends = friendsCopy.filter(friend=>{
      if(friend.id!== idToDelete){
        return true
      } else {
        return false;
      }
    })
    this.setState({friends:filteredFriends});
  }
  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(friend=><FriendCard id={friend.id} handleDelete={this.removeFriend} key={friend.id} name={friend.name} image={friend.image} occupation={friend.occupation} location={friend.location}/>)}
      </Wrapper>
    )
  };
}


export default App;
