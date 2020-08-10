import styled from 'styled-components'

export const Container = styled.div`
    
    height: 100vh;
    width: 300px;
    box-shadow: 2px 0px 10px 1px rgba(0, 0, 0, 0.1);
    z-index: 1;
    background-color: var(--primary);

    >button{
        padding: 20px;
        display: flex;
        align-items: center;
        width: 100%;
        background-color: var(--primary);

        &:hover{
            background-color: var(--secundary);
        }

        >i{
            font-size: 20px;
            color: var(--tertiary);
            margin-right: 10px;
        }

        >img{
            border-radius: 50%;
            margin-right: 5px;
            
        }
    }
`