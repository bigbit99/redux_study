//import { useState } from 'react';
import './App.css';

// import {useDispatch, useSelector} from 'react-redux';
// //dispatch는 props처럼 리덕스에 값을 보내는 것 
// //useSelector는 .... store에 있는 값(todo)을 저장했는데 걔를 가져오는 것 

// import {addtodo, deletetodo, toggletodo} from './redux/modules/todo';
// //import todo from './redux/modules/todo';

import{Routes, Route} from 'react-router-dom';
import Detail from './page/Detail';
import Form from './component/Form';

function App() {
  // const [title, setTitle] = useState('');
  // const [content , setContent]= useState('');

  // const dispatch = useDispatch();
  // //useDispatch는 함수값이라 새로운 변수를 담아서 만들어둔 dispatch 함수를 이벤트함수에 가져다가 쓴다 

  // const {todos} = useSelector((state)=>state.todo)
  // //store에 있는 todo라는 애를 가져오는데, todos값을 구조분해 할당 하는 것 

  // const onSumbitHandler = () => {
  //   dispatch(addtodo(title, content))
  //   setTitle('');
  //   setContent(''); 
  //   //input창 초기화 
  // };

  // const onDeleteHandler = (id) => { 
  //   dispatch(deletetodo(id))
  // };

  // const toggleHandler = (id) =>{
  //   dispatch(toggletodo(id))
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Form/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        {/* url에도 파라미터 값을 넘길 수 있음. :id 파라미터 라는 뜻  / 가변적인 값 / show item with :id*/}
        {/* Restful routes */}
      </Routes>
    </>
  );
}

export default App
