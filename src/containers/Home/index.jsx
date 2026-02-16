import { Historico, Terminal , Input, Cabecalho, SectionTerminal} from "./styles"
import { useEffect, useRef, useState } from "react";

function Home()
{

    const [input,setInput] = useState("");
    const [output,setOutput] = useState("");
    const inputRef = useRef();
    

    useEffect(()=>
        {

        inputRef.current.focus()

    },[])


    return(

      

        <Terminal onClick={() => inputRef.current && inputRef.current.focus()}>

            

        <Cabecalho>   

            <i className="fa-solid fa-minus" style={{color:"yellow"}}></i>  
            <i class="fa-solid fa-expand" style={{color:"#084808 "}}></i> 
            <i class="fa-solid fa-x" style={{color:"red"}}></i>

        </Cabecalho>

            <SectionTerminal>

                  <p style={{margin: 0, color: "green"}}>
                    
                                        
                    usuario@joao:~/Curriculo$

                 </p>


            <Input>

                <input 

                

                type="text"   
                ref={inputRef}
                value= {input}
                onChange={e => setInput(e.target.value)}
                
                onKeyDown={e=>
                    {

                        
                    if (e.key === "Enter")
                    {
                        let newOutput = "";
                        newOutput = output + "\n "+ "$ " + input + "\n";

                        switch(input){

                        case "!github":
                            newOutput =   "Aqui está meu gitHub: \n https://github.com/Jopako"
                            break;
                            
                        case "c":
                        case "clear":
                            setOutput("");
                            setInput("");
                            return;


                        default:
                            newOutput += "Comando desconhecido."
                        }
                        setOutput(newOutput)
                        setInput("")
                    }
                       
                }}

                />
                
            </Input>

            </SectionTerminal>

            <Historico>
                
            {output}
            </Historico>

        

        </Terminal>
    )
}

export default Home