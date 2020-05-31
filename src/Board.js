import React from 'react'
import CommonVar from './CommonVar';
import Square from './Square';
import "./Board.css"

class Board extends React.Component {
    constructor(props){
        super(props);
        this.common = new CommonVar();
        this.renderSquare = this.renderSquare.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
    }
    renderSquare(i){
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
    }
    renderBoard(){
        let board = [];
        for(let i=0; i<this.common.INITIAL_VERTICAL_RANGE; i++){
            let row = [];           
            for(let j=0; j<this.common.INITIAL_HORIZONTAL_RANGE; j++){
                row.push(this.renderSquare(this.common.INITIAL_HORIZONTAL_RANGE*i + j));
            }
            let rowWrapper = <div className="board-row">{row}</div>;
            board.push(rowWrapper);
        }
        return(
            <div className="board">{board}</div>
        )
    }
    render(){          
        return(
            <div>
                <h1>Board</h1>
                {this.renderBoard()}
            </div>
        )
    };
}

export default Board;