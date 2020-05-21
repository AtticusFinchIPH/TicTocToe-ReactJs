import React from 'react'
import Square from './Square';
import "./Board.css"

const INITIAL_VERTICAL_RANGE = 3;
const INITIAL_HORIZONTAL_RANGE = 3;
const TOTAL_SQUARE = INITIAL_VERTICAL_RANGE * INITIAL_HORIZONTAL_RANGE;

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(TOTAL_SQUARE).fill(null),
            xIsNext: true
        }
        this.renderSquare = this.renderSquare.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    renderSquare(i){
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
    }
    renderBoard(){
        let board = [];
        for(let i=1; i<=INITIAL_VERTICAL_RANGE; i++){
            let row = [];           
            for(let j=1; j<=INITIAL_HORIZONTAL_RANGE; j++){
                row.push(this.renderSquare(INITIAL_HORIZONTAL_RANGE*i + j));
            }
            let rowWrapper = <div className="board-row">{row}</div>;
            board.push(rowWrapper);
        }
        return(
            <div className="board">{board}</div>
        )
    }
    render(){
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
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