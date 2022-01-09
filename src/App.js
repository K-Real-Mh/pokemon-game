import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bg from "./assets/bg1.jpg";


function App() {
    return (
        <>
            <Header title="This is title" descr="This is Description"/>
            <Layout title="Section 1 title" descr="Section 1 Description" urlBg={bg}/>
            <Layout title="Section 2 title" descr="Section 2 Description" colorBg="#e2e2e2"/>
            <Layout title="Section 3 title" descr="Section 3 Description" urlBg={bg}/>
            <Footer/>
        </>
    );
}

export default App;
