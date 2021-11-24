import React, { Component } from "react";

//Class
export default class RClockClass extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className="my-clock">
                <div className="time blink"
                > {this.state.date.toLocaleTimeString()}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.timerID = setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }
}