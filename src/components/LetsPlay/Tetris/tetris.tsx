import { Board } from "./components/Board";
import './tetris.scss';
import { UpcomingBlocks } from "./components/UpcomingBlocks";
import { useTetris } from './hooks/useTetris';


export const Tetris: React.FC = () => {
    const { board, startGame, isPlaying, score, upcomingBlocks, stopGame } = useTetris();

    return (<>
        <div className={`row align-center`}>
            {isPlaying ?
                <button className={`flat-button text`} onClick={stopGame}>Stop Game</button>
                :
                <button className={`flat-button text`} onClick={startGame}>New Game</button>
            }
        </div>
        <div className={`container`}>
            <h1>Tetris</h1>
            <Board currentBoard={board} />
            <div className={`controls`}>
                <h2>Score: {score}</h2>
                {isPlaying ? (<UpcomingBlocks upcomingBlocks={upcomingBlocks} />) : null}

            </div>

        </div>
    </>
    )
}