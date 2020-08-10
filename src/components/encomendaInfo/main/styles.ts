import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: calc(50% - 20px) calc(50% - 20px);
    grid-template-rows: calc(50% - 20px) calc(50% - 20px);
    width: 100%;
    background-color: var(--secundary);
    gap: 40px;
    padding: 40px;
`