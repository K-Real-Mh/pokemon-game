import cn from "classnames";
import s from './NavBar.module.css';

function NavBar({onClick, bgActive = false, active}) {
    return (
        <nav id={s.navbar} className={cn(s.root, {[s.bgActive]: bgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div className={cn(s.menuButton, {[s.active]: active})} onClick={onClick}>
                    <span/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;