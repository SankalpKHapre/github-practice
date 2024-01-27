import logo from './logo.svg';
import React from 'react';
import './App.css';
import Main from "./quizzical/Main.js"
import Page from "./quizzical/page1.js"
import "./quizzical/Main.css"


function App() {
  const [trivia, setTrivia] = React.useState({})
  const [page,setPage] = React.useState("meow") 
  console.log("Component rendered")
  console.log("Component rendered")
  console.log("Component rendered")
 
      

  React.useEffect(function() {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
          .then(res => res.json())
          .then(data => setTrivia(data))
  },[])
   
  

  const arrayQue = trivia.results.map((que)=>{
    return que.question
  })

  function nextPage() {
    setPage(arrayQue.map(value=> <Page question={value} />))
  }





  return (
    <div className="App">
     {/* <Main nextPage=nextPage()/> */}
     {page}
    </div>
  );
}

export default App;

