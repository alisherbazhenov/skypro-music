import { useEffect, useState } from 'react'
import SkeletonPlayer from '../sceletons/SkeletonPlayer'
import * as S from './AudioPlayer.styles'

function AudioPlayer() {
	const [player, setPlayer] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')
				.then((res) => res.json())
				.then((json) => setPlayer(json[10]))
		}, 5000)
	}, [])

	return (
		<S.Bar>
			<S.BarContent>
				<S.PlayerProgress />
				<S.PlayerBlock>
					<S.BarPlayer>
						<S.PlayerControls>
							<S.PlayerBtnPrev>
								<S.BtnPrevSvg alt="prev">
									<use xlinkHref="img/icon/sprite.svg#icon-prev" />
								</S.BtnPrevSvg>
							</S.PlayerBtnPrev>
							<S.PlayerBtnPlay>
								<S.BtnPlaySvg alt="play">
									<use xlinkHref="img/icon/sprite.svg#icon-play" />
								</S.BtnPlaySvg>
							</S.PlayerBtnPlay>
							<S.PlayerBtnNext>
								<S.BtnNextSvg alt="next">
									<use xlinkHref="img/icon/sprite.svg#icon-next" />
								</S.BtnNextSvg>
							</S.PlayerBtnNext>
							<S.PlayerBtnRepeat>
								<S.BtnRepeatSvg alt="repeat">
									<use xlinkHref="img/icon/sprite.svg#icon-repeat" />
								</S.BtnRepeatSvg>
							</S.PlayerBtnRepeat>
							<S.PlayerBtnShuffle>
								<S.BtnShuffleSvg alt="shuffle">
									<use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
								</S.BtnShuffleSvg>
							</S.PlayerBtnShuffle>
						</S.PlayerControls>

						<S.PlayerTrackPlay>
							{player && (
								<S.TrackPlayContain key={player.id}>
									<S.TrackPlayImage>
										<S.TrackPlaySvg alt="music">
											<use xlinkHref="img/icon/sprite.svg#icon-note" />
										</S.TrackPlaySvg>
									</S.TrackPlayImage>
									<S.TrackPlayAuthor>
										<S.TrackPlayAuthorLink href="http://">
											{player.name}
										</S.TrackPlayAuthorLink>
									</S.TrackPlayAuthor>
									<S.TrackPlayAlbum>
										<S.TrackPlayAlbumLink href="http://">
											{player.author}
										</S.TrackPlayAlbumLink>
									</S.TrackPlayAlbum>
								</S.TrackPlayContain>
							)}
							{!player && <SkeletonPlayer />}

							<S.TrackPlayLikeDis>
								<S.TrackPlayLike>
									<S.TrackPlayLikeSvg alt="like">
										<use xlinkHref="img/icon/sprite.svg#icon-like" />
									</S.TrackPlayLikeSvg>
								</S.TrackPlayLike>
								<S.TrackPlayDisLike>
									<S.TrackPlayDisLikeSvg alt="dislike">
										<use xlinkHref="img/icon/sprite.svg#icon-dislike" />
									</S.TrackPlayDisLikeSvg>
								</S.TrackPlayDisLike>
							</S.TrackPlayLikeDis>
						</S.PlayerTrackPlay>
					</S.BarPlayer>
					<S.VolumeBlock>
						<S.VolumeContent>
							<S.VolumeImage>
								<S.VolumeImageSvg alt="volume">
									<use xlinkHref="img/icon/sprite.svg#icon-volume" />
								</S.VolumeImageSvg>
							</S.VolumeImage>
							<S.VolumeProgress>
								<S.VolumeProgressLine type="range" name="range" />
							</S.VolumeProgress>
						</S.VolumeContent>
					</S.VolumeBlock>
				</S.PlayerBlock>
			</S.BarContent>
		</S.Bar>
	)
}

export default AudioPlayer
