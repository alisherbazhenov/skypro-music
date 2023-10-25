/* eslint-disable */
import * as S from './DropdownList.styles'
import DropdownItem from './DropdownItem'

function AuthorListFilter() {
	return (
		<S.DropdownList>
			<DropdownItem textLink={'Alexander Nakarada'} />
			<DropdownItem textLink={'Frank Schroter'} />
			<DropdownItem textLink={'Kevin Macleod'} />
			<DropdownItem textLink={'Mixkit'} />
			<DropdownItem textLink={'Баста'} />
			<DropdownItem textLink={'Егор Крид'} />
			<DropdownItem textLink={'МОТ'} />
		</S.DropdownList>
	)
}

export default AuthorListFilter
