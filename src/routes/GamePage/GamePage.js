import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import s from "./GamePage.module.css";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {useEffect, useState} from "react";
import database from "../../service/firebase";

function GamePage() {
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, [])

    const handleClick = () => {
        history.push('/');
    }

    const handleTurnPokemon = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = true;
                }

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }

    return (
        <>
            <h1>Game Page</h1>
            <Button onClick={handleClick}>Go to Home Page!</Button>
            <Layout id="cards" title="Cards" colorBg="#202736" colorTitle="#FEFEFE">
                <div className={s.flex}>
                    {Object.entries(pokemons).map(([key, pokemon]) => (
                        <PokemonCard key={key} name={pokemon.name} id={pokemon.id} type={pokemon.type}
                                     img={pokemon.img} values={pokemon.values} isActive={pokemon.active}
                                     setActive={handleTurnPokemon}/>
                    ))}
                </div>
            </Layout>
        </>
    );
}

export default GamePage;