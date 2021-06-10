import { Button, Input, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state";

const Department = () => {
  const [isEditDepartment, setIsEditDepartMent] = useState(false);
  const [tempDepartment, setTempDepartment] = useState("");
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  function onSaveDepartment() {
    if (tempDepartment) {
      dispatch(
        actions.fetchUpdateUser({
          user,
          key: "department",
          value: tempDepartment,
          fetchKey: "department",
        })
      );
      setIsEditDepartMent(false);
    } else {
      message.error("소속은 필수 값입니다.");
    }
  }
  function onEditDepartment() {
    setIsEditDepartMent(true);
    setTempDepartment(user.department);
  }
  return (
    <>
      {isEditDepartment && (
        <Input
          autoFocus
          value={tempDepartment}
          onChange={(e) => setTempDepartment(e.target.value)}
          onPressEnter={onSaveDepartment}
          onBlur={() => setIsEditDepartMent(false)}
          style={{ width: "100%" }}
        />
      )}
      {!isEditDepartment && (
        <Button
          type="text"
          block
          onClick={onEditDepartment}
          style={{ textAlign: "left", padding: 0 }}
        >
          {user.department}
        </Button>
      )}
    </>
  );
};

export default Department;
