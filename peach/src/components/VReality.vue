<template>

    <div class="noCon" v-wechat-title="$route.meta.title">
        <div class="nothing">
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
                http: "http://47.108.56.198",
                flag: true,
                answer: "",
                answerMore: "",
                questionTitle: "",
                contentFlag: true
            }
        },
        mounted:function(){
            // this.init();
        },
        methods:{
            init:function(){
                let quesTime = new Date();
                let quesYear = quesTime.getFullYear();
                let quesMonth = (quesTime.getMonth()+1).toString().padStart(2,"0");
                let quesDay = quesTime.getDate();
                quesTime = `${quesYear}/${quesMonth}/${quesDay}`;
                axios.get(`http://47.108.56.198/scenery/FQ/Q/page/question/all?now=${quesTime}&getPage=1&onePageNum=5`, {
                })
                    .then((response) => {
                        console.log(response.data);
                        let list = response.data.datas.list;
                        for (let i = 0; i < list.length; i++) {
                            if (this.cnId === list[i].question.cnId) {
                                if (list[i].answer.length === 0){
                                    console.log(1111)
                                    this.contentFlag = false;
                                }
                                if (list[i].answer.length === 1) {
                                    this.answer = list[i].answer[0].csAnswerContent;
                                    this.questionTitle = list[i].question.csQuestionContent;
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
    html,body,div{
        padding: 0;
        margin: 0;
    }
    .noCon{
        width: 94%;
        margin: 0 auto;
        font-size: 0.4rem;
    }
    #app{
        width: 100%;
        height: 100%;
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
        font-size: .3rem;
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
