import s from './Button.module.css';

function Button({children, ...props}) {
    return (
        <button className={s.button} {...props}>{children}</button>
    );
}

export default Button;