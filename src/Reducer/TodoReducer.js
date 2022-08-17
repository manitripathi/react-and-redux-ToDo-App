const initialData ={
    list:[],
}

const TodoReducer=(initialState=initialData,action)=>{
    switch(action.type){
        case "ADD_TODO" :
            const {id, data}= action.payload;
            return{
                ...initialState,
                list: [
                    ...initialState.list,
                    {
                        id:id,
                        data: data
                    }
                ]
            }
            case "DELETE_TODO" : 
                const newList = initialState?.list?.filter((item)=>
                item.id!==action.id
                // console.log(item.id," + ",action.id,"kk")
                )
              console.log(newList,"initialState");
                return{
                    ...initialState,
                list:newList
                }
            case "CLEAR_TODO":
                return{
                    ...initialState,
                    list:[] 
                }
           default:  return initialState
    }
}
export default TodoReducer;