import React from "react";
import { Row, Col } from "antd";
import AdminProductsList from "../components/AdminProductsList/AdminProductsList";
import AddProductModal from "../components/AddProductModal/AddProductModal";

const AdminPage = () => {
  return (
    <div className="container" style={{ margin: "60px auto" }}>
      <Row>
        <Col span={22}>
          <Col span={22}>
            <AddProductModal />
            <AdminProductsList />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;
