import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.primary};
  height: ${(props) => props.style.height};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;

  img {
    width: 65px;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 14px;
  }

  .divLinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .divLinks > button {
    margin: 0 20px;

    cursor: pointer;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.text};
  }

  .themeMode {
    margin: 0 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 600px) {
    width: 100%;
    button {
      width: 60px;
    }

    .dadosFunc {
      display: none;
    }
  }
`;
