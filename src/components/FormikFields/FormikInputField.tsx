import React from 'react';
import { ErrorMessage, Field, FieldProps, FormikProps } from 'formik';
import styled from 'styled-components';
import formErrorMessage from '../FormErrorMessage';


interface FormikInputFieldProps {
  name: string;
  maxChar?: number;
  index?: number;
  isReadOnly?: boolean;
  isShowError?: boolean;
  id?: string;
  type?: string;
  as?: string | React.ComponentType<any>;
  rows?: string;
  placeholder?: string;
  isInvalid?:any;
  bgcolor?: string;
  disabled?: boolean;
  field?: FieldProps<any>;
  rounded?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const FormikInputField: React.FC<FormikInputFieldProps> = ({
  name,
  maxChar,
  isReadOnly,
  isShowError,
  as,
  bgcolor,
  rounded,
  onChange,
  ...props
}) => (
  <Field name={name}>
    {({
      field,
      form: { touched, errors, submitCount },
    }: FieldProps & { form: FormikProps<any>; meta: any }) => (
      <>
        <StyledInput
          {...field}
          rounded={rounded}
          bgcolor={bgcolor}
          as={as}
          value={isReadOnly ? '' : field.value}
          isInvalid={submitCount && touched[field.name] && errors[field.name]}
          id={props.id}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(e);
            onChange && onChange(e);
          }}
          {...props}
        />
        {props.type !== 'number' && maxChar && field && field.value && (
          <code className="text-muted float-right">
            {field.value.length}/{maxChar}
          </code>
        )}
        {submitCount > 0 && !isShowError && (
          <ErrorMessage name={field.name} render={formErrorMessage} />
        )}
      </>
    )}
  </Field>
);
const StyledInput = styled.input<FormikInputFieldProps>`
  padding: 0 4px;
  margin: 20px 0;
  font-size: 14px;
  min-height: 42px;
  width: 100%;
  border-radius: ${'3px'};
  border: 1.5px solid ${({ isInvalid, theme }) => (isInvalid ? theme.dangerRed : theme.inputBorderColor)};
  outline: none !important;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.headingColor} !important;
  font-size: 14px;
  font-weight: 400;
  background-color: ${({ bgcolor, theme }) => (bgcolor ? bgcolor : 'transparent')};

  &:focus {
    box-shadow: none;
    color: ${({ theme }) => theme.inputColor};
    border-color: ${({ theme }) => theme.inputBorderColor};
    background-color: ${({ bgcolor, theme }) => (bgcolor ? bgcolor : 'transparent')};
    border: 1.5px solid ${({ isInvalid, theme }) => (isInvalid ? theme.dangerRed : theme.inputBorderColor)};
  }

  &:valid {
    background-image: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceHolder};
    font-size: 14px;
    font-weight: 14px;
    opacity: 1;
  }
`;

export default React.memo(FormikInputField);