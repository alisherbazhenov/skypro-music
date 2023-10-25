/* eslint-disable */
import * as S from './FilterBtn.styles'

function BtnFilter(props) {
	return <S.FilterBtn $isActive={props.isActive}>{props.title}</S.FilterBtn>
}

export default BtnFilter
