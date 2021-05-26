import React from 'react';
import {Main} from './Main/Main';
import {Portfolio} from './Portfolio/Portfolio';
import {Skills} from './Skills/Skills';
import {Footer} from './Footer/Footer';
import {Header} from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';


const App = () => {
    return (
            <div>
                <Header/>
                <Main/>
                <AboutMe/>
                <Skills/>
                <Portfolio/>
                <Contacts/>
                <Footer/>
            </div>
    );
}
export default App