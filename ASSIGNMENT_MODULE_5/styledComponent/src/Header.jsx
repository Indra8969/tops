import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(223, 223, 223);
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Left = styled.div``;
const Search = styled.div`
  flex-grow: 1;
  display: flex;
  text-wrap: nowrap;
  align-items: center;
  gap: 10px;
  max-width: 400px;
  margin-inline: auto;
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 5px;
`;
const Right = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Svgdiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 5px;
`;
const Input = styled.input`
  all: unset;
`;
const Select = styled.select`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid black;
`;
export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Logo</Left>
        <Search>
          All catagory
          <Input type="text" placeholder="Search.." />
        </Search>
        <Right>
          <Select name="" id="">
            <option value="">Your Location</option>
          </Select>
          <Svgdiv>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M4 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
                <path d="M11 6h5a2 2 0 0 1 2 2v8" />
                <path d="m14 9l-3-3l3-3m-1 15H8a2 2 0 0 1-2-2V8" />
                <path d="m10 15l3 3l-3 3" />
              </g>
            </svg>
            Compare
          </Svgdiv>
          <Svgdiv>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825"
              />
            </svg>
            Wishlist
          </Svgdiv>
          <Svgdiv>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
              />
            </svg>
            Cart
          </Svgdiv>
          <Svgdiv>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
              />
            </svg>
            Account
          </Svgdiv>
        </Right>
      </Wrapper>
    </Container>
  );
};
