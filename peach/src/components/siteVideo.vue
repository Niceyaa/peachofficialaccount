<template>
  <div class="site-vcont" v-wechat-title="$route.meta.title">
    <div class="site-video" v-for="(item,idx) in info" :key="item.cnId">
      <!--<video ref="vid" class="vid" controls preload="metadata">
        <source :src="item.csVideoUrl">
      </video>-->
      <video ref="vid"  class="vid" :src="item.csVideoUrl" :poster="posterSrc[idx]"  controls preload="none" x5-video-player-type="h5" ></video>
      <span class="siteV">{{item.csVideoName}}</span>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        http: "http://manage.jydlty.cn:9796",
        info: "",
        //posterSrc: require("../../static/cartoon.jpg"),
        posterSrc: [
          require("../../static/videoimg/v0.jpg"),
          require("../../static/videoimg/v1.jpg"),
          require("../../static/videoimg/v2.jpg"),
          require("../../static/videoimg/v3.jpg"),
          require("../../static/videoimg/v4.jpg"),
          require("../../static/videoimg/v5.jpg"),
          require("../../static/videoimg/v6.jpg"),
          require("../../static/videoimg/v7.jpg"),
          require("../../static/videoimg/v8.jpg"),
          require("../../static/videoimg/v9.jpg"),
        ]

      }
    },
    created:function () {
      this.init();
    },
    methods:{

      init(){
        axios.post(`http://manage.jydlty.cn:9796/scenic-touch/video/findAll`, {
          "cnSceneryId": 16
        })
          .then((response) => {
            console.log(1111)
            this.info = response.data.datas.list;
            console.log(response.data);
            for (let i = 0; i < this.info.length; i++) {
              this.info[i].csVideoUrl = this.http + this.info[i].csVideoUrl;
            }
          })
          .catch((error)=> {
            console.log(error);
          });
      },
    }
  }

</script>
<style>
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  .site-vcont{
    width: 100%;
    box-sizing: border-box;
    padding-top: 20px;
    background-color: #f7f6f6;
  }
  .site-video{
    width: 90%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .vid{
    display: block;
    width: 100%;
    height: auto;
  }
  .siteV{
    display: block;
    -text-align: center;
    font-size: 0.27rem;
    font-weight: 600;
    /*background-image:-webkit-linear-gradient(top,#ff0000,#ffff00 50%,#abcdef 51%,#8b008b);*/
    /*-webkit-background-clip:text;*/
    /*-webkit-text-fill-color:transparent;*/
    -text-shadow: 2px 2px 4px rgba(0,0,5,0.5);
    line-height: .6rem;
    background: #ffffff;
    -box-shadow: 1px 1px 6px grey;
    box-shadow: 0px .5px 0px grey;

  }

  /*.site-vcont .site-video .videoPlay{*/
    /*position: absolute;*/
    /*left: 100px;*/
    /*top: 100px;*/
    /*width: 50px;*/
    /*height: 50px;*/
    /*border-radius: 50%;*/
    /*text-align: center;*/
    /*line-height: 50px;*/
    /*color: white;*/
    /*border: 1px solid white;*/
    /*font-size: 30px;*/
    /*display: none;*/
  /*}*/

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
