const initialState = {
    mainPosts: [],
};

const ADD_POST = 'ADD_POST';


export default (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            return {
                ...state,
            }
        }

        default:
            return state;
    }
};