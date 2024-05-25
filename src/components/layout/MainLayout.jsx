import Footer from "../../screens/Dashboard/Footer";
import NavBar from "../../screens/Dashboard/NavBar";

export function MainLayout({children}) {
    return (
        <div>
            <NavBar />
            {children}
            <Footer/>
        </div>


    )

}