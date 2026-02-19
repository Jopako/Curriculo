import styled from 'styled-components'



export const Container = styled.div`


-webkit-text-stroke: 0.1px black;
    display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  color:green;

  background: linear-gradient(
    270deg,
    #000000,
    #003500,
    #00311a,
    #003b00,
    #000000
  );

  background-size: 400% 400%;
  animation: gradientMove 12s ease infinite;

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }


p
{
  -webkit-text-stroke: 1.2px black;

}


`

export const Texto = styled.h1`

font-size:60px;



`

export const Botoes = styled.div`

background-color:transparent;
padding: 0;
margin:0;
display:flex;
  gap:3em;
margin: 30px 0px 30px 0px;


button
{

  font-size: 1.3em;
  border-radius: 60px;
  background-color: white;
  cursor: pointer;
  font-family: "Press Start 2P", system-ui;
  padding: 12px 24px;
  border: none;

  transition: all 0.2s ease;

  &:hover {
    background-color: #00ff88;
    color: black;
    transform: scale(1.05);
    box-shadow: 0 0 15px #00ff88;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px #00ff88;
  }

}



` 