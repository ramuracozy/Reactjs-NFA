import Contact from "../components/Contact"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Book from "../components/Book"
import Team from "../components/Team"
import Footer from "../components/Footer"
import Service from "../components/Service"
export default function Home(){
    return(
        <>
            <Header/>
            <Hero/>
            <Book/>
            <Team/>
            <Contact/>
            <Service/>
            <Footer/>
        </>
    )
}