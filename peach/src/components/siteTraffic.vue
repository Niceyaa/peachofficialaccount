<template>
    <div class="bigCon" v-wechat-title="$route.meta.title">
        <div class="traffic">
            <span class="line-start">成都东客站:</span>
            <div class="traffic-line">
                <span class="line-subway"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;2号线</span></span>
                <span class="line-sign"></span>
                <span class="line-transit"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;865路</span></span>

            </div>
            <p>成都东客站地铁站——龙泉驿地铁站——驿都东路音乐广场站(公交站)——三元站(公交站)</p>
            <span class="line-start">成都火车北站:</span>
            <div class="traffic-line">
                <span class="line-subway"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;7号线</span></span>
                <span class="line-sign"></span>
                <span class="line-subway"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;2号线</span></span>
                <span class="line-sign"></span>
                <span class="line-transit"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;865路</span></span>
            </div>
            <p>火车北站地铁站——成都东客站地铁站——龙泉驿地铁站——驿都东路音乐广场站(公交站)——三元站(公交站)</p>
        </div>
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
        methods:{
        }
    }
</script>
<style>
    html,body{
        margin: 0;
        padding: 0;
    }
    .bigCon{
        width: 100%;
        height: 100%;
        background-image: url("../../static/bgimage.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .traffic{
        width: 90%;
        margin: 0 auto;
    }
    .traffic-line{
        position: relative;
    }
    .traffic-line:after{
        content: '\200B';
        display: block;
        clear: both;
        height: 0;
    }
    .line-start{
        color: rgba(163,60,65,1);
        display: block;
        font-size: .45rem;
        font-weight: bold;
        padding-top: 20px;
        margin-bottom: 20px;
    }
    .line-subway,.line-sign,.line-transit{
        float: left;
        display: block;
        height: .7rem;
        font-size: .35rem;
    }
    .line-sign{
        width: .35rem;
        height: .6rem;
        background-image: url("../../static/rect.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin: .15rem .1rem;

    }
    .line-subway{
        padding: .1rem .3rem;
        color: white;
        background: #FF7777;
        border-top-left-radius: 20% 50%;
        border-top-right-radius: 20% 50%;
        border-bottom-right-radius: 20% 50%;
        border-bottom-left-radius: 20% 50%;
    }
    .line-transit{
        padding: 0.08rem .2rem;
        color: #6D6D6D;
        border: 1px solid rgba(163,60,65,1);
        border-top-left-radius: 25% 50%;
        border-top-right-radius: 25% 50%;
        border-bottom-right-radius: 25% 50%;
        border-bottom-left-radius: 25% 50%;
    }
    .line-subway span,.line-transit span{
        display: block;
        float: left;
        line-height: .7rem;
    }
    .line-subway span:first-child{
        background-image: url("../../static/subway.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: .3rem;
        margin-top: .2rem;
        font-size: .2rem;
    }
    .line-transit span:first-child{
        background-image: url("../../static/bus.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: .3rem;
        margin-top: .2rem;
        font-size: .2rem;
    }
    .traffic p{
        -ms-word-wrap: break-word;
        word-wrap: break-word;
        padding: 0;
        margin: 0;
        margin-top: 10px;
        font-size: .35rem;
        color: #6D6D6D;
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

