<template>
    <div class="bigConPI" v-wechat-title="$route.meta.title">
        <div class="park-info" >
            <div class="pkInfo-list" v-for="item in pkInfoList" >
                <span class="pk-num">{{item.csParkingCode}}号</span>
                <span class="pk-info">
                    <span class="pk-all">总车位: {{item.cnParkingNumber}}<span>位</span></span>
                    <span class="pk-price">停车费用: {{item.cnCost| noZero}}元/小时</span>
                </span>
                <span class="pk-leftnum">&nbsp;{{item.cnLeftParkingNumber}}<span>位</span></span>
                <span class="pk-left">空车位:</span>
                <br class="clearx">
                <div class="pk-line"></div>
                <span class="pk-loca"></span>
                <span class="pk-address">{{item.csAddress}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import qs from 'qs';

    export default{
        data(){
            return{
                myToken: '',
                http: "http://manage.jydlty.cn:9799",
                pkInfoList: []
            }
        },
        mounted:function(){
            //this.init();  这个是需要登录接口的方法
            this.initOtherWay();
        },
        methods:{
            initOtherWay(){
              axios.get("http://manage.jydlty.cn:9799/scenic-manage/PlatformParkingLot/queryParkIngLotList")
                  .then((res) => {
                      this.pkInfoList = res.data.datas;
                      console.log("111",res);
                  })
                  .catch((err) => {
                      console.log(err);
                  })
            },
            init:function(){
                axios.post("http://manage.jydlty.cn:9799/scenic-manage/doLogin", {
                    "empAcct":"guest",
                    "empPwd":123456,
                })
                    .then((response) => {
                        this.myToken = response.data.datas.token;
                        axios.get("http://manage.jydlty.cn:9799/scenic-manage/PlatformParkingLot/queryParkIngLotList",{
                            headers:{
                                "token": this.myToken
                            }
                        })
                            .then(res=>{
                                    console.log(res);
                                    this.pkInfoList = res.data.datas;
                        })
                            .catch(err=>{
                                console.log(err);
                        })
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
            }
        },
        filters:{
            noZero:function (msg) {
                let idx = msg.indexOf(".");
                return msg.substring(0,idx);
            }
        }
    }

</script>
<style>
    html,body{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
    #app{
        width: 100%;
    }
    .bigConPI{
        width: 100%;
        background-image: url("../../static/bgimage.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .park-info{
        width: 90%;
        margin: 0 auto;
        padding-top: 20px;
    }
    .park-info>div:last-child{
        margin-bottom: 0;
    }
    .pkInfo-list{
        width: 100%;
        height: 2.4rem;
        background-color: white;
        box-shadow:0 2px 4px 0 rgba(69,14,14,0.1);
        border-radius:4px;
        margin-bottom: 15px;
    }
    .pkInfo-list:after{
        content: '\200B';
        display: block;
        clear: both;
        height: 0;
    }
    .pkInfo-list>span.pk-num{
        float: left;
        margin-left: 4%;
        width: 10%;
        height: 1.1rem;
        background-image: url("../../static/groupsec.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        font-size: .35rem;
        line-height: .831rem;
        text-align: center;
    }
    .pk-info{
        float: left;
        margin-left: 4%;
        margin-top: .24rem;
        font-size: .32rem;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(174,158,159,1);
    }
    .pk-info>span{
        height: .4rem;
        line-height: .4rem;
        display: block;
        -font-size: .3rem;
    }
    .pk-info>span.pk-all span{
        font-size: .25rem;
        color: rgba(0,0,0,0.6);
    }
    .pk-info>span.pk-price{
        margin-top: 6%;
    }
    .pk-leftnum{
        float: right;
        margin-top: .18rem;
        font-size: .35rem;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:500;
        color:rgba(255,119,119,1);
        height: 0.5rem;
        line-height: .5rem;
        margin-right: .2rem;
    }
    .pk-leftnum span{
        font-size: .25rem;
        color: rgba(0,0,0,0.6);
    }
    .pk-left{
        float: right;
        margin-top: .2rem;
        font-size: .3rem;
        -font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(174,158,159,1);
    }
    .clearx{
        clear: both;
    }
    .pk-line{
        width: 100%;
        height: 1px;
        background: rgba(174,158,159,1);
        margin: .18rem 0;
    }
    .pk-loca{
        display: block;
        margin-left: 6.8%;
        width: 5%;
        height: .35rem;
        background-image: url("../../static/parkloca.png");
        background-size: 100% 100%;
        float: left;
    }
    .pk-address{
        margin-left: 6.8%;
        font-size: .36rem;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(174,158,159,1);
        float: left;
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
