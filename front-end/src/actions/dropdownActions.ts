import axiosInstance from 'src/services/rightfullabsApi'

export const getDropdownListAction = () => {
    return async (dispatch:any) => {
        try {
            dispatch({
                type: 'LOADING_TRUE'
            })
            const res = await axiosInstance.get('/assignment/dropDownList');
            console.log(res)
            dispatch({
                type: 'GET_DROPDOWNS_SUCCESS',
                payload: res.data.dropdown
            })
        } catch (err) {
            dispatch({
                type: 'GET_DROPDOWNS_ERROR',
            })
            console.log(err)
            alert("please see error in console logs ...")
        }
    }
}

export const postDataAction = (dataObj:any) => {
    return async (dispatch:any) => {
        try {
            // dispatch({
            //     type: 'LOADING_TRUE'
            // })
            // const res = await axiosInstance.get('/assignment/dropDownList');
            // console.log(res)
            // dispatch({
            //     type: 'GET_DROPDOWNS_SUCCESS',
            //     payload: res.data.dropdown
            // })
        } catch (err) {
            // dispatch({
            //     type: 'GET_DROPDOWNS_ERROR',
            // })
            // console.log(err)
            // alert("please see error in console logs ...")
        }
    }
}