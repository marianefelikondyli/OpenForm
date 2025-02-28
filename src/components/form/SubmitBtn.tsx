import sc from 'styled-components';

const SubmitBtn = sc.button`
  background: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  &:active {
    background: #4d93d7;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export default SubmitBtn;
