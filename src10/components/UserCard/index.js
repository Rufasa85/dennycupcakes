import React from 'react'
import "./style.css";

export default function UserCard(props) {
    return (
        <div className="UserCard">
            <h3>{props.name}</h3>
            <h4>{props.role || "student"}</h4>
            <img src="..."/>
        </div>
    )
}
