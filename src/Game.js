import React from 'react'
import CommonVar from './CommonVar';
import Board from './Board'

class Game extends React.Component {
    constructor(props){
        super(props);
        this.common = new CommonVar();
        this.state = {
            history: [{
                squares: Array(this.common.TOTAL_SQUARE).fill(null)
            }]
        };
    }
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    };
}

export default Game;