import React from 'react';
import {Main} from './Main/Main';
import {Portfolio} from './Portfolio/Portfolio';
import {Skills} from './Skills/Skills';
import {Contacts} from './Contacts/Contacts';
import {Footer} from './Footer/Footer';
import {Header} from './Header/Header';
import AboutMe from './AboutMe/AboutMe';


const App = () => {
    return (
            <div>
                <Header/>
                <Main/>
                <AboutMe/>
                {/*<Skills/>*/}
                {/*<Portfolio/>*/}
                {/*<Contacts/>*/}
                {/*<Footer/>*/}
            </div>
    );
}
export default App