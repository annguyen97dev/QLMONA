import React, { useEffect } from "react";
import { Table, Card } from "antd";
import TitlePage from "~/components/TitlePage";
import { useWrap } from "~/context/wrap";

const PowerTable = (props) => {
  const { getTitlePage } = useWrap();

  useEffect(() => {
    if (props.TitlePage) {
      getTitlePage(props.TitlePage);
    }
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12">
          {/* <TitlePage title={props.TitlePage} /> */}
          <div className="wrap-table">
            <Card
              className={`cardRadius ${props.addClass && props.addClass} ${
                props.Size ? props.Size : ""
              }`}
              title={props.Extra}
              extra={props.TitleCard}
            >
              {props.children}
              <Table
                loading={props.loading && props.loading}
                bordered={props.haveBorder ? props.haveBorder : false}
                scroll={props.noScroll ? { x: "max-content" } : { x: 600 }}
                columns={props.columns}
                dataSource={props.dataSource}
                size="middle"
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerTable;
