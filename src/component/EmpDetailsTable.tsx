import React from "react";
import { EmpData, StateType, ModalMode } from "../utils/type";
import EmpRecord from "./EmpRecord";

type Props = {
  dataArray: EmpData[];
  HandleState: (newData: Partial<StateType>) => void;
  // isModalOpen: boolean;
  // modalMode: ModalMode;
};

const tableHeaders = ["S.No.", "Name", "Age", "Address", "Actions"];

const EmpDetailsTable = ({
  dataArray,
  HandleState,
}: // isModalOpen,
// modalMode,
Props) => {
  return (
    <table className="table-auto m-1">
      <thead>
        <tr className="py-[15px] m-[16px]">
          {tableHeaders.map((ele, i) => (
            <th className="w-[20vw] py-2 text-left px-4" key={i}>
              {ele}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataArray?.map((ele, i) => (
          <EmpRecord
            key={i}
            rowId={i}
            data={ele}
            HandleState={HandleState}
            // isModalOpen={isModalOpen}
            // modalMode={modalMode}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmpDetailsTable;
