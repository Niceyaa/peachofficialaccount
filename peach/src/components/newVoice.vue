<template>
  <div class="wrap-box" v-wechat-title="$route.meta.title">
    <div id="wrapp">
      <audio  id="wrap_aud" preload="auto" @ended="stop">
        <source :src="audioSrc+content" type="audio/mp3">
      </audio>
      <span class="video-area-name">{{title}}</span>
    </div>
    <div class="video-container">
      <div class="text" id="controller"><span class="oi oi-media-play" id="icon" @click="toggle"></span></div>
      <div class="common" :class="{'circle': classFlag}"></div>
      <div class="common" :class="{'change-out': classFlag}"></div>
      <div class="common" :class="{'change-in': classFlag}"></div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        totalSrc: "",
        voiceID: 0,
        title: "",
        content: "",
        audioSrc: "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=6&text=",
        classFlag: false,
        toggleFlag: true,
      };
    },
    methods: {
      init:function(){
        this.voiceID = parseInt(this.voiceID)
        switch (this.voiceID) {
          case 1:
            this.title = "景区简介";
            this.content = "东来桃源位于简阳市贾家镇西北，距贾家场镇5公里，距成都市市中心仅30余公里，交通便利。景区总面积27平方公里，核心区包括菠萝村、车厂村等。东来桃源以最美桃花源、万亩晚白桃、贾家桃文化、简阳美食文化为依托，建成了一心、一环、两轴、四大文化林盘。即游客中心、桃文化环、乡村休闲轴、美食文化轴、桃文化林盘、红石文化林盘、桑蚕文化林盘、状元文化林盘的旅游体系，为中外游客提供“春赏东来第一花”，“夏荫东来第一源”，“秋品东来第一果”，“冬饮东来第一汤”的旅游体验，是一处集观光休闲、文化体验、娱乐度假于一体的休闲农业和乡村旅游示范点。";
            break;
          case 2:
            this.title = "游客须知";
            this.content = "尊敬的游客朋友：\n" +
              "东来桃源欢迎您的到来，为了您的权益和能有一个安全愉悦的旅游体验，敬请悉知：\n" +
              "一、东来桃源为开放式免费景区，免门票；景区设置了部分游乐体验收费项目，供您自选，具体收费事宜请您参考服务指南或咨询现场工作人员。\n" +
              "二、景区地形复杂、沟塘众多，请您勿离开通行道路，在台阶、梯步处注意脚下安全，勿在沟渠、池塘、堤坎等危险地段逗留。\n" +
              "三、景区内村庄、农田众多，请您遵守《中国公民文明旅游公约》，爱护乡村环境，爱护花草树木、农作物与各类设施，请勿发生随地吐痰、乱扔垃圾、在禁烟区吸烟，任由宠物随地大小便，随意进入私家住宅等不文明行为。\n" +
              "四、请您遵守景区秩序，按规定驾车与停放车辆，如遇车辆拥堵与人员拥挤，请自觉排队通行、游览，并照顾好身边的老人和小孩，年老体弱、行动不便者和幼童，请在监护人陪同下游玩。\n" +
              "五、请自觉遵守国家法律法规，严禁在景区内违规兜售商品、散发或张贴传单、广告；严禁携带易燃、易爆、有毒等危险物品进入景区。\n" +
              "六、如遇不可抗力影响（洪水、暴雨、大风、地震、停电等），所造成的不便之处我们深感抱歉，景区将积极配合解决，但不承担赔付责任。\n" +
              "七、如有任何疑问或有需要帮助的地方，请拨打以下电话，我们将尽力为您提供优质的服务。\n" +
              "咨询电话：xxx\n" +
              "投诉电话：xxx\n" +
              "救援电话：xxx\n" +
              "国家旅游服务热线：\n" +
              "\n" +
              "东来桃源景区管理处";
            break;
          case 3:
            this.title = "桃文化林盘";
            this.content ="在现有林盘基础之上，以桃文化为核心，为游客设置了桃花梯田、桃花庵、桃心房、林间栈道、迷你农场、美食街等游玩体验、美食住宿项目，是一处以自然教育、旅游体验、农业观光为主的综合性湿地。";
            break;
          case 4:
            this.title = "红石文化林盘";
            this.content = "本林盘是由本地特色自然资源红砂石构成的山体，其中融合了“猫界梁战壕会谈”红色文化，设置了战壕、红色文化体验区、观景台、星空帐篷花园等文化、体验旅游项目，是具有红色教育意义的岩石文化园区。";
            break;
          case 5:
            this.title = "贾家协议旧址";
            this.content = "据《贾家镇志》记载，成都解放战争时，国民党第十八兵团军官李振经成都地下党员谷一春指点，赴简阳贾家与解放军二野李达将军商议在成都以南起义的事谊，他们会见地点正是东来桃源西侧的猫界梁一带的战壕内，史称“贾家协议”。";
            break;
          case 6:
            this.title = "红色文化体验区";
            this.content = "红色文化体验区复原了革命年代战火纷飞的历史场景，游客可穿越布满头盔、作战电话机、弹药箱、医药箱、老照片、雕塑、壁画等展示品的战壕遗址，用切身体验去回望那段满腔热血的红色记忆。"; break;
          case 7:
            this.title = "桑蚕文化林盘";
            this.content = "本林盘以贾家镇以前的农耕文化、蚕桑岁月为载体，为游客设置了蚕文化景观标志墙、桑叶形观景平台、桃林栈道、工艺品展销中心、休憩场地及水中舞台等旅游观光项目，一方面让游客追忆历史，一方面让游客感受摘桑养蚕的乐趣。";
            break;
          case 8:
            this.title = "星空营地";
            this.content = "星空营地位于车场村，通过营位环绕，形成独立的林间大草坪，同时建立木栈道与营位串联，形成极致浪漫的露营地。约上三五好友，烧烤、聚会、赏美景、享美食，为游客提供有活力的聚会空间。"; break;
          case 9:
            this.title = "状元文化林盘";
            this.content = "本林盘以简阳四大状元（王归璞、张孝祥、许奕、许将）为历史背景，利用现有地形、房屋营造氛围，演绎农家书生出仕、致仕、读书、喝状元茶、过状元坊、揭状元榜、住状元府的故事，是一处普及中国传统文化的园区。";
            break;
          case 10:
            this.title = "桃花仙子";
            this.content = "相传，玉帝与太上老君下界寻找仙桃，当路过龙泉山脉一带时，发现一桃园，仙桃色红而味美，玉帝大喜，但仙桃迎风垂泪，问明缘由，原来是被自己打入凡间的七仙女之一桃花所栽种，便立即召见桃花，册封她为“桃花仙子”，位列仙班。";
            break;
          case 11:
            this.title = "国风学堂";
            this.content = "国风学堂以国风文化为主题，通过“笔墨纸砚”等文化元素，让游客体验中国古代的诗、书、礼、乐等内容，定期举办研学教育类活动供青少年儿童参与，是一处承上启下的重要的文化节点。";
            break;
        }
      },
      toggle(){
        if (this.toggleFlag === true){
          this.doTTS();
        }else{
          this.stop();
        }
      },
      doTTS() {
        let audio = document.getElementById('wrap_aud');
        console.log(audio.readyState);
        audio.play();
        this.classFlag = true;
        let controller = document.getElementById('icon');
        controller.className = "oi oi-media-pause";
        this.toggleFlag = false;

      },
      stop(){
        var audio = document.getElementById('wrap_aud');
        audio.pause();
        var controller = document.getElementById('icon');
        controller.className = "oi oi-media-play";
        this.classFlag = false;
        this.toggleFlag = true;
      },
      loadSrc(){
        var audio = document.getElementById("wrap_aud");
        audio.load();
      }
    },
    created() {
      /* function noop() {
       }
       window.MessageChannel = noop;
       window.setImmediate = noop;
       this.init();*/
    },
    mounted() {
      this.loadSrc();
      this.init();
    }
  };
</script>
<style>
  html,body{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  #app{
    width: 100%;
    height: 100%;
  }
  .wrap-box{
    width: 100%;
    height: 100%;
  }
  .video-container{
    width: 100%;
    height: 100%;
    background: black;
  }
  .text, .common{
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 0.08rem solid #FF7D00;
    margin-top: -1.5rem;
    margin-left: -1.5rem;
  }
  .video-container .oi{
    line-height: 3rem;
    top: 0;
  }
  .text{
    border-color: rgba(0,0,0,0);
    color: #8b008b;
    font-size: 0.8rem;
    line-height: 3rem;
    text-align: center;
    z-index: 999;

  }

  .video-area-name{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.5rem;
    color: white;
    /*background:-webkit-linear-gradient(top,#ff0000,#ffff00 50%, #F8F8FF 51%,#4B0082);*/
    /*-webkit-background-clip:text;*/
    /*-webkit-text-fill-color:transparent;*/
  }
  .circle{
    border-top-color: gold;
    animation: cool-change 1s linear infinite;
  }
  .change-out{

    animation: change 2s linear infinite;

  }
  .change-in{

    animation: change 2s linear 1s infinite;

  }
  @keyframes change {
    0%{ transform: scale(1); border: 1px solid #864b12; }
    100%{ transform: scale(2); border: 1px solid #864b12; }
  }
  @keyframes cool-change {
    0%{ transform: rotate(0deg); }
    100%{ transform: rotate(360deg); }
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
