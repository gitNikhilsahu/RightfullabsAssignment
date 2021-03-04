const initState = {
    dataLists: [],
    dataList: {},
    message: '',
    loading: false,
};

const crudReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "LOADING_TRUE": {
            state = {
                ...state,
                loading: true
            };
            break;
        }
        case "GET_DATA_LIST_SUCCESS": {
            state = {
                ...state,
                dataLists: action.payload,
                message: 'success',
                loading: false
            };
            break;
        }
        case "GET_DATA_DETAIL_SUCCESS": {
            state = {
                ...state,
                dataList: action.payload,
                message: 'success',
                loading: false
            };
            break;
        }
        case "CREATE_SUCCESS": {
            state = {
                ...state,
                message: 'success',
                loading: false
            };
            break;
        }
        case "UPDATE_SUCCESS": {
            state = {
                ...state,
                message: 'update',
                loading: false
            };
            break;
        }
        case "DELETE_SUCCESS": {
            state = {
                ...state,
                dataLists: state.dataLists.filter((item:any) => item.slug !== action.payload.slug),
                message: 'delete',
                loading: false
            };
            break;
        }
        case "ERROR": {
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
export default crudReducer;
