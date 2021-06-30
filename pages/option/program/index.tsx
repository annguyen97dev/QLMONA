import React from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../lib/option/dataOption";
import ProgramForm from "~/components/Global/Option/ProgramForm";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import LayoutBase from "~/components/LayoutBase";
const Program = () => {
  const columns = [
    { title: "Grade", dataIndex: "grade", ...FilterColumn("grade") },
    { title: "Class", dataIndex: "class", ...FilterColumn("class") },
    { title: "Price", dataIndex: "price" },
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
      title: "Type",
      dataIndex: "status",
      align: "center",
      render: (status) => (
        <>
          {status == "online" ? (
            <span className="tag green">{status}</span>
          ) : (
            <span className="tag black">{status}</span>
          )}
        </>
      ),
    },
    {
      render: () => (
        <>
          <ProgramForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <PowerTable
      addClass="basic-header"
      TitlePage="Programs list"
      TitleCard={<ProgramForm showAdd={true} />}
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
Program.layout = LayoutBase;
export default Program;
