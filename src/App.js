// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import TrackList from './components/TrackList';
import SideBar from './components/SideBar';
import AudioPlayer from './components/AudioPlayer';

function App() {
	return (
		<div className="wrapper">
			<div className="container">
				<main className="main">
					<Nav />
					<TrackList />
					<SideBar />
				</main>
				<AudioPlayer />
				<footer className="footer" />
			</div>
		</div>
	);
}

export default App;
