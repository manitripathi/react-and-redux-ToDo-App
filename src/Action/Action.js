export const AddTodo=(data)=>{
    return{
        type: "ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const DeleteTodo=(id)=>{
    return{
        type: "DELETE_TODO",
        id
    }
}

export const ClearTodo=()=>{
    return{
        type: "CLEAR_TODO"
    }
}