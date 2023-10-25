import { GlobalStyle } from './GlobaleStyles.styles';
import * as S from './App.styles'
import Nav from './components/Nav/Nav';
import TrackList from './components/TrackList/TrackList';
import SideBar from './components/SideBar/SideBar';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';



function App() {
	return (
		<>
			<GlobalStyle />
			<S.Wrapper>
				<S.Container>
					<S.Main>
						<Nav />
						<TrackList />
						<SideBar />
					</S.Main>
					<AudioPlayer />
					<footer className="footer" />
				</S.Container>
			</S.Wrapper>
		</>
	);
}

export default App;
