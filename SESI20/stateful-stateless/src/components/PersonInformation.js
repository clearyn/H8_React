import React, {Component, useState, useEffect} from "react";
import Quote from "./Quote";

function PersonInformation() {
    const [ name, setName ] = useState("Septyan")
    const [ age, setAge ] = useState(17)
    const [ quote, setQuote ] = useState("Tiada hari tanpa ngoding React")

    const changeName = () => {
        const newName = name + 2
        setName(newName)
    }

    const changeAge = () => {
        setAge(age + 1)
    }

    const changeQuote = () => {
        setQuote("Berubah")
    }

    useEffect(() => {
        document.title = `My name is ${name}`
    }, [ age, quote ])

    return (
        <>
        <h1>Person Information</h1>
        <div>
            <span>Name: {name}</span><br/>
            <span>Age: {age}</span><br/>
            <span>Quote:</span><br/>
            <Quote quote={quote}/>
        </div>
        <button onClick={changeName}>Change My Name</button>
        <button onClick={changeAge}>Change My Age</button>
        <button onClick={changeQuote}>Change My Quote</button>
        </>
    )
}


// class PersonInformation extends Component {
//     constructor(){
//         super();
//         this.state = {
//             name: "Ryan",
//             age: 17,
//             quote: "Tiada hari tanpa ngoding React"
//         }
//     }

//     render() {
//         return (
//             <>
//             <h1>Person Information</h1>
//             <div>
//                 <span>Name: {this.state.name}</span><br/>
//                 <span>Age: {this.state.age}</span><br/>
//                 <span>Quote:</span><br/>
//                 <Quote quote={this.state.quote}/>
//             </div>
//             </>
//         )
//     }
// }

export default PersonInformation
