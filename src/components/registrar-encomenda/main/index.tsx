import React from 'react';

import {Container} from './style';

const Main: React.FC = () =>{
    return(
        <Container>
            <h1>Registrar Encomenda</h1>
            <input value={`Cod cliente`}></input>
            <input value={`Nome da mercadoria`}></input>
            <input value={`Total a pagar`}></input>
            <br></br>
            <input value={`CEP`}></input>
            <input value={`UF`}></input>
            <input value={`Rua`}></input>
            <input value={`Número`}></input>
        </Container>
    )
}

export default Main;