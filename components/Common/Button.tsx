import styled from "styled-components";
import { Button as MUIButton } from '@mui/material';

const CommonButton = styled(MUIButton)`
  padding: 10px;
  font-size: 20px;
  background-color: #333px;
  border: initial;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = ({text, onClick, variant = "contained", style}) => {
  return (
    <CommonButton
      onClick={onClick}
      variant={variant}
      style={style}
    >
      {text}
    </CommonButton>
  );
};

export default Button;