


const Time = props =>{

    const plusO =time =>{
        
        if (time < 10){
          
          return(
            '0'+time
          )  
        }
        return(
        time
        )
    }

    return(
    <div>
        {plusO(props.hour}:{plusO(props.minuts)}:{plusO(props.second)}
    </div>
    )

}

export default Time;