import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: #b960eb;
  border: 1px solid purple;
  border-radius: 10px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: #11f7a7;
  font-size: 20px;
`;

export const Input = styled.input`
  color: rgb(104, 11, 109);
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  background-color: #11f7a7;
  border: none;
  border-radius: 10px;
  transition: background-color 0.6s ease, color 0.6s ease;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #078a5c;
  }
`;