import { useEffect, useState } from 'react'
import './styles.css'
import styled from 'styled-components'
import SkeletonPlayer from '../sceletons/SkeletonPlayer'

const StyledBar = styled.div`
	position: sticky;
	min-height: 2em;
	bottom: 0;
	left: 0;
	width: 100%;
	background: rgba(28, 28, 28, 0.5);
`
const StyledBarContent = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
`
const StyledPlayerProgress = styled.div`
	width: 100%;
	height: 5px;
	background: #2e2e2e;
`
const StyledPlayerBlock = styled.div`
	height: 73px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
`
const StyledBarPlayer = styled.div`
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
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
`
const StyledVolumeBlock = styled.div`
	width: auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	padding: 0 92px 0 0;
`
const StyledVolumeContent = styled.div`
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
	-webkit-box-pack: flex-end;
	-ms-flex-pack: flex-end;
	justify-content: flex-end;
`
const StyledVolumeImage = styled.div`
	width: 13px;
	height: 18px;
	margin-right: 17px;
`
const StyledVolumeImageSvg = styled.svg`
	width: 13px;
	height: 18px;
	fill: transparent;
`
// const StyledBar = styled.div``

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
		<StyledBar>
			<StyledBarContent>
				<StyledPlayerProgress />
				<StyledPlayerBlock>
					<StyledBarPlayer>
						<div className="player__controls">
							<div className="player__btn-prev">
								<svg className="player__btn-prev-svg" alt="prev">
									<use xlinkHref="img/icon/sprite.svg#icon-prev" />
								</svg>
							</div>
							<div className="player__btn-play _btn">
								<svg className="player__btn-play-svg" alt="play">
									<use xlinkHref="img/icon/sprite.svg#icon-play" />
								</svg>
							</div>
							<div className="player__btn-next">
								<svg className="player__btn-next-svg" alt="next">
									<use xlinkHref="img/icon/sprite.svg#icon-next" />
								</svg>
							</div>
							<div className="player__btn-repeat _btn-icon">
								<svg className="player__btn-repeat-svg" alt="repeat">
									<use xlinkHref="img/icon/sprite.svg#icon-repeat" />
								</svg>
							</div>
							<div className="player__btn-shuffle _btn-icon">
								<svg className="player__btn-shuffle-svg" alt="shuffle">
									<use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
								</svg>
							</div>
						</div>

						<div className="player__track-play track-play">
							{player && (
								<div className="track-play__contain" key={player.id}>
									<div className="track-play__image">
										<svg className="track-play__svg" alt="music">
											<use xlinkHref="img/icon/sprite.svg#icon-note" />
										</svg>
									</div>
									<div className="track-play__author">
										<a className="track-play__author-link" href="http://">
											{player.name}
										</a>
									</div>
									<div className="track-play__album">
										<a className="track-play__album-link" href="http://">
											{player.author}
										</a>
									</div>
								</div>
							)}
							{!player && <SkeletonPlayer />}

							<div className="track-play__like-dis">
								<div className="track-play__like _btn-icon">
									<svg className="track-play__like-svg" alt="like">
										<use xlinkHref="img/icon/sprite.svg#icon-like" />
									</svg>
								</div>
								<div className="track-play__dislike _btn-icon">
									<svg className="track-play__dislike-svg" alt="dislike">
										<use xlinkHref="img/icon/sprite.svg#icon-dislike" />
									</svg>
								</div>
							</div>
						</div>
					</StyledBarPlayer>
					<StyledVolumeBlock>
						<StyledVolumeContent>
							<StyledVolumeImage>
								<StyledVolumeImageSvg alt="volume">
									<use xlinkHref="img/icon/sprite.svg#icon-volume" />
								</StyledVolumeImageSvg>
							</StyledVolumeImage>
							<div className="volume__progress _btn">
								<input
									className="volume__progress-line _btn"
									type="range"
									name="range"
								/>
							</div>
						</StyledVolumeContent>
					</StyledVolumeBlock>
				</StyledPlayerBlock>
			</StyledBarContent>
		</StyledBar>
	)
}

export default AudioPlayer
