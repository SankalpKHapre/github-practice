
import blue from "../quizimages/blue.png"
import yellow from "../quizimages/yellow.png"

export default function Main(props) {



  
  return(
    <div className="div-firstpage">
      
      <img className="yellow" src={yellow}/>
      
        <div className="div-insidefp" >
           
            <div>
            <h1 className="main-header">Quizzical</h1>
            <p className="main-para">A quiz for you</p>
            <button onClick={()=>props.nextPage} className="start-button">Start Quiz</button>
           </div>

        </div>
    </div>

  )
}