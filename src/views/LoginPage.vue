<template>
  <div class="user_container">
    <div class="loginLogo">Login</div>
    <div
      class="userList"
      v-for="userID in userList"
      :key="userID"
      @click="login(userID)"
    >
      USER {{ userID }} 으로 접속
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [0, 1, 2, 3, 4],
    };
  },
  methods: {
    login(userID) {
      this.$store.commit('setUserID', userID);
      this.$router.push({path: '/MainPage'});
    },
  },
};
</script>

<style>
.user_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 50pt;
}
.userList {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  padding: 5px 10px;
  background-color: #e2e2e2;
  font-size: 20pt;
}
</style>
