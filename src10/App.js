import React from "react";
import Alert from "./components/Alert";
import UserCard from './components/UserCard'

function App() {
  return <>
  <Alert>
    <h1>props children</h1>
    <h3>another tag</h3>
  </Alert>
  <Alert type="danger">
    <span>DANGER!</span>
  </Alert>
  <UserCard name="Joe" role="Instructor" />
  <UserCard name="Denis" role="TA"/>
  <UserCard name="Aslan"role="Tutor"/>
  <UserCard name="Shiva" role="Mascot"/>
  <UserCard name="Bahamut" role="Mascot" age={4}/>
  <UserCard name="Ariel"/>
  <UserCard name="Mike S"/>
  <UserCard name="Vinny"/>
  </>
}

export default App;
