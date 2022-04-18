import React from 'react'
import styled from 'styled-components'

const Section = (props) => {
  return (
    <Wrap bgImage={props.imgSrc}>
        <ItemText>
            <h1>{props.title}</h1>
            <p>{props.text}</p> 
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {props.leftBtnText}
                </LeftButton>
                {props.rightBtnText && 
                    <RightButton>
                    {props.rightBtnText}
                    </RightButton>
                }              
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" alt="down arrow"/>
        </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url(${props => props.bgImage});
    scroll-snap-align: start;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.button`
    background-color: rgba(23,26,32,0.8);
    color: white;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    overflow-x: hidden;
    height: 40px;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`

`