import React from "react";
import { Modal, Form, Input, Button, Divider } from "antd";

const RoomForm = ({ visible, onCancel }) => {
  return (
    <Modal
      title="Tạo phòng trong trung tâm"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <div className="container-fluid">
        <Form layout="vertical">
          <div className="row">
            <div className="col-12">
              <Form.Item label="Tên phòng">
                <Input placeholder="" className="style-input" />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Form.Item label="Lầu">
                <Input placeholder="" className="style-input" />
              </Form.Item>
            </div>
          </div>

          <div className="row ">
            <div className="col-12">
              <Button className="w-100" type="primary" size="large">
                Lưu
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default RoomForm;
