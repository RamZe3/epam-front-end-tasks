const defaultState = {
    tasks: [],
  }
  
  export const taskReducer = (state = defaultState, action) => {
    switch (action.type){
        
      case "ADD_TASK":
          console.log(state.tasks)
        return {...state, tasks: [...state.tasks ,action.payload]}
        
      case "REMOVE_TASK":
        return {...state, tasks: state.tasks.filter(c => c.id !== action.payload)}

      case "SET_TASKS":
        console.log("ASD")
        console.log(state.tasks)
        return {...state, tasks: action.payload}
  
      default:
        return state
    }
  }