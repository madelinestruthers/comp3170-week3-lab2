import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails.jsx';

function App() {
  return (
    <div className="app">
      <header>Artists</header>
      {artists.map((artist, index) => (
        <ArtistDetails key={index} artist={artist} />
      ))}
    </div>
  );
}

export default App;