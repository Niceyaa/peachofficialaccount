<template>

  <div class="newsContent" v-wechat-title="$route.meta.title">
    <div>
      <h2 class="newsContent-title">{{contentName}}</h2>
      <p class="newsContent-time">发布日期:{{time}}</p>
      <p v-html="imgSrc" class="newsContent-p3"></p>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default{
    data(){
      return{
        list: "",
        contentName: "",
        time: "",
        content: "",
        imgSrc: "",
        htmlId: this.$route.params.count,
      }
    },
    mounted:function(){
      this.init();
    },
    methods:{
      init:function(){
        axios.post('http://47.108.56.198:9898/scenery/news/findAl', {
          "cnSceneryId":8,
          "pageNum":1,
          "pageSize":6
        })
          .then((response) => {
            this.list = response.data.datas.list;
            console.log(response.data);

            for (var i = 0; i <= this.list.length; i ++){
              if (this.list[i].cnId === this.htmlId){
                this.contentName = this.list[i].csContentName;
                this.time = this.list[i].time;
                this.content = this.list[i].csTitleName;
                this.imgSrc = this.list[i].csSubmContent;

                //富文本相对路径改为绝对路径
                var pat = /\\sceneryPic(\S*)jpg/g;  // 匹配模式
                var tempUrl = "http://www.tillage-cloud.com:8888/";
                var temp_pat = this.imgSrc.match(pat);  // 获得匹配到的数组
                var url = "";
                for (let j = 0; j < temp_pat.length; j++) {
                  url = tempUrl + temp_pat[j];   //拼接为完整域名
                  this.imgSrc = this.imgSrc.replace(temp_pat[j],url)  //替换
                }

              }
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
  .newsContent{
    width: 90%;
    margin: 0 auto;
  }
  .newsContent-title{
    font-size: 0.5rem;
    width: 100%;
    height: 1rem;
    text-align: center;
    margin-bottom: 25px;
  }
  .newsContent-time{
    text-align: center;
    font-size: .3rem;
  }
  /*.newsContent-content{*/
    /*text-indent: 2em;*/
    /*font-size: 0.4rem;*/
  /*}*/
  .newsContent-p3{
    width: 100%;
    height: auto;
    font-size: 0.4rem;
    text-indent: 2em;
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
