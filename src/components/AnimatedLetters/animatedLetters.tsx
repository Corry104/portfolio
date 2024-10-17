import './animatedLetters.scss';
import { AnimatedLettersProps } from '../../utils/interfaces/interface';

export const AnimatedLetters: React.FC<AnimatedLettersProps> = (params:AnimatedLettersProps) => {
    const {letters, message, idx} = params;
    
    return(
        <>
            {message.map((char:any, i:number) => {
                return(
                    <span key={i} className={`${letters} _${i + idx}`}>
                        {char}
                    </span>
                )
            })}
        </>
    )
} 