import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";
import { productsContext } from "../../contexts/productsContext";


const Filters = ({ price, setPrice, getProducts }) => {
  const { products } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ marginTop: "20px" }}>
      <Select
        style={{ width: "50%" }}
        allowClear
        mode="multiple"
        placeholder="Filter by ingredients"
      >
        {products.map((item) => (
          <Select.Option value={item.ingredients} key={item.id}>
            {item.ingredients}
          </Select.Option>
        ))}
      </Select>
      <Slider
        style={{ width: "50%" }}
        onChange={(e) => setPrice(e)}
        range
        defaultValue={[1, 20]}
        min={0}
        max={20}
        step={1}
        value={price}
      />

    </div>
  );
};

export default Filters;
