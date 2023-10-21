/* eslint-disable */
import { useEffect, useState } from 'react'
import * as S from './Playlist.styles'
import SkeletonSelections from '../sceletons/SkeletonSelections'

function Playlist() {
	const [selections, setSelection] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			fetch('https://skypro-music-api.skyeng.tech/catalog/selection/')
				.then((res) => res.json())
				.then((json) => setSelection(json))
		}, 5000)
	}, [])

	return (
		<>
			{selections &&
				selections.map((selection) => (
					<S.PlayListItem key={selection.id}>
						<S.PlayListLink href="#">
							<S.PlayListImage src="img/playlist01.png" alt="day's playlist" />
						</S.PlayListLink>
					</S.PlayListItem>
				))}
			{!selections && [1, 2, 3].map((n) => <SkeletonSelections key={n} />)}
		</>
	)
}

export default Playlist
