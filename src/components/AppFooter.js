import React from 'react'
import { Layout, Row, Col } from 'antd';

const { Content} = Layout;

function AppFooter() {
  return(
    <div className="footer">
      <Content> 
        <Row>
          <Col span={6}>
              <h2>Giới thiệu</h2>
              <p>Web5days – chuyên thiết kế và phân phối Theme WordPress việt hóa đủ thể loại. Với phương châm Uy tín làm nên thương hiệu – Sự hài lòng của khách hàng là niềm hạnh phúc của chúng tôi. </p>
          </Col>
          <Col span={6}>
              <h2>Liên kết</h2>
              <ul>
                <li>Câu hỏi thường gặp</li>
                <li>Câu hỏi thường gặp</li>
                <li>Câu hỏi thường gặp</li>
                <li>Câu hỏi thường gặp</li>
                <li>Câu hỏi thường gặp</li>
              </ul>
          </Col>
          <Col span={6}>
              <h2>Tiện ích</h2>
              <ul>
                <li>Câu hỏi thường gặp</li>
                <li>Câu hỏi thường gặp</li>
                <li>Câu hỏi thường gặp</li>
                <li>Câu hỏi thường gặp</li>
                <li>Câu hỏi thường gặp</li>
              </ul>
          </Col>
          <Col span={6}>
              <h2>Liên hệ</h2>
              <p>Web5days - Quan Hoa, Cầu Giấy, Hà Nội<br/>
                Hotline:0332434165<br/>
                FB: fb.com/steve.luong.5<br/>
                Email: luonghop.lc@gmail.com<br/>
                Skype: hop23typhu<br/>
              </p>
          </Col>
        </Row>
      </Content>
        <Row>
          <Col span={24} className="copyright">Copyright 2019 © Web5days - Đơn vị cung cấp theme Wordpress Việt hóa uy tín - chất lượng.</Col>
        </Row>
    </div>
  );
};

export default AppFooter;
