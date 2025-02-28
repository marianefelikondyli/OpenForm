import type { InputHTMLAttributes } from 'react';
import sc from 'styled-components';
import { memo } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label: string;
  placeholder?: string;
  error_message?: string;
  has_error?: boolean;
}

const Container = sc.div`
  text-align: left;
  margin-bottom: 30px;
  width: 100%;
  position: relative
`;

const Input = sc.input<{ has_error: 'yes' | 'no' }>`
  width: 100%;
  border: ${(props) => (props.has_error === 'yes' ? `1px solid red` : `1px solid #ececec`)};
  height: 40px;
  box-sizing: border-box;
  font-size: 1.1rem;
  padding-left: 8px;
  padding-right: 8px;
  color:   ${(props) => `${props.theme.text.main}`};
  &::placeholder {
    color: grey;
  }
  &:focus-within {
     outline-color:  ${(props) =>
       props.has_error === 'yes' ? `` : `0px 0px 2px 3px ${props.theme.colors.secondaryDark}`};
     box-shadow: ${(props) =>
       props.has_error === 'yes'
         ? `0px 0px 2px 1px ${props.theme.colors.secondaryLight}`
         : `0px 0px 2px 3px #4d93d7`};
  }
`;

const Label = sc.label`
  color: grey;
  font-size: 0.95rem;
`;
const ErrorMessage = sc.small`
  color: red;
  font-size: 0.88rem;
  margin-bottom: 0;
  position: absolute;
  bottom: -22px;
  left: 0;
`;

const TextField = memo(function FormInput({
  id,
  label,
  placeholder,
  error_message,
  has_error = false,
  ...rest
}: FormInputProps) {
  return (
    <Container>
      <Label htmlFor={id}>{label}:</Label>
      <Input
        aria-describedby={label}
        id={id}
        type="text"
        placeholder={placeholder}
        {...rest}
        has_error={has_error ? 'yes' : 'no'}
      />
      <ErrorMessage
        aria-live="polite"
        role="alert"
        aria-hidden="true"
        style={{ visibility: has_error ? 'visible' : 'hidden' }}
        id={`error${id}`}
      >
        {error_message ?? ''}
      </ErrorMessage>
    </Container>
  );
});

export default TextField;
