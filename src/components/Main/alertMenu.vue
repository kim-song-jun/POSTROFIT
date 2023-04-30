<template>
  <div class="alertMenu_container">
    <div class="alertMenu_content">
      <img
        class="alertMenu_user_circle"
        src="../assets/images/user.png"
        alt=""
      />
      <div class="alertMenu_notation">{{ notation }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notation: '옮길게요 ~ 강남역 A 24호',
    };
  },
};
</script>

<style>
.alertMenu_container {
  position: fixed;
  /* Layout Properties */
  top: 30.5vw;
  left: 3.7vw;
  width: 92vw;
  height: 9vw;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-f5f5f5); */
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 2px 3px 5px #00000029;
  border: 1px solid #f5f5f5;
  border-radius: 1.5vw;
  opacity: 1;
}
.alertMenu_content {
  width: 100%;
  display: flex;
  align-items: center;
}
.alertMenu_user_circle {
  width: 5vw;
  height: 5.5vw;
  margin: 1.8vw 3.8vw;
  /* UI Properties */
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 6.5vw;
  opacity: 1;
}
.alertMenu_notation {
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-16) / var(--unnamed-line-spacing-21)
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fafafa); */
  text-align: left;
  font: normal normal bold 16px/21px Roboto;
  letter-spacing: 0px;
  color: #fafafa;
  opacity: 1;
}
</style>
