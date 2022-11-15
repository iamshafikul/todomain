export const addTodo = (data, desc) =>{
    if(data != "" && desc != ""){
        return {
            type : "ADD_TODO",
            payload : {
                id : new Date().getTime().toString(),
                title : data,
                desc : desc
            }
        }
    }
    
}

export const deleteTodo = (id)=>{
    return {
        type : "DELETE_TODO",
        id
    }
}

export const editTodo = ()=>{
    return {
        type : "EDIT_TODO"
    }
}