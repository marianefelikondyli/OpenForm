import sc from 'styled-components';
import { FC } from 'react';

const CancelButton = sc.button`
  background-color: ${(props) => props.theme.colors.secondaryMain};
  color: ${(props) => props.theme.text.main};;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  type: button;
  fontWeight: bold;
  font-size: 16px;
  margin-right: 12px;
  &:active {
      background-color: ${(props) => props.theme.colors.secondaryDark};
  }
`;
interface CancelBtnProps {
  onClick: () => void;
}
export const CancelBtn: FC<CancelBtnProps> = ({ onClick }) => (
  <CancelButton onClick={onClick} id="cancel-btn" data-testid={'cancel-btn'}>
    Cancel
  </CancelButton>
);
