import React, { useEffect, useState } from "react";
import PowerTable from "~/components/PowerTable";
import { data } from "../../../lib/option/dataOption";
import { Tooltip, Switch } from "antd";
import GradeForm from "~/components/Global/Option/GradeForm";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import SortBox from "~/components/Elements/SortBox";
import LayoutBase from "~/components/LayoutBase";
import { courseApi } from "~/apiBase";
import { useWrap } from "~/context/wrap";

const Grade = () => {
  const [dataCourse, setDataCourse] = useState<ICourse[]>([]);
  const { showNoti } = useWrap();
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    { title: "Grade", dataIndex: "ListCourseName", ...FilterColumn("grade") },
    {
      title: "Description",
      dataIndex: "Description",
    },
    // {
    //   title: "Modified By",
    //   dataIndex: "rpCreator",
    //   ...FilterColumn("rpCreator"),
    // },
    {
      title: "Create on",
      dataIndex: "CreateOn",
      ...FilterDateColumn("regDate"),
    },
    {
      title: "Hidden",
      dataIndex: "Enable",
      render: (Enable) => (
        <>
          <Switch
            checkedChildren="Hidden"
            unCheckedChildren="Hidden"
            checked={Enable}
            size="default"
          />
        </>
      ),
    },
    {
      render: () => (
        <>
          <Tooltip title="Cập nhật trung tâm">
            <GradeForm showIcon={true} />
          </Tooltip>
        </>
      ),
    },
  ];

  console.log("Data course: ", dataCourse);

  // GET DATA COURSE
  const getDataCourse = () => {
    setIsLoading(true);
    (async () => {
      try {
        let res = await courseApi.getAll();
        res.status == 200 && setDataCourse(res.data.acc);
      } catch (error) {
        showNoti("danger", error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  };

  // CHECK ADD DATA SCUCCESS
  const addDataSuccess = (isSuccess: boolean) => {
    isSuccess && getDataCourse();
  };

  useEffect(() => {
    getDataCourse();
  }, []);

  // useEffect(() => {
  //   dataSuccess && getDataCourse();
  // }, [dataSuccess]);

  return (
    <PowerTable
      addDataSuccess={addDataSuccess}
      loading={isLoading}
      addClass="basic-header"
      TitlePage="Danh sách khối học"
      TitleCard={<GradeForm showAdd={true} />}
      dataSource={dataCourse}
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
Grade.layout = LayoutBase;
export default Grade;
