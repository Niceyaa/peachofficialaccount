<template>
    <div class="article-container" v-wechat-title="$route.meta.title">
        <p class="article-title">{{info.csStrategyName}}</p>
        <div class="cont">
            <div class="browser">
                <span class="oi oi-eye" style="color: red;"></span>
                <span>&nbsp;&nbsp;{{browseNum}}</span>
            </div>
            <div class="thumb-up">
                <span ref="like" class="oi oi-thumb-up" style="top: -2px;" @click="setLikeNum"></span>
                <span>&nbsp;&nbsp;{{likeClick}}</span>
            </div>
        </div>

        <div class="article-content" v-html="info.csStrategyContent"></div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default{
        data(){
            return{
                http: "http://www.jydlty.cn:80",
                info: "",
                articleId: this.$route.params.articleId,  // 文章id
                browseNum: 0, // 浏览数
                likeClick: 0, // 点赞数
            }
        },
        mounted:function(){
            this.init();
            this.getInitData();
            this.setBrowseNum();
        },
        methods:{
            init(){
                axios.get("http://www.jydlty.cn:80//scenery/turistStrategy/queryItemTouristStrategyContentPortal?id=60")
                    .then((response) => {
                    this.info = response.data.datas;
                    console.log(response.data)
                })
            },

            setLikeNum(){
                this.$refs.like.style.color = "blue";
                axios.post('http://www.jydlty.cn:80/scenery/turistStrategy/addLikeOfContent', {
                    "id":this.articleId,
                })
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
                this.getInitData();
            },
            setBrowseNum(){
                axios.get(`http://www.jydlty.cn:80/scenery/turistStrategy/queryItemTouristStrategyContentPortal`,{
                    params:{
                        id: this.articleId
                    }
                })
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
            },
            getInitData(){
                axios.post('http://www.jydlty.cn:80/scenery/turistStrategy/getLikeAndViews', {
                    "id":this.articleId,
                })
                    .then((response) => {
                        console.log(11111,response);
                        this.browseNum = response.data.datas.cnViewsCount;
                        this.likeClick = response.data.datas.cnContentLike;
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
        box-sizing: border-box;
    }
    .article-container{
        width: 90%;
        margin: 0 auto;
    }
    .article-title{
        width: 80%;
        font-size: 0.4rem;
        font-weight: bold;
        margin: 15px auto;
        text-align: center;
        text-shadow: 1px 1px 2px rgba(0,0,5,0.5);
        letter-spacing: 0.1rem;
    }

    .cont{
        width: 60%;
        margin: 0 auto;
        position: relative;
        margin-top: 10px;
        font-size: 0.3rem;
    }
    .cont:after{
        content: '\200B';
        clear: both;
        display: block;
        height: 0;
    }
    .cont span{
        display: block;
    }
    .browser,.thumb-up{
        width: 50%;
        height: 20px;
        float: left;
    }
    .browser span,.thumb-up span{
        width: 50%;
        float: left;
        line-height: 20px;
    }
    .browser span:first-child{
        text-align: right;
    }
    .thumb-up span:first-child{
        text-align: right;
        line-height: 20px;
    }

    .article-content{
        width: 100%;
        font-size: 0.35rem;
        text-indent: 2em;
        letter-spacing: 1px;
        margin-top: 8px;
    }
    .article-content>p{
        margin: 0;
        text-align: justify;
        -text-align-last: justify;
        text-justify: inter-ideograph;
        display: block;
        -ms-word-break: break-all;
        word-break: break-all;
        line-height: 40px;
    }
    .article-content>p:first-child{
        -text-indent: 0;
    }
    .article-content img{
        width: 100%;
        height: 170px;
        display: block;
    }
    .article-content p strong{
        font-weight: normal;
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
