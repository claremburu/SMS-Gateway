export const config = {
    headers: {
        Accept: 'application/json',
    }
}

export const authConfig = (token) => ({
    headers:{
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
    }
})

export const setActionBusy = (dispatch, type, busy) => {
    dispatch({
        type,
        payload: busy
    })
}

export const exitIfUnauthenticated = (dispatch, error) => {
    const user = {}
    if(error?.error === 'Unauthenticated'){
        dispatch({
            type: 'USER_LOGIN',
            user
            // payload: user
        })
    }
}