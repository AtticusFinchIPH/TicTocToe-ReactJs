import React from 'react'
import CommonVar from './CommonVar';
import Board from './Board'

class Game extends React.Component {
    constructor(props){
        super(props);
        this.common = new CommonVar();
        this.state = {
            history: [{
                squares: Array(this.common.TOTAL_SQUARE).fill(null),
                xIsNext: true
            }]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(i){
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = current.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !current.xIsNext
        });
    }
    render(){
        const history = this.state.history;
        const current = history[history.length - 1];
        let winner = calculateWinner(current.squares);
        let status = '';
        if(winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (current.xIsNext ? 'X' : 'O');
        }   
        return(
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)} squares={current.squares}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{/* TODO */}</ol>
                </div>
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

export default Game;