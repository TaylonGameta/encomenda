import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 100%;
    background-color: var(--secundary);
    >h1{
        font-size: 20px;
        color: var(--tertiary);
    }

    >input{
        margin-top: 40px;
        border: 1px solid #999;
        background-color: #fff;
        border-radius: 5px;
        font-size: 14px;
        padding: 20px;
        height: 60px;
        width: 100%;
        color: var(--tertiary);
    }

    

    
`