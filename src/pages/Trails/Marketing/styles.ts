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

  margin-top: 3rem;

	padding: 0 1.2rem;

	> figure {
		margin-left: 6.5rem;

		> img {
			width: 10rem;
			height: auto;
		}
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;

		figure {
			margin-right: 5rem;
		}

		p {
			font-size: 20px;
			margin: 2.5rem 0;
		}
	}
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 60px;
  }

  > p {
		margin-top: 4.5rem;
		font-weight: Regular;
		font-size: 25px;
		opacity: 1;
		text-align: center;
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
