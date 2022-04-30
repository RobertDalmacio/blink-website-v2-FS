import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
// import '../styles/_custom.scss'
// import '../styles/style.scss'
import NavbarComp from '../components/NavbarComp'
import FooterComp from '../components/FooterComp'
import '../styles/style.css'



function MyApp({ Component, pageProps }) {
  return (
    <div >
      <NavbarComp />
        <Component {...pageProps} />
      <FooterComp />
    </div>
  )
}

export default MyApp
