import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="#1c2331 mdb-color darken-4" className="font-small pt-5 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h3 className="title">#ไปไหนไปกัน</h3>
            <p>
              By  <a href="#!">
                <strong>Lalida Ampharat </strong>
              </a> 0897221429
            </p>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;