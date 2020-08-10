import React from 'react';
import SideBar from '../sidebar';
import Main from './main';


import {Container} from './style';

const Encomendas : React.FC = () =>{
    return (
        
        <Container>
            <SideBar></SideBar>
            <Main></Main>
        </Container>
        
    )
}

export default Encomendas;