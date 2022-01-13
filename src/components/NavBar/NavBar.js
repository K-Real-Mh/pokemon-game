import cn from "classnames";
import s from './NavBar.module.css';

function NavBar({onClick, active}) {
    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: active})} onClick={onClick}>
                    <span/>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;