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
    
    const handleAddPokemon = () => {
        const newKey = database.ref().child('pokemons').push().key;
        const newPokemon = {
            "abilities": [
                "keen-eye",
                "tangled-feet",
                "big-pecks"
            ],
            "base_experience": 122,
            "height": 11,
            "weight": 300,
            "id": new Date().getTime(),
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
            "name": "New Pokemon",
            "stats": {
                "hp": 63,
                "attack": 60,
                "defense": 55,
                "special-attack": 50,
                "special-defense": 50,
                "speed": 71
            },
            "type": "normal",
            "values": {
                "top": 7,
                "right": 5,
                "bottom": 1,
                "left": 2
            }
        };

        setPokemons(prevState => {
            return {
                ...prevState,
                [newKey]: newPokemon,
            }
        });

        database.ref('pokemons/'+ newKey).set({
            ...newPokemon
        });
    }

    const handleTurnPokemon = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = true;
                    database.ref('pokemons/'+ item[0]).set({
                        ...pokemon
                    });
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
            <Button onClick={handleAddPokemon}>Add new pokemon</Button>
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