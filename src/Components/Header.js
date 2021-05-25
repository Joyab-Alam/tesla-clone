import React, { useState } from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {
    const [sideOpen, setSideClose] = useState(false);
    return (
        <Container>
          <a href="#">
              <img src="/images/logo.svg"/>
          </a>
          <Menu>
                <a href="#">Model S</a>
                <a href="#">Model Y</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
           </Menu>
           <RightMenu>
               <a href="#">Shop</a>
               <a id="disAcc" href="#">Tesla Account</a>
               <CustomMenu onClick={() => setSideClose(true)}/>
           </RightMenu>
           <BurgerNav show={sideOpen}>
               <CloseWrap>
                   <CustomClose onClick={() => setSideClose(false)}/>
               </CloseWrap>
               <li><a href="">Existing inventory</a></li>
                <li><a href="">used inventory</a></li>
                 <li><a href="">trade-in</a></li>
                  <li><a href="">cybertuck</a></li>
                   <li><a href="">roadster</a></li>
                    <li><a href="">semi</a></li>
                     <li><a href="">charging</a></li>
                      <li><a href="">powerwall</a></li>
           </BurgerNav>
        </Container>
    )
}

export default Header;


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
   z-index:1;
   
`
const Menu = styled.div`
   display: flex;
   align-items:center;
   justify-content: center;
   flex: 1;
   a{
       font-weight:600;
       text-transform: uppercase;
       padding: 0 10px;
       flex-wrap: nowrap;
   }
   @media(max-width:768px){
       display:none;
   }
   
`
const RightMenu = styled.div `
display: flex;
align-items:center;
   a{
       font-weight:600;
       text-transform: uppercase;
       padding: 0 10px;
       flex-wrap: nowrap;
      
           
   }
   a#disAcc{
        @media(max-width:400px){
          display:none;
   }
      
   }
   

`
const CustomMenu = styled(MenuIcon)`
   cursor:pointer;


`
const BurgerNav = styled.div `
   
      position:fixed;
      top:0;
      bottom:0;
      right:0;
      background: #fff;
      width:300px;
      z-index: 100;
      list-style: none;
      padding: 20px;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      text-align: start;
      transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.2s;
      li{
          padding: 15px 0px;
          border-bottom:1px solid rgba(0, 0, 0, 0.2);
          a{
              font-weight:600;

          }
      }
     

`
const CloseWrap = styled.div `
   display: flex;
    justify-content: flex-end;


`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
 
`