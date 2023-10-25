/* eslint-disable */

import * as S from './DropdownList.styles'
import DropdownItem from './DropdownItem'

function DateListFilter() {
	return (
		<S.DropdownList>
			<DropdownItem textLink={'1960'} />
			<DropdownItem textLink={'1970'} />
			<DropdownItem textLink={'1980'} />
			<DropdownItem textLink={'1990'} />
			<DropdownItem textLink={'2000'} />
			<DropdownItem textLink={'2010'} />
			<DropdownItem textLink={'new'} />
		</S.DropdownList>
	)
}

export default DateListFilter
