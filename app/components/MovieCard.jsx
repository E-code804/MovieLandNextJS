import Link from "next/link"

// eslint-disable-next-line react/prop-types
const MovieCard = ({year, poster, title, type}) => {
  return (
    <Link href={title} target="_blank">
      <div className="movie">
        <div>
          <p>{year}</p>
        </div>

        <div>
          <img src={poster !== 'N/A' ? poster : "https://via.placeholder.com/400"} alt={title}/>
        </div>

        <div>
          <span>{type}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard