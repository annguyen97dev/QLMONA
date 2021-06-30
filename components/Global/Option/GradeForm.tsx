import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Radio, Tooltip } from "antd";
import { RotateCcw } from "react-feather";
import { useForm } from "react-hook-form";
import { courseApi } from "~/apiBase";
import { useWrap } from "~/context/wrap";

const GradeForm = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [status, setStatus] = React.useState(1);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors, isSubmitted },
  } = useForm<ICourse>();
  const { showNoti } = useWrap();

  const onChange_Status = (name) => (e) => {
    console.log("radio checked", e.target.value);

    setValue(name, e.target.value);
    // setStatus(e.target.value);
  };

  // useEffect(() => {
  //   setValue("Enable", true);
  // }, []);

  const onSubmit = handleSubmit((data: any) => {
    console.log("DATA Submit: ", data);
    (async () => {
      try {
        let res = await courseApi.post(data);
        res?.status == 200 &&
          (showNoti("succes", "Thêm thành công"), props.addDataSuccess(true));
      } catch (error) {
        console.log("Error: ", error);
        showNoti("danger", error.message);
      }
    })();
  });

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
        title="Tạo khối học"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="container-fluid">
          <Form layout="vertical" onFinish={onSubmit}>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Code khóa">
                  <Input
                    {...register("ListCourseCode")}
                    placeholder=""
                    className="style-input"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Tên khóa">
                  <Input
                    {...register("ListCourseName")}
                    placeholder=""
                    className="style-input"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Mô Tả">
                  <Input
                    {...register("Description")}
                    placeholder=""
                    className="style-input"
                  />
                </Form.Item>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-12">
                <Form.Item>
                  <Radio.Group
                    onChange={onChange_Status("Enable")}
                    value={status}
                  >
                    <Radio value={1}>Hiện</Radio>
                    <Radio value={2}>Ẩn</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div> */}
            <div className="row ">
              <div className="col-12">
                <input
                  type="submit"
                  className="btn btn-primary w-100"
                  value="Lưu"
                />
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default GradeForm;
