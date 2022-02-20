import React from 'react'
import fire from '../config/fire'
import Carousel from 'react-bootstrap/Carousel'
import { Navbar, Nav,Form } from 'react-bootstrap'
import {MDBBtn,} from "mdbreact";


const Bar = (props) => {

    const logout = () => {

        fire.auth().signOut();
    }

    return (

        <div id="classicformpage">
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>ม่อนเคียงดาว จ.น่าน </h3>
                        <p>กลางคืนเคียงดาว ตอนเช้าเคียงหมอก … ตกดึกมีดาวเต็มฟ้า ส่องแสงพร่างพราวเหมือนอยู่ใกล้เราแค่เอื้อมมือ  </p>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src="https://pbs.twimg.com/media/DzHOsk4VAAAa6KC.jpg" alt="picture" width="150" height="600"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://img.painaidii.com/images/20131206_6_1386320536_827909.jpg" alt="picture" width="150" height="600"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>วัดอโศการาม สมุทรปราการ</h3>
                        <p>เป็นศาสนสถานที่มีความงดงามทางสถาปัตยกรรม โดยเฉพาะพระธุตังคเจดีย์ เจดีย์สีขาวขนาดใหญ่ เป็นปูชนียสถานประดิษฐานพระบรมสารีริธาตุ 
                            เป็นอีกหนึ่งสถานที่ท่องเที่ยวยอดนิยม  และมีพุทธศาสนิกชนมาปฏิบัติวิปัสสนากรรมฐานกันมาก</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://pbs.twimg.com/media/DuBYYUFUcAAuBnC.jpg" alt="picture" width="150" height="600"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>ทุ่งทานตะวันเขาจีนแล ลพบุรี</h3>
                        <p>ทุ่งทานตะวัน ที่มีพื้นที่กว้างกว่า 355 ไร่ บรรยากาศของทุ่งทานตะวันสีเหลืองอร่ามนี้ ที่สวยงดงามมาก ก็เพราะว่ามีวิวด้านหลังเป็นภูเขารอบล้อม </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <Navbar bg="#1c2331 mdb-color darken-4 " variant="dark ">
                    <Navbar.Brand href="/page_home">หน้าแรก</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/page_guide">แนะนำ</Nav.Link>
                        <Nav.Link href="/page_change"> แลกเปลี่ยน </Nav.Link>
                        <Nav.Link href="/page_show"> Reviews </Nav.Link>
                        <Nav.Link href="/page_aboutme">เกี่ยวกับฉัน</Nav.Link>
                    </Nav>

                    <Form inline>
                        <MDBBtn rounded color="danger" onClick={logout}>logout</MDBBtn>                    
                    </Form>
                </Navbar>
            </div>
        </div>
    )
}

export default Bar;