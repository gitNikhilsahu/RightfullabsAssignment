import rightfullabsAxiosInstance from 'src/services/rightfullabsApi'
import serverCallAxiosInstance from 'src/services/serverCall'

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
        console.log(dataObj)
        try {
            dispatch({
                type: 'LOADING_TRUE'
            })
            const res = await serverCallAxiosInstance.post('/crud/postform', dataObj);
            // const res = await rightfullabsAxiosInstance.post('/assignment/postData',dataObj);
            console.log(res)
            const data = res.data
            // if(data.code === 401){
            //     dispatch({
            //         type: 'POST_DATA_ERROR',
            //         payload: res.data.message
            //     })
            // }
            if(data.message === 'SUCCESS'){
                dispatch({
                    type: 'POST_DATA_SUCCESS',
                    payload: data
                })
            }
            } catch (err) {
            dispatch({
                type: 'ERROR',
            })
            // alert("please see error in console logs ...")
            console.log(err)
        }
    }
}