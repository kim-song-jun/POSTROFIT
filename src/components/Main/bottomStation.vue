<template>
  <div class="bottomStation_container">
    <menuBar />
    <div class="bottomStation_content">
      <div class="bottomStation_searchBar">
        <input
          type="search"
          name="stationSearch"
          placeholder="역 이름을 검색하세요"
        />
        <button>search</button>
      </div>
      <div class="bottomStation_stationList">
        <div>
          <label><h4>호선</h4></label>
          <div class="bottomStation_lines">
            <div class="bottomStation_line" style="background-color: #000">
              전체
            </div>
            <div
              v-for="(line, i) in lines"
              :key="i"
              class="bottomStation_line"
              :style="{backgroundColor: line.color}"
              @click="changeLine"
            >
              {{ line.name }}
            </div>
          </div>
        </div>
        <div>
          <label><h4>역</h4></label>
          <div class="bottomStation_stations">
            <div class="bottomStation_station">사당</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuBar from '../menuBar.vue';

export default {
  data() {
    return {
      lines: [
        {name: '1호선', color: '#0052A4'},
        {name: '2호선', color: '#00A84D'},
        {name: '3호선', color: '#EF7C1C'},
        {name: '4호선', color: '#00A5DE'},
        {name: '5호선', color: '#996CAC'},
        {name: '6호선', color: '#CD7C2F'},
        {name: '7호선', color: '#747F00'},
        {name: '8호선', color: '#E6186C'},
        {name: '9호선', color: '#BDB092'},
        {name: '인천1호선', color: '#7CA8D5'},
        {name: '인천2호선', color: '#ED8B00'},
        {name: '수인분당선', color: '#F5A200'},
        {name: '신분당선', color: '#D4003B'},
        {name: '경의중앙선', color: '#77C4A3'},
        {name: '공항철도', color: '#0090D2'},
        {name: '경춘선', color: '#0C8E72'},
      ],
    };
  },
  computed: {},
  methods: {
    changeLine(event) {
      console.log(event.target.style);
    },
  },
  mounted() {},
  components: {
    menuBar,
  },
};
</script>

<style>
.bottomStation_container {
  position: fixed;
  z-index: 10;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 80vh;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  /* background: #fff 0% 0% no-repeat padding-box; */
  opacity: 1;
}
.bottomStation_stationList {
  display: flex;
  flex-direction: row;
}
.bottomStation_lines {
  width: 35vw;
  height: 62vh;
  padding: 0px 10px;
  overflow: scroll;
}
.bottomStation_line {
  display: flex;
  min-width: 60px;
  min-height: 40px;
  height: 40px;
  margin-bottom: 8px;
  /* background-color: #6fbb69; */
  color: #fff;
  align-items: center;
  justify-content: center;
}
.bottomStation_stations {
  width: 65vw;
}
.bottomStation_station {
  border: thin solid #ccc;
  padding: 10px;
}
</style>
