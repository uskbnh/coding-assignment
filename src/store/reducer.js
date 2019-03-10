const initState = {
    'mylist':[],
    'recommendations':[]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
         case 'INIT':
            return action.payload
         
         case 'ADD':
            return {
                'recommendations':state.recommendations.filter(item => item.id !== action.payload.id),
                'mylist':state.mylist.concat(state.recommendations.filter(item => item.id === action.payload.id)[0])
            }

         case 'DEL':
            return {
                'recommendations':state.recommendations.concat(state.mylist.filter(item => item.id === action.payload.id)[0]),
                'mylist':state.mylist.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default reducer;