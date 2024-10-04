import "@/styles/globals.css";
import Navbar from "./Components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
