<template>
  <div class="usingLocker">
    <div
      v-show="this.page != 0"
      class="usingLocker_prevArrow"
      @click="prevLocker"
    >
      <div class="usingLocker_prevArrow_top"></div>
      <div class="usingLocker_prevArrow_bottom"></div>
    </div>
    <div
      v-show="this.page != this.circles.length - 1"
      class="usingLocker_arrow"
      @click="nextLocker"
    >
      <div class="usingLocker_arrow_top"></div>
      <div class="usingLocker_arrow_bottom"></div>
    </div>
    <div class="usingLocker_container" @click="move2LockerDetail">
      <div class="usingLocker_about">
        <div class="usingLocker_line_circle usingLocker_line_text">2</div>
        <div class="usingLocker_textbox2">
          <div class="userHome_text2">{{ userStore.location }}</div>
          <div class="userHome_text3">{{ userStore.station }}</div>
        </div>
      </div>
      <div class="userHome_text">
        요금:
        <span class="userHome_point_text">{{ userStore.fee }}원</span> / 4시간
      </div>
      <div class="usingLocker_empty"></div>
      <div class="userHome_text">
        사이즈:
        <span class="userHome_point_text">{{ userStore.size }}</span>
      </div>
      <div class="usingLocker_empty2"></div>
      <div class="userHome_text4">보관 기간</div>
      <div class="userHome_text3 usingLocker_time">
        {{ userStore.date }}
        <span class="userHome_point_text">{{ userStore.time }}</span> ~
      </div>
      <!-- <div class="userHome_text4 usingLocker_term">현재까지</div> -->
    </div>
    <div class="circles_container" v-if="circles.length > 1">
      <div
        class="gray_circles"
        v-for="(circle, i) in circles"
        :key="i"
        :style="{backgroundColor: page == i ? '#666' : '#ccc'}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circles: [0, 0, 0, 0, 0, 0],
      page: 0,
    };
  },
  computed: {
    userStore() {
      return this.$store.state.userStore;
    },
  },
  methods: {
    move2LockerDetail() {
      this.$store.commit('setServiceType', '내보관함');
      this.$router.push('/UserPage/locker');
    },
    prevLocker() {
      if (this.page > 0) this.page -= 1;
    },
    nextLocker() {
      if (this.page < this.circles.length - 1) this.page += 1;
    },
  },
  mounted() {
    const circlesContainer = document.querySelector('.circles_container');
    circlesContainer.style.width = `${this.circles.length * 12}px`;
  },
};
</script>

<style>
.usingLocker {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.usingLocker_empty {
  height: 1.8vw;
  width: 100%;
}
.usingLocker_empty2 {
  height: 5vw;
  width: 100%;
}
.usingLocker_container {
  margin-top: 1.3vw;
  padding: 5vw 5vw 0vw;
  position: relative;
  /* Layout Properties */
  width: 65vw;
  height: 51vw;
  /* UI Properties */
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
  border-radius: 20px;
  opacity: 1;
}
.usingLocker_about {
  margin-bottom: 4.5vw;
}
.usingLocker_line_circle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* Layout Properties */
  top: 5.5vw;
  left: 4vw;
  width: 9vw;
  height: 9vw;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  border-radius: 5vw;
}
.usingLocker_line_text {
  /* UI Properties */
  font: normal normal normal 20px/26px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #fff;
  opacity: 1;
}
.usingLocker_textbox2 {
  margin-left: 10.5vw;
}
.usingLocker_time {
  margin: 0vw auto;
  width: 54vw;
}
.usingLocker_arrow {
  position: relative;
  right: -47vw;
  top: 26vw;
}
.usingLocker_arrow .usingLocker_arrow_top,
.usingLocker_arrow .usingLocker_arrow_bottom,
.usingLocker_prevArrow .usingLocker_prevArrow_top,
.usingLocker_prevArrow .usingLocker_prevArrow_bottom {
  background-color: #666;
  height: 1.5px;
  width: 15px;
}
.usingLocker_arrow_top {
  transform: rotate(-135deg);
  transform-origin: bottom left;
}
.usingLocker_arrow_bottom {
  transform: rotate(135deg);
  transform-origin: top left;
}
.usingLocker_prevArrow {
  position: relative;
  right: 43vw;
  top: 26vw;
}
.usingLocker_prevArrow_top {
  transform: rotate(-45deg);
  transform-origin: bottom left;
}
.usingLocker_prevArrow_bottom {
  transform: rotate(45deg);
  transform-origin: top left;
}
.circles_container {
  min-width: 24px;
  max-width: 285px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin: 15px auto 0px; */
  margin-top: 15px;
}
.gray_circles {
  width: 8px;
  height: 8px;
  border-radius: 4px;
}
</style>
