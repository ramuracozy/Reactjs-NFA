import Contact from "../components/Contact"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ProductList from "../components/ProductList"
import Team from "../components/Team"
import Footer from "../components/Footer"
import Service from "../components/Service"
export default function Home(){
    return(
        <>
            <Header/>
            <Hero/>
            <ProductList/>
            <Team/>
            <Contact/>
            <Service/>
            <Footer/>
        </>
    )
}