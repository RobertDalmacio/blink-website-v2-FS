import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import FooterComp from '../components/FooterComp';
import NavbarComp from '../components/NavbarComp';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div >
        <NavbarComp />
          <Component {...pageProps} />
        <FooterComp />
      </div>
    </RecoilRoot>
  )
}

export default MyApp
