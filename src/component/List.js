import React from 'react'
import {deletetodo, toggletodo} from '../redux/modules/todo';
import {useDispatch, useSelector} from 'react-redux';

import { useNavigate } from 'react-router-dom';

const List = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //useNavigate도 그냥 못씀 / 그래서 네비게이트 변수를 선언해서 사용해야함
    //useNavigate는 경로 이동 해주는거 ,,, 


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {todos} = useSelector((state)=>state.todo)
    //store에 있는 todo라는 애를 가져오는데, todos값을 구조분해 할당 하는 것 

    const onDeleteHandler = (id) => { 
        dispatch(deletetodo(id))
      };
    
      const toggleHandler = (id) =>{
        dispatch(toggletodo(id))
      }

      const showMore = (id) => {
        navigate(`detail/${id}`)
      }
    return (
        <div>
            <h1>working</h1>
            {todos.map((todo)=>{
                if(!todo.isDone){
                return(
                    <div>
                        <span onClick={()=>showMore(todo.id)}>자세히 보기</span>
                        <p>{todo.title}</p>
                        <p>{todo.content}</p>
                        <button onClick={()=>onDeleteHandler(todo.id)}>삭제하기</button>
                        <button onClick={()=>toggleHandler(todo.id)}>완료하기</button>
                    </div>
                );
                } else {
                return null;
                }
            })
            }

            <h1>Done</h1>
            {todos.map((todo)=>{
                if(todo.isDone){
                return(
                    <div>
                    <p>{todo.title}</p>
                    <p>{todo.content}</p>
                    <button onClick={()=>onDeleteHandler(todo.id)}>삭제하기</button>
                    <button onClick={()=>toggleHandler(todo.id)}>완료하기</button>
                    </div>
                );
                } else { 
                return null;
                }
            })
            }
        </div>
    )
}

export default List