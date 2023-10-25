/* eslint-disable */

import './styles.css'

function DropdownItem(props) {
	return (
		<li className="dropdown__item">
			<a className="dropdown__link" href="#">
				{props.textLink}
			</a>
		</li>
	)
}

export default DropdownItem
