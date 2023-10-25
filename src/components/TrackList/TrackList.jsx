/* eslint-disable */
import Track from '../Track/Track'
import Searchblock from '../Searchblock/Searchblock'
import { useState } from 'react'
import DateListFilter from './DateListFilter'
import AuthorListFilter from './AuthorListFilter'
import GenreListFilter from './GenreListFilter'
import BtnFilter from './BtnFilter'
import * as S from './Tracklist.styles'

function TrackList() {
	const [activeFilter, setActiveFilter] = useState(null)

	const changeFilter = (valueFilter) => {
		if (activeFilter === valueFilter) {
			setActiveFilter(null)
			return
		}
		setActiveFilter(valueFilter)
	}

	return (
		<S.MainCenterBlock>
			<Searchblock />
			<S.CenterBlockH2>Трек</S.CenterBlockH2>
			<S.CenterBlockFilter>
				<S.FilterTitle>Искать по:</S.FilterTitle>
				<S.FilterBlock
					onClick={() => {
						changeFilter('author')
					}}
				>
					<BtnFilter
						isActive={activeFilter === 'author'}
						title={'исполнителю'}
					/>
					{activeFilter === 'author' && <AuthorListFilter />}
				</S.FilterBlock>
				<S.FilterBlock
					onClick={() => {
						changeFilter('genre')
					}}
				>
					<BtnFilter isActive={activeFilter === 'genre'} title={'жанру'} />
					{activeFilter === 'genre' && <GenreListFilter />}
				</S.FilterBlock>
				<S.FilterBlock
					onClick={() => {
						changeFilter('date')
					}}
				>
					<BtnFilter
						isActive={activeFilter === 'date'}
						title={'году выпуска'}
					/>
					{activeFilter === 'date' && <DateListFilter />}
				</S.FilterBlock>
			</S.CenterBlockFilter>
			<S.CenterBlockContent>
				<S.ContentTitle>
					<S.TitleCol01>Трек</S.TitleCol01>
					<S.TitleCol02>ИСПОЛНИТЕЛЬ</S.TitleCol02>
					<S.TitleCol03>АЛЬБОМ</S.TitleCol03>
					<S.TitleCol04>
						<S.PlaylistSvg alt="time">
							<use xlinkHref="./img/icon/sprite.svg#icon-watch" />
						</S.PlaylistSvg>
					</S.TitleCol04>
				</S.ContentTitle>
				<S.ContentPlaylist>
					<Track />
				</S.ContentPlaylist>
			</S.CenterBlockContent>
		</S.MainCenterBlock>
	)
}

export default TrackList
