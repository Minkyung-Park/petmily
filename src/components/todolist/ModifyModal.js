import { CancelButton, ModifyButton, SubmitButton } from "../common/Button";

const ModifyModal = ({
  modifyModalRef,
  modifyYes,
  modifyNo,
  modifyInsert,
  setModifyInsert,
  onModifyInsert,
}) => {
  const onSubmit = event => {
    onModifyInsert(modifyInsert);

    // submit 이벤트는 브라우저에서 새로고침 발생시킴
    // 이를 방지하기 위해 아래 함수 호출

    event.preventDefault();

    setModifyInsert("");
  };
  return (
    <div className="modifybox" ref={modifyModalRef}>
      <form className="todo-right-create-box">
        <input
          className="todo-right-create-input"
          placeholder="할 일을 입력하세요."
          value={modifyInsert}
          onChange={e => {
            setModifyInsert(e.target.value);
          }}
        />

        <ModifyButton
          className="modify-button-yes"
          type="submit"
          onClick={event => {
            modifyYes(event);
            onSubmit(event);
          }}
          label="수정"
        ></ModifyButton>
      </form>
      <CancelButton
        className="delete-button no"
        onClick={modifyNo}
        label="취소"
      ></CancelButton>
    </div>
  );
};

export default ModifyModal;
