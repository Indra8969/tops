import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(223, 223, 223);
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
`;
const Left = styled.div``;
const Mid = styled.div`
  flex-grow: 1;
  overflow-x: auto;
  display: flex;
`;
const Right = styled.div`
display: flex;
gap: 5px;
align-items: center;
color: green;
font-weight: 700;
text-wrap: nowrap;
`;
const CatogorySelect = styled.div`
  background-color: seagreen;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
`;
const Select = styled.select`
  padding: 5px 0px;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  border: 0px;
`;
const Ul = styled.ul`
margin: 0px;
padding-inline: 20px;
  display: flex;
  margin-inline: auto;
  gap: 40px;
`;
const Li = styled.li`
  list-style: none;
  text-wrap: nowrap;
`;
export const Navigate = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <CatogorySelect>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M9 9H5V5h4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 6h-4V5h4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6H5v-4h4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2"
              />
            </svg>
            Browse
            <Select>
              <option defaultValue={""}>All categories</option>
              <option value="">Choose...</option>
            </Select>
          </CatogorySelect>
        </Left>
        <Mid>
          <Ul>
            <Li>Home</Li>
            <Li>About</Li>
            <Li>Shop</Li>
            <Li>Vendors</Li>
            <Li>Mega menu</Li>
            <Li>Blog</Li>
            <Li>Pages</Li>
            <Li>Contact</Li>
          </Ul>
        </Mid>
        <Right>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M20 12v-1.707c0-4.442-3.479-8.161-7.755-8.29c-2.204-.051-4.251.736-5.816 2.256A7.93 7.93 0 0 0 4 10v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2V10a5.95 5.95 0 0 1 1.821-4.306a5.98 5.98 0 0 1 4.363-1.691C15.392 4.099 18 6.921 18 10.293V20h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2"
            />
            <path fill="black" d="M7 12h2v8H7zm8 0h2v8h-2z" />
          </svg>
          1900 - 888
        </Right>
      </Wrapper>
    </Container>
  );
};
