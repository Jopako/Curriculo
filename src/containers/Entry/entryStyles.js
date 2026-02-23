import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  color: #00ff88; 
  font-family: "Press Start 2P", system-ui;
  text-align: center;

  background: linear-gradient(
    270deg,
    #000000,
    #001a0a,
    #000000
  );
  background-size: 400% 400%;
  animation: gradientMove 12s ease infinite;

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  p {
    font-size: 18px;
    letter-spacing: 2px;
    margin-bottom: 10px;
    color: #a0ffcc; 
    text-shadow: 0 0 8px rgba(0, 255, 136, 0.5);
  }
`;

export const Texto = styled.h1`
  font-size: 50px;
  margin: 0;
  text-transform: uppercase;
  text-shadow: 
    3px 3px 0px #000, 
    0 0 20px rgba(0, 255, 136, 0.6);
   line-height:1.5em;
  
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Botoes = styled.div`
  display: flex;
  gap: 2em;
  margin-top: 50px;

  button {
    font-size: 0.9em;
    border-radius: 8px; 
    background-color: transparent;
    color: #00ff88;
    cursor: pointer;
    font-family: "Press Start 2P", system-ui;
    padding: 15px 30px;
    border: 2px solid #00ff88;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      background-color: #00ff88;
      color: #000;
      box-shadow: 0 0 25px #00ff88;
      transform: translateY(-5px);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1em;
  }
`;