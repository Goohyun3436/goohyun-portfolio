import { IoGitBranch } from 'react-icons/io5';
import styled from 'styled-components';

const StatusBar = () => {
  return (
    <StatusBarBlock className="status-bar-block">
      <div className="first">hyungoo &nbsp;🐢</div>
      <div className="second">/Desktop/goohyun-portfolio</div>
      <div className="third">
        <IoGitBranch />
        &nbsp;feature/main
      </div>
      <div className="triangle" />
    </StatusBarBlock>
  );
};

const StatusBarBlock = styled.div`
  display: flex;
  .first,
  .second,
  .third {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    padding: 0rem 0.5rem;
  }

  .first {
    background: rgb(26, 23, 23);
  }
  .second {
    color: rgb(26, 23, 23);
    background: rgb(65, 79, 51);
  }
  .third {
    position: relative;
    color: rgb(26, 23, 23);
    background: rgb(103, 173, 90);
  }
  .triangle {
    width: 0;
    height: 0;
    border-bottom: 0.9rem solid transparent;
    border-top: 0.9rem solid transparent;
    border-left: 0.9rem solid rgb(103, 173, 90);
    border-right: 0.9rem solid transparent;
  }
`;

export default StatusBar;
