import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}



const StyledButton: React.FC<Props> = ({ text, icon, onClick }) => {
  return (
    <StyledButtons onClick={onClick}>
      <StyledIcon>{icon}</StyledIcon>
      <StyledText>{text}</StyledText>
    </StyledButtons>
  );
};

const StyledButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 1px solid #d0d0d0;
  border-radius: 0.25rem;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const StyledIcon = styled.span`
  margin-right: 0.5rem;
`;

const StyledText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #666;
`;
export default StyledButton;