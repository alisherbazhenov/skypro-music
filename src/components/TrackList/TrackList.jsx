/* eslint-disable */
import Track from '../Track/Track'
import Searchblock from '../Searchblock/Searchblock'
import './styles.css'
import { useState } from 'react'
import DateListFilter from './DateListFilter'
import AuthorListFilter from './AuthorListFilter'
import GenreListFilter from './GenreListFilter'
import BtnFilter from './BtnFilter'
import styled from 'styled-components'

const StyledMainCenterBlock = styled.div`
	width: auto;
	-webkit-box-flex: 3;
	-ms-flex-positive: 3;
	flex-grow: 3;
	padding: 20px 40px 20px 111px;
`
const StyledCenterBlockH2 = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 64px;
	line-height: 72px;
	letter-spacing: -0.8px;
	margin-bottom: 45px;
`
const StyledCenterBlockFilter = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-bottom: 51px;
`
const StyledFilterTitle = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	margin-right: 15px;
`
const StyledFilterBlock = styled.div`
	position: relative;
`
const StyledCenterBlockContent = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
`
const StyledContentTitle = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	margin-bottom: 24px;
`
const StyledPlaylistTitleCol = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 2px;
	color: #696969;
	text-transform: uppercase;
`
const StyledTitleCol01 = styled(StyledPlaylistTitleCol)`
	width: 447px;
`
const StyledTitleCol02 = styled(StyledPlaylistTitleCol)`
	width: 321px;
`
const StyledTitleCol03 = styled(StyledPlaylistTitleCol)`
	width: 245px;
`
const StyledTitleCol04 = styled(StyledPlaylistTitleCol)`
	width: 60px;
	text-align: flex-end;
`
const StyledPlaylistSvg = styled.svg`
	width: 12px;
	height: 12px;
	fill: transparent;
	stroke: #696969;
`
const StyledContentPlaylist = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	overflow-y: auto;
`

function TrackList() {
	const [activeFilter, setActiveFilter] = useState(null)

	return (
		<StyledMainCenterBlock>
			<Searchblock />
			<StyledCenterBlockH2>Трек</StyledCenterBlockH2>
			<StyledCenterBlockFilter>
				<StyledFilterTitle>Искать по:</StyledFilterTitle>
				<StyledFilterBlock
					onClick={() => {
						setActiveFilter('author')
						if (activeFilter) {
							setActiveFilter(null)
						}
					}}
				>
					<BtnFilter
						isActive={activeFilter === 'author'}
						title={'исполнителю'}
					/>
					{activeFilter === 'author' && <AuthorListFilter />}
				</StyledFilterBlock>
				<StyledFilterBlock
					onClick={() => {
						setActiveFilter('genre')
						if (activeFilter) {
							setActiveFilter(null)
						}
					}}
				>
					<BtnFilter isActive={activeFilter === 'genre'} title={'жанру'} />
					{activeFilter === 'genre' && <GenreListFilter />}
				</StyledFilterBlock>
				<StyledFilterBlock
					onClick={() => {
						setActiveFilter('date')
						if (activeFilter) {
							setActiveFilter(null)
						}
					}}
				>
					<BtnFilter
						isActive={activeFilter === 'date'}
						title={'году выпуска'}
					/>
					{activeFilter === 'date' && <DateListFilter />}
				</StyledFilterBlock>
			</StyledCenterBlockFilter>
			<StyledCenterBlockContent>
				<StyledContentTitle>
					<StyledTitleCol01>Трек</StyledTitleCol01>
					<StyledTitleCol02>ИСПОЛНИТЕЛЬ</StyledTitleCol02>
					<StyledTitleCol03>АЛЬБОМ</StyledTitleCol03>
					<StyledTitleCol04>
						<StyledPlaylistSvg alt="time">
							<use xlinkHref="./img/icon/sprite.svg#icon-watch" />
						</StyledPlaylistSvg>
					</StyledTitleCol04>
				</StyledContentTitle>
				<StyledContentPlaylist>
					<Track />
				</StyledContentPlaylist>
			</StyledCenterBlockContent>
		</StyledMainCenterBlock>
	)
}

export default TrackList
