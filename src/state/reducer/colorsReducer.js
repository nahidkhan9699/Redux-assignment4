export const colorReducer=(state={filtColor:[]},action)=>{
    switch(action.type){
        case "ADD__COLOR":
            return{
                ...state,
                filtColor:[action.payload,...state.filtColor]
            }
            default:
                return state;
    }
    return state;
}