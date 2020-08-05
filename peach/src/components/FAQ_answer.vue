<template>

    <div class="faq-answer" v-wechat-title="$route.meta.title">
        <div v-if="contentFlag">
            <p class="faq-answer-title">{{questionTitle}}</p>
            <p id="faqans" class="faq-answer-content" v-if="flag" v-html="answer"></p>
            <p class="faq-answer-content" v-else="flag" v-for="item in answerMore">{{item.csAnswerContent}}</p>
        </div>
        <div v-else="contentFlag" class="nothing">
            <div class="nothing-bgi">
                <img src="../../static/groupFive.png" alt="">
                <span class="nothing-content">即将开放</span>
            </div>

        </div>
    </div>

</template>
<script>
    import axios from 'axios';

    export default{
        data(){
            return{
                cnId: this.$route.params.faqId,
                http: "http://www.jydlty.cn",
                flag: true,
                answer: "",
                answerMore: "",
                questionTitle: "",
                contentFlag: true
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
                let quesDay = quesTime.getDate();
                quesTime = quesYear + "/" + quesMonth + "/" + quesDay;
                axios.get("http://www.jydlty.cn/scenery/FQ/Q/page/question/all?now="+quesTime+"&getPage=1&onePageNum=5", {
                })
                    .then((response) => {
                        console.log(response.data);
                        let list = response.data.datas.list;
                        for (let i = 0; i < list.length; i++) {
                            if (this.cnId === list[i].question.cnId) {
                                if (list[i].answer.length === 0){
                                    this.contentFlag = false;
                                }
                                if (list[i].answer.length === 1) {
                                    this.answer = list[i].answer[0].csAnswerContent;
                                    this.questionTitle = list[i].question.csQuestionContent;
                                    //this.answer.replace("\\n","\n");
                                    if (this.cnId === 37) {
                                        document.querySelector("#faqans").classList = "no-indent";
                                    }
                                }else {
                                    this.questionTitle = list[i].question.csQuestionContent;
                                    this.flag = false;
                                    this.answerMore = list[i].answer;
                                }
                            }
                        }
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
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
    #app{
        width: 100%;
        height: 100%;
    }
    .faq-answer{
        width: 94%;
        margin: 0 auto;
        font-size: 0.35rem;
        padding-top: 20px;
    }
    .faq-answer-title{
        text-align: center;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .faq-answer-content{
        text-indent: 2em;
        font-size: .3rem;
        line-height: 40px;
        text-align: justify;
        text-justify: inter-ideograph;
        display: block;
        word-break: break-all;
    }
    .faq-answer .no-indent{
        font-size: .3rem;
        line-height: 40px;
        text-align: center;
        white-space: pre;
        text-indent: 0;
        text-justify: inter-ideograph;
        display: block;
        word-break: break-all;
        font-weight: 500;
    }

    .nothing{
        width: 100%;
        height: 100%;
        background: url("../../static/faqbgc.png") 100% 100% no-repeat;
    }
    .nothing-bgi{
        margin-left: 18%;
        padding-top: 18%;
        width: 64%;
        height: 33.3%;
        position: relative;
    }
    .nothing-bgi img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .nothing-bgi>span{
        position: absolute;
        bottom: 0;
        width: 40%;
        left: 30%;
        text-align: center;
        z-index: 99;
        font-size: 28px;
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
