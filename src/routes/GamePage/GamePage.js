import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";

function GamePage() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <>
            <h1>Game Page</h1>
            <Button onClick={handleClick}>Go to Home Page!</Button>
        </>
    );
}

export default GamePage;