// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import TrackList from './components/TrackList/TrackList';
import SideBar from './components/SideBar/SideBar';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';

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
