import s from './Layout.module.css';

function Layout({title, descr, urlBg, colorBg}) {
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
                            <h3>
                                {title}
                            </h3>
                            <span className={s.separator}/>
                        </div>
                    )}
                    {descr && (
                        <div className={[s.desc, s.full].join(' ')}>
                            <p>
                                {descr}
                            </p>
                        </div>
                    )}
                </article>
            </div>
        </section>
    );
}

export default Layout;