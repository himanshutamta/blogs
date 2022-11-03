export const addData = (data) => {
    return {
        type: "ADD_DATA",
        payload: { 
            id: new Date().getTime().toString(),
            data: data
        }
    }
}