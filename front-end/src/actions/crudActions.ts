import serverCallAxiosInstance from 'src/services/serverCall'

export const getDATAListAction = () => {
    return async (dispatch:any) => {
        try {
            dispatch({
                type: 'LOADING_TRUE'
            })
            const res = await serverCallAxiosInstance.get('/crud/list');
            dispatch({
                type: 'GET_DATA_LIST_SUCCESS',
                payload: res.data.results
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

export const getDATADetailAction = (SLUG:any) => {
    return async (dispatch:any) => {
        try {
            dispatch({
                type: 'LOADING_TRUE'
            })
            const res = await serverCallAxiosInstance.get(`/crud/${SLUG}/`);
            dispatch({
                type: 'GET_DATA_DETAIL_SUCCESS',
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

export const createDATAAction = (dataObj:any) => {
    return async (dispatch:any) => {
        try {
            dispatch({
                type: 'LOADING_TRUE'
            })
            const res = await serverCallAxiosInstance.post('/crud/create', dataObj);
            console.log(res)
            dispatch({
                type: 'CREATE_SUCCESS',
                // payload: res.data.results
            })
            window.location.reload();
        } catch (err) {
            dispatch({
                type: 'ERROR',
            })
            alert("please see error in console logs ...")
            console.log(err)
        }
    }
}

export const updateDATAAction = (SLUG:any,dataObj:any) => {
    return async (dispatch:any) => {
        try {
            dispatch({
                type: 'LOADING_TRUE'
            })
            const res = await serverCallAxiosInstance.put(`/crud/${SLUG}/update`);
            dispatch({
                type: 'UPDATE_SUCCESS',
                payload: res.data.results
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

export const deleteDATAAction = (SLUG:any) => {
    return async (dispatch:any) => {
        try {
            dispatch({
                type: 'LOADING_TRUE'
            })
            const res = await serverCallAxiosInstance.delete(`/crud/${SLUG}/delete`);
            console.log(res)
            dispatch({
                type: 'DELETE_SUCCESS',
                payload: {"slug":SLUG}
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