import React from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../lib/option/dataOption";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import SortBox from "~/components/Elements/SortBox";
import { Switch } from "antd";
import StudyTimeForm from "~/components/Global/Option/StudyTimeForm";
import LayoutBase from "~/components/LayoutBase";
const StudyTime = () => {
  const columns = [
    { title: "Study time", dataIndex: "studyTime" },
    { title: "Lesson", dataIndex: "grade", ...FilterColumn("grade") },
    { title: "Start", dataIndex: "start" },
    { title: "End", dataIndex: "end" },
    {
      title: "Hidden",
      render: () => (
        <Switch
          checkedChildren="Hidden"
          unCheckedChildren="Hidden"
          size="default"
        />
      ),
    },
    {
      render: () => (
        <>
          <StudyTimeForm showIcon={true} />
        </>
      ),
    },
  ];

  return (
    <PowerTable
      addClass="basic-header"
      TitlePage="Study time list"
      TitleCard={<StudyTimeForm showAdd={true} />}
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
StudyTime.layout = LayoutBase;
export default StudyTime;
