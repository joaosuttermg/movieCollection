import { useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'

const Details = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const result = aait fetch(url)
        const data = await result.json()

        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`
        getMovie(url)
    }, [id])

    return (
        <div>
            {movie && (
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            )}
        </div>
    )
}