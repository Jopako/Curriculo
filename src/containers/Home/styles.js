import styled from 'styled-components'


export const Terminal = styled.div`
    color: white;
    background-color: black;
    display:flex;
    flex-direction: column;
    width: 100%;
    font-size:20px;
    position: relative;
    padding-top: 0.9em;
    padding-left: 20px;
    box-sizing: border-box;
    line-height:2em;
 
    
    `

export const Historico = styled.div`
    background-color: black;
    height:600px;
    white-space: pre-line; 
    overflow-y: auto; 
    word-wrap: break-word;
    
    
    

    
`

export const Input = styled.div`
    background-color: black;
    flex: 1;
    


    input 
    {
    background-color: transparent;
    color: white;   
    border: none;
    outline:none;
    width:99.5%;
    font-size:20px;
    padding: 0;
        font-family: "Press Start 2P", system-ui;



    }

`
export const Cabecalho = styled.div`

position: absolute; 
    top: 0;             
    right: 0;           
    padding: 0.5em;
    z-index: 10;        
    background-color: transparent;
    
      
   
    i {

    padding: 6px;
    border-radius: 4px; 
    cursor: pointer;
    font-size:1.2em;


    }
`

    export const SectionTerminal = styled.div`
display:flex;
  align-items: center;
  gap: 6px;
  
 

    

    `
