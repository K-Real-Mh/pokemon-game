import s from './Layout.module.css';

function Layout({title, urlBg, colorBg, colorTitle, children}) {
    const backgroundStyle = `
    ${colorBg ? colorBg : ''}
    ${urlBg ? `url(${urlBg})` : ''}
    `;

    return (
        <section className={s.root} style={{background: backgroundStyle}}>
            <div className={s.wrapper}>
                <article>
                    {title && (
                        <div className={s.title}>
                            <h3 style={colorTitle && {color: colorTitle}}>
                                {title}
                            </h3>
                            <span className={s.separator}/>
                        </div>
                    )}
                    {children && (
                        <div className={[s.desc, s.full].join(' ')}>
                            {children}
                        </div>
                    )}
                </article>
            </div>
        </section>
    );
}

export default Layout;