import Contact from "../components/shared/Contact/Contact"
import Header from "../components/shared/Header/Header"
import Hero from "../components/shared/Hero/Hero"
import ProductList from "../components/shared/ProductList/ProductList"
import Team from "../components/shared/Team/Team"
import Footer from "../components/shared/Footer/Footer"
export default function Home(){
    return(
        <>
            <Header/>
            <Hero/>
            <ProductList/>
            <Team/>
            <Contact/>
            <Footer/>
        </>
    )
}