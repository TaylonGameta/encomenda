import React from 'react';

import SideBar from '../sidebar';
import Main from './main';

import {Container} from './styleda';
import Sidebar from '../sidebar';

const Registrar: React.FC = () =>{
    return(
        <Container>
            <Sidebar></Sidebar>
            <Main></Main>
        </Container>
    )
}

export default Registrar;