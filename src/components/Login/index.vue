<template>
  <div id="main">
    <Header/>
    <div id="content">
      <div class="login_body">
        <div>
          <input class="login_text" placeholder="请在此处输入用户名" type="text">
        </div>
        <div>
          <input class="login_text" placeholder="请在此处输入密码" type="password">
        </div>
        <div class="login_btn">
          <input type="submit" value="登录">
        </div>
        <div class="login_link">
          <a href="#">立即注册</a>
          <a href="#">找回密码</a>
        </div>
      </div>
    </div>
    <TabBar/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

export default {
  name: "Login",
  components: {
    Header,
    TabBar
  }
};
</script>

<style scoped>
#content .login_body {
  width: 100%;
  margin-top: 15px;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5px;
  outline: none;
  text-align: center;
  /*  */
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background-color: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: #ccc;
}
.login_body .login_link {
  display: flex;
  justify-content: space-around;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 14px;
  color: #e54847;
}
</style>
