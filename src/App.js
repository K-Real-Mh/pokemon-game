import {useState} from "react";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import './App.css';

function App() {
    const [page, setPage] = useState('home');

    const handleChangePage = (page) => {
      setPage(page);
    }

    switch (page) {
        case "home":
            return <HomePage onChangePage={handleChangePage}/>
        case "game":
            return <GamePage onClickButton={handleChangePage}/>
        default:
            return <HomePage onChangePage={handleChangePage}/>
    }
}

export default App;