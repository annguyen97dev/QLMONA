import React, { FC, Fragment, useEffect, useState } from "react";
import PowerTable from "~/components/PowerTable";
import randomColor from "randomcolor";
import { Tag, Tooltip, message } from "antd";
import { Info, RotateCcw } from "react-feather";
import SortBox from "~/components/Elements/SortBox";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import Link from "next/link";
import LayoutBase from "~/components/LayoutBase";
import { branchApi } from "~/apiBase";
import { CenterForm } from "~/components/Global";
import is from "date-fns/esm/locale/is/index.js";
import { useWrap } from "~/context/wrap";

const Center = () => {
  const [center, setCenter] = useState<IBranch[]>([]);
  const [centerForm, setCenterForm] = useState(false);
  const columns = [
    {
      title: "Mã trung tâm",
      dataIndex: "BranchCode",
      ...FilterColumn("address"),
    },

    {
      title: "Tên trung tâm",
      dataIndex: "BranchName",
      render: (center) => {
        let color = randomColor();
        return (
          <Tag color={color} key={center} className="style-tag">
            <b> {center.toUpperCase()}</b>
          </Tag>
        );
      },
      ...FilterColumn("center"),
    },
    { title: "Địa chỉ", dataIndex: "Address", ...FilterColumn("address") },
    {
      title: "Số điện thoại",
      dataIndex: "Phone",
      ...FilterColumn("district"),
    },
    {
      render: () => (
        <>
          <Link
            href={{
              pathname: "/option/center/rooms-detail/[slug]",
              query: { slug: 2 },
            }}
          >
            <Tooltip title="Xem phòng">
              <button className="btn btn-icon">
                <Info />
              </button>
            </Tooltip>
          </Link>

          <Tooltip title="Cập nhật trung tâm">
            <button
              className="btn btn-icon edit"
              onClick={() => setCenterForm(true)}
            >
              <RotateCcw />
            </button>
          </Tooltip>
        </>
      ),
    },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const { showNoti } = useWrap();
  //get data Center

  const getAllBranch = () => {
    setIsLoading(true);

    (async () => {
      try {
        const res = await branchApi.getAll();
        setIsLoading(false);
        res.status == 200 && setCenter(res.data.createAcc);
      } catch (error) {
        showNoti("danger", error.message);
      }
    })();
  };

  useEffect(() => {
    getAllBranch();
  }, []);

  return (
    <Fragment>
      <PowerTable
        loading={isLoading}
        addClass="basic-header"
        TitlePage="Danh sách trung tâm"
        TitleCard={
          <button
            onClick={() => setCenterForm(true)}
            className="btn btn-warning add-new"
          >
            Thêm mới
          </button>
        }
        dataSource={center}
        columns={columns}
        Extra={
          <div className="extra-table">
            <FilterTable />
            <SortBox />
          </div>
        }
      />

      <CenterForm visible={centerForm} onCancel={() => setCenterForm(false)} />
    </Fragment>
  );
};
Center.layout = LayoutBase;
export default Center;
