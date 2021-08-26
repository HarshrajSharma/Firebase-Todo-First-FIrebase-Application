import React from "react"
import firebase from "../Util/Firebase";


function TestButton(){

    function testFirebase(){
        const a="Apple;"
        const todoRef= firebase.database().ref("TODO");
        const todo={
            a,
            name: "Hello",
        }   ;
        todoRef.push(todo);      
    }

    return(
        <div>

            <button onClick={testFirebase} >TEST</button>
        </div>
    );
}

export default TestButton;
