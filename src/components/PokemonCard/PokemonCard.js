import cn from 'classnames';
import cardBack from '../../assets/card-back-side.jpg';
import s from './PokemonCard.module.css';

function PokemonCard({type, values, img, name, id, isActive, setActive}) {
    const handleClick = () => {
        setActive(id);
    }

    return (
        <div className={s.root}>
            <div className={cn(s.pokemonCard, {[s.active]: isActive})} onClick={handleClick}>
                <div className={s.cardFront}>
                    <div className={cn(s.wrap, s.front)}>
                        <div className={cn(s.pokemon, s[type])}>
                            <div className={s.values}>
                                <div className={cn(s.count, s.top)}>{values.top}</div>
                                <div className={cn(s.count, s.right)}>{values.right}</div>
                                <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                                <div className={cn(s.count, s.left)}>{values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={cn(s.wrap, s.back)}>
                        <img src={cardBack} alt="Сard Backed"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PokemonCard;