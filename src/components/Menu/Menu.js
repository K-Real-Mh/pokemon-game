import cn from 'classnames';
import s from './Menu.module.css';

const MENU = [
    {
        title: 'HOME',
        to: '#welcome',
    },
    {
        title: 'GAME',
        to: '#game',
    },
    {
        title: 'ABOUT',
        to: '#about',
    },
    {
        title: 'CONTACT',
        to: '#contact',
    },
];

function Menu({active}) {
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
                        MENU.map(item => (
                            <li>
                                <a href={item.to}>
                                    {item.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;