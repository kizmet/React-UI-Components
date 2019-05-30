import React, { Component } from 'react';
import './Button.css';

const isOperator = i => {
    return !isNaN(i);
};

export const NumberButton = props => (
    
            <button 
            className={`buttonNumber" ${ 
                isOperator(props.value) ? null: "actions" 
                }`}
                onClick={props.onClick}
                >
                {props.value}
            </button>
                        );

