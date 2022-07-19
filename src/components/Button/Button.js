

const Button = props => {



    return(
    <div>
        <button onClick={props.timer}>Start</button>
        <button onClick={props.stop}>Stop</button>
        <button>Odśwież</button>
    </div>
    )
}

export default Button;