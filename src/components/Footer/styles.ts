import styled from 'styled-components';

export const Container = styled.footer`
	margin-top: 2.5rem;

	border-top: 1px solid var(--color-primary);

	width: 100%;

  display: flex;
  flex-direction: column;
`;

export const EsferaLinks = styled.div`
	width: 100%;

	display: flex;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Brands = styled.div`
	display: flex;
	flex-direction: column;

	margin: 3.5rem;
`;

export const Logo = styled.img`
	width: 6rem;
`;

export const SocialMedia = styled.div`
	display: flex;

	margin-top: 1rem;

	.icon {
		&:hover {
			cursor: pointer;
		}
	}
`;

export const Menu = styled.div`
	display: flex;

	ul {
		list-style: none;
		margin: 4rem 5rem;

		&.without-span {
			margin-left: 2rem;
			margin-top: 5.5rem;

			@media screen and (max-width: 768px) {
				margin: 0;
				padding: 0 4rem;
			}
		}

		li {
			margin: 2rem 0;

			color: var(--color-link);

			&:hover {
				cursor: pointer;
        text-decoration: underline;
			}
		}
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;

		ul {
			margin: 2rem 4rem;
		}
	}
`;

export const SantanderBrand = styled.div`
	display: flex;
	align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 82px;

  color: var(--color-primary);

  span {
    > img {
      width: auto;
      height: 1.5rem;

      vertical-align: middle;
      margin-bottom: .2rem;
      margin-left: .5rem;
    }
  }
`;
