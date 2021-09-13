import React from 'react'
import ReactDOM from 'react-dom'
import './global.scss'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import App from './App'
import Nav from './components/shared/Nav'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <React.StrictMode>
        <div class="admin">
            <Header />
            <Nav />
            <App />
            <Footer />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
