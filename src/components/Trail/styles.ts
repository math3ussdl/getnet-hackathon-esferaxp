import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;

	width: 75%;
	height: 168px;
	background: rgba(251, 251, 251, 1);
	opacity: 1;
	box-shadow: 0px 4px 8px
		rgba(
			0.13333334028720856,
			0.13333334028720856,
			0.13333334028720856,
			0.11999999731779099
		);
	overflow: hidden;

  padding: 1.5rem 1.5rem;

  margin: 3rem 0;

  > img {
    width: 8rem;
    height: 8rem;

    margin-bottom: 1.5rem;
  }
  
  & + & {
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;

    > img {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const TrailInfo = styled.div`
  display: flex;
  flex-direction: column;

  > Button {
    width: 8rem;
    height: 2.5rem;

    background: var(--color-primary);
    color: var(--color-background);

    margin-top: 1.8rem;

    border: 0;

    &:hover {
      background: var(--color-primary-hover);
      cursor: pointer;
    }
  }
`;

export const TrailText = styled.div`
	> h1 {
		font-size: 1.8rem;
		font-weight: 400;
	}

	> p {
		margin-top: 0.5rem;
	}
`;

export const ProgressStyles = {
	root: {
		width: '10rem',
	},

	path: {
		stroke: 'var(--color-primary)',
	},
};
