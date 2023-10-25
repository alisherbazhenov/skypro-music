import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: scroll;
	background-color: #383838;
	overflow-x: hidden;
`

export const Container = styled.div`
	max-width: 1920px;
	/* height: 100vh; */
	margin: 0 auto;
	position: relative;
	background-color: #181818;
`

export const Main = styled.main`
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
`