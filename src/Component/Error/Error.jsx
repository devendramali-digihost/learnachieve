import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <>
    <div className="error">
    <div className="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8">
                <div className="bread-content">
                  <h3 className="title">404</h3>
                  {/* <div class="divider"></div> */}
                  <ul>
                    <li><Link to={""}>Home</Link></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1513 17.2432C10.9496 17.0154 10.9496 16.6461 11.1513 16.4183L15.9547 10.9974L11.1513 5.57659C10.9496 5.34874 10.9496 4.97938 11.1513 4.75153C11.3532 4.5238 11.6805 4.5238 11.8824 4.75153L17.4167 10.9974L11.8824 17.2432C11.6805 17.471 11.3532 17.471 11.1513 17.2432Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83904 17.2432C3.60834 17.0154 3.60834 16.6461 3.83904 16.4183L9.32855 10.9974L3.83904 5.57659C3.60834 5.34874 3.60834 4.97938 3.83904 4.75153C4.06973 4.5238 4.44375 4.5238 4.67444 4.75153L10.9993 10.9974L4.67444 17.2432C4.44375 17.471 4.06973 17.471 3.83904 17.2432Z" fill="white"/>
                    </svg></li>
                    <li className='active'>404</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
            <h1 className='py-5 text-center'>Error</h1>

        </div>
    </div>
    </>
  )
}

export default Error