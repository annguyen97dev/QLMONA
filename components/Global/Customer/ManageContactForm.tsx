import React, { useState } from "react";
import { Modal, Form, Input, Button, Divider, Tooltip, Select } from "antd";
import { RotateCcw } from "react-feather";

const optionStatus = [
  {
    text: 'New',
  },
  {
    text: 'Liên lạc lại',
  },
  {
    text: 'Tạm chưa làm',
  },
  {
    text: 'Đang cân nhắc',
  },
  {
    text: 'Dọ giá',
  },
  {
    text: 'Đã chuyển đổi',
  },
  {
    text: 'fail',
  }
];

const ManageContactForm = (props) => {
  const { Option } = Select;
  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      {props.showIcon && (
        <button
          className="btn btn-icon edit"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          <Tooltip title="Cập nhật">
            <RotateCcw />
          </Tooltip>
        </button>
      )}
      {props.showAdd && (
        <button
          className="btn btn-warning add-new"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Thêm mới
        </button>
      )}

      {/*  */}
      <Modal
        title={<>{props.showAdd ? "Create Contact" : "Update Contact"}</>}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="container-fluid">
          <Form layout="vertical">
            <div className="row">
              <div className="col-6">
                <Form.Item label="Full Name">
                  <Input className="style-input" />
                </Form.Item>
              </div>
              <div className="col-6">
                <Form.Item label="Project">
                  <Input className="style-input" />
                </Form.Item>
              </div>
            </div>
            {/*  */}
            <div className="row">
                <div className="col-6">
                    <Form.Item label="User">
                    <Input className="style-input" />
                    </Form.Item>
                </div>
                <div className="col-6">
                    <Form.Item label="Phone Number">
                    <Input className="style-input" />
                    </Form.Item>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Form.Item label="Email">
                    <Input className="style-input" />
                    </Form.Item>
                </div>
                <div className="col-6">
                    <Form.Item label="Address">
                    <Input className="style-input" />
                    </Form.Item>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Form.Item label="Status">
                      <Select
                        showSearch
                        placeholder="Select a status"
                        optionFilterProp="children"
                        className="style-input"
                        // onChange={onChange}
                        // onFocus={onFocus}
                        // onBlur={onBlur}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {optionStatus.map((item, i) => (
                          <Option value={item.text} key={i}>{item.text}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Form.Item label="Note">
                      <TextArea rows={2} />
                    </Form.Item>
                </div>
            </div>
            <div className="row ">
              <div className="col-12">
                {props.showAdd == true ? (
                  <Button className="w-100" type="primary" size="large">
                    Create
                  </Button>
                ) : (
                  <Button className="w-100" type="primary" size="large">
                    Update
                  </Button>
                )}
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ManageContactForm;