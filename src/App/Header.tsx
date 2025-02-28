import sc from 'styled-components';
import { CancelBtn } from '@/components/ui/CancelBtn';
import { FC } from 'react';

const HeaderContainer = sc.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = sc.h1`
  margin: 0;
`;

interface HeaderProps {
  title: string;
  showCancelButton: boolean;
  handleCancel: () => void;
}

const Header: FC<HeaderProps> = ({ title, showCancelButton, handleCancel }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      {showCancelButton && <CancelBtn onClick={handleCancel} />}
    </HeaderContainer>
  );
};

export default Header;
