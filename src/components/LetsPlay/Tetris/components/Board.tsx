import { BoardShape } from "../types";
import '../tetris.scss';
import { Cell } from "./Cell";

interface Props {
  currentBoard: BoardShape;
}

export const Board: React.FC<Props> = (props: Props) => {
  const { currentBoard } = props;
  
  return (
    <div className={'board'}>
      {currentBoard.map((row, rowIndex) => (
        <div className={'line'} key={`${rowIndex}`}>
          {row.map((cell, colIndex) => {
          return (
            <Cell key={`${rowIndex}-${colIndex}`} type={cell} />
          )
        }
          )}
        </div>
      ))}
    </div>
  );
}