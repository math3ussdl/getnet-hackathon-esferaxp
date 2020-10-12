import styled from 'styled-components';

import banner from '../../assets/images/Banner.png';
import banner2 from '../../assets/images/banner2.png';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;
`;

export const Banner = styled.div`
	background-image: url(${banner});
	background-repeat: no-repeat;
	background-size: contain;
	width: 45rem;
	height: 25rem;

	margin-top: 3rem;

	> Button {
		position: absolute;

		bottom: 7rem;
		right: 20.5rem;

		background-color: var(--color-primary);
		color: var(--color-background);

		> .icon {
			margin-left: 1rem;
		}

		&:hover {
			cursor: pointer;
			background-color: var(--color-primary-hover);
		}
	}
`;
