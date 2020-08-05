<template>
  <div class="bigCon" v-wechat-title="$route.meta.title">
    <div class="allSeason">
      <h3 class="allSeason-h3">景区画册</h3>
      <!-- 春 -->
      <router-link :to="{name:'sitePhotos',params:{seasonId: 1}}">
        <div class="spring">
          <span></span>
        </div>
      </router-link>

      <!-- 夏 -->
      <router-link :to="{name:'sitePhotos',params:{seasonId: 2}}">
        <div class="summer">
          <span></span>
        </div>
      </router-link>

      <!-- 秋 -->
      <router-link :to="{name:'sitePhotos',params:{seasonId: 3}}">
        <div class="autumn">
          <span></span>
        </div>
      </router-link>

      <!-- 冬 -->
      <router-link :to="{name:'sitePhotos',params:{seasonId: 4}}">
        <div class="winter">
          <span></span>
        </div>
      </router-link>
    </div>
  </div>


</template>
<script>
  import axios from 'axios';

  export default{
    data(){return{}},
    mounted:function(){},
    methods:{}
  }

</script>
<style>
  html,body,div{
    padding: 0;
    margin: 0;
  }
  .bigCon{
    width: 100%;
    height: 100%;
    background-image: url("../../static/bgimage.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .allSeason{
    width: 73%;
    margin: 0 auto;
  }
  .allSeason:after{
    content: '\200B';
    display: block;
    clear: both;
    height: 0;
  }
  h3.allSeason-h3{
    margin: 0;
  }
  .allSeason-h3{
    font-size: 0.6rem;
    text-align: center;
    padding: 30px 0;
    color: #C24848;
  }
  .allSeason a{
    text-decoration: none;
    color: #000;
  }
  .spring, .summer, .autumn, .winter{
    float: left;
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    line-height: 2rem;
    margin-bottom: 0.5rem;
    position: relative;
    background-image: url("../../static/frame.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .summer{
    float: right;
  }
  .winter{
    float: right;
  }
  .allSeason span{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    width: 21px;
    height: 24px;
    background-image: url("../../static/spring.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .allSeason .summer span{
    background-image: url("../../static/summer.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .allSeason .autumn span{
    background-image: url("../../static/autumn.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .allSeason .winter span{
    background-image: url("../../static/winter.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
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
