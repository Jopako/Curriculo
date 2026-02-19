import styled from "styled-components";

export const Terminal = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-size: 18px;
  position: relative;
  padding: 1em 20px;
  box-sizing: border-box;
  font-family: monospace;
  overflow: hidden;
`;

export const Historico = styled.div`
  flex: 1; 
  overflow-y: auto;
  overflow-x: hidden; 
  white-space: pre-wrap;
  font-size: 23px;
  font-family: "Press Start 2P", system-ui;
  line-height:30px;
`;


export const SectionTerminal = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-top: 10px;
`;


export const Prompt = styled.span`
  color: #00ff00;
  white-space: nowrap;
  font-size:20px;
  font-family: "Press Start 2P", system-ui;
`;

export const Input = styled.div`
  flex: 1;

  input {
    background-color: transparent;
    color: white;
    border: none;
    outline: none;
    width: 100%;
    font-size: 19px;
    font-family: "Press Start 2P", system-ui;
    caret-color: #00ff00;
  }
`;

export const Cabecalho = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
  z-index: 10;

  i {
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2em;
  }
`;

export const Highlight = styled.span`
  color: #00ff00;
  text-shadow:
    0 0 3px rgba(0, 255, 0, 0.6),
    0 0 6px rgba(0, 255, 0, 0.4);
`;

export const Ascii = styled.pre`
  font-family: monospace;
  white-space: pre;
  color: #00ff00;
  margin: 10px 0;
  line-height: 0.8;
  text-shadow: 0 0 5px rgba(0,255,0,0.4);
  font-size:14px;

`;
