<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-search"></i>
        <input type="text" v-model="txtSeach">
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li v-for="item in movieList" :key="item.id">
          <div class="imge">
            <img :src="item.img | setWH('120.180')" :alt="item.nm">
          </div>
          <div class="info">
            <p>
              <span>{{item.nm}}</span>
              <span>得分：{{item.sc}}</span>
            </p>
            <p class="star">主演：{{item.star}}</p>
            <p>主题：{{item.cat}}</p>
            <p>上映：{{item.rt}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      txtSeach: "",
      movieList: []
    };
  },
  methods: {
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
    }
  },
  watch: {
    txtSeach(kw) {
      var that = this;
      this.cancelRequest();
      this.axios
        .get("/api/searchList?cityId=10&kw=" + kw, {
          cancelToken: new this.axios.CancelToken(function(c) {
            that.source = c;
          })
        })
        .then(res => {
          var msg = res.data.msg;
          var movies = res.data.data.movies;
          if (msg && movies) {
            this.movieList = res.data.data.movies.list;
            console.log(this.movieList);
          }
        })
        .catch(err => {
          if (this.axios.isCancel(err)) {
            console.log("取消请求", err.message);
          } else {
            console.log(err);
          }
        });
    }
  },
  components: {}
};
</script>

<style scoped>
#content .search_body {
  flex: 1;
  overflow: auto;
}
.search_body .search_input {
  padding: 8px 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.search_body .search_input_wrapper {
  padding: 0 10px;
  border: 1px solide #e6e6e6;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
}
.search_body .search_input_wrapper i {
  font-size: 14px;
  padding: 4px 0;
}
.search_body .search_input_wrapper input {
  border: none;
  outline: none;
  font-size: 13px;
  padding: 4px 0;
  margin-left: 10px;
  width: 100%;
}

.search_body .search_result h3 {
  font-size: 14px;
  color: #999999;
  padding: 9px 15px;
  border-bottom: 1px solid #e6e6e6;
}
.search_body .search_result ul li {
  border-bottom: 1px dashed #c9c9c9;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
}
.search_body .search_result ul li .imge {
  width: 64px;
  float: left;
}
.search_body .search_result .imge img {
  width: 100%;
  height: 90px;
}
.search_body .search_result .info {
  float: left;
  margin-left: 15px;
  flex: 1;
}
.search_body .search_result .info p {
  height: 22px;
  line-height: 22px;
  display: flex;
  font-size: 14px;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1) {
  font-size: 14px;
  flex: 1;
  font-weight: 700;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2) {
  font-size: 16px;
  color: #faaf00;
}
.star {
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
}
</style>
