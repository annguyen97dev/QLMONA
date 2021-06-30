import React from "react";
import { Card } from "antd";
import TitlePage from "~/components/TitlePage";
import { fileItems } from "~/lib/document-list/data";
import FileManagerForm from "~/components/Global/FileManager";

const DocumentList = () => {
  return (
    <>
      <div>
        <TitlePage title="Danh sách tài liệu" />
      </div>
      <Card title="Danh sách tài liệu">
        <FileManagerForm fileItems={fileItems} />
      </Card>
    </>
  );
};

export default DocumentList;
