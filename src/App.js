import React from 'react'
import Menu from './sections/Menu'
import Header from './sections/Header'
import Intro from './sections/Intro'
import Tabs from './sections/Tabs'
import Cards from './sections/Cards'
import ContentRight from './sections/ContentRight'
import Contact from './sections/Contact'
import Form from './sections/Form'
import FooterInfo from './sections/FooterInfo'
import Footer from './sections/Footer'

const App = () => {
    return(
        <React.Fragment>
            <Menu/>
            <div className="container-wrapper">
                <div className="container">
                    <Header/>
                    <Intro/>
                    <Tabs/>
                    <Cards/>
                    <ContentRight/>
                    <Contact/>
                    <Form/>
                    <FooterInfo/>
                    <Footer/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App
