import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Main = styled.section`
	display: flex;

	align-items: center;
	justify-content: center;

	width: 100%;

	margin-top: 5rem;

	padding: 0 1.2rem;

	> figure {
		margin-right: 5rem;

		> img {
			width: 87px;
			height: 169px;
		}
	}

	> p {
		margin-top: 4.5rem;
		font-weight: Regular;
		font-size: 25px;
		opacity: 1;
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;

		> figure {
			margin-left: 5rem;
		}

		> p {
			font-size: 20px;
			margin: 2.5rem 0;
		}
	}
`;

export const Trails = styled.section`
  display: flex;
  flex-direction: column;

	align-items: center;
	justify-content: center;

	width: 100%;
  padding: 0 1.2rem;

  margin: 3.5rem 0;
`;
