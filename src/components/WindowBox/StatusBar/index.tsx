import { useState } from 'react';
import { IoGitBranch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StatusBar = () => {
  const [commandValue, setCommandValue] = useState<string>('');
  const navigate = useNavigate();

  const changeCommandValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommandValue(e.target.value);
  };

  const commandHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (commandValue.split('cd ')[0] === '' && commandValue.split('cd ').length === 2) {
        const command = commandValue.split('cd ')[1];
        if (command === 'overview' || command === 'portfolio' || command === 'contect') {
          navigate(`/${command}`);
        } else {
          setCommandValue('');
        }
      } else {
        setCommandValue('');
      }
    }
  };

  return (
    <StatusBarBlock className="status-bar-block">
      <div className="first">hyungoo &nbsp;🐢</div>
      <div className="second">/Desktop/goohyun-portfolio</div>
      <div className="third">
        <IoGitBranch />
        &nbsp;feature/main
      </div>
      <div className="triangle" />
      <input className="command-input" placeholder="' cd [명령어] ' 를 입력하세요." value={commandValue} onChange={changeCommandValue} onKeyUp={commandHandler} />
    </StatusBarBlock>
  );
};

const StatusBarBlock = styled.div`
  display: flex;
  align-items: center;

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

  input {
    display: flex;
    width: 30%;
    height: fit-content;
    padding: 0;
    outline: none;
    border: none;
    background: transparent;
    font-size: 1.2rem;
    color: rgb(183, 188, 198);
    caret-color: rgb(183, 188, 198);
  }
`;

export default StatusBar;
