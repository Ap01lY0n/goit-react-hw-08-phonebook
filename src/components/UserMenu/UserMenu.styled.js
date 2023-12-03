import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: cyan;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 4px 6px;
  font: inherit;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
  background-color: #744794;
  transition: background-color 0.4s ease, color 0.4s ease;
  &:hover {
    background-color: #b960eb;
  }
`;