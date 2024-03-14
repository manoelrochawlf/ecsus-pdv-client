import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
  }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 8rem;
    height: 100vh;
`
export const LeadImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30rem;
    animation: ${fadeIn} 2.0s ease-in;
`
