import { Routes , Route } from "react-router-dom";
import Home from './containers/Home'
import Entry from './containers/Entry'
import Curriculo from "./containers/Curriculo";

function App()
{
    return(

        <Routes>

            <Route path="/" element={<Entry />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/curriculo" element={<Curriculo/>} />
            <Route path="entry" element={<Entry/>} />

        </Routes>

    )
} 

export default App