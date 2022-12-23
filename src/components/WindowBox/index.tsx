import TopBar from './TopBar';
import styled from 'styled-components';
import Command from './Command';
import StatusBar from './StatusBar';

const WindowBox = () => {
  return (
    <WindowBoxBlock className="window-box-block">
      <TopBar />
      <div className="content">
        <p>작업 공간 시작 명령어 (참고: git help history)</p>
        <br />
        <Command command="overview" description="해당 프로젝트의 컨셉을 설명합니다." />
        <Command command="portfolio" description="프로젝트 작업물을 소개합니다." />
        <Command command="contect" description="email, github 등 개인정보를 가져옵니다." />
        <br />
        <StatusBar />
      </div>
    </WindowBoxBlock>
  );
};

const WindowBoxBlock = styled.div`
  width: 70%;
  height: 25rem;
  border: 1px solid rgb(130, 130, 130);
  border-radius: 0.8rem;
  background: rgb(40, 50, 56);

  .content {
    padding: 1rem;
    color: rgb(183, 188, 198);
    font-size: 1.2rem;
  }
`;

export default WindowBox;
