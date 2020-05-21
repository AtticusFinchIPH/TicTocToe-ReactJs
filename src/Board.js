import React from 'react'
import Square from './Square';
import "./Board.css"

const INITIAL_VERTICAL_RANGE = 3;
const INITIAL_HORIZONTAL_RANGE = 3;

class Board extends React.Component {
    constructor(props){
        super(props);
        this.renderSquare = this.renderSquare.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
    }
    renderSquare(i){
        return <Square value={i}/>
    }
    renderBoard(){
        let board = [];
        for(let i=0; i<INITIAL_VERTICAL_RANGE; i++){
            let row = [];           
            for(let j=0; j<INITIAL_HORIZONTAL_RANGE; j++){
                row.push(this.renderSquare(j));
            }
            let rowWrapper = <div className="board-row">{row}</div>;
            board.push(rowWrapper);
        }
        return(
            <div className="board">{board}</div>
        )
    }
    render(){
        const status = 'Next player: X';
        return(
            <div>
                <h1>Board</h1>
                <div className="status">{status}</div>
                {this.renderBoard()}
            </div>
        )
    };
}

export default Board;