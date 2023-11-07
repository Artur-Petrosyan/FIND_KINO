const peoplesReducer = (state = [], { type, data }) => {
    switch (type) {
        case "GET_PEOPLES": return data;
        default: return state;
    }
}

export default peoplesReducer