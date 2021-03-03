const initState = {
    dropdown: [],
    message: '',
    loading: false,
};

const dropdownReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "LOADING_TRUE": {
            state = {
                ...state,
                loading: true
            };
            break;
        }
        case "GET_DROPDOWNS_SUCCESS": {
            state = {
                ...state,
                dropdown: action.payload,
                message: 'success',
                loading: false
            };
            break;
        }
        case "GET_DROPDOWNS_ERROR": {
            state = {
                ...state,
                message: 'error',
                loading: false
            };
            break;
        }
     
        default:
            state = { ...state };
            break;
    }
    return state;
};
export default dropdownReducer;
