
import styled from "styled-components";
import { useRouter } from 'next/router';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.div`
  font-weight: 600;
  cursor: pointer;
`;


const Header = () => {
  const router = useRouter();

  const handleRoutePush = (url = "") => {
    router.push(url);
  };

  return (
    <Container>
      <Title onClick={() => handleRoutePush("/")}>
        Hpapa Blog
      </Title>
    </Container>
  );
};

export default Header;