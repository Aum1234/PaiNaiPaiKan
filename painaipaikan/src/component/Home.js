import React from 'react'
import Bar from './Bar';
// import Table from './Table'
// import Lower from './Lower'
import Footer from './Footer'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";


const Home = props => {

  return (

    <div>
      <Bar />
      <div>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            ยินดีต้องรับเข้าสู่ "ไปไหนไปกัน"
        </h2>
          <p className="grey-text w-responsive text-center mx-auto mb-5">
            เว็บไซต์นี้จัดทำขึ้นเพื่อ แนะนำสถานที่ท่องเที่ยว แลกเปลี่ยนการท่องเที่ยวของกันและกัน
            โดยผู้ใช้สามารถเข้ามาแชร์ประสบการณ์การการท่องเที่ยวของท่านให้ผู้อื่นได้รับรู้ได้ในเว็บไซต์นี้
        </p>
        </section>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="6" className="mb-3">
              <img src="https://www.hellowinter.60เส้นทางความสุข.com/wp-content/uploads/2019/12/7.%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%94%E0%B8%B2%E0%B8%A7.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <img src="https://www.hellowinter.60เส้นทางความสุข.com/wp-content/uploads/2019/12/1.%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%9E%E0%B8%B8%E0%B9%88%E0%B8%A2%E0%B9%82%E0%B8%84.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="4" md="6" className="mb-3">
              <img src="https://travel.mthai.com/app/uploads/2019/03/phuket-cover.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-3">
              <img src="https://40plus.posttoday.com/media/content/2018/02/24/D9A4187107FB4FB4A11D2884EC72A1FE.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-3">
              <img src="https://travel.mthai.com/app/uploads/2016/03/e0b89ee0b8b5e0b89ee0b8b5-1024x678.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6" className="mb-3">
              <img src="https://2.bp.blogspot.com/-V-XMM40IX9g/V4hz_ip9hhI/AAAAAAAASLc/Mbe2y4hIY8gtTYAM2Px86WF4Im63XyrrQCK4B/s1600/CHOUI%2BFONG%2BTEA3.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <img src="https://pbs.twimg.com/media/DTLjzeYUMAA3wSd.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div>
          {/* <Lower /> */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home;