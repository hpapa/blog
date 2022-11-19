import styled from "styled-components";

const CommonTitle = styled.div`
  font-weight: bolder;
  margin: 10px 0; 
`;

const Title = ({text = ""}) => (
  <CommonTitle>{text}</CommonTitle>
);

export default Title;