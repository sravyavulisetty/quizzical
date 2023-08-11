import React,{useEffect,useState} from 'react'
import "./QuizDet.css"
// import {TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';
function QuizDet() {
  const [Data, setData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const [play, setPlay] = useState(false);
  const [showAnswers, setshowAnswers] = useState(false);
  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
    .then(res => res.json())
    .then(data=>setData(data.results))
  },[play])
  let nextId = 0;
  const updatedData = Data.map(obj => ({
    ...obj, options: [...obj.incorrect_answers,obj.correct_answer], id: nextId++
  }))
  const handleAnswers = (answer,id) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[id] = answer;
    setSelectedAnswers(updatedAnswers);
  }
  const handleCheckAnswers = () => {
    setshowAnswers(prev => !prev);
    setshowScore(true);
    let score=0;
    for(let i=0;i<updatedData.length;i++){
      if(selectedAnswers[i]===updatedData[i].correct_answer){
        score+=1;
      }
    }
    setScore(score);
  }
  const handleReset = () =>{
    setshowAnswers(prev => !prev)
    setPlay(prev => !prev);
    setSelectedAnswers([]);
    setScore(0);
    setshowScore(prev => !prev);
  }
  function shuffleArray(array) { 
    const newArr = array.sort((a, b) => (
      a.localeCompare(b))
    );
    return newArr;
 } 
  for(let i=0;i<updatedData.length;i++){
  shuffleArray(updatedData[i].options);
  }
  return (
  <div className='container'>
      {updatedData.map((obj,index) => (
        <div className='question-cont'>
        <div className='questions'>
        <h3 key={index}>{obj.question}</h3>
          {!showAnswers ? 
          obj.options.map((item, index) => (
            <button className={selectedAnswers.includes(item) ? "selbtn":"itembtn"} key={index} onClick={()=>handleAnswers(item, obj.id)}>{item}</button>
          )):
          obj.options.map((item, index) => (
            <button className={selectedAnswers.includes(item) ? ((item===obj.correct_answer) ? "crctbtn":"wrngbtn"):((item===obj.correct_answer)?"crctbtn":"itembtn")} key={index} onClick={()=>handleAnswers(item, obj.id)}>{item}</button>
          ))
          }
        </div>
        <div>
          {showAnswers && (selectedAnswers[obj.id]===obj.correct_answer ? <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#42e93f",}} />: <ImCross fill="red" size={27}/>)}
        </div>
        
        </div>
      ))}
      <div className="chkbtn">
      {showScore ? (<div className='score'><h2>You scored {score}/{updatedData.length} correct answers</h2>
      <button className="check" onClick={handleReset}>Play Again</button></div>): 
      (<button disabled={selectedAnswers.length!==5} className="check" onClick={handleCheckAnswers}>Check Answers</button>)}
      </div> 
  </div>
  )
  
}

export default QuizDet;
