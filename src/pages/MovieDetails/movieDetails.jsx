import { useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'

const Details = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const result = await fetch(url)
        const data = await result.json()

        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`
        getMovie(url)
    }, [id])

    return (
        <div>
            {/* {movie && (
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            )} */}
        <div className={styles.movieContainer}>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div className={styles.movies} key={movie.id}>
              <h2 className={styles.movieTitle}>{movie.title}</h2>
              <p className={styles.movieDate}>{movie.release_date}</p>
              <img
                className={styles.movieImg}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              
            </div>
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
        
        </div>
    )
}