import styled, { createGlobalStyle } from 'styled-components';
import ReactFlagsSelect from 'react-flags-select';

// Fonte global e ajustes gerais de estilo
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    
    body {
        font-family: 'Poppins', sans-serif;
        background-color: #f5f5f5;
        margin: 0;
        padding: 0;
    }
`;

// Título da página
export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    font-family: 'Poppins', sans-serif;
`;

// Tabela de medalhas
export const MedalTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
`;

// Linhas da tabela de medalhas
export const MedalRow = styled.tr`
    border-bottom: 1px solid #ddd;
`;

// Células da tabela de medalhas
export const MedalCell = styled.td`
    padding: 0.75rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
`;

// Célula do país
export const CountryCell = styled.td`
    padding: 0.75rem;
    text-align: left;
    font-family: 'Poppins', sans-serif;
`;

// Célula de rank
export const RankCell = styled.td`
    padding: 0.75rem;
    text-align: center;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
`;

// Célula do total
export const TotalCell = styled.td`
    padding: 0.75rem;
    text-align: center;
    font-weight: bold;
    background-color: #f4f4f4;
    font-family: 'Poppins', sans-serif;
`;

// Campos de entrada para slider
export const InputSlider = styled.input`
    -webkit-appearance: none;
    width: 300px;
    height: 8px;
    border-radius: 5px;
    background: #ddd;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #FE7656;
        cursor: pointer;
    }

    &:hover {
        opacity: 1;
    }
`;

// Botão
export const Button = styled.button`
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    background-color: #FE7656;
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;

    &:hover {
        background-color: #e65c4f;
    }
`;

// Contêiner da bandeira e nome do país
export const FlagContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

// Ícone da bandeira
export const FlagIcon = styled.div`
    width: 20px;
    height: 15px;
    background-image: url('https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/${props => props.code.toLowerCase()}.svg');
    background-size: cover;
    background-position: center;
`;

// Contêiner do formulário
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    gap: 1rem;
`;

// Popup
export const Popup = styled.div`
    position: fixed;
    width: 300px;
    height: 150px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
`;

// Botão de fechar o popup
export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    color: #ff0000;
    cursor: pointer;
    padding: 0;
    margin-left: 10px;
    line-height: 1;
    transition: color 0.3s;

    &:hover {
        color: #d40000;
    }
`;