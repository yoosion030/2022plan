import styled from 'styled-components'
export const MainSection = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: #000000;
  svg {
    position: absolute;
  }
  button {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 460px;
    height: 80px;
    font-family: 'KOTRA' !important;
    color: #000 !important;
    font-size: 18px !important;
    margin: 0 auto;
  }
  * {
    position: relative;
    z-index: 2;
    text-align: center;
  }
`

export const Title = styled.div`
  font-size: 36px;
  margin-bottom: 14px;
  font-family: 'Malgun Gothic';
  font-size: 70px;
  margin: 150px 0 23px;
  font-weight: bold;
`
export const SubTitle = styled.div`
  color: #ffffff;
  font-family: 'Malgun Gothic';
  font-size: 24px;
  margin-bottom: 345px;
`
