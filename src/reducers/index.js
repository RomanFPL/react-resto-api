const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [		{
        "title": "Cesar salad",
        "price": 12,
        "url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
        "category": "salads",
        "id": 1
    }]
}

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            }    
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true
            }
        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            }    
        default:
            return state;
    }
}

export default reducer;