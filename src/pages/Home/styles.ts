import styled from 'styled-components';

import banner from '../../assets/images/Banner.png';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

  overflow-x: hidden;

	> figure {
		margin: 2.5rem 0;

		> img {
			width: 95%;
			height: auto;

			@media screen and (max-width: 768px) {
				width: 100%;
			}
		}

		> .button-holder {
			position: absolute;
			top: 35.8rem;
			left: 55rem;

			width: 12.5rem;
			height: 3.6rem;

			&:hover {
				cursor: pointer;
			}

			@media screen and (max-width: 768px) {
				top: 32.7rem;
				left: 23rem;

				width: 5rem;
				height: 1.55rem;
			}
		}

		@media screen and (max-width: 768px) {
			margin: 0;
		}
	}

	> span {
		align-self: flex-start;
		margin: 1rem 4.2rem;

		font-size: 24px;
		font-weight: 400;
	}
`;

export const Banner = styled.div`
	background-image: url(${banner});
	background-repeat: no-repeat;
	background-size: contain;
	width: 45rem;
	height: 25rem;

	margin-top: 3rem;

  &:hover {
    cursor: pointer;
  }

	@media screen and (max-width: 768px) {
		width: 100%;

		margin-top: 4.5rem;

		> Button {
			bottom: 9.5rem;
			right: 2.5rem;

			@media screen and (max-width: 768px) {
				bottom: 8rem;
			}
		}
	}
`;

export const CardSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: 3rem 2.8rem;

	@media screen and (max-width: 768px) {
		margin: 3rem 1.5rem;

    flex-direction: column;
	}
`;

export const CashBackSection = styled.section`
	display: flex;
	flex-direction: column;

	align-items: flex-start;

	margin: 4.2rem 2.8rem;

	@media screen and (max-width: 768px) {
		align-items: center;
    margin: 4.2rem 0;
	}

	> span {
		font-weight: 400;
		font-size: 24px;
		position: absolute;
		left: 7rem;
	}

	> p {
		position: relative;
		left: -16rem;
		top: 3rem;

		margin-bottom: 1.2rem;

    @media screen and (max-width: 768px) {
      left: 0;
      margin: .5rem 5rem;
    }
	}

	.question {
		margin: 1.4rem 0;
		font-size: 14px;
	}

	small {
		position: relative;
		left: -16rem;
		top: 3.2rem;

		font-size: 12px;
		color: #999;

    @media screen and (max-width: 768px) {
      left: 0;
      top: 1.5rem;
      margin: .5rem 2.5rem;
    }
	}

	Input {
		width: 6rem;
		position: relative;
		left: -14rem;
		top: 2rem;
		border-top: 0;
		border-right: 0;
		border-left: 0;

    @media screen and (max-width: 768px) {
      left: 3.2rem;
      margin: .5rem 2.5rem;

      width: 12rem;
    }
	}

	.icon {
		position: relative;
		color: var(--color-primary);

		&:hover {
			cursor: pointer;
		}
	}

	.minus {
		left: -15.5rem;
		top: 2.8rem;

    @media screen and (max-width: 768px) {
      left: 5rem;
      margin: .5rem 2.5rem;
    }
	}

	.plus {
		left: -12.5rem;
		top: 2.8rem;

    @media screen and (max-width: 768px) {
      left: .5rem;
      margin: .5rem 2.5rem;
    }
	}

	Button {
		position: relative;
		left: -10rem;
		top: 2.5rem;

		width: 6.5rem;
		height: 2.125rem;

		background: var(--color-primary);
		color: var(--color-background);

		border: 0;
		border-radius: 4px;

		&:hover {
			cursor: pointer;
			background: var(--color-primary-hover);
		}

    @media screen and (max-width: 768px) {
      top: 6.8rem;
      left: -14.5rem;
      right: 0;
      margin: .5rem 0;
    }
	}
`;
