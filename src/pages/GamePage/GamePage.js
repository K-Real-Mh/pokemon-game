import Button from "../../components/Button/Button";

function GamePage({onClickButton}) {
    return (
        <>
            <Button onClick={() => onClickButton('home')}>Go to Home Page!</Button>
        </>
    );
}

export default GamePage;