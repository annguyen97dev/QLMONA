import { Select } from "antd";
import { Form } from "antd";
import React from "react";

function Selector() {
  const { Option, OptGroup } = Select;
  const style = {
    marginRight: "10px",
    borderRadius: "30px",
    width: 300,
  };

  const handleChange = () => {};

  return (
    <div>
      <Form layout="inline">
        <Form.Item label="Sắp xếp theo:">
          <Select
            className="style-input"
            defaultValue="Sắp xếp: ---"
            style={style}
            onChange={handleChange}
          >
            <Option value="Tên dự án (A > Z)">Tên dự án (A &gt; Z)</Option>
            <Option value="Tên dự án (Z > A)">Tên dự án (Z &gt; A)</Option>
            <Option value="Dịch vụ (A > Z)">Dịch vụ (A &gt; Z)</Option>
            <Option value="Dịch vụ (Z > A)">Dịch vụ (Z &gt; A)</Option>
            <Option value="Ngày hết hạn (tăng)">Ngày hết hạn (tăng)</Option>
            <Option value="Ngày hết hạn (giảm)">Ngày hết hạn (giảm)</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Selector;
