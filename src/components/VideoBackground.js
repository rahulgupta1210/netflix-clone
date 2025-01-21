
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

export const VideoBackground = ({ movieId }) => {
  const trailervideo = useSelector((store) => store.movies?.trailervideo)
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailervideo?.key}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}
