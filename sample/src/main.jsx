import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/style.css';
import Pages from './Pages';
// import About from "./pages/About.jsx";
// import Name from './topics/Name.jsx';

const Main=()=>{
  return(
    <>
  {/* <Name /> */}
  <Pages/>
  </>
  );
};

createRoot(document.getElementById('root')).render(
   <StrictMode>
   <Main/>
   </StrictMode>
)
