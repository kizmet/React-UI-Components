import React, { Component } from 'react';
import './Display.css';


function Button(props) {
    return (
        <button className={props.name} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function NumberButton(props) {
    const isAction = i => {
        return !isNaN(i);
    };
    return (
        <button
            className={`${props.name} ${
                isAction(props.value) ? null : "actionButton"
                }`}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

class CalculatorDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
    }

    addToInput(i) {
        this.setState({ input: this.state.input + i });
    };


    numberButton(i,name) {
        return (
            <NumberButton
                value={i}
                name={name}
                onClick={() => this.addToInput(i)}
            />
        );
    }

    actionButton(i,name) {
        return (
            <Button 
            name={name}
            value={i}
            />

        )
    }
    render() {
        const TotalButton = props => {
            return (
                <div
                    className="input"
                >
                    {props.input}
                </div>
            );
        }
        return (
            <div className="calculatorDisplay">
                <div className="displayRow">
                    <TotalButton input={this.state.input} />
                </div>
                <div className="calculatorColumn">
                    <div className="calculatorRow">{this.actionButton("clear", "wideButton")}</div>
                    <div className="calculatorRow">
                        {this.numberButton(9, "numberButton")}
                        {this.numberButton(8, "numberButton")}
                        {this.numberButton(7, "numberButton")}
                    </div>
                    <div className="calculatorRow">
                        {this.numberButton(6, "numberButton")}
                        {this.numberButton(5, "numberButton")}
                        {this.numberButton(4, "numberButton")}
                    </div>
                    <div className="calculatorRow">
                        {this.numberButton(3, "numberButton")}
                        {this.numberButton(2, "numberButton")}
                        {this.numberButton(1, "numberButton")}
                    </div>
                    <div className="calculatorRow">{this.numberButton(0, "wideButton")}</div>
                </div>
                <div className="calculatorColumn">
                    <div className="calculatorRow">{this.actionButton("/", "actionButton")}</div>
                    <div className="calculatorRow">{this.actionButton("*", "actionButton")}</div>
                    <div className="calculatorRow">{this.actionButton("+", "actionButton")}</div>
                    <div className="calculatorRow">{this.actionButton("-", "actionButton")}</div>
                    <div className="calculatorRow">{this.actionButton("=", "actionButton")}</div>
                </div>
            </div>
        )
    }
}

export default CalculatorDisplay;