const initState = {
    'mylist':[],
    'recommendations':[]
}

const addElement = (fromarr, toarr, id) => toarr.concat(fromarr.filter(item => item.id === id)[0]);

const delElement = (arr, id) => arr.filter(item => item.id !== id);

const reducer = (state = initState, action) => {
    switch (action.type) {
         case 'INIT':
            return action.payload
         
         case 'ADD':
            return {
                'recommendations': delElement(state.recommendations, action.payload.id),
                'mylist': addElement(state.recommendations, state.mylist, action.payload.id)
            }

         case 'DEL':
            return {
                'recommendations': addElement(state.mylist, state.recommendations, action.payload.id),
                'mylist': delElement(state.mylist, action.payload.id)
            }
        default:
            return state;
    }
}

export default reducer;