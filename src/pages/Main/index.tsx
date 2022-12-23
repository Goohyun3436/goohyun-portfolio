import styled from 'styled-components';
import WindowBox from '../../components/WindowBox';

const Main = () => {
  return (
    <MainBlock>
      <WindowBox />
    </MainBlock>
  );
};

const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default Main;
