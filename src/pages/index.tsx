import Nav from "src/components/Nav";
import styled from "styled-components";

function Home() {
  return (
    <StyledWrapper>
      <Nav />
    </StyledWrapper>
  );
}

export default Home;

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
`;

// const StyledHambergerWrapper = styled.div`
//   position: fixed;
//   right: 20px;
// `;

// const StyledCardWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `;
