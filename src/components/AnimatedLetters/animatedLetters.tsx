import './animatedLetters.scss';

interface Params {
    letters:any;
    message:any[];
    idx:number;
}


export const AnimatedLetters: React.FC<Params> = (params:Params) => {
    const {letters, message, idx} = params;
    
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