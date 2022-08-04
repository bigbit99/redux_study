import React from 'react'
import List from './List';

import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addtodo} from '../redux/modules/todo';

const Form = () => {
    const [title, setTitle] = useState('');
    const [content , setContent]= useState('');

    const dispatch = useDispatch();
    //useDispatch는 함수값이라 새로운 변수를 담아서 만들어둔 dispatch 함수를 이벤트함수에 가져다가 쓴다 

    
    const onSumbitHandler = () => {
        dispatch(addtodo(title, content))
        setTitle('');
        setContent(''); 
        //input창 초기화 
    };

    return (

        <div>
            <p>제목</p>
            <input onChange={(e)=> setTitle(e.target.value)} value={title}></input>

            <p>내용</p>
            <input  onChange={(e)=> setContent(e.target.value)} value={content}></input>

            <button onClick={onSumbitHandler}>추가하기</button>
            <List/>
        </div>

    )
}

export default Form