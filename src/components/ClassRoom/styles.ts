import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	> a {
		&.next {
			> img {
				position: fixed;
				bottom: .5rem;
				right: .5rem;
			}
		}

		> img {
			width: 6rem;
			height: 6rem;
    }
    
    &:hover {
      cursor: pointer;
    }
  }
  
  > figure {
    > img {
      width: 15rem;
      height: auto;
      margin-top: .5rem;

      @media screen and (min-width: 768px) {
        position: absolute;
        top: 150%;
        left: 2.5rem;
      }
    }
  }
`;

export const ClassContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> h1 {
		font-size: 45px;
    margin: 2rem 0;
    
    @media screen and (max-width: 768px) {
      margin-left: 5rem;
      font-size: 35px;
    }
	}

	> p {
    width: 40%;
		margin: 1rem 0;
    text-align: center;
    
    @media screen and (max-width: 768px) {
      width: 95%;
    }

    &.last {
      margin: 3rem 0;
    }
  }

  > ul {
    width: 40%;
    margin: 1rem 0;
    margin-left: 5rem;
  }
  
  > .class-img {
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`;
