<template>
  <div id="detail-container" class="slide-enter-active">
    <Header title="影片详情">
      <i class="iconfont icon-xiazai6" @touchstart="toBack"></i>
    </Header>
    <div class="contentDetail" id="content">
      <div class="detail-list">
        <div class="detail-list-bg"></div>
        <div class="detail-list-filter"></div>
        <div class="detail-list-content">
          <div class="detail-list-img">
            <img :src="detailMovie.img | setWH('200.208')">
          </div>
          <div class="detail-list-info">
            <h2>{{detailMovie.nm}}</h2>
            <p>{{detailMovie.enm}}</p>
            <p>{{detailMovie.sc}}</p>
            <p>{{detailMovie.cat}}</p>
            <p>{{detailMovie.src}} / {{detailMovie.dur}}</p>
            <p>{{detailMovie.rt}}</p>
          </div>
        </div>
      </div>
      <div class="detail-intro">
        <p>{{detailMovie.dra}}</p>
      </div>
      <div class="detailPlayer swiper-container" ref="detailPlayer">
        <ul class="swiper-wrapper">
          <li v-for="(item,index) in detailMovie.photos" :key="index" class="swiper-slide">
            <div>
              <img :src="item | setWH('600.360')" alt>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Dtail",
  data() {
    return {
      detailMovie: {}
    };
  },
  components: {
    Header
  },
  props: ["movieId"],
  methods: {
    toBack() {
      this.$router.back();
    }
  },
  mounted() {
    this.axios.get("/api/detailmovie?movieId=" + this.movieId).then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.detailMovie = res.data.data.detailMovie;
        this.$nextTick(() => {
          new Swiper(this.$refs.detailPlayer, {
            slidesPerView: "auto",
            freeMode: true,
            freeModeSticky: true
          });
        });
        // console.log(this.detailMovie);
      }
    });
  }
};
</script>

<style scoped>
#detail-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background-color: #ffffff;
}
#content.contentDetail {
  display: block;
  margin-bottom: 0;
}
#content .detail-list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
#detail-container.slide-enter-active {
  animation: 0.3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.detail-list .detail-list-bg {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: url(/img/movie1.jpg) 0 40%;
  filter: blur(2px);
}

.detail-list .detail-list-filter {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #40454d;
  position: relative;
}
.detail-list .detail-list-content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.detail-list .detail-list-img {
  width: 108px;
  height: 150px;
  border: 1px solid #f0f2f3;
  margin: 20px;
}
.detail-list .detail-list-img img {
  width: 100%;
  height: 100%;
}
.detail-list .detail-list-info {
  margin-top: 20px;
}
.detail-list .detail-list-info h2 {
  font-size: 20px;
  color: #ffffff;
  font-weight: normal;
  line-height: 40px;
}
.detail-list .detail-list-info p {
  color: #ffffff;
  line-height: 20px;
  font-size: 14px;
}
#content .detail-intor {
  padding: 10px;
}
#content .detailPlayer {
  margin: 20px;
}
.detailPlayer .swiper-slide {
  width: 300px;
  margin-right: 10px;
  text-align: center;
  font-size: 14px;
}
.detailPlayer .swiper-slide img {
  width: 300px;
  height: 180px;
  margin-bottom: 5px;
}
.detailPlayer .swiper-slide p:nth-of-type(2) {
  color: #999999;
}
</style>
