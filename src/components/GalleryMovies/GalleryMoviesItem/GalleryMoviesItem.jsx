export const GalleryMoviesItem = ({
  id,
  title,
  image,
  vote,
  watched,
  setCurrentImage,
  toggleWatched,
}) => (
  <li id={id}>
    <h2>{title}</h2>
    <p>Votes: {vote}</p>
    <p onClick={() => toggleWatched(id)}>Watched: {watched.toString()}</p>
    <button onClick={() => setCurrentImage(image)}>Show poster</button>
  </li>
);
