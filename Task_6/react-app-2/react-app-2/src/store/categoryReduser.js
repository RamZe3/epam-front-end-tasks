const defaultState = {
    categories: [{id: 1231, title: "Qew", categories: [
        {id: 12311, title: "Qew"}, {id: 12312, title: "Qew"}]}
      , {id: 12412, title: "withTasks", tasks: [{id: 123, title: "asd", done:true}]}
    ],

  }
  
  export const categoryReducer = (state = defaultState, action) => {
    switch (action.type){
      case "ADD_CATEGORY":
        return {...state, categories: [...state.categories ,action.payload]}

      case "REMOVE_CATEGORY":
        return {...state, categories: state.categories.filter(c => c.id !== action.payload)}
    
      case "SET_CATEGORY":
        return {...state, categories: action.payload}
  
      default:
        return state
    }
  }