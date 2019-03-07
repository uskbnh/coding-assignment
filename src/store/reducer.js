const initState = {
    'mylist':[  
        
     ],
     'recommendations':[  
        
     ]
}

const reducer = (state = initState, action) => {
    let newMyList = null;
    let newRecommendations = null;
    switch (action.type) {
         case 'INIT':
            return action.payload
         
         case 'ADD':
            newMyList = [...state.mylist];
            newRecommendations = [...state.recommendations];
            let addItem = state.recommendations.filter(item => item.id === action.payload.id)[0];
            newMyList.push(addItem);
            newRecommendations = newRecommendations.filter(item => item.id !== action.payload.id);
            return {
                'recommendations':newRecommendations,
                'mylist':newMyList
            }

         case 'DEL':
            newMyList = [...state.mylist];
            newRecommendations = [...state.recommendations];
            newMyList = newMyList.filter(item => item.id !== action.payload.id);
            let returnItem = state.mylist.filter(item => item.id === action.payload.id)[0];
            newRecommendations.push(returnItem);
            return {
                'recommendations':newRecommendations,
                'mylist':newMyList
            }
        default:
            return state;
    }
}

export default reducer;