import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from "next/head";

const Layout = ({children}) => {
  return ( 
    <div>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        </style>      
      </Head>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
      
    </div>

   );
}
 
export default Layout;