import sc from 'styled-components';

const TooltipContainer = sc.div`
  background-color: ${(props) => props.theme.colors.secondaryMain};
  padding: 10px;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 15px
`;

const TooltipLabel = sc.div`
  font-weight: bold;
  margin-bottom: 5px;
  display: inline-block;
  color: ${(props) => props.theme.text.primary};
`;

const TooltipValue = sc.div`
  color: ${(props) => props.theme.text.secondary};
  display: inline-block;
`;

interface TooltipProps {
  label: string;
  value: string;
}
const Tooltip = ({ label, value }: TooltipProps) => (
  <TooltipContainer>
    <TooltipLabel>{label}:</TooltipLabel>
    <TooltipValue>{value}</TooltipValue>
  </TooltipContainer>
);

export default Tooltip;
