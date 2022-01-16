import {useHistory} from "react-router-dom";
import Button from "../Button/Button";
import s from './Header.module.css';

function Header({title, descr}) {
    const history = useHistory();

    const handleClick = () => {
        history.push('/game');
    }

    return (
        <header className={s.root}>
            <div className={s.forest}/>
            <div className={s.silhouette}/>
            <div className={s.moon}/>
            <div className={s.container}>
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
                <Button onClick={handleClick}>Start Game</Button>
            </div>
        </header>
    );
}

export default Header;