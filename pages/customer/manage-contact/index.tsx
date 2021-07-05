import React from "react";
import PowerTable from "~/components/PowerTable";
import TitlePage from "~/components/TitlePage";
import FilterColumn from "~/components/Tables/FilterColumn";
import FilterTable from "~/components/Global/CourseList/FitlerTable";
import FilterDateColumn from "~/components/Tables/FilterDateColumn";
import ManageContactForm from "~/components/Global/Customer/ManageContactForm";
import SortBox from "~/components/Elements/SortBox";
import LayoutBase from "~/components/LayoutBase";
import { dataManageContact } from "~/lib/customer/dataManageContact";

const ManageContact = () => {
  const dataOptions = [
    {
      text: "Contact form",
      value: "Contact form"
    },
    {
      text: "Nhập tay (Lấy ct người quen, facebook,… )",
      value: "Nhập Tay"
    },
    {
      text: "Từ tổng đài hot line",
      value: "Từ tổng đài hot line"
    },
    {
      text: "Từ liên hệ website (tawk)",
      value: "Từ liên hệ website (tawk)"
    },
  ]
  const columns = [
        {
          title: "Họ và tên",
          dataIndex: "FullName",
          ...FilterColumn("FullName"),
          render: (FullName) => <span className="tag green">{FullName}</span>,
        },
        { title: "Dự án", dataIndex: "Project", ...FilterColumn("Project") },
        { title: "Tài khoản", dataIndex: "User" },
        { title: "Số điện thoại", dataIndex: "PhoneNumber" },
        { title: "Email", dataIndex: "Email" },
        { title: "Địa chỉ", dataIndex: "Address" },
        {
            title: "Trạng thái",
            dataIndex: "Status",
            align: "center",
            render: (status) => {
              return (
                <>
                  {status == "Mới" ? (
                    <span className="tag green">{status}</span>
                  ) : (
                    <span className="tag gray">{status}</span>
                  )}
                </>
              );
            },
            filters: [
              {
                text: "Mới",
                value: "Mới",
              },
              {
                text: "Liên lạc lại",
                value: "Liên lạc lại",
              },
              {
                text: "Tạm chưa làm",
                value: "Tạm chưa làm",
              },
              {
                text: "Đang cân nhắc",
                value: "Đang cân nhắc",
              },
              {
                text: "Dọ giá",
                value: "Dọ giá",
              },
              {
                text: "Đã chuyển đổi",
                value: "Đã chuyển đổi",
              },
              {
                text: "Fail",
                value: "Fail"
              }
            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
          },
        {
          render: () => (
            <>
              <ManageContactForm showIcon={true} />
            </>
          ),
        },
      ];

    return (
        <div className="row">
        <div className="col-12">
          <TitlePage title="Discount List" />
        </div>
        <div className="col-12">
          <PowerTable
            addClass="basic-header"
            TitleCard={<ManageContactForm showAdd={true} />}
            dataSource={dataManageContact}
            columns={columns}
            Extra={
              <div className="extra-table">
                <SortBox dataOption={dataOptions} />
              </div>
            }
          />
        </div>
      </div>
    )
}

ManageContact.layout = LayoutBase;

export default ManageContact;
