
let initialState = {
    data: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MOVIE_RECORD":
            let newData = [];
            if (state.data.length) {
                newData = state.data.filter((movie, i) => {
                    return action.payload.movieName !== movie.movieName
                })
            }
            return {
                ...state,
                data: [action.payload, ...newData]
            }
        case "SET_INITIAL_MOVIE_DATA":
            return { ...state, data: [...action.payload] }

        default: return state
    }


}

export default Reducer;