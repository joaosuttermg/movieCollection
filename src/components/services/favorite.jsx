import { useState, useEffect } from "react";

const FavoriteAction = ({ movie }) => {
    const [favorites, setFavorites] = useState ([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    const operationFavorite = () => {
        const isFavorite = favorites.some(fav => fav.id === movie.id);
        let updateFavorites;

        if (isFavorite) {
            updateFavorites = favorites.filter(fav => fav.id !== movie.id);
        } else {
            updateFavorites = [...favorites, movie];
        }

        setFavorites(updateFavorites);
        localStorage.setItem('favorites', JSON.stringify(updateFavorites));
    };

    const isFavorite = favorites.some(fav => fav.id === movie.id);

    return (
        <button onClick={operationFavorite}>
            {isFavorite ? 'Remover Favoritos' : 'Adicionar Favoritos'}
        </button>
    );
};

export default FavoriteAction;