<template>
  <div class="historyReceipt_container">
    <div class="historyReceipt_textbox3">
      <div class="historyReceipt_history_date userPage_text2">10/15</div>
      <div class="historyReceipt_history_type userPage_text5">옮길게요</div>
      <div class="historyReceipt_history_size userPage_text2">중형</div>
    </div>
    <div class="historyReceipt_textbox4">
      <div class="historyReceipt_history_location userPage_text3">
        <div class="historyReceipt_history_src">사당</div>
        <div class="historyReceipt_history_direction">
          <img class="userPage_image" src="@/assets/images/arrow.png" alt="" />
        </div>
        <div class="historyReceipt_history_dst">강남</div>
      </div>
      <div class="historyReceipt_history_price userPage_text1">2500원</div>
    </div>
    <div class="historyReceipt_history_arrow">
      <div class="userPage_arrow_top"></div>
      <div class="userPage_arrow_bottom"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.historyReceipt_container {
  position: relative;
  margin-top: 2.5vw;
  padding: 2.5vw 5vw;
  /* Layout Properties */
  width: 73vw;
  height: 10.5vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
  border-radius: 5vw;
  opacity: 1;
}
.historyReceipt_cancel {
  background: #7070703b 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
}
.historyReceipt_active {
  box-shadow: 0px 3px 6px #00000033;
  border: 1px solid #6fbb69;
}
.historyReceipt_textbox3 {
  display: flex;
  align-items: center;
}
.historyReceipt_textbox4 {
  display: flex;
  align-items: center;
  margin-top: 0.5vw;
}
.historyReceipt_history_type {
  margin: 0vw 28vw 0vw 11vw;
}
.historyReceipt_history_location {
  display: flex;
}
.historyReceipt_history_direction {
  width: 3.7vw;
  height: 3.5vw;
  margin: 0vw 2vw;
}
.historyReceipt_history_price {
  margin-left: 22vw;
}
.historyReceipt_history_arrow {
  position: absolute;
  left: 78vw;
  top: 6.5vw;
  height: 2.5vw;
  width: 1.5vw;
  transform: rotate(180deg);
}
</style>
