import React from 'react'

export default function Math({num1, num2, operator}) {
    let answer=0;
    if(operator === "+" ){
        answer = num1 + num2
    } else if(operator === "-" ){
        answer = num1 - num2
    }else if(operator === "*" ){
        answer = num1 * num2
    }else if(operator === "/" ){
        answer = num1 / num2
    }

    return (
        <span style={{fontSize:answer}}>{answer}</span>
    )
}
