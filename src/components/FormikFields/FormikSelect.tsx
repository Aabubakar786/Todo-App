import { ErrorMessage, FieldProps } from 'formik';
import styled from 'styled-components';
import formErrorMessage from '../FormErrorMessage';

interface FormikSelectFieldProps extends FieldProps {
  label?: string;
  name?: string;
  id?: string;
}


const FormikSelectField: React.FC<FormikSelectFieldProps> = ({
  label,
  field,
  form,
  ...props
}) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  return (
    <SelectWrapper>
      <label htmlFor={name}>{label}</label>
      <select id={name} value={value} onChange={handleChange} {...props}>
        <option value="">Select status</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>
      {form.touched[name] && form.errors[name] ? (
        <ErrorMessage name={field.name} render={formErrorMessage} />
      ) : null}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #4a5568;
    margin-bottom: 0.5rem;
  }

  select {
    appearance: none;
    background-color: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    color: #4a5568;
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      border-color: #4299e1;
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }

    &:hover {
      border-color: #a0aec0;
    }
  }

  .error {
    color: #e53e3e;
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
`;

export default FormikSelectField;