import React from 'react';
import styled from 'styled-components';


const formErrorMessage = (msg = "Warning") => (
  <FormErrorMessage>
    <WarningIcon />
    {msg}
  </FormErrorMessage>
);
const FormErrorMessage = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #dc3545;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const WarningIcon = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #dc3545;
  margin-right: 5px;
`;
export default formErrorMessage;