import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ImageCon = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  border-radius: 20px;
  padding: 50px;
  padding-bottom: 15px;
  background-position: right 0;
  background-image: url("https://images.unsplash.com/photo-1528873981-36c6afde7b9d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;
const Title = styled.p`
  font-size: 3.5rem;
  width: 30rem;
  padding: 0px;
  color: black;
  margin: 0px;
  width: 55%;
  text-align: pretty;
`;
const Desc = styled.p`
  font-size: 1.5rem;
  width: 50%;
  padding: 0px;
  color: rgb(80, 80, 80);
  margin: 0px;
`;
const Subscribe = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  border-radius: 30px;
  width: fit-content;
  background-color: white;
  overflow: hidden;
`;
const Input = styled.input`
  all: unset;
  padding: 0px;
  margin: 0px;
  min-height: 40px;
`;
const Btn = styled.button`
  all: unset;
  padding: 0px;
  margin: 0px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 10px;
  color: white;
  min-height: 40px;
  width: 80px;
  border-radius: 20px;
`;
const CarouselCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
`;
const Dot = styled.div`
  height: 10px;
  width: 10px;
  background-color: seagreen;
  border-radius: 50%;
`;
const Dot2 = styled.div`
  height: 10px;
  width: 10px;
  background-color: grey;
  border-radius: 50%;
`;
export const ImageContainer = () => {
  return (
    <Container>
      <Wrapper>
        <ImageCon>
          <div>
            <Title>Don't miss amazing grocery deals</Title>
            <Desc>Sign up for the daily newsteller</Desc>
          </div>
          <Subscribe>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M17.991 6.01L5.399 10.563l4.195 2.428l3.699-3.7a1 1 0 0 1 1.414 1.415l-3.7 3.7l2.43 4.194L17.99 6.01Zm.323-2.244c1.195-.433 2.353.725 1.92 1.92l-5.282 14.605c-.434 1.198-2.07 1.344-2.709.241l-3.217-5.558l-5.558-3.217c-1.103-.639-.957-2.275.241-2.709z"
                />
              </g>
            </svg>
            <Input type="text" placeholder="Your email address"></Input>
            <Btn>Subscribe</Btn>
          </Subscribe>
          <CarouselCon>
            <Dot></Dot>
            <Dot2></Dot2>
          </CarouselCon>
        </ImageCon>
      </Wrapper>
    </Container>
  );
};
