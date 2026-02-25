import { Routes , Route } from "react-router-dom";
import Home from './containers/Home'
import Entry from './containers/Entry'
import Resume from "./containers/Resume";

function App()
{
    return(

        <Routes>

            <Route path="/" element={<Entry />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="entry" element={<Entry/>} />

        </Routes>

    )
} 

export default App