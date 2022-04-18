import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from './features/carSlice';
import {useSelector} from 'react-redux';

function Header() {
    const [burgerStatus, setburgerStatus] = useState(false);
    const cars = useSelector(selectCars);

  return (
    <Container>
        <a href>
            <img src="/images/logo.svg" alt="tesla logo"/>
        </a>
        <Menu>
            {cars && cars.map((car, index) => (
                <a key={index} href='#'>{car}</a>
            ))}
            <a href='#'>Solar Roof</a>
            <a href='#'>Solar Panels</a>
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Account</a>
            <a onClick={()=>setburgerStatus(true)}>Menu</a>
        </RightMenu>
        <BurgerMenu show={burgerStatus}>
            <CloseWrapper>
            <CustomClose onClick={()=>setburgerStatus(false)}/>
            </CloseWrapper>
            {cars && cars.map((car, index) => (
                <li key={index}><a href='#'>{car}</a></li>
            ))}
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Trade-in</a></li>
            <li><a href='#'>Cybertruck</a></li>
            <li><a href='#'>Roadaster</a></li>

        </BurgerMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    font-size: 14px;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width: 768px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
    cursor: pointer;
    font-size: 14px;
`

const BurgerMenu = styled.ul`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }
    a{
        font-weight: 600;
    }
`
const CustomClose = styled(CloseIcon)`
    align-self: end;
    marign-right: 10px;
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`