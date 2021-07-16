import { Select } from "antd";
import React from "react";

function Sort() {
  const { Option } = Select;
  const style = {
    marginRight: "10px",
    borderRadius: "30px",
    width: 300,
  };
  const handleChange = () => {};

  return (
    <div>
      <Select
        className="style-input"
        defaultValue="Sắp xếp: Tên A-Z"
        style={style}
        onChange={handleChange}
      >
        <Option value="Sắp xếp theo tên A > Z">
          Sắp xếp theo tên A &gt; Z
        </Option>
        <Option value="Sắp xếp theo tên Z > A">
          Sắp xếp theo tên Z &gt; A
        </Option>
        <Option value="Sắp xếp theo tiền tăng">Sắp xếp theo tiền tăng</Option>
        <Option value="Sắp xếp theo tiền giảm">Sắp xếp theo tiền giảm</Option>
        <Option value="Sắp xếp theo số phiên tăng">
          Sắp xếp theo số phiên tăng
        </Option>
        <Option value="Sắp xếp theo số phiên giảm">
          Sắp xếp theo số phiên giảm
        </Option>
      </Select>
    </div>
  );
}

export default Sort;
