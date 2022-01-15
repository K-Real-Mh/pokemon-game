import s from './Header.module.css';
import Button from "../Button/Button";

function Header({title, descr, onClickButton}) {
    const handleClick = () => {
      onClickButton('game');
    }

    return (
        <header className={s.root}>
            <div className={s.forest}/>
            <div className={s.container}>
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
                <Button onClick={handleClick}>Start Game</Button>
            </div>
        </header>
    );
}

export default Header;