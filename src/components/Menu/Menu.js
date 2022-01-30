import cn from 'classnames';
import {Link} from "react-router-dom";
import s from './Menu.module.css';

const MENU = [
    {
        title: 'HOME',
        to: '',
    },
    {
        title: 'GAME',
        to: 'game',
    },
    {
        title: 'ABOUT',
        to: 'about',
    },
    {
        title: 'CONTACT',
        to: 'contact',
    },
];

function Menu({active, onClick}) {
    return (
        <div className={
            cn(s.menuContainer,
                {
                    [s.active]: active === true,
                    [s.deactive]: active === false
                })
        }>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    {
                        MENU.map((item, idx) => (
                            <li key={idx}>
                                <Link to={item.to} onClick={onClick}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;