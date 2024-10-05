import { CellOptions } from '../types';
import '../tetris.scss';

interface Props {
  type: CellOptions;
}


export const Cell: React.FC<Props> = (props:Props) => {
    const { type } = props;
    return (
        <>
            <div className={`cell ${type}`}></div> 
        </>
    )
}