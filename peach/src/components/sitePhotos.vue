<template>

  <div class="sitePhotos" v-wechat-title="$route.meta.title">
    <ul class="sitePhotos-ul">
      <li class="sitePhotos-li" v-for="item in list">
         <img class="sitePhotos-img" :src="item.csPictureUrl" alt="err">
        <p class="sitePhotos-p">{{item.csPictureName}}</p>
      </li>
    </ul>
  </div>

</template>
<script>
  import axios from 'axios';

  export default{
    data(){
      return{
        seasonID: this.$route.params.seasonId,
        http: "http://manage.jydlty.cn:9796",
        list: ""
      }
    },
    mounted:function(){
      if (this.seasonID === 1) {
        this.springFuc();
      }else if (this.seasonID === 2){
        this.summerFuc();
      }else if (this.seasonID === 3){
        this.autumnFuc();
      }else{
        this.winterFuc()
      }
    },
    methods:{
      springFuc:function(){
        axios.post('http://manage.jydlty.cn:9796/scenic-touch/picture/findAll',{
          "cnSceneryId": 15,
          "cnLocationId": 1
        })
          .then((response) => {
            this.list = response.data.datas.list;
            console.log(response.data);
            for (let i = 0; i < this.list.length; i++) {
              this.list[i].csPictureUrl = this.http + this.list[i].csPictureUrl;
            }
          })
          .catch((error)=> {
            console.log(error);
          });
      },
      summerFuc:function(){
        axios.post('http://manage.jydlty.cn:9796/scenic-touch/picture/findAll', {
          "cnSceneryId": 15,
          "cnLocationId": 2
        })
          .then((response) => {
            this.list = response.data.datas.list;
            console.log(response.data);
            for (let i = 0; i < this.list.length; i++) {
              this.list[i].csPictureUrl = this.http + this.list[i].csPictureUrl;
            }
            console.log(this.list)
          })
          .catch((error)=> {
            console.log(error);
          });
      },
      autumnFuc:function(){
        axios.post('http://manage.jydlty.cn:9796/scenic-touch/picture/findAll', {
          "cnSceneryId": 15,
          "cnLocationId": 3
        })
          .then((response) => {
            this.list = response.data.datas.list;
            console.log(response.data);
            for (let i = 0; i < this.list.length; i++) {
              this.list[i].csPictureUrl = this.http + this.list[i].csPictureUrl;
            }
          })
          .catch((error)=> {
            console.log(error);
          });
      },
      winterFuc:function(){
        axios.post('http://manage.jydlty.cn:9796/scenic-touch/picture/findAll', {
          "cnSceneryId": 15,
          "cnLocationId": 4
        })
          .then((response) => {
            console.log("111");
            this.list = response.data.datas.list;
            console.log(response.data);
            for (let i = 0; i < this.list.length; i++) {
              this.list[i].csPictureUrl = this.http + this.list[i].csPictureUrl;
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
  html,body,div{
    padding: 0;
    margin: 0;
  }
  .sitePhotos{
    width: 90%;
    margin: 0 auto;
    padding-top: 30px;
  }
  .sitePhotos-ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  .sitePhotos-li{
    margin-bottom: 0.5rem;
  }
  .sitePhotos-img{
    width: 100%;
    height: 170px;
    margin: 0;
  }
  .sitePhotos-p{
    font-size: 0.35rem;
    margin: 0;
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
