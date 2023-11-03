import { Select } from "antd";
import { useState } from "react";
import userImage from "../../../assets/user.jpg"
import { Avatar, Card, Button, Badge, Table } from "antd";
const { Meta } = Card;
const AddFamilySidebar = () => {
  const [searchValue, setSearchValue] = useState(""); // State to store the search value

  const onChange = (value) => {
    setSearchValue(value);
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    setSearchValue(value);
    console.log("search:", value);
  };

  const resetSearch = () => {
    setSearchValue(""); // Clear the search field
  };

  const filterOption = (input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
    
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

  return (
    <>
      <div
        className="card  "
        style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", width: "340px" }}
      >
        <div className="card-body">
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "15px" }}>Search by name:</p>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              value={searchValue} // Controlled value for the search field
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
              style={{ flex: 1, marginRight: "15px", height: "40px" }}
            />
            <button className="btn btn-primary" onClick={resetSearch}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: "inline-block" }}>
        <Badge.Ribbon text="Md Muktadir Mazumder" color="green">
          <Card
            style={{
              width: 300,
              marginTop: 0,
            }}
            actions={[
              <>
                <div>
                  <Button type="primary" key="add-button">
                    Add To Family
                  </Button>
                </div>
              </>,
            ]}
          >
            <Meta
              avatar={
                <Avatar src={userImage} style={{ width: 50, height: 50 }} />
              }
              title="Profile Information"
              description="This is the description"
              style={{ marginTop: "10px" }}
            />
          </Card>
        </Badge.Ribbon>
      </div>
      <hr />
      <Badge.Ribbon text="Family Members" color="blue">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 2,
            showSizeChanger: false,
          }}
          // scroll={{
          //   y: 240,
          // }}
        />
      </Badge.Ribbon>
    </>
  );
};

export default AddFamilySidebar;
