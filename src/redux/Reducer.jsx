// src/redux/reducer.js
const initialState = {
    items: [],
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        // other cases...
        default:
            return state;
    }
};

export default bookReducer;
