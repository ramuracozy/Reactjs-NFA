import Book from "../../components/Book";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

export default function Books(){
    return(
        <>
            <Header />
            <h2 style={{ textAlign: "center", margin: "20px 0" }}>Daftar Buku</h2>
            <Book />
            <Footer />
        </>
    )
}