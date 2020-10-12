import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  > h1 {
    margin: .8rem 0;
  }

  > figure {
    > img {
      width: 6rem;
      height: auto;
    }
  }

  p {
    width: 35%;
    text-align: center;

    margin: 1rem 0;

    &.question {
      font-weight: bold;
    }

    @media screen and (max-width: 768px) {
      width: 50%;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  margin-top: 3.5rem;
`;

export const Item = styled.button`
  height: 3rem;
  border-radius: 30px;
  border: 0;

  border-top: 3px solid #FF857F;
  border-right: 10px solid #FF857F;
  border-bottom: 3px solid #FF857F;
  border-left: 10px solid #FF857F;

  color: var(--color-link);

  & + & {
    margin-top: 15px;
  }

  &:hover {
    background-color: #FF857F;
    cursor: pointer;
    color: var(--color-background);
  }
`;
