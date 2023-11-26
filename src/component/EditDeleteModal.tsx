import React from "react";
import { EmpData, ModalMode, StateType } from "../utils/type";
import clsx from "clsx";

type Props = {
  modalOpen: boolean;
  editData: EmpData;
  HandleState: (newData: Partial<StateType>) => void;
  modalMode: Omit<ModalMode, "NoEdit">;
  RowNumber: number;
};

const EditDeleteModal = ({
  modalOpen,
  editData,
  HandleState,
  modalMode,
  RowNumber,
}: Props) => {
  const handleEditData = (e: React.ChangeEvent<HTMLInputElement>) => {
    HandleState({
      editData: { ...editData, [e.currentTarget.name]: e.currentTarget.value },
    });
  };

  return (
    <div
      className={clsx(
        "fixed left-[35vw] top-[35vh] w-[30vw] h-[30vh] bg-[white] border-[1px] border-black  z-10",
        {
          block: modalOpen,
          hidden: !modalOpen,
        }
      )}
      // onBlurCapture={(e) => HandleState({ isModalOpen: false })}
    >
      {modalMode === "EditMode" ? (
        <div className="absolute mx-[25%] my-[10%]">
          <div className="flex">
            <p className="block py-[2px] px-[4px] w-[100px] mr-[10%]">Name</p>
            <input
              className="border-1 border-black pl-[10px]"
              type="text"
              name="name"
              value={editData?.name?.length ? editData?.name : ""}
              onChange={(e) => handleEditData(e)}
            />
          </div>
          <div className="flex">
            <p className="block py-[2px] px-[4px] w-[100px] mr-[10%]">Age</p>
            <input
              className="border-1 border-black pl-[10px]"
              type="text"
              name="age"
              value={editData?.age}
              onChange={(e) => handleEditData(e)}
            />
          </div>
          <div className="flex">
            <p className="block py-[2px] px-[4px] w-[100px] mr-[10%]">City</p>
            <input
              className="border-1 border-black pl-[10px]"
              type="text"
              name="city"
              value={editData?.city?.length ? editData?.city : ""}
              onChange={(e) => handleEditData(e)}
            />
          </div>
          <div className="flex">
            <p className="block py-[2px] px-[4px] w-[100px] mr-[10%]">
              Pincode
            </p>
            <input
              className="border-1 border-black pl-[10px]"
              type="text"
              name="pinCode"
              value={editData?.pinCode?.length ? editData?.pinCode : ""}
              onChange={(e) => handleEditData(e)}
            />
          </div>
        </div>
      ) : (
        <div className="absolute mx-[25%] my-[10%]">Delete {RowNumber + 1}</div>
      )}
      <div className="absolute bottom-[10px] right-[10px]">
        <button
          className="py-[0.5px] px-[8px] bg-[red] text-white border-[0.5px] mr-2 hover:text-[red] hover:bg-[white] hover:border-[red] rounded"
          onClick={(e) =>
            HandleState({
              isModalOpen: false,
              selectedId: -1,
              modalMode: "NoMode",
              editData: {
                name: "",
                age: -1,
                city: "",
                pinCode: "",
              },
            })
          }
        >
          Cancel
        </button>
        <button
          className="py-[0.5px] px-[8px] bg-[blue] text-white border-[0.5px] hover:text-[blue] hover:bg-[white] hover:border-[blue] rounded"
          onClick={(e) =>
            HandleState({
              buttonAction: `${modalMode === "EditMode" ? "Edit" : "Delete"}`,
            })
          }
        >
          {modalMode === "EditMode" ? "Save" : "Confirm"}
        </button>
      </div>
    </div>
  );
};

export default EditDeleteModal;
