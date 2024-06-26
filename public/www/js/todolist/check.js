const onClickDeleteButton = deleteElem => {
  deleteElem.closest("li").remove();
};
const onClickCheckButton = checkElem => {
  checkElem.closest("li").remove();
};
const inputBoxElem = document.querySelector(".todo-right-detail-text");

const onClickCheckbox = svgElement => {
  const listItem = svgElement.closest("li");
  const isEmptyCheckbox = svgElement.classList.contains(
    "todo-right-detail-left-icon-empty",
  );
  const [emptyCheckbox, filledCheckbox] = listItem.querySelectorAll(
    ".todo-right-detail-left-icon-empty, .todo-right-detail-left-icon",
  );
  const titleText = listItem.querySelector(".todo-right-detail-text");

  if (isEmptyCheckbox) {
    // 빈 체크박스를 클릭한 경우
    emptyCheckbox.style.display = "none";
    filledCheckbox.style.display = "flex";
    titleText.style.textDecoration = "line-through";

    document.querySelector(".todo-left-box").innerHTML += `
    <div class="todo-left-detail">
    <div class="todo-left-detail-box">
      <p>05.26 완료</p>
      <h4>안녕하세요</h4>
    </div>
    <div class="todo-left-detail-delete">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 15 16"
        fill="none"
      >
        <path
          d="M14.8164 14.501C14.8731 14.5538 14.9185 14.6175 14.9501 14.6883C14.9816 14.759 14.9985 14.8354 14.9999 14.9129C15.0013 14.9904 14.987 15.0673 14.958 15.1391C14.929 15.211 14.8858 15.2762 14.831 15.331C14.7762 15.3858 14.711 15.429 14.6391 15.458C14.5673 15.487 14.4904 15.5013 14.4129 15.4999C14.3354 15.4985 14.259 15.4816 14.1883 15.4501C14.1175 15.4185 14.0538 15.3731 14.001 15.3164L7.48561 8.80196L0.970225 15.3164C0.860859 15.4183 0.716208 15.4738 0.566746 15.4711C0.417283 15.4685 0.274679 15.4079 0.168977 15.3022C0.0632745 15.1965 0.00272697 15.0539 8.98826e-05 14.9045C-0.00254721 14.755 0.052932 14.6104 0.15484 14.501L6.66926 7.98561L0.15484 1.47022C0.052932 1.36086 -0.00254721 1.21621 8.98826e-05 1.06675C0.00272697 0.917283 0.0632745 0.774679 0.168977 0.668977C0.274679 0.563274 0.417283 0.502727 0.566746 0.50009C0.716208 0.497453 0.860859 0.552932 0.970225 0.65484L7.48561 7.16926L14.001 0.65484C14.1104 0.552932 14.255 0.497453 14.4045 0.50009C14.5539 0.502727 14.6965 0.563274 14.8022 0.668977C14.9079 0.774679 14.9685 0.917283 14.9711 1.06675C14.9738 1.21621 14.9183 1.36086 14.8164 1.47022L8.30196 7.98561L14.8164 14.501Z"
          fill="#98715F"
        />
      </svg>
    </div>
  </div>
  `;
  } else {
    // 채워진 체크박스를 클릭한 경우
    emptyCheckbox.style.display = "flex";
    filledCheckbox.style.display = "none";
    titleText.style.textDecoration = "none";
    document.querySelector(".todo-left-detail").remove();
  }
};
