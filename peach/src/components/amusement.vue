<template>
  <div v-wechat-title="$route.meta.title">
    <div v-for="item in info">
      <div class="amusement-box">
        <p class="strategyTitle">{{item.csstrategyname}}</p>
        <router-link :to="{name:'amuseArticle',params:{articleId: item.cnid}}">
          <img :src="http+item.cspictureurl" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default{
    data(){
      return{
        info: "",
        http: "http://www.jydlty.cn:80"
      }
    },
    mounted:function(){
      this.init();
    },
    methods:{
      init:function(){
        axios.post('http://www.jydlty.cn:80/scenery/turistStrategy/queryTouristStratePortal', {
          "pageNum":1,
          "pageSize":10
        })
          .then((response) => {
            this.info = response.data.datas.list;
          })
          .catch((error)=> {
            console.log(error);
          });
      },
    }
  }

</script>
<style>
  html,body,div{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  div{
    width: 100%;
  }
  .amusement-box{
    width: 100%;
    border: none;
    box-sizing: border-box;
    padding-top: 20px;
  }
  .strategyTitle{
    text-align: center;
    font-size: 0.4rem;
    font-weight: bold;
    width: 80%;
    margin: 0 auto;
    letter-spacing: 0.1rem;
    /*background-image:-webkit-linear-gradient(top,#ff0000,#ffff00 50%,#abcdef 51%,#8b008b);*/
    /*-webkit-background-clip:text;*/
    /*-webkit-text-fill-color:transparent;*/
    text-shadow: 1px 1px 2px rgba(0,0,5,0.5);
    margin-bottom: 20px;
  }
  .amusement-box img{
    width: 90%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-top-left-radius: 0.1rem;
    border-top-right-radius: 0.1rem;
    /*-webkit-box-shadow: 2px 2px 5px #333;*/
  }
  .amusement-box a{
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
