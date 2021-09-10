const videosReducer = (state = {videos: [], requesting: false}, action) => {
    switch (action.type) {
        case "START_FETCHING_VIDEOS":
            return {
                ...state,
                requesting: true
            }
            break;
        case "ADDING_VIDEOS":
            return {
                ...state,
                requesting: false,
                videos: [...action.videos]
            }
            break;
    
        default:
            return state
            break;
    }
}

