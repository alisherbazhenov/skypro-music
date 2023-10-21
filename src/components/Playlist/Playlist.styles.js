import styled from 'styled-components'

export const PlayListItem = styled.div`
	width: 250px;
	height: 150px;
	&:not(:last-child) {
		margin-bottom: 30px;
	}
`

export const PlayListLink = styled.a`
	width: 100%;
	height: 100%;
`

export const PlayListImage = styled.img`
	width: 100%;
	height: auto;
`