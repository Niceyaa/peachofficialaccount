<template>

  <div class="news">
    <button>dianji</button>
    <!--<div class="news-wrap">-->
      <!--<button @click="init">llll</button>-->
      <!--<ul id="new-ul" v-for="item in list">-->

        <!--<router-link :to="{name:'newsContent',params:{count: item.cnId}}">-->
          <!--<li>-->
            <!--<img src="../../static/cartoon.jpg" alt="title-picture">-->
            <!--<p>{{item.csContentName}}</p>-->
          <!--</li>-->
        <!--</router-link>-->

      <!--</ul>-->
    <!--</div>-->
  </div>

</template>
<script>
  import axios from 'axios';

  export default{
    data(){
      return{
        list: ""
      }
    },
    mounted:function(){
      this.init();
    },
    methods:{
      init:function(){
        axios.post('http://47.108.56.198/scenery/turistStrategy/queryTouristStratePortal', {
          "pageNum":1,
          "pageSize":10
        })
          .then((response) => {
            console.log(response.data);
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
  body{
    font-size: 12px;
  }
  .news{
    width: 90%;
    margin: 0 auto;
    background: lightgray;
  }
  .news-wrap{
    width: 100%;
  }
  .news .news-wrap ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .news .news-wrap ul li{
    box-sizing: border-box;
    background: red;
    margin-bottom: 1rem;
  }
  .news .news-wrap ul li img{
    width: 100%;
    height: 2rem;
    background: red;
  }
  .news .news-wrap ul li p{
    width: 100%;
    font-size: 12px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
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

