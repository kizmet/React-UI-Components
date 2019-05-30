import React, { Component } from 'react';
import './Display.css';



function Button(props) {
    const isAction = i => {
        return !isNaN(i);
    };
    return (
        <button
            className={`${props.name} ${
                isAction(props.value) ? "numberButton" : "actionButton"
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
    clearInput(i) {
        this.setState({ input: 0 });
    };

    numberButton(i,name) {
        return (
            <Button
                value={i}
                name={name}
                onClick={() => this.addToInput(i)}
            />
        );
    }

    actionButton(i,name) {
        return (
            <Button
                value={i}
                name={name}
                onClick={() => {return (null)}}
            />
        );
    }
    clearButton(i,name) {
        return (
            <Button
                value={i}
                name={name}
                onClick={() => this.clearInput(i)}
            />
        );
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
                    <div className="calculatorRow">{this.clearButton("clear", "wideButton")}</div>
                    <div className="calculatorRow">
                        {this.numberButton(9,"")}
                        {this.numberButton(8, "")}
                        {this.numberButton(7, "")}
                    </div>
                    <div className="calculatorRow">
                        {this.numberButton(6, "")}
                        {this.numberButton(5, "")}
                        {this.numberButton(4, "")}
                    </div>
                    <div className="calculatorRow">
                        {this.numberButton(3, "")}
                        {this.numberButton(2, "")}
                        {this.numberButton(1, "")}
                    </div>
                    <div className="calculatorRow">{this.numberButton(0, "wideButton")}</div>
                </div>
                <div className="calculatorColumn">
                    <div className="calculatorRow">{this.actionButton("/", "")}</div>
                    <div className="calculatorRow">{this.actionButton("*", "")}</div>
                    <div className="calculatorRow">{this.actionButton("+", "")}</div>
                    <div className="calculatorRow">{this.actionButton("-", "")}</div>
                    <div className="calculatorRow">{this.actionButton("=", "")}</div>
                </div>
            </div>
        )
    }
}

export default CalculatorDisplay;