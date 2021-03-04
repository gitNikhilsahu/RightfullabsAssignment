import rightfullabsAxiosInstance from 'src/services/rightfullabsApi'

export const getDropdownListAction = () => {
    return async (dispatch:any) => {
        try {
            dispatch({
                type: 'LOADING_TRUE'
            })
            const res = await rightfullabsAxiosInstance.get('/assignment/dropDownList');
            console.log(res)
            dispatch({
                type: 'GET_DROPDOWNS_SUCCESS',
                payload: res.data.dropdown
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
            })
            alert("please see error in console logs ...")
            console.log(err)
        }
    }
}

export const postDataAction = (dataObj:any) => {
    return async (dispatch:any) => {
        try {
            dispatch({
                type: 'LOADING_TRUE'
            })
            const res = await rightfullabsAxiosInstance.post('/assignment/postData',dataObj);
            console.log(res)
            const data = res.data
            if(data.code === 401){
                dispatch({
                    type: 'POST_DATA_ERROR',
                    payload: res.data.message
                })
            }
            dispatch({
                type: 'POST_DATA_SUCCESS',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
            })
            alert("please see error in console logs ...")
            console.log(err)
        }
    }
}