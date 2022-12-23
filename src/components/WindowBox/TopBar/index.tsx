import styled from 'styled-components';

const TopBar = () => {
  return (
    <TopBarBlock className="top-bar-block">
      <div className="btn" style={{ background: 'rgb(237, 106, 94)' }} />
      <div className="btn" style={{ background: 'rgb(245, 190, 80)' }} />
      <div className="btn" style={{ background: 'rgb(95, 195, 80)' }} />
    </TopBarBlock>
  );
};

const TopBarBlock = styled.div`
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
`;

export default TopBar;
