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
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
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
        for(let i=0; i<INITIAL_VERTICAL_RANGE; i++){
            let row = [];           
            for(let j=0; j<INITIAL_HORIZONTAL_RANGE; j++){
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
        let winner = calculateWinner(this.state.squares);
        let status = '';
        if(winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }       
        return(
            <div>
                <h1>Board</h1>
                <div className="status">{status}</div>
                {this.renderBoard()}
            </div>
        )
    };
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Board;