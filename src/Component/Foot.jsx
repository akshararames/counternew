import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
function Foot() {
  return (
    <div>
         <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'crimson', marginTop :'252px' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='https://mdbootstrap.com/'>
          CounterApp.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Foot