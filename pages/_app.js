import '../styles/globals.css';
import Navbar from '../components/Navbar'
// import { Inter } from 'next/font/google'
import {SessionProvider} from "next-auth/react";

function MyApp({ session, Component, pageProps }) {
    return(
        <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        </SessionProvider>
    )
}

export default MyApp
