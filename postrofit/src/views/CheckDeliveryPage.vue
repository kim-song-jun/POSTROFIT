<template>
  <div class="checkDeliveryPage_container">
    <checkModal
      v-if="checkModalOpen"
      @closeCheckModal="checkModalOpen = false"
    />
    <div class="checkDeliveryPage_content">
      <div class="checkDeliveryPage_info">
        <locationBox />
        <div class="checkDeliveryPage_text">
          요금: <span class="checkDeliveryPage_point">2000원</span>
        </div>
        <div class="checkDeliveryPage_text">
          사이즈: <span class="checkDeliveryPage_point">소형</span>
        </div>
      </div>
      <progressMenu />
      <noticeBox class="checkDeliveryPage_noticeBox"></noticeBox>
      <div class="checkDeliveryPage_button_container">
        <button class="checkDeliveryPage_button" @click="checkModalOpen = true">
          {{ $route.query.serviceType }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import progressMenu from '../components/progressMenu3.vue';
import locationBox from '../components/locationBox.vue';
import noticeBox from '@/components/noticeBox.vue';
import checkModal from '../components/checkModal.vue';

export default {
  data() {
    return {
      checkModalOpen: false,
    };
  },
  components: {
    progressMenu,
    locationBox,
    noticeBox,
    checkModal,
  },
};
</script>

<style>
.checkDeliveryPage_content {
  height: 92.7vh;
  overflow: scroll;
  scrollbar-width: none;
}
.checkDeliveryPage_content::-webkit-scrollbar {
  display: none;
}
.checkDeliveryPage_info {
  width: 82.5vw;
  margin: 5.3vh auto 7vh;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-32) Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal bold 24px/32px Roboto;
  letter-spacing: 0px;
  color: #707070;
}
.checkDeliveryPage_text {
  margin-left: 7vw;
  margin-bottom: 1.2vh;
}
.checkDeliveryPage_point {
  color: #6fbb69;
}
.checkDeliveryPage_noticeBox {
  width: 83vw;
}
.checkDeliveryPage_button {
  border: none;
  display: block;
  margin: 0vh auto 3vh;
  /* Layout Properties */
  width: 83vw;
  height: 5.5vh;
  /* UI Properties */
  /* background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box; */
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 2vw;
  opacity: 1;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff); */
  text-align: center;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
</style>
