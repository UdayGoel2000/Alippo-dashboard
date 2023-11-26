import React from "react";
import { EmpData, StateType } from "../utils/type";
// import EditDeleteModal from "./EditDeleteModal";

type Props = {
  rowId: number;
  data: EmpData;
  HandleState: (newData: Partial<StateType>) => void;
  // isModalOpen: boolean;
  // modalMode: ModalMode;
};

const EmpRecord = ({
  rowId,
  data,
  HandleState,
}: // isModalOpen,
// modalMode,
Props) => {
  return (
    <tr className="py-[20px] m-1 mb-0 hover:bg-[#EBEEEF]">
      <td className="px-4 py-1">{rowId + 1}</td>
      <td className="px-4 py-1">{data.name}</td>
      <td className="px-4 py-1">{data.age}</td>
      <td className="px-4 py-1">
        {data.city}, {data.pinCode}
      </td>
      <td className="px-4 py-1 flex justify-start content-center gap-[10px]">
        <button
          className="py-[0.5px] px-[8px] bg-[blue] text-white border-[0.5px] hover:text-[blue] hover:bg-[white] hover:border-[0.5px] hover:border-[blue] rounded"
          onClick={(e) =>
            HandleState({
              selectedId: rowId,
              isModalOpen: true,
              modalMode: "EditMode",
            })
          }
        >
          Edit
        </button>

        <button
          className="py-[0.5px] px-[8px] bg-[red] text-white border-[0.5px] hover:text-[red] hover:bg-[white] hover:border-[0.5px] hover:border-[red]  rounded"
          onClick={(e) =>
            HandleState({
              selectedId: rowId,
              isModalOpen: true,
              modalMode: "DeleteMode",
            })
          }
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EmpRecord;
