import React, { FC, useEffect, useState } from "react";
import { Modal, Form, Input, Button, message, Spin, Select } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import { branchApi, areaApi, districtApi } from "~/apiBase";

import { useWrap } from "~/context/wrap";
import SelectFilterBox from "~/components/Elements/SelectFilterBox";

type CenterFormProps = IFormBaseProps & {
  Id?: number;
};

export const CenterForm: FC<CenterFormProps> = ({ visible, onCancel, Id }) => {
  const methods = useForm<IBranch>();
  const { showNoti } = useWrap();
  const [dataArea, setDataArea] = useState<IArea[]>();
  const {
    reset,
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting, errors, isSubmitted },
  } = methods;
  const { Option } = Select;

  const [dataDistrict, setDataDistrict] = useState<IDistrict[]>([]);

  //GET DATA AREA
  const getAllArea = () => {
    (async () => {
      try {
        const res = await areaApi.getAll();
        res.status == 200 && setDataArea(res.data.createAcc);
      } catch (err) {
        showNoti("danger", err);
      }
    })();
  };

  // Get DATA DISTRICT
  const getAllDistrict = (AreaID: number) => {
    (async () => {
      try {
        const res = await districtApi.getAll(AreaID);
        res.status == 200 && setDataDistrict(res.data.createAcc);
      } catch (err) {
        showNoti("danger", err.message);
      }
    })();
  };

  // console.log("Data District: ", dataDistrict);

  // SUBMI FORM
  const onSubmit = async (data: IBranch) => {
    console.log("DATA: ", data);
    try {
      let res = await branchApi.post(data);
      res.status == 200 && showNoti("success", "Thêm trung tâm thành công!");
      reset();
    } catch (err) {
      console.log(err);
      showNoti("danger", "Thêm trung tâm thất bại!");
    }
  };

  // FUNCTION SELECT
  const onChangeSelect = (name) => (value) => {
    name == "AreaID" && getAllDistrict(value);
    getAllDistrict(value);
    setValue(name, value);
  };

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  useEffect(() => {
    visible && getAllArea();
  }, [visible]);

  useEffect(() => {
    setValue("Enable", true);
  }, []);

  return (
    <Modal
      title="Tạo trung tâm"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <FormProvider {...methods}>
        <div className="container-fluid">
          <Form layout="vertical">
            <div className="row">
              <div className="col-12">
                <Form.Item label="Mã trung tâm">
                  <Input
                    {...register("BranchCode")}
                    placeholder=""
                    className="style-input"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Tên trung tâm">
                  <Input
                    {...register("BranchName")}
                    placeholder=""
                    className="style-input"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Số điện thoại">
                  <Input
                    {...register("Phone")}
                    placeholder=""
                    className="style-input"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Địa chỉ">
                  <Input
                    {...register("Address")}
                    placeholder=""
                    className="style-input"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Item label="Vùng">
                  <Select
                    style={{ width: "100%" }}
                    className="style-input"
                    showSearch
                    placeholder="Select..."
                    optionFilterProp="children"
                    onChange={onChangeSelect("AreaID")}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    //   filterOption={(input, option) =>
                    //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    //   }
                  >
                    {dataArea?.map((item) => (
                      <Option value={item.AreaID}>{item.AreaName}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Form.Item label="Quận">
                  <Select
                    style={{ width: "100%" }}
                    className="style-input"
                    showSearch
                    placeholder="Select..."
                    optionFilterProp="children"
                    onChange={onChangeSelect("DistrictID")}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    //   filterOption={(input, option) =>
                    //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    //   }
                  >
                    {dataDistrict?.length > 0 ? (
                      dataDistrict?.map((item) => (
                        <Option value={item.ID}>{item.DistrictName}</Option>
                      ))
                    ) : (
                      <Option value={5}>Không có data</Option>
                    )}
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className="col-12">
              <Button
                className="w-100"
                type="primary"
                size="large"
                onClick={handleSubmit(onSubmit)}
              >
                LƯU
              </Button>
            </div>
          </Form>
        </div>
      </FormProvider>
    </Modal>
  );
};
