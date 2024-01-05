import Box from "@mui/material/Box";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

import { Wallets } from './components/wallet'

import { SnackbarProvider } from 'notistack';
import SideNav from "./Home/components/SideNav";
import NewHome from "./Home/components/NewHome";

function App() {

  // I will try to start with new project
  // this project is so stressful
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <Wallets>
          <SideNav />
          <NewHome />
          {/* <Home /> */}
        </Wallets>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
