import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { productsContext } from "../../contexts/productsContext";

import { Button, Form, Input, Select, InputNumber } from "antd";

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
  const [form] = Form.useForm();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);
  const onFinish = (values) => {
    console.log("Success:", values);
    updateProduct(params.id, values).then(() => navigate("/admin"));
  };

  return (
    <div className="container" style={{ marginTop: "15px" }}>
      <h2>Edit product</h2>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        form={form}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input title!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ingredients"
          name="ingredients"
          rules={[
            {
              required: true,
              message: "Please input ingredients!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <InputNumber min={1} style={{width: "100%"}} />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          rules={[
            {
              required: true,
              message: "Please input URL of image!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 9,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Edit product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;
