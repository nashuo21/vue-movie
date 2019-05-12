<template>
  <div class="movie_body" ref="movie_body">
    <Loading v-if="isLoading"/>
    <Scroller v-else :toScroll="toScroll" :toTouchEnd="toTouchEnd">
      <ul>
        <li class="pullDown">
          <div>
            <i v-if="isScroll" class="iconfont icon-dengdai"></i>
            {{pullDownMsg}}
          </div>
        </li>
        <li @tap="toDetail" v-for="item in movieList" :key="item.id">
          <div class="pic_show">
            <img :src="item.img | setWH('128.180')" :alt="item.nm">
          </div>
          <div class="info_list">
            <h2>{{item.nm}}</h2>
            <p>
              评分：
              <span class="grade">{{item.sc}}</span>
            </p>
            <p>主演：{{item.star}}</p>
            <p>
              <span>{{item.showInfo}}</span>
            </p>
            <i v-if="item.version" class="iconfont icon-Dyanjing"></i>
          </div>

          <div class="btn_mall">购票</div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
export default {
  name: "Hot",
  data() {
    return {
      movieList: [],
      pullDownMsg: "",
      isScroll: false,
      isLoading: true,
      prevCityId: -1
    };
  },
  activated() {
    var cityId = this.$store.state.city.id;
    if (this.prevCityId === cityId) {
      return;
    }
    this.isLoading = true;

    this.axios.get("/api/movieOnInfoList?cityId=" + cityId).then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.movieList = res.data.data.movieList;
        this.isLoading = false;
        this.prevCityId = cityId;
      }
    });
  },
  methods: {
    toDetail() {
      console.log("跳转到影片详情页");
    },
    toScroll(pos) {
      this.isScroll = true;
      if (pos.y > 20) {
        this.pullDownMsg = "更新中……";
      }
    },
    toTouchEnd(pos) {
      if (pos.y > 20) {
        this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
          var msg = res.data.msg;
          if (msg === "ok") {
            setTimeout(() => {
              this.movieList = res.data.data.movieList;
              this.pullDownMsg = "";
            }, 1000);
            this.isScroll = false;
            this.pullDownMsg = "更新成功 :)";
          }
        });
      }
      // clearTimeout();
    }
  },
  components: {}
};
</script>

<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 80px;
}
.movie_body .pic_show img {
  width: 100%;
  height: 110px;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 16px;
  line-height: 24px;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 12px;
  color: #666;
  line-height: 22px;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 70px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  /* flex: 1; */
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
.icon-Dyanjing {
  color: #f03d37;
  font-size: 20px;
}
.movie_body .pullDown,
.movie_body .pullDown div {
  margin: 0 auto;
  padding: 0;
  border: none;
}
.movie_body .pullDown div {
  width: 200px;
  text-align: center;
  color: #f03d37;
  font-size: 16px;
  /* height: 20px;
  line-height: 20px; */
}
</style>
