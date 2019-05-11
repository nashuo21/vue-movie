<template>
  <div class="cinema_body">
    <ul>
      <li v-for="item in cinemaList" :key="item.id">
        <div>
          <span>{{item.nm}}</span>
          <span class="q">
            <span class="price">{{item.sellPrice}} 元起</span>
          </span>
        </div>
        <div class="address">
          <span>{{item.addr}}</span>
          <span>{{item.distance}}</span>
        </div>
        <div class="card">
          <div v-for="(num,key) in item.tag" v-if="num===1" :key="key" :class="key | classCard">{{ key | formatCard }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "All",
  data() {
    return {
      cinemaList: []
    };
  },
  filters: {
    formatCard(key){
      var card = [
        {key:'allowRefund',value:'退改'},
        {key:'sell',value:'优惠'},
        {key:'snack',value:'小吃'},
        {key:'endorse',value:'推荐'},
      ];
      for(var i=0;i<card.length;i++){
        
        if(card[i].key === key){
          return card[i].value;
        }
               
      }
      return '';
    },
    classCard(key){
      var card = [
        {key:'allowRefund',value:'bl'},
        {key:'sell',value:'or'},
        {key:'snack',value:'or'},
        {key:'endorse',value:'bl'},
      ];
      for(var i=0;i<card.length;i++){
        
        if(card[i].key === key){
          return card[i].value;
        }
               
      }
    }
  },
  components: {},
  mounted() {
    this.axios.get("/api/cinemaList?cityId=10").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.cinemaList = res.data.data.cinemas;
        console.log(this.cinemaList);
      }
    });
  }
};
</script>

<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body ul li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body ul li div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
  float: right;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  margin: 0 1px;
  padding: 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 4px;
  color: hsl(17, 100%, 50%);
  border: 1px solid #f90;
  font-size: 14px;
}
.cinema_body .card div.or {
  color: #ff9900;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
/* .promotion {
  font-size: 14px;
} */
</style>
