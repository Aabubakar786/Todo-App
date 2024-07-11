import styled from 'styled-components';

interface StyledInputProps {
  $borderWidth?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $phFontSize?: string;
  $phFontWeight?: string;
  isInvalid?: boolean;
  bgcolor?: string;
  rounded?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  padding: 18px 14px;
  font-size: 14px;
  min-height: 42px;
  width: 100%;
  border-radius: ${'3px'};
  border: ${({ $borderWidth }) => $borderWidth ?? '1.5px '} solid
    ${({ isInvalid, theme }) => (isInvalid ? theme.dangerRed : theme.inputBorderColor)};
  outline: none !important;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.headingColor} !important;
  font-size: ${({ $fontSize }) => $fontSize ?? '14px'};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? '400'};
  background-color: ${({ bgcolor, theme }) => (bgcolor ? bgcolor : 'transparent')};

  &:focus {
    box-shadow: none;
    color: ${({ theme }) => theme.inputColor};
    border-color: ${({ theme }) => theme.inputBorderColor};
    background-color: ${({ bgcolor, theme }) => (bgcolor ? bgcolor : 'transparent')};
    border: ${({ $borderWidth }) => $borderWidth ?? '1.5px '} solid
      ${({ isInvalid, theme }) => (isInvalid ? theme.dangerRed : theme.inputBorderColor)};
  }

  &:valid {
    background-image: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceHolder};
    font-size: ${({ $phFontSize }) => $phFontSize ?? '14px'};
    font-weight: ${({ $phFontWeight }) => $phFontWeight ?? '14px'};
    opacity: 1;
  }

  &.publicForms {
    color: ${({ theme }) => theme.primary} !important;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0;
    &:focus {
      outline: none;
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
  }

  &[type='range'] {
    height: 2px;
    border: none;
    outline: none;
    padding: 15px 0;

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 3px;
      cursor: pointer;
      animate: 0.2s;
      background: ${({ theme }) => theme.primary};
      border-radius: 3px;
    }

    &::-webkit-slider-thumb {
      border: 1px solid ${({ theme }) => theme.inputBorder};
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: ${({ theme }) => theme.white};
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -9px;
    }
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

export default StyledInput;