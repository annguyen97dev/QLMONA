import React, { useState } from "react";
import { Card, Select, DatePicker, Input, Form, Popover } from "antd";
import { Eye, Filter } from "react-feather";
import { useForm } from "react-hook-form";

const FilterTable = () => {
  const { Option } = Select;
  const dateFormat = "DD-MM-YYYY";
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  function handleChange(value) {}

  function onChangeDateStart(date, dateString) {
    setValue("dateStart", dateString);
  }

  function onChangeDateEnd(date, dateString) {
    setValue("dateEnd", dateString);
  }

  const content = (
    <div className={`wrap-filter small`}>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-12">
            <Form.Item label="Dự án">
              <Input placeholder="Tìm dự án" {...register("project")} />
            </Form.Item>
          </div>

          <div className="col-md-12">
            <Form.Item label="Trạng thái">
              <Select className="style-input" {...register("status")}>
                <Option value="Đang hoạt động">Đang hoạt động</Option>
                <Option value="Sắp đến hạn">Sắp đến hạn</Option>
                <Option value="Đã hết hạn">Đã hết hạn</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="col-md-12">
            <Form.Item label="Trạng thái sử dụng">
              <Select className="style-input" {...register("usingStatus")}>
                <Option value="Đang sử dụng">Đang sử dụng</Option>
                <Option value="Ngưng sử dụng">Ngưng sử dụng</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="col-md-12">
            <Form.Item label="Từ">
              <DatePicker
                className="style-input"
                {...register("dateStart")}
                onChange={onChangeDateStart}
                format={dateFormat}
              />
            </Form.Item>
          </div>

          <div className="col-md-12">
            <Form.Item label="Đến">
              <DatePicker
                className="style-input"
                {...register("dateEnd")}
                onChange={onChangeDateEnd}
                format={dateFormat}
              />
            </Form.Item>
          </div>

          <div className="col-md-12">
            <Form.Item className="mb-0">
              <button className="btn btn-primary" onSubmit={onSubmit}>
                Tìm kiếm
              </button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );

  return (
    <Popover
      placement="bottomRight"
      content={content}
      trigger="click"
      overlayClassName="filter-popover"
    >
      <button className="btn btn-secondary light btn-filter">
        <Filter />
      </button>
    </Popover>
  );
};

export default FilterTable;
