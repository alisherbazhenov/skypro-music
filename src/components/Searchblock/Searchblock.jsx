import * as S from './Searchblock.styles'

function Searchblock() {
	return (
		<S.Centerblock>
			<S.SearchSvg>
				<use xlinkHref="./img/icon/sprite.svg#icon-search" />
			</S.SearchSvg>
			<S.SearchText type="search" placeholder="Поиск" name="search" />
		</S.Centerblock>
	)
}

export default Searchblock
