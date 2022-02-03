import React from "react"
import Header from "./components/Header"

function App() {

    return (
        <>
            <Header text={true}/>
            <div className='container'>
            <h1>Dance!</h1>
            
            </div>
        </>
        
    )
}

// function App() {
//     return React.createElement('div', {className: 'container'}, 
//     React.createElement('h1', {}, 'My App'))
// }

export default App