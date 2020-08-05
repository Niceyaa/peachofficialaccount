<template>

    <div class="noticesDet" v-wechat-title="$route.meta.title">
        <div class="noticesBox" v-for="item in noticesList">
            <p class="title">{{csTitleName}}</p>
            <p class="time">{{noticeTime|timeFilter}}</p>
            <div class="noticesCont" v-html="csSumbContent"></div>
        </div>
    </div>

</template>
<script>
    import axios from 'axios';

    export default{
        data(){
            return{
                http: "http://47.108.56.198",
                noticesList: "",
                noticeId: this.$route.params.noticeId,
                csTitleName: '',
                noticeTime: '',
                csSumbContent: '',
            }
        },
        mounted:function(){
            this.init();
        },
        methods:{
            init:function(){
                axios.post('http://www.jydlty.cn/scenery/mediaConcern/queryMediaConcernContentPortal', {
                    "id": 9,
                    "pageNum": 1,
                    "pageSize": 10
                },{
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                    .then((response) => {
                        this.noticesList = response.data.datas.list;
                        for (let i = 0; i < this.noticesList.length; i++) {
                            if (this.noticeId === this.noticesList[i].cnId){
                                this.csTitleName = this.noticesList[i].csTitleName;
                                let idx = this.noticesList[i].time.indexOf(" ");
                                this.noticeTime = this.noticesList[i].time.substring(0,idx);
                                this.csSumbContent = this.noticesList[i].csSumbContent;
                            }
                        }

                        //富文本相对路径改为绝对路径
                        let pat = /\\sceneryPic(\S*)jpg/g;  // 匹配模式
                        let tempUrl = "http://dlty.tillage-cloud.com:9898/";
                        let temp_pat = this.csSumbContent.match(pat);  // 获得匹配到的数组
                        let url = "";
                        for (let j = 0; j < temp_pat.length; j++) {
                            url = tempUrl + temp_pat[j];   //拼接为完整域名
                            this.csSumbContent = this.csSumbContent.replace(temp_pat[j],url)  //替换
                        }
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
            },
        },
        filters:{
            timeFilter: function (msg) {
                let myTime = new Date(msg);
                let y = myTime.getFullYear();
                let m = (myTime.getMonth()+1).toString().padStart(2,"0");
                let d = myTime.getDate().toString().padStart(2,"0");
                return y+"-"+m+"-"+d;
            }
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
    .noticesDet{
        width: 90%;
        margin: 0 auto;
        margin-top: 10px;
    }
    .noticesDet .noticesBox{
        margin-bottom: 0.2rem;
    }
    .noticesDet .noticesBox .title{
        text-align: center;
        font-size: 0.4rem;
        margin: 0;
        font-weight: bold;
    }
    .noticesDet .noticesBox .time{
        text-align: center;
        font-size: 0.35rem;
        margin: 10px 0;
        color: darkgrey;
    }
    .noticesDet .noticesBox .noticesCont p{
        font-size: .3rem;
        line-height: 40px;
        display: block;
        text-align: justify;
        -text-align-last: justify;
        text-justify: inter-ideograph;
        word-break: break-all;
    }
    .noticesDet .noticesBox .noticesCont img{
        width: 170px;
        height: 170px;
        -border-top-left-radius: 0.1rem;
        -border-top-right-radius: 0.1rem;
        --webkit-box-shadow: 2px 2px 5px #333;
        display: block;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
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
