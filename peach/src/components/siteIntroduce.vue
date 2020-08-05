<template>
  <div class="siteIntroduce" v-wechat-title="$route.meta.title">
    <div class="introduce">
      <p class="areaName">{{introduceData.csAreaName}}</p>
      <img :src="http+introduceData.csPictureUrl" alt="">
      <p class="content">{{introduceData.csSubmContent}}</p>
    </div>

    <div class="culture">
      <p class="areaName">{{cultureData.csAreaName}}</p>
      <img :src="http+cultureData.csPictureUrl" alt="">
      <p class="content">{{cultureData.csSubmContent}}</p>
    </div>

    <div class="beforeKnow">
      <p class="areaName">{{beforeKnowData.csAreaName}}</p>
      <img :src="http+beforeKnowData.csPictureUrl" alt="">
      <p class="content">{{beforeKnowData.csSubmContent}}</p>
    </div>

    <div class="openTime">
      <p class="areaName">{{openTimeData.csAreaName}}</p>
      <img :src="http+openTimeData.csPictureUrl" alt="">
      <p class="content">{{openTimeData.csSubmContent}}</p>
    </div>
  </div>

</template>
<script>
  import axios from 'axios';

  export default{
    data(){
      return{
        http: "http://www.jydlty.cn",
        introduceData: "",
        cultureData: "",
        beforeKnowData: "",
        openTimeData: "",
      }
    },
    mounted:function(){
      this.introduce();
      this.culture();
      this.beforeKnow();
      this.openTime();
    },
    methods:{
      introduce:function(){
        axios.post('http://www.jydlty.cn/scenery/entering/findOther', {
          "cnSceneryId":3,
          "cnAreaId":40,
        })
          .then((response) => {
            this.introduceData = response.data.datas;
          })
          .catch((error)=> {
            console.log(error);
          });
      },
      culture:function(){
        axios.post('http://www.jydlty.cn/scenery/entering/findOther', {
          "cnSceneryId":3,
          "cnAreaId":41,
        })
          .then((response) => {
            this.cultureData = response.data.datas;
          })
          .catch((error)=> {
            console.log(error);
          });
      },
      beforeKnow:function(){
        axios.post('http://www.jydlty.cn/scenery/entering/findOther', {
          "cnSceneryId":3,
          "cnAreaId":42,

        })
          .then((response) => {
            this.beforeKnowData = response.data.datas;
          })
          .catch((error)=> {
            console.log(error);
          });
      },


      openTime:function(){
        axios.post('http://www.jydlty.cn/scenery/entering/findOther', {
          "cnSceneryId":3,
          "cnAreaId":43,
        })
          .then((response) => {
            this.openTimeData = response.data.datas;
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
  .introduce, .culture, .beforeKnow, .openTime{
    width: 90%;
    margin: 0 auto;
    margin-top: 0.3rem;
  }
  .siteIntroduce .areaName{
    display: block;
    width: 100%;
    height: 0.5rem;
    font-size: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    -font-style: italic;
    font-weight: bold;
    -background-image:-webkit-linear-gradient(top,#ff0000,#ffff00 50%,#abcdef 51%,#8b008b);
    /*--webkit-background-clip:text;*/
    /*--webkit-text-fill-color:transparent;*/
    margin-top: 0.3rem;
  }
  .siteIntroduce img{
    width: 100%;
    height: 170px;
    display: block;
    border-radius: 5px;
    margin-top: 20px;
  }
  .siteIntroduce .content{
    text-indent: .7rem;
    font-size: 0.35rem;
    line-height: 40px;
    text-align: justify;
    -text-align-last: justify;
    text-justify: inter-ideograph;
    display: inline-block;
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
