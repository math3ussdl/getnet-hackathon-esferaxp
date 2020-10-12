import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	width: 100%;

  justify-content: space-between;

	padding: 2rem 0 0 2.5rem;
`;

export const Logo = styled.img`
  width: 10rem;
  
  &:hover {
    cursor: pointer;
  }
`;

export const Menu = styled.nav`
  position: absolute;
  left: 15rem;

	display: flex;

	margin-top: 1.5rem;

	@media screen and (max-width: 500px) {
		display: none;
	}
`;

export const Item = styled.a`
	transition: 0.5s;
	transition-property: color;

	font-size: 15px;
	font-weight: 400;
	line-height: 21px;

	& + & {
		margin-left: 2rem;
	}

	&:hover {
		color: var(--color-primary);
		cursor: pointer;
	}
`;
