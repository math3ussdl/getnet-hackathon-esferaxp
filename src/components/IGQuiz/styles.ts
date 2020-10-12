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
      width: 15rem;
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

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2rem 20rem;

  > Button {
    width: 8rem;
    height: 3rem;
    border: 0;
    border-radius: 15px;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 5rem;
  }
`;
