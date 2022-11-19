//import '../styles/globals.css'
import Header from "../components/Common/Header"
import styled from "styled-components";

const Conatiner = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
`;

const Test = () => {
  return (
    <div>
      <Header />
      <Conatiner>
        test hoge
      </Conatiner>
    </div>
  )
};

export default Test;
