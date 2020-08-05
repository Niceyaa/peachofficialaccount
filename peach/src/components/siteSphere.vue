<template>
    <div class="siteSphere" v-wechat-title="$route.meta.title">
        <div>
            <a href="http://dlty.china-tillage.com/dlty/dlty-vr/index.html#/touristcenter">
                <img src="../../static/720/touristcenter.jpg" alt="">
                <div class="sphere-title">游客中心</div>
            </a>
        </div>
        <div>
            <a href="http://dlty.china-tillage.com/dlty/dlty-vr/index.html#/waterpark">
                <img src="../../static/720/waterpark.jpg" alt="">
                <div class="sphere-title">水上公园</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .siteSphere{
        display: flex;
    }
    .siteSphere>div{
        flex: 0.5;
        background: lightcoral;
        height: 180px;
        margin: 20px;
    }
    .siteSphere>div:first-child{
        background: lightgreen;
    }
    .siteSphere>div>a{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }
    .siteSphere>div>a:visited{
        color: #fff;
    }
    .siteSphere>div>a>img{
        width: 100%;
        height: 100%;
    }
    .siteSphere>div>a .sphere-title{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        line-height: 30px;
        background: rgba(0,0,0,.5);
    }
</style>
