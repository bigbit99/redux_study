import React from 'react'
import {useSelector} from 'react-redux';
import { useParams, Link } from 'react-router-dom';
//useParams 는 현재 위치에 있는 값을 찾아줌 ,,, 쿼리값만 가져옴,,,
//useParams 는 ,, 


const Detail = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  //리액트 훅의 플러그인 ,,, create react app 만들 때 기본적으로 들어가있는 플러그인 
  const {todos} = useSelector((state)=>state.todo)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {id} = useParams() 
  //const params = useParams()
  // 파라미터 값을 이용해서 가져올 수 있다 
  //destructuring  해줌! 


  return (
    <div>
        {todos.map((todo) => {
            if(todo.id===Number(id)) {
                    return (
                        <div>
                            <Link to="/">뒤로가기</Link>
                            <p>{todo.id}</p>
                            <p>{todo.title}</p>
                            <p>{todo.content}</p>
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

export default Detail