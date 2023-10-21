import { useEffect, useState } from 'react'
import SkeletonTracks from '../sceletons/SkeletonTracks'
import * as S from './Track.styles'

function Track() {
	const [tracks, setTrack] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')
				.then((res) => res.json())
				.then((json) => setTrack(json))
		}, 5000)
	}, [])

	// if (!tracks) {
	// 	return !tracks && [...Array(25)].map((n) => <SkeletonTracks key={n} />)
	// }

	return (
		<>
			{tracks &&
				tracks.map((track) => (
					<S.PlaylistItem key={track.id}>
						<S.PlaylistTrack>
							<S.TrackTitle>
								<S.TrackTitleImage>
									<S.TrackTitleSvg alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</S.TrackTitleSvg>
								</S.TrackTitleImage>
								<S.TrackTitleText>
									<S.TrackTitleLink href={track.track_file}>
										{track.name}
										<S.TrackTitleSpan />
									</S.TrackTitleLink>
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
								<S.TrackAuthorLink href="http:">
									{track.author}
								</S.TrackAuthorLink>
							</S.TrackAuthor>
							<S.TrackAlbum>
								<S.TrackAlbumLink href="http:">{track.album}</S.TrackAlbumLink>
							</S.TrackAlbum>
							<S.TrackTime>
								<S.TrackTimeSvg alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</S.TrackTimeSvg>
								<S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
							</S.TrackTime>
						</S.PlaylistTrack>
					</S.PlaylistItem>
				))}

			{!tracks &&
				[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => <SkeletonTracks key={n} />)}
		</>
	)
}

export default Track
