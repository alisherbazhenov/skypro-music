/* eslint-disable */
import * as S from './DropdownItem.styles'

function DropdownItem(props) {
	return (
		<S.DropdownItem>
			<S.DropdownLink href="#">{props.textLink}</S.DropdownLink>
		</S.DropdownItem>
	)
}

export default DropdownItem
