//명령어 액션을 함수로 만들어 준다. 
//1. delete, addTod 만들기 


//액션 타입 만들기 
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';


//초기상태값 
const initialState = {
    todos:[],
};


//액션을 반환해주는(실행시켜주는) 함수- 
//addtodo 밖으로 나가서 사용됨 
//payload같은 매개변수로 값을 받아옴 (dispatch할때)
let nextID = 1
export const addtodo = (value1, value2) => {
    return{
        type: ADD_TODO, 
        post: {
            id:nextID++,
            title:value1,
            content:value2,
            isDone:false
        }
    }
};

export const deletetodo = (payload) => {
    return{
        type: DELETE_TODO,
        payload
    }
}

export const toggletodo = (payload) => {
    return{
        type: TOGGLE_TODO, 
        payload 
    }
}


//리듀서 함수 
const todo = (state=initialState, action) => {
    //switch는 action.type을 참조해서 case 에 따라 반환된다. 
    switch (action.type) { 
        case ADD_TODO:
            return {
                ...state, 
                todos:[...state.todos, action.post]
            };
        case DELETE_TODO:
            return{
                ...state,
                todos:state.todos.filter((todo) => todo.id !== action.payload)
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos:state.todos.map((todo)=>{
                    if(todo.id===action.payload){
                        return{
                            ...todo,
                            isDone: !todo.isDone   
                        } 
                    } else{
                        return {
                            ...todo
                        }
                    }
                })
            }
        default:return state
        //case없을 때 반환하는 값 / if문에 else와 같은것,,,
    } 
};

export default todo