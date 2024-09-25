import React from "react";
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
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;
const Left = styled.div`
flex-wrap: wrap;
align-items: center;
display: flex;
gap: 20px;
text-wrap: nowrap;
`;
const Right = styled.div`
align-items: center;
display: flex;
gap: 10px;
`;
const LeftLeft = styled.div``;
const LeftRight = styled.div`
text-wrap: nowrap;
height: 100%;
display: flex;
gap: 10px;
align-items: ;
`;
const AeroLeft = styled.svg`
background-color: rgb(180, 180, 180);
padding: 10px;
border-radius: 50%;
`;
const AeroRight = styled.svg`
background-color: rgb(180, 180, 180);
padding: 10px;
border-radius: 50%;
`;

const Bottom = styled.div`
width: 100%;
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: 20px;
`;
const Card = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
padding: 10px;
min-width: 100px;
background-color: rgb(189, 173, 173);
border-radius: 5px;
`
const Img = styled.img`
width: 100%;
aspect-ratio: 9/10;
object-fit: cover;
border-radius: 3px;
`
const Title = styled.p`
all: unset;
text-align: center;
display: block;
color: black;
`
const Stock = styled.p`
all: unset;
display: block;
 text-align: center;
 color: rgb(60,60,60);
`

export const Featured = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Left>
            <LeftLeft>
              <h2>Featured Category</h2>
            </LeftLeft>
            <LeftRight>
              <h4>
                <sub>Cake & Milk</sub>
              </h4>
              <h4>
                <sub>Coffee & Teas</sub>
              </h4>
              <h4>
                <sub>Pet Foods</sub>
              </h4>
              <h4>
                <sub>Vegetables</sub>
              </h4>
            </LeftRight>
          </Left>
          <Right>
            <AeroLeft
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
                />
              </g>
            </AeroLeft>
            <AeroRight
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                />
              </g>
            </AeroRight>
          </Right>
        </Top>
        <Bottom>
          <Card>
            <Img
              src="https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Title>Cherry</Title>
            <Stock>20 Items</Stock>
          </Card>
          <Card>
            <Img
              src="https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Title>Cherry</Title>
            <Stock>20 Items</Stock>
          </Card>
          <Card>
            <Img
              src="https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Title>Cherry</Title>
            <Stock>20 Items</Stock>
          </Card>
          <Card>
            <Img
              src="https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Title>Cherry</Title>
            <Stock>20 Items</Stock>
          </Card>
          <Card>
            <Img
              src="https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Title>Cherry</Title>
            <Stock>20 Items</Stock>
          </Card>
          <Card>
            <Img
              src="https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Title>Cherry</Title>
            <Stock>20 Items</Stock>
          </Card>
          <Card>
            <Img
              src="https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Title>Cherry</Title>
            <Stock>20 Items</Stock>
          </Card>
          <Card>
            <Img
              src="https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Title>Cherry</Title>
            <Stock>20 Items</Stock>
          </Card>
        </Bottom>
      </Wrapper>
    </Container>
  );
};
