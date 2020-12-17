
let initialState={
    data:[]
}

const Reducer=(state = initialState, action)=>{
    switch(action.type){
        case "SET_MOVIE_RECORD":
            let newData=[];
             if(state.data.length){
                newData=state.data.filter((movie,i)=>{
                    return action.payload.movieName!==movie.movieName
                })
             }
            return {
                ...state,
                data:[action.payload,...newData]
            }

        default :return state
    }
    

}

export default Reducer;