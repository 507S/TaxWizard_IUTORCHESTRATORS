import React, { useMemo, useState } from "react";

import { Button, Popover } from "antd";

const content = (
  <div>
    <p>
      <i className="fa fa-angle-right" aria-hidden="true"></i>&nbsp;
      <i>Provide Total Income Value</i>
    </p>
    <p>
      <i className="fa fa-angle-right" aria-hidden="true"></i>&nbsp;{" "}
      <i>Press the button Calculate</i>
    </p>
  </div>
);
const buttonWidth = 80;
export default function TaxCalculationSidebar() {
  const [arrow, setArrow] = useState("Show");
  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }
    if (arrow === "Show") {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  return (
    <>
      <div className="card">
        <h5 className="card-header">Income Tax Calculator</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label className="form-label">Total income:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="totalIncome"
                    placeholder="Enter your total income"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Calculate
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <h5 className="card-title">Calculation Result</h5>
              <p className="card-text">
                The calculated result will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ float: "right", marginTop:"50px" }}>
        <Popover placement="left" content={content} arrow={mergedArrow}>
          <Button >Instructions</Button>
        </Popover>
      </div>
    </>
  );
}
