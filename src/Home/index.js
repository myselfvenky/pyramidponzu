import { flexbox, styled } from "@mui/system";

import Header from "./components/Header";
import BakeCard from "./components/BakeCard";
import NutritionFacts from "./components/NutritionFacts";
import ReferralLink from "./components/ReferralLink";
import { useWallet } from "@solana/wallet-adapter-react";
// import Footer from "./components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import {
  WalletDialogProvider as MaterialUIWalletDialogProvider,
  WalletMultiButton as MaterialUIWalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-material-ui';
// import { useContractContext } from "../../providers/ContractProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import backgroundImg from '../assets/background.webp';
import SideNav from "./components/SideNav";
import NewHome from "./components/NewHome";

const Wrapper = styled("div")(({ theme }) => ({
  position: 'relative',
  margin: "0 auto",
  backgroundImage: `url(${backgroundImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const WalletButton = styled("div")(() => ({
  display: 'flex',
  flexDirection: 'row-reverse'
}))

export default function Home() {
  //const { address } = useAuthContext();
  const wallet = useWallet();

  return (

    <Wrapper>

      <WalletButton>
        <MaterialUIWalletMultiButton variant="text" style={{
          border: "2px solid black",
          fontWeight: 900,
          background: "transparent",
          borderRadius: '10px',
          color: 'black'
        }} />
      </WalletButton>

      {/* <BakeCard />
      <NutritionFacts />
      <ReferralLink address={wallet.publicKey && wallet.publicKey.toBase58()} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </Wrapper>
  );
}
