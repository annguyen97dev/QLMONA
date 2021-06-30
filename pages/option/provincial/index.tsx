import React from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../lib/option/dataOption";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import ProvincialForm from "~/components/Global/Option/ProvincialForm";
import LayoutBase from "~/components/LayoutBase";

const Provincial = () => {
  const columns = [
    {
      title: "Provincial",
      dataIndex: "provincial",
      ...FilterColumn("provincial"),
    },
    { title: "Districts", dataIndex: "district", ...FilterColumn("district") },
    {
      title: "Modified By",
      dataIndex: "rpCreator",
      ...FilterColumn("rpCreator"),
    },
    {
      title: "Modified Date",
      dataIndex: "regDate",
      ...FilterDateColumn("regDate"),
    },

    {
      render: () => (
        <>
          <ProvincialForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <PowerTable
      addClass="basic-header"
      TitlePage="Provincial List"
      TitleCard={<ProvincialForm showAdd={true} />}
      dataSource={data}
      columns={columns}
      Extra={
        <div className="extra-table">
          <FilterTable />
          <SortBox />
        </div>
      }
    />
  );
};
Provincial.layout = LayoutBase;
export default Provincial;
