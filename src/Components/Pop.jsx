
import React, { useState } from 'react'
function Pop(popup) {
const [vis,setvis]=useState(popup);

  return (
    <div style={!vis ? {visibility:"hidden"}: {}} >
<div className="modal modal-sheet position-static d-block py-5" tabIndex="-1" role="dialog" id="modalSheet">
  <div className="modal-dialog" role="document">
    <div className="modal-content rounded-4 ">
      <div className="modal-header border-bottom-0">
        <h5 className="modal-title">Terms and conditions</h5>
      
      </div>
      <div className="modal-body py-0">
        <p align="left">
            1. Sample Terms of Use Template <br/>
            2. Terms of Use Examples<br/>
            2.1. ASX<br/>
            2.2. Canva<br/>
            2.3. Mailchimp<br/>
            2.4. Saks Fifth Avenue<br/>
            2.5. The Wall Street Journal<br/>
            3. How To Draft Terms of Use for Your Website </p>
      </div>
      <div className="modal-footer flex-column border-top-0">
        <button type="button" onClick={()=> setvis(false)} className="btn btn-lg btn-secondary w-100 mx-0 mb-2">Accept Terms</button>
        <button type="button" onClick={()=> setvis(false)} className="btn btn-lg btn-light w-100 mx-0" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Pop