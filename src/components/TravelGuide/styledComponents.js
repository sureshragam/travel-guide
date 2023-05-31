import styled from 'styled-components'

export const TravelGuideContainer = styled.div`
  min-height: 100vh;
  padding: 20px 20px;
  background-color: #eef4f7;
  font-family: 'Roboto';
`
export const Heading = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-top: 0;
  text-decoration: underline;
  text-decoration-color: #52bbf0;
`
export const LoaderContainer = styled.div`
  text-align: center;
  padding: 20px 30px;
`
export const GuideContainer = styled.ul`
  width: 80%;
  margin: auto;
  padding-left: 0px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: auto;
`

export const Guide = styled.li`
  list-style-type: none;
  width: 45%;
  background-color: #ffffff;
  box-shadow: 1px 1px 12px 1px #64748b;
  border-radius: 5px;
  margin-bottom: 20px;
`

export const Image = styled.img`
  width: 100%;
`
export const Name = styled.h1`
  font-size: 20px;
  padding: 10px 20px;
  margin-top: 0;
  margin-bottom: 0;
  color: #334155;
`
export const Description = styled.p`
  font-size: 16px;
  padding: 10px 20px;
  margin-top: 0;
  color: #475569;
`
