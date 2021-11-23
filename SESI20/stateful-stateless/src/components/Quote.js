import React,  { useEffect, useState } from "react";

function Quote (props) {
    //Membuat sebuah stateless component
    // Menjadi sebuah stateful component dengan useState()

    //pengunaanya
    // const [ state, setState] = useState()
    const [ quote, setQuote ] = useState(props.quote);

    useEffect(() => {
        setQuote(props.quote)
    }, [props.quote])

    return (
        <>
            <blockquote>
                {quote}
            </blockquote>
        </>
    )
}

export default Quote