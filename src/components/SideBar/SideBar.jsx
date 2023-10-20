/* eslint-disable */
import Playlist from '../Playlist/Playlist'
import * as S from './SideBar.styles'

function SideBar() {
	return (
		<S.MainSideBar>
			<S.Personal>
				<S.PersonalName>Sergey.Ivanov</S.PersonalName>
				<S.SideBarIcon>
					<svg alt="logout">
						<use xlinkHref="img/icon/sprite.svg#logout" />
					</svg>
				</S.SideBarIcon>
			</S.Personal>
			<S.SideBarBlock>
				<S.SideBarList>
					<Playlist />
				</S.SideBarList>
			</S.SideBarBlock>
		</S.MainSideBar>
	)
}

export default SideBar
