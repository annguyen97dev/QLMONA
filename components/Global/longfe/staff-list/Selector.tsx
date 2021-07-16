import { Select } from "antd";
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
    <>
      <Select
        className="style-input"
        defaultValue="Sắp xếp: ---"
        style={style}
        onChange={handleChange}
      >
        <Option value="Sắp xếp: ---">Sắp xếp: ---</Option>
        <Option value="Tên (A > Z)">Tên (A &gt; Z)</Option>
        <Option value="Tên (Z > A)">Tên (Z &gt; A)</Option>
        <Option value="Tài Khoản (A > Z)">Tài Khoản (A &gt; Z)</Option>
        <Option value="Tài Khoản (Z > A)">Tài Khoản (Z &gt; A)</Option>
      </Select>
    </>
  );
}

export default Selector;
