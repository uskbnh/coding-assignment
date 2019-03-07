const initState = {
    'mylist':[  
        {  
           'title':'Futurama',
           'id':1,
           'img':'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        },
        {  
           'title':'The Interview',
           'id':2,
           'img':'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {  
           'title':'Gilmore Girls',
           'id':3,
           'img':'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
     ],
     'recommendations':[  
        {  
           'title':'Family Guy',
           'id':4,
           'img':'http://cdn5.nflximg.net/webp/5815/2515815.webp'
        },
        {  
           'title':'The Croods',
           'id':5,
           'img':'http://cdn3.nflximg.net/webp/2353/3862353.webp'
        },
        {  
           'title':'Friends',
           'id':6,
           'img':'http://cdn0.nflximg.net/webp/3200/9163200.webp'
        }
     ]
}

const reducer = (state = initState, action) => {
    let newMyList = null;
    let newRecommendations = null;
    switch (action.type) {
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