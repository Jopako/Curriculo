import {
  Historico,
  Terminal,
  Input,
  Cabecalho,
  SectionTerminal,
  Prompt,
  Highlight,
  Ascii
} from "./homeStyles";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Terminal onClick={() => inputRef.current?.focus()}>

      <Cabecalho>
        <i onClick={()=> navigate("/entry")} className="fa-solid fa-minus" style={{ color: "yellow" }}></i>
        <i className="fa-solid fa-expand" style={{ color: "#084808" }}></i>
      </Cabecalho>

      <Historico>


  <Ascii>
{`                                                                                                                                                                                                                                                                                                                                  
               ██            ▄ ▄                                         
              ██  ▀▀        ▀ ▀              ▄▄                          
▄████▄  ▄▄   ██   ██ ▄███▄  ▀▀█▄ ▄███▄ ████▄ ██ ▄█▀    ▄█▀█▄ ██ ██ ▄█▀█▄ 
▀▀  ▀████▀  ██   ▀██ ██ ██ ▄█▀██ ██ ██ ██ ██ ████      ██▄█▀  ███  ██▄█▀ 
           ██     ██ ▀███▀ ▀█▄██ ▀███▀ ████▀ ██ ▀█▄ ██ ▀█▄▄▄ ██ ██ ▀█▄▄▄ 
                  ██                   ██                                
                ▀▀▀                    ▀▀                                                                                                                                                                                                                                                                                                            
`}
  </Ascii>

        <p style={{ margin: 0 }}>
          Bem-vindo(a) ao meu terminal web.
          <br />
          Para uma lista de comandos, digite{" "}
          <Highlight>'!comandos'</Highlight>.
        </p>

        {output}
      </Historico>

      <SectionTerminal>
        <Prompt>usuario@joao:~/Currículo$</Prompt>

        <Input>
          <input
            type="text"
            placeholder="!comandos"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
            let newOutput = output + `\n\n$ ${input}\n`;

                switch (input.toLowerCase()) {
                  case "!linkedin":
                    newOutput += "Aqui está meu LinkedIn:\nlink...";
                    break;

                  case "!comandos":
                    newOutput +=
                      "!github\n!linkedin\n!curriculo\n!clear / !c";
                    break;

                  case "!github":
                    newOutput +=
                      "Aqui está meu GitHub:\nhttps://github.com/Jopako";
                      
                    break;

                  case "!c":
                  case "!clear":
                    setOutput("");
                    setInput("");
                    return;

                  case "!curriculo":
                    navigate("/resume");
                    setInput("");
                    return;

                  default:
                    newOutput += "Comando desconhecido.";
                }

                setOutput(newOutput);
                setInput("");
              }
            }}
          />
        </Input>
      </SectionTerminal>

    </Terminal>
  );
}

export default Home;
