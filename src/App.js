import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import React from "react"
import {useState} from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'

import FeedbackData from "./data/FeedbackData"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    return (
        <Router>
            <Header />
            <div className='container'>
            <Routes>
            <Route exact path='/' element={
                <>
                    <FeedbackForm handleAdd={addFeedback}/>
                    <FeedbackStats feedback={feedback}/>
                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                </>
            }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
            </Routes>
            <AboutIconLink/>
            </div>
        </Router>
        
        
    )
}

// function App() {
//     return React.createElement('div', {className: 'container'}, 
//     React.createElement('h1', {}, 'My App'))
// }

export default App