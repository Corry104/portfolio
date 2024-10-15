import { Board } from "./components/Board";
import './tetris.scss';
import { UpcomingBlocks } from "./components/UpcomingBlocks";
import { useTetris } from './hooks/useTetris';


export const Tetris: React.FC = () => {
    const { board, startGame, isPlaying, score, upcomingBlocks, stopGame } = useTetris();

    return (<>
       
        <div className={`container`}>
            {isPlaying ?
                <div className={`grid-center padding-twenty padding-tb`}>
                    <h1>Score: {score}</h1>
                    <button className={`flat-button text`} onClick={stopGame}>Stop Game</button>
                </div>
                :
                <div className={`grid-center padding-twenty padding-tb`}>
                    <h1>Tetris</h1>
                    <button className={`flat-button text`} onClick={startGame}>New Game</button>
                </div>
            }
            <Board currentBoard={board} />
            <div className={`controls`}>
                {isPlaying ? (<UpcomingBlocks upcomingBlocks={upcomingBlocks} />) : null}

            </div>

        </div>
    </>
    )
}