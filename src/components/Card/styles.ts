import styled from 'styled-components';

export const Container = styled.div`
  width: 15rem;
  height: 15rem;

  display: flex;
  flex-direction: column;

  margin: 4rem 0;

  figure {
    > img {
      max-width: 14rem;
      width: auto;
      max-height: 10rem;
      height: 100%;
    }
  }

  &:nth-child(2) {
    margin-left: 3rem;
  }

  &:nth-child(3) {
    margin-right: 2rem;
  }

  span {
    margin-top: 2.4rem;
    font-size: 20px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  small {
    font-size: 14px;
    margin-top: 1.5rem;

    &.gray {
      color: var(--color-link);
    }
  }

  @media screen and (max-width: 768px) {
    margin: 4.8rem 0;
  }
`;
