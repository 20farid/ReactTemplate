import styled from 'styled-components';

const Row = styled.div`
  position: relative;
  width: 100%;
  margin: 1.2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Col10 = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
`;
const Col8 = styled.div`
  position: relative;
  width: 80%;
  padding: 1rem;
`;
const Col6 = styled.div`
  position: relative;
  width: 60%;
  padding: 1rem;
`;
const Col4 = styled.div`
  position: relative;
  width: 40%;
  padding: 1rem;
`;
const Col2 = styled.div`
  position: relative;
  width: 20%;
  padding: 1rem;
`;

const LeftSide__col3 = styled.div`
  position: relative;
  width: 30%;
  max-width : 235px;
`;
const LeftSide__col7 = styled.div`
  position: relative;
  width: 70%;
  max-width : 456px;
`;


export {
  Row,
  Col10,
  Col8,
  Col6,
  Col4,
  Col2,
  LeftSide__col3,
  LeftSide__col7,
}
