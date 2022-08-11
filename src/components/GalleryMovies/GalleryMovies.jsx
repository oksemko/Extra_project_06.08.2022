import { GalleryMoviesItem } from './GalleryMoviesItem/GalleryMoviesItem';

export const GalleryMovies = ({ movies, setCurrentImage, toggleWatched }) => {
  return (
    <ul>
      {movies.map(({ id, image, title, vote, watched }) => (
        <GalleryMoviesItem
          key={id}
          id={id}
          image={image}
          title={title}
          vote={vote}
              watched={watched}
          setCurrentImage={setCurrentImage}
          toggleWatched={toggleWatched}
        />
      ))}
    </ul>
  );
};
