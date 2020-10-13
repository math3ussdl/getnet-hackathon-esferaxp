import React from 'react';
import YouTube from 'react-youtube';

import { Container, ClassContent } from './styles';

import nextImg from '../../assets/images/next.png';

interface ClassRoomProps {
	title: string;
	text?: string[];
	topics?: string[];
	image?: string;
	video?: string;
	description: string;
	linkTo: string;
}

const ClassRoom: React.FC<ClassRoomProps> = ({
	title,
	text,
	topics,
	image,
	video,
	description,
	children,
	linkTo,
}) => {
	return (
		<Container>
			<ClassContent>
				<h1>{title}</h1>
				{text?.map((par) => (
					<p>{par}</p>
				))}

				<ul>
					{topics?.map((topic) => (
						<li>{topic}</li>
					))}
				</ul>

				{image ? (
					<img src={image} alt='Imagem da Aula' className='class-img' />
				) : video ? (
					<YouTube
						videoId='WsJ6j8MH5lc'
						opts={{
							height: '390',
							width: '640',
							playerVars: {
								autoplay: 1,
							},
						}}
					/>
				) : (
					<p></p>
				)}

				<p className='last'>{description}</p>
			</ClassContent>

			{children}

			<a className='next' href={linkTo}>
				<img src={nextImg} alt='next button' />
			</a>
		</Container>
	);
};

export default ClassRoom;
