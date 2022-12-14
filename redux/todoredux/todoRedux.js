const initialData = {
    list : []
}


const todoReducer = (state = initialData, action)=>{
    switch(action.type){
        
        case "ADD_TODO" :
            
                const {id, title, desc} = action.payload;
                return {
                    ...state,
                    list : [
                        ...state.list,
                        {
                            id : id,
                            title : title,
                            desc : desc
                        }
                    ]
                }

                case "DELETE_TODO" :
                const newList = state.list.filter((elem)=> elem.id !== action.id);
                    return {
                        ...state,
                        list : newList 
                    }

                default: return state;
            }
        }

        export default todoReducer;