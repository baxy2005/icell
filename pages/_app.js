import Layout from '../components/layout';
import Navbar from '../components/navbar';
import '../styles/globals.css';

function App({ Component, pageProps }) {
    return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
  }

  export default App