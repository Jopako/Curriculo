import styled from 'styled-components'


export const Terminal = styled.div`
    color: white;
    background-color: black;
    display:flex;
    flex-direction: column;
    width: 800px;
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


    }

`
export const Cabecalho = styled.div`
    background-color:gray;
    color: black;
    padding:0.2em;
    text-align:right;     
    justify-content:space-between;
    
    i {

    padding: 6px;
    border-radius: 4px; 
    cursor: pointer;

    }
`

    export const SectionTerminal = styled.div`
display:flex;
  align-items: center;
  gap: 6px;
  
 

    

    `
