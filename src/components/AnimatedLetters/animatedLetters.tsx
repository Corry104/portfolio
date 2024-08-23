import './animatedLetters.scss';

interface Props {
    letters:any;
    message:any[];
    idx:number;
}


export const AnimatedLetters: React.FC<Props> = (props:Props) => {
    const {letters, message, idx} = props;
    return(
        <span>
            {message.map((char:any, i:number) => {
                return(
                    <span key={i} className={`${letters} _${i + idx}`}>
                        {char}
                    </span>
                )
            })}
        </span>
    )
} 