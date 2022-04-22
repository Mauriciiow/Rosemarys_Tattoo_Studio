import styled from "styled-components";
import FHeader from "../../components/Funcionario/FHeader/FHeader.jsx";
import funcionarioBackground from "../../assets/images/funcionarioBackground.png";
import FHomeMain from "../../components/Funcionario/FHomeMain/FHomeMain.jsx";

function FHome() {
  const FHome = styled.body`
    height: 100vh;
    width: 100%;
    background-image: url(${funcionarioBackground});
    background-size: cover;
    background-position: center;
  `;
  return (
    <FHome>
      <FHeader />
      <FHomeMain />
    </FHome>
  );
}

export default FHome;
