import * as S from './DropdownList.styles'
import DropdownItem from './DropdownItem'

function GenreListFilter() {
	return (
		<S.DropdownList>
			<DropdownItem textLink="hip-hop" />
			<DropdownItem textLink="pop-music" />
			<DropdownItem textLink="electro" />
			<DropdownItem textLink="techno" />
			<DropdownItem textLink="classic" />
			<DropdownItem textLink="rock" />
			<DropdownItem textLink="house" />
		</S.DropdownList>
	)
}

export default GenreListFilter
