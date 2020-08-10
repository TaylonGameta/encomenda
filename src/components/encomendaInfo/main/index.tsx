import React from 'react';
import {Container} from './styles';
import Pad from '../pad'

const Main: React.FC = () => {
    return(
        <Container>
            <Pad title="Localização" loc></Pad>
            <Pad title= "Encomenda" enc></Pad>
            <Pad title="Mais Informações" pay isClient></Pad>
            
        </Container>
    )
}

export default Main;