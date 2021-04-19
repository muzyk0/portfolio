import React from 'react';
import {Main} from './Main/Main';
import { Portfolio } from './Portfolio/Portfolio';
import {Skills} from './Skills/Skills';
import {Contacts} from './Contacts/Contacts';
import {Footer} from './Footer/Footer';
import { Header } from './Header/Header';



export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Portfolio/>
            <Contacts />
            <Footer />
        </div>
    );
}
