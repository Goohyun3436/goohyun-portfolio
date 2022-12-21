import { IoGitBranch } from 'react-icons/io5';
import styled from 'styled-components';

const WindowBox = () => {
  return (
    <WindowBoxBlock>
      <div className="window-box-background">
        <div className="window-box-content">
          <div className="top-bar">
            <div className="btn" style={{ background: 'rgb(237, 106, 94)' }} />
            <div className="btn" style={{ background: 'rgb(245, 190, 80)' }} />
            <div className="btn" style={{ background: 'rgb(95, 195, 80)' }} />
          </div>
          <div className="content">
            <div className="line">
              <p>다음은 여러가지 상황에서 자주 사용하는 git 명령입니다.</p>
              <br />
              <br />
              <p>작업 공간 시작 (참고: git help history)</p>
              <br />
              <p className="command">
                <span className="word">overview</span>
                <span className="info">해당 프로젝트의 컨셉을 설명합니다.</span>
              </p>
              <p className="command">
                <span className="word">portfolio</span>
                <span className="info">프로젝트 작업물을 소개합니다.</span>
              </p>
              <p className="command">
                <span className="word">contect</span>
                <span className="info">email, github 등 개인정보를 가져옵니다.</span>
              </p>
              <br />
            </div>

            <div className="line">
              <p style={{ color: 'rgb(145, 180, 245)' }}>' cd [명령어] ' 를 입력하세요.</p>
            </div>
            <div className="line">
              <div className="current-bar">
                <div className="first">hyungoo &nbsp;🐢</div>
                <div className="second">/Desktop/goohyun-portfolio</div>
                <div className="third">
                  <IoGitBranch />
                  &nbsp;feature/main
                </div>
                <div className="triangle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowBoxBlock>
  );
};

const WindowBoxBlock = styled.div`
  .window-box-background {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: black;

    .window-box-content {
      width: 70%;
      height: 25rem;
      border: 1px solid rgb(130, 130, 130);
      border-radius: 0.8rem;
      background: rgb(40, 50, 56);

      .top-bar {
        display: flex;
        height: 8%;
        padding: 0.4rem;
        outline: none;
        border-bottom: 1.5px solid rgb(13, 13, 13);
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
        background: rgb(43, 44, 41);

        .btn {
          width: 1.1rem;
          height: 100%;
          border-radius: 1.1rem;
        }
        .btn + .btn {
          margin-left: 0.9rem;
        }
      }

      .content {
        padding: 1rem 0.5rem;
        color: rgb(183, 188, 198);
        font-size: 1.2rem;

        .line + .line {
          margin-top: 0.5rem;
        }

        .command {
          position: relative;
          width: 100%;
          margin-left: 2rem;
          margin-bottom: 1rem;

          .word {
            color: rgb(145, 180, 245);
          }

          .info {
            position: absolute;
            left: 12%;
          }
        }

        .current-bar {
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
        }
      }
    }
  }
`;

export default WindowBox;
