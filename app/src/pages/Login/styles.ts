import styled from 'styled-components';
import { fadeIn } from '../Home/styles';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    h2{
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin-bottom: 1.5rem;
      color: #6B7280;
    }
`;

export const LoginForm = styled.form`
    animation: ${fadeIn} 2.0s ease-in;
    background-color: #e1e1e1;
    width: 18rem;
    height: 20rem;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
    }
`;

export const InputGroup = styled.div`
    margin-bottom: 15px;
`;

export const Label = styled.label`
    display: block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #6B7280;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #6B7280;
    color: #e1e1e1;
    margin-top: 0.5rem;
    padding: 0.7rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
`;
