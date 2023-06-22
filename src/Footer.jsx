import React from 'react';

const Footer=() =>{
    var today = new Date();
    return(
        <footer>
             <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
           <h5>Team Member Allocation App - {today.getFullYear()}</h5>
                <h6 className='row justify-content-center  mb-4 fw-bold font-monospace'> Harshil Patel</h6>

            </div>
            </div>
    
            
        </footer>
    )
}
export default Footer