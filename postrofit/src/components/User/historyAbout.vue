<template>
  <div class="historyList_container">
    <div
      v-for="(history, i) in userHistory"
      :key="i"
      class="historyAbout"
      :class="historyClass(history.hisType)"
      @click="move2HistoryDetail(history)"
    >
      <div class="historyAbout_arrow">
        <div class="historyAbout_arrow_top"></div>
        <div class="historyAbout_arrow_bottom"></div>
      </div>
      <div class="historyAbout_textbox3">
        <div class="historyAbout_history_date userHome_text2">
          {{ history.date }}
        </div>
        <div class="historyAbout_history_type userHome_text5">
          {{ history.type }}
        </div>
        <div class="historyAbout_history_size userHome_text2">
          {{ history.size }}
        </div>
      </div>
      <div class="historyAbout_textbox4">
        <div class="historyAbout_history_location">
          <div class="historyAbout_history_src">{{ history.place[0] }}</div>
          <div v-if="history.place[1]" class="historyAbout_history_direction">
            <img
              class="userHome_image"
              src="@/assets/images/arrow.png"
              alt=""
            />
          </div>
          <div v-if="history.place[1]" class="historyAbout_history_dst">
            {{ history.place[1] }}
          </div>
        </div>
        <div class="historyAbout_history_price">{{ history.price }}원</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userHistory() {
      return this.$store.state.userHistory;
    },
  },
  methods: {
    historyClass(type) {
      return type == 'end'
        ? ''
        : type == 'active'
        ? 'historyAbout_active'
        : 'historyAbout_cancel';
    },
    move2HistoryDetail(history) {
      this.$router.push(`/UserPage/${history.urn}`);
    },
  },
};
</script>

<style>
.historyAbout {
  position: relative;
  margin-top: 2.5vw;
  padding: 1.1vh 5vw 1.1vh 3vw;
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
.historyAbout_textbox3 {
  display: flex;
  align-items: center;
}
.historyAbout_textbox4 {
  display: flex;
  align-items: center;
  margin-top: 0.5vw;
}
.historyAbout_history_type {
  margin: 0vw 28vw 0vw 11vw;
}
.historyAbout_history_location {
  display: flex;
  font: normal normal normal 18px/26px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.historyAbout_history_direction {
  width: 3.7vw;
  height: 3.5vw;
  margin: 0vw 2vw;
}
.historyAbout_history_price {
  margin-left: auto;
  font: normal normal bold 18px/26px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.historyAbout_history_arrow {
  position: absolute;
  left: 78vw;
  top: 6.5vw;
  height: 2.5vw;
  width: 1.5vw;
  transform: rotate(180deg);
}
.historyAbout_arrow {
  position: absolute;
  /* height: 8vw; */
  /* width: 8vw; */
  right: 0vw;
  top: 7.5vw;
}
.historyAbout_arrow .historyAbout_arrow_top,
.historyAbout_arrow .historyAbout_arrow_bottom {
  background-color: #666;
  height: 1.5px;
  width: 10px;
}
.historyAbout_arrow_top {
  transform: rotate(-135deg);
  transform-origin: bottom left;
}
.historyAbout_arrow_bottom {
  transform: rotate(135deg);
  transform-origin: top left;
}
.historyAbout_cancel {
  background: #7070703b 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
}
.historyAbout_active {
  box-shadow: 0px 3px 6px #00000033;
  border: 1px solid #6fbb69;
}
</style>
