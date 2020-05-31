import React from 'react'

function Square (props) {
    return (
        <button className="square" onClick={props.onClick} style={{ verticalAlign: 'top'}}>
            {props.value}
        </button>
    );
}

export default Square;