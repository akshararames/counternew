import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Head() {
  return (
    <div>
         <MDBNavbar light bgColor='warning' >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://i.postimg.cc/BZcL9T3v/count.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            Counter App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Head