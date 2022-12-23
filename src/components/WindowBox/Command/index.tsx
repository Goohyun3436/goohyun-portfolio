import styled from 'styled-components';

type CommandProps = {
  command: string;
  description: string;
};

const Command = ({ command, description }: CommandProps) => {
  return (
    <CommandBlock className="command-block">
      <span className="command">{command}</span>
      <span className="description">{description}</span>
    </CommandBlock>
  );
};

const CommandBlock = styled.p`
  position: relative;
  width: 100%;
  margin-left: 2rem;
  margin-bottom: 1rem;

  .command {
    color: rgb(145, 180, 245);
  }

  .description {
    position: absolute;
    left: 12%;
  }
`;

export default Command;
