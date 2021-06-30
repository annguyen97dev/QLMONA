import React, { useState } from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../../lib/option/dataOption";
import LayoutBase from "~/components/LayoutBase";
import { Tooltip } from "antd";
import RoomForm from "~/components/Global/Option/RoomForm";
import { RotateCcw } from "react-feather";
import SortBox from "~/components/Elements/SortBox";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";

const Center = () => {
  const [roomForm, setRoomForm] = useState(false);
  const columns = [
    { title: "Phòng", dataIndex: "room", ...FilterColumn("room") },
    { title: "Lầu", dataIndex: "floor", ...FilterColumn("floor") },
    {
      title: "Người cập nhật",
      dataIndex: "rpCreator",
      ...FilterColumn("rpCreator"),
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "regDate",
      ...FilterDateColumn("regDate"),
    },
    {
      render: () => (
        <>
          <Tooltip title="Cập nhật phòng">
            <button
              className="btn btn-icon edit"
              onClick={() => setRoomForm(true)}
            >
              <RotateCcw />
            </button>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
      <PowerTable
        addClass="basic-header"
        TitlePage="Danh sách phòng"
        TitleCard={
          <button
            onClick={() => setRoomForm(true)}
            className="btn btn-warning add-new"
          >
            Thêm mới
          </button>
        }
        dataSource={data}
        columns={columns}
        Extra={
          <div className="extra-table">
            <FilterTable />
            <SortBox />
          </div>
        }
      />
      <RoomForm visible={roomForm} onCancel={() => setRoomForm(false)} />
    </>
  );
};
Center.layout = LayoutBase;

export default Center;
