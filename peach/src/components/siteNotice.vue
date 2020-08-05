<template>

  <div class="notices" v-wechat-title="$route.meta.title">
    <div class="noticesBox" v-for="item in list">
      <p class="title">{{item.csstrategyname}}</p>
      <p class="time">{{notTime}}</p>
      <router-link :to="{name:'siteNoticeDet',params:{noticeId:item.cnId}}">
        <img :src="http + item.cspictureurl" alt="公告图片">
      </router-link>
    </div>
  </div>

</template>
<script>
  import axios from 'axios';

  export default{
    data(){
      return{
        http: "http://www.jydlty.cn",
        list: "",
        notTime: ""
      }
    },
    mounted:function(){
      this.init();
    },
    methods:{
      init:function(){
        axios.post('http://www.jydlty.cn/scenery/turistStrategy/queryTouristStratePortal', {
          "pageNum": 1,
          "pageSize": 10
        })
                .then((response) => {
                  console.log("ccc",response)
                  this.list = response.data.datas.list;
                  console.log(this.list)
                  for (let i = 0; i < this.list.length; i++) {
                    let temp = this.list[i].time;
                    let idx = temp.indexOf(" ");
                    temp = temp.substring(0,idx);
                    // let t = new Date(temp);
                    // let y = t.getFullYear();
                    // let m = t.getMonth()+1;
                    // let d = t.getDate();
                    // this.notTime = y + "-" + m + "-" + d;
                    this.notTime = temp;
                  }
                  console.log(response.data);

                })
                .catch((error)=> {
                  console.log(error);
                });
      /* axios.post("http://dlty.tillage-cloud.com:9799/scenery/turistStrategy/queryTouristStratePortal",{
         "pageSize":10,
         "pageNum":1
       }).then(res=>{
         console.log('cccc0',res)
       })*/
      },
    }
  }

</script>
<style>
  html,body,div{
    padding: 0;
    margin: 0;
  }
  .notices{
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
  }
  .noticesBox{
    margin-bottom: 0.2rem;
  }
  .notices .noticesBox .title{
    text-align: center;
    font-size: 0.4rem;
    margin: 0;
    font-weight: bold;
  }
  .notices .noticesBox .time{
    text-align: center;
    font-size: 0.35rem;
    margin: 10px 0;
    color: darkgrey;
  }
  .notices .noticesBox a img{
    width: 100%;
    height: 170px;
    border-top-left-radius: 0.1rem;
    border-top-right-radius: 0.1rem;
  }
  .notices .noticesBox a{
    display: block;
    text-decoration: none;
  }

  @media (min-width: 320px) {
    html {
      font-size: 42.66666667px;
    }
  }
  @media (min-width: 320px) and (min-width: 340px) {
    html {
      font-size: 45.33333333px;
    }
  }
  @media (min-width: 320px) and (min-width: 340px) and (min-width: 360px) {
    html {
      font-size: 48px;
    }
  }
  @media (min-width: 320px) and (min-width: 340px) and (min-width: 360px) and (min-width: 400px) {
    html {
      font-size: 53.33333333px;
    }
  }
  @media (min-width: 320px) and (min-width: 340px) and (min-width: 360px) and (min-width: 400px) and (min-width: 414px) {
    html {
      font-size: 55.2px;
    }
  }
  @media (min-width: 320px) and (min-width: 340px) and (min-width: 360px) and (min-width: 400px) and (min-width: 414px) and (min-width: 424px) {
    html {
      font-size: 56.53333333px;
    }
  }
  @media (min-width: 320px) and (min-width: 340px) and (min-width: 360px) and (min-width: 400px) and (min-width: 414px) and (min-width: 424px) and (min-width: 480px) {
    html {
      font-size: 64px;
    }
  }
  @media (min-width: 320px) and (min-width: 340px) and (min-width: 360px) and (min-width: 400px) and (min-width: 414px) and (min-width: 424px) and (min-width: 480px) and (min-width: 530px) {
    html {
      font-size: 70.66666667px;
    }
  }
  @media (min-width: 320px) and (min-width: 340px) and (min-width: 360px) and (min-width: 400px) and (min-width: 414px) and (min-width: 424px) and (min-width: 480px) and (min-width: 530px) and (min-width: 640px) {
    html {
      font-size: 85.33333333px;
    }
  }
  @media (min-width: 320px) and (min-width: 340px) and (min-width: 360px) and (min-width: 400px) and (min-width: 414px) and (min-width: 424px) and (min-width: 480px) and (min-width: 530px) and (min-width: 640px) and (min-width: 720px) {
    html {
      font-size: 96px;
    }
  }
  @media (min-width: 320px) and (min-width: 340px) and (min-width: 360px) and (min-width: 400px) and (min-width: 414px) and (min-width: 424px) and (min-width: 480px) and (min-width: 530px) and (min-width: 640px) and (min-width: 720px) and (min-width: 750px) {
    html {
      font-size: 100px;
    }
  }
</style>
