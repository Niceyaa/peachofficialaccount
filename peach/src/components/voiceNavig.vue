<template>
    <div class="bigCon" v-wechat-title="$route.meta.title">
        <div class="voice-box">
            <div class="voice-wrapper">
                <div>
                    <router-link :to="{name:'video',params:{voiceId: 1}}">
                        <span>景区简介</span>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name:'video',params:{voiceId: 2}}">
                        <span>游客须知</span>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name:'video',params:{voiceId: 3}}">
                        <span>桃文化林盘</span>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name:'video',params:{voiceId: 4}}">
                        <span>红石文化林盘</span>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name:'video',params:{voiceId: 5}}">
                        <span>贾家协议旧址</span>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name:'video',params:{voiceId: 6}}">
                        <span>红色文化体验区</span>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name:'video',params:{voiceId: 7}}">
                        <span>桑蚕文化林盘</span>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name:'video',params:{voiceId: 8}}">
                        <span>星空营地</span>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name:'video',params:{voiceId: 9}}">
                        <span>状元文化林盘</span>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name:'video',params:{voiceId: 10}}">
                        <span>桃花仙子</span>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{name:'video',params:{voiceId: 11}}">
                        <span>国风学堂</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
    html,body{
        width: 100%;
        height: 100%;
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
    #app{
        width: 100%;
        height: 100%;
    }
    .voice-box{
        width: 80%;
        height: 100%;
        margin: 0 auto;
    }
    .voice-wrapper{
        width: 100%;
        text-align: center;
        height: 100%;
        padding-top: 5px;
    }
    .voice-wrapper:after{
        content: '\200B';
        clear: both;
        display: block;
        height: 0;
    }
    .voice-wrapper div{
        float: left;
        width: 20%;
        height: 32%;
        margin: 3px 2.5%;
        background-image: url("../../static/group.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
    }
    .voice-wrapper div a{
        text-decoration: none;
        color: #000;
        display: block;
        width: 100%;
    }
    .voice-wrapper div span{
        display: block;
        width: 30%;
        margin: 0 auto;
        font-weight: 400;
        color: rgba(163,60,65,1);
        font-size: 15px;
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
