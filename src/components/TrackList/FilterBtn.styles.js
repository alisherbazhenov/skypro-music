/* eslint-disable */

import styled from "styled-components"

export const FilterBtn = styled.div`
margin-right: 10px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	border: 1px solid ${(props) => (props.$isActive ? '#ad61ff' : '#fff')};
	border-radius: 60px;
	padding: 6px 20px;
	color: ${(props) => (props.$isActive ? '#ad61ff' : '#fff')};
	&:hover {
		border-color: #d9b6ff;
		color: #d9b6ff;
		cursor: pointer;
	}
`