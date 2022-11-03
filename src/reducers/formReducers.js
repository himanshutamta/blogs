const mystate = {
    list: []
}

const formReducers = (state = mystate, action) => {
    switch (action.type){
        case "ADD_DATA":
            const { id, data }= action.payload;
            const formvalue = [...state.list];
            formvalue.push({id:id , data:data})
            console.log(...state.list)
            return{
                ...state,
                list: formvalue
            } 
            default : return state;

    }
}

export default formReducers;