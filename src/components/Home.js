import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
        <Section 
            title="Model 3"
            text="Order Online for Touchless Delivery"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            imgSrc="/images/model-3.jpg"
        />
        
        <Section 
            title="Model X"
            text="Order Online for Touchless Delivery"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            imgSrc="/images/model-x.jpg"
        />
        <Section 
            title="Model Y"
            text="Order Online for Touchless Delivery"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            imgSrc="/images/model-y.jpg"
        />
        <Section
            title="Model S"
            text="Order Online for Touchless Delivery"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            imgSrc="/images/model-s.jpg"
        />
        <Section
            title="Lowest Cost Solar Panels in America"
            text="Money Back Guarantee"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            imgSrc="/images/solar-panel.jpg"
        />
        <Section 
            title="Solar for New Roofs"
            text="Solar Roofs Cost Less Than a New Roof"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            imgSrc="/images/solar-roof.jpg"
        />
        <Section 
            title="Accessories"
            text=""
            leftBtnText="Shop Now"
            imgSrc="/images/accessories.jpg"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`