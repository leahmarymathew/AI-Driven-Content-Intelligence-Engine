import { BrowserRouter, Routes, Route } from "react-router-dom"

import DashboardLayout from "./layout/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import ContentGenerator from "./pages/ContentGenerator"
import ContentLibrary from "./pages/ContentLibrary"
import Experiments from "./pages/Experiments"
import Analytics from "./pages/Analytics"
import Automation from "./pages/Automation"

function App(){

 return(

  <BrowserRouter>

   <DashboardLayout>

    <Routes>

     <Route path="/" element={<Dashboard/>}/>

     <Route path="/generator" element={<ContentGenerator/>}/>

     <Route path="/library" element={<ContentLibrary/>}/>

     <Route path="/experiments" element={<Experiments/>}/>

     <Route path="/analytics" element={<Analytics/>}/>

     <Route path="/automation" element={<Automation/>}/>

    </Routes>

   </DashboardLayout>

  </BrowserRouter>

 )

}

export default App