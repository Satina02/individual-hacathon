import React, { useContext,  useEffect, useState } from 'react';
import { Link, useSearchParams } from "react-router-dom";

import { List, Avatar, Pagination } from "antd";
import { DeleteOutlined, EditOutlined, MoreOutlined  } from "@ant-design/icons";

import { productsContext } from "../../contexts/productsContext";

const AdminProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, deleteProduct, products, productsTotalCount } =
    useContext(productsContext);

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 10
  );
  useEffect(() => {
    setSearchParams({
      q: "",
      _page: currentPage,
      _limit: limit,
    });
  }, []);
  useEffect(() => {
    setSearchParams({
      q: "",
      _page: currentPage,
      _limit: limit,
    });
  }, [currentPage, limit]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);

    return (
      <>
      <List
        className="demo-loadmore-list items-list"
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a
                key="list-loadmore-edit"
                onClick={() => deleteProduct(item.id)}
              >
                <DeleteOutlined style={{ color: "#be9a67"}}/>
              </a>,
              <Link to={`/edit/${item.id}`}><EditOutlined style={{ color: "#be9a67"}} /></Link>,
              <Link to={`/products/${item.id}`}><MoreOutlined style={{ color: "#be9a67"}}/></Link>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={
                <a>
                  {item.title}
                </a>
              }
            />
          </List.Item>
        )}
      />
      <Pagination
          onChange={(page, limit) => {
          setCurrentPage(page);
          setLimit(limit);
        }}
        current={+currentPage}
        defaultCurrent={1}
        total={+productsTotalCount}
        pageSize={+limit}
      />
    </>
    );
};

export default AdminProductsList;