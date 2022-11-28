<template>
  <div>
    <img src="../../assets/images/노선도.png" usemap="#image_map" />

    <map name="image_map">
      <area alt="충정로" title="충정로" coords="56,296,8" shape="circle" />
      <area
        alt="시청"
        title="시청"
        coords="110,296,8"
        shape="circle"
        @click="this.clickHandler('title')"
        target="_blank"
      />
      <area
        alt="을지로입구"
        title="을지로입구"
        coords="161,296,5"
        shape="circle"
      />
      <area
        alt="을지로 3가"
        title="을지로 3가"
        coords="213,296,8"
        shape="circle"
      />
      <area
        alt="을지로 4가"
        title="을지로 4가"
        coords="265,296,8"
        shape="circle"
      />
      <area
        alt="동대문역사문화공원"
        title="동대문역사문화공원"
        coords="318,296,8"
        shape="circle"
      />
      <area alt="신당" title="신당" coords="369,296,8" shape="circle" />
      <area alt="상왕십리" title="상왕십리" coords="420,296,5" shape="circle" />
      <area alt="왕십리" title="왕십리" coords="473,296,8" shape="circle" />
      <area alt="한양대" title="한양대" coords="525,296,5" shape="circle" />
      <area alt="뚝섬" title="뚝섬" coords="577,296,5" shape="circle" />
      <area alt="성수" title="성수" coords="630,296,8" shape="circle" />
      <area alt="건대입구" title="건대입구" coords="630,341,9" shape="circle" />
      <area alt="구의" title="구의" coords="630,387,6" shape="circle" />
      <area alt="강변" title="강변" coords="630,432,6" shape="circle" />
      <area alt="잠실나루" title="잠실나루" coords="630,476,6" shape="circle" />
      <area alt="잠실" title="잠실" coords="630,521,8" shape="circle" />
      <area alt="잠실새내" title="잠실새내" coords="630,566,8" shape="circle" />
      <area
        alt="종합운동장"
        title="종합운동장"
        coords="630,613,6"
        shape="circle"
      />
      <area alt="삼성" title="삼성" coords="630,655,6" shape="circle" />
      <area alt="선릉" title="선릉" coords="630,700,8" shape="circle" />
      <area alt="역삼" title="역삼" coords="593,734,6" shape="circle" />
      <area alt="강남" title="강남" coords="548,734,6" shape="circle" />
      <area alt="교대" title="교대" coords="505,734,8" shape="circle" />
      <area alt="서초" title="서초" coords="462,734,6" shape="circle" />
      <area alt="방배" title="방배" coords="419,734,6" shape="circle" />
      <area alt="사당" title="사당" coords="378,734,8" shape="circle" />
      <area alt="낙성대" title="낙성대" coords="334,734,6" shape="circle" />
      <area
        alt="서울대입구"
        title="서울대입구"
        coords="291,734,6"
        shape="circle"
      />
      <area alt="봉천" title="봉천" coords="248,734,6" shape="circle" />
      <area alt="신림" title="신림" coords="207,734,6" shape="circle" />
      <area alt="신대방" title="신대방" coords="164,734,6" shape="circle" />
      <area
        alt="구로디지털단지"
        title="구로디지털단지"
        coords="119,734,6"
        shape="circle"
      />
      <area alt="대림" title="대림" coords="77,734,8" shape="circle" />
      <area alt="신도림" title="신도림" coords="15,734,8" shape="circle" />
      <area alt="문래" title="문래" coords="15,671,6" shape="circle" />
      <area
        alt="영드포구청"
        title="영드포구청"
        coords="15,626,6"
        shape="circle"
      />
      <area alt="당산" title="당산" coords="15,580,8" shape="circle" />
      <area alt="합정" title="합정" coords="15,537,8" shape="circle" />
      <area alt="홍대입구" title="홍대입구" coords="15,491,8" shape="circle" />
      <area alt="신촌" title="신촌" coords="15,447,6" shape="circle" />
      <area alt="이대" title="이대" coords="15,403,6" shape="circle" />
      <area alt="아현" title="아현" coords="15,357,6" shape="circle" />
      <area alt="도림천" title="도림천" coords="15,793,6" shape="circle" />
      <area alt="양천구청" title="양천구청" coords="54,828,6" shape="circle" />
      <area
        alt="신정네거리"
        title="신정네거리"
        coords="99,830,6"
        shape="circle"
      />
      <area alt="까치산" title="까치산" coords="148,829,6" shape="circle" />
      <area alt="용답" title="용답" coords="630,231,6" shape="circle" />
      <area alt="신답" title="신답" coords="593,130,6" shape="circle" />
      <area alt="용두" title="용두" coords="550,128,6" shape="circle" />
      <area alt="신설동" title="신설동" coords="503,128,8" shape="circle" />
    </map>
    <div class="line2_popup">popup</div>
  </div>
</template>

<script>
export default {
  name: "line-2",
  methods: {
    clickHandler(title) {
      alert(title);
    },
  },
};
</script>

<style>
.line2_popup {
  background-color: black;
  color: white;
  border-radius: 10px;
  width: 8px;
  height: 8px;
  top: 300px;
  left: 60px;
  position: absolute;
}
</style>
