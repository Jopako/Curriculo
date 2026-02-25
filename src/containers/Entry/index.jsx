import { Container , Botoes , Texto} from "./entryStyles"
import { useNavigate } from "react-router-dom"

function Entry ()
{

    const navigate = useNavigate();

return(


    
    <Container>

        <p style={{fontSize:"30px"}}>Bem-vindo(a) ao currículo de</p>
        <Texto>João Paulo Kowalski</Texto>

        <Botoes>    

            <button onClick={()=> navigate("/home")}>

                Minhas redes

            </button>

            <button onClick={() => navigate("/resume")}>

                Currículo

            </button>


        </Botoes>



      </Container>

)

}

export default Entry