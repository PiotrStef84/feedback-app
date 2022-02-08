import React from "react"
import {useState} from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
            <Header />
            <div className='container'>
            <FeedbackList feedback={feedback}/>
            
            </div>
        </>
        
    )
}

// function App() {
//     return React.createElement('div', {className: 'container'}, 
//     React.createElement('h1', {}, 'My App'))
// }

export default App