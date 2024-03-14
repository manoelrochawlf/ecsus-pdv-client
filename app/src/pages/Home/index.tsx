import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe withRouter
import { Container, LeadImage } from "./styles";
import { GlobalStyles } from "../../assets/styles/global";
import EcsusLogo from "../../assets/images/ecsus-pdv-high-resolution-logo-transparent";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Redirecionar para a página de login após 2 segundos
    }, 3000); // 2000 milissegundos = 2 segundos
    // Limpa o temporizador ao desmontar o componente
    return () => clearTimeout(timer);
  }, [navigate]);
    return (
        <Container>
          <LeadImage>
            <EcsusLogo />
            <h1>dsfvsdfsdcvsd</h1>
          </LeadImage>
        </Container>
     );
}

export default Home ;
