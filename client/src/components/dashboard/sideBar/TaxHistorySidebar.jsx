import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Year",
    dataIndex: "year",
    width: 150,
  },
  {
    title: "Total Income",
    dataIndex: "totalIncome",
    width: 150,
  },
  {
    title: "Total Tax",
    dataIndex: "totalTax",
    width: 150,
  },
  {
    title: "Brochure Link",
    dataIndex: "brochureLink",
    width: 150,
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    year: `200 ${i}`,
    totalIncome: 30000000,
    totalTax: `2300 ${i}`,
    brochureLink: `https//www.google.com ${i}`,
  });
}
const TaxHistorySidebar = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 5,
      showSizeChanger: false,
    }}
    // scroll={{
    //   y: 240,
    // }}
  />
);
export default TaxHistorySidebar;
