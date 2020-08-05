<template>
<div class="faq-bigcontainer">
    <div class="faq-question" v-wechat-title="$route.meta.title">
        <p class="faq-question-p">热点问题</p>
        <ul class="faq-ul">
            <router-link v-for="item in questionList" :key="item.question.cnId"  :to="{name:'FAQ_answer',params:{faqId: item.question.cnId}}">
                <li class="faq-li">
                    <span>{{item.question.csQuestionContent}}</span>
                    <svg t="1584374463202" class="icon to-right" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2715" width="32" height="32"><path d="M726.4 534.4l-384 384c-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8L659.2 512 297.6 150.4c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l384 384c6.4 6.4 9.6 16 9.6 22.4C736 521.6 732.8 528 726.4 534.4z" p-id="2716" fill="#707070"></path></svg>
                </li>
            </router-link>
        </ul>
    </div>
</div>
</template>
<script>
    import axios from 'axios';

    export default{
        data(){
            return{
                seasonID: '',
                http: "http://www.jydlty.cn",
                questionList: ""
            }
        },
        mounted:function(){
            this.init();
        },
        methods:{
            init:function(){
                let quesTime = new Date();
                let quesYear = quesTime.getFullYear();
                let quesMonth = (quesTime.getMonth()+1).toString().padStart(2,"0");
                let quesDay = quesTime.getDate().toString().padStart(2,"0");
                quesTime =  quesYear + "/" + quesMonth + "/" + quesDay;
                axios.get(`http://www.jydlty.cn/scenery/FQ/Q/page/question/all?now=${quesTime}`, {
                })
                    .then((response) => {
                        console.log(response.data);
                        this.questionList = response.data.datas.list;
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
            }
        }
    }

</script>
<style>
    html,body,p{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
    #app{
        width: 100%;
        height: 100%;
    }
    .faq-bigcontainer{
        width: 100%;
        height: 100%;
        background: #f7f6f6;
    }
    .faq-question{
        margin: 0 auto;
        font-size: 14px;
        padding-top: 15px;
    }
    .faq-question-p{
        display: block;
        width: 90%;
        margin: 0 auto;
        padding-bottom: 10px;
        font-family:PingFangSC-Regular, PingFang SC,SansSerif;
        font-weight:600;
        color:rgba(51,51,51,1);
    }
    .faq-question .faq-ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        box-shadow:0 1px 8px -5px grey;
    }
    .faq-li{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid rgba(233,228,228,1);
        overflow: hidden;
        text-overflow: ellipsis;/* 表示对象内文本溢出是显示省略标记(...)，必须与overflow:hidden;配合使用 */
        word-break: keep-all;
        white-space: nowrap;
        font-family:PingFangSC-Regular, PingFang SC,SansSerif;
        font-weight:400;
        color:rgba(51,51,51,1);
        width: 90%;
        margin: 0 auto;
    }

    .faq-question .faq-ul a{
        text-decoration: none;
        color: #000000;
        display: block;
        width: 100%;
        background-color: white;
    }
    .faq-question .faq-ul li:last-child{
        border-bottom: none;
    }
    .faq-li .to-right{
        height: 20px;
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
