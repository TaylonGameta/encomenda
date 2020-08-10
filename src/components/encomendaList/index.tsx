import React from 'react';

import Sidebar from '../sidebar';
import Main from './main';
import {Container} from './style';



const EncomendaList : React.FC = () =>{
    return (

        <Container>
            <Sidebar></Sidebar>
            <Main isAdmin></Main>
        </Container>
        
    )
}

export default EncomendaList;