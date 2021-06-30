import React, { useState } from "react";
import { Modal } from "antd";

const DecideModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (e) => {
    e.preventDefault();
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <a href="#" onClick={showModal}>
        {props.addBtn && props.addBtn}
      </a>

      <Modal
        title="Xác nhận"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p
          className={`${props.addClass && props.addClass}`}
          style={{ fontWeight: 600 }}
        >
          {props.content ? props.content : ""}
        </p>
      </Modal>
    </>
  );
};

export default DecideModal;
