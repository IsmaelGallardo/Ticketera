import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright: 
        <a className='text-white' href='https://mdbootstrap.com/'>
          TuTicket.com.ar
        </a>
      </div>
    </MDBFooter>
  );
}

// import React from "react"


// const Footer = () => {
//     return(
//     // <!-- FOOTER -->
//     <footer class="bg-dark text-center text-white">
//         {/* <!-- Grid container --> */}
//         <div class="container p-4 pb-0">
//             {/* <!-- Section: Social media --> */}
//             <section class="mb-4">
//                 {/* <!-- Facebook --> */}
//                 <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
//                         class="fab fa-facebook-f"></i></a>

//                 {/* <!-- Twitter --> */}
//                 <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
//                         class="fab fa-twitter"></i></a>

//                 {/* <!-- Google --> */}
//                 <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
//                         class="fab fa-google"></i></a>

//                 {/* <!-- Instagram --> */}
//                 <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
//                         class="fab fa-instagram"></i></a>

//                 {/* <!-- Linkedin --> */}
//                 <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
//                         class="fab fa-linkedin-in"></i></a>

//                 {/* <!-- Github --> */}
//                 <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
//                         class="fab fa-github"></i></a>
//             </section>
//             {/* <!-- Section: Social media --> */}
//         </div>
//         {/* <!-- Grid container --> */}
//     </footer>
//     );
//     }

//     export default Footer