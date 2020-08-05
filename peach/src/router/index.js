import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/index'
import newsContent from '@/components/newsContent'
import amusement from '@/components/amusement'
import amuseArticle from '@/components/amuseArticle'
import siteIntroduce from '@/components/siteIntroduce'
import siteVideo from '@/components/siteVideo'
import sitePhotos from '@/components/sitePhotos'
import siteAllPhotos from '@/components/siteAllPhotos'
import siteNotice from '@/components/siteNotice'
import video from '@/components/video'
import FAQ_question from '@/components/FAQ_question'
import FAQ_answer from '@/components/FAQ_answer'
import siteTraffic from '@/components/siteTraffic'
import voiceNavig from '@/components/voiceNavig'
import parkInfo from '@/components/parkInfo'
import VReality from '@/components/VReality'
import siteNoticeDet from '@/components/siteNoticeDet'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/newsContent/:count',
      name: 'newsContent',
      component: newsContent,
      meta: {
        title: "桃源新闻",
      }
    },
    {
      path: "/amusement",
      name: "amusement",
      component: amusement,
      meta: {
        title: "游玩攻略",
      }
    },
    {
      path: "/amuseArticle/:articleId",
      name: "amuseArticle",
      component: amuseArticle,
      meta: {
        title: "游玩攻略详情",
      }
    },
    {
      path: "/siteIntroduce",
      name: "siteIntroduce",
      component: siteIntroduce,
      meta: {
        title: "桃源简介",
      }
    },
    {
      path: "/siteVideo",
      name: "siteVideo",
      component: siteVideo,
      meta: {
        title: "桃源微视",
      }
    },
    {
      path: "/sitePhotos/:seasonId",
      name: "sitePhotos",
      component: sitePhotos,
      meta: {
        title: "桃源相册",
      }
    },
    {
      path: "/siteAllPhotos",
      name: "siteAllPhotos",
      component: siteAllPhotos,
      meta: {
        title: "桃源相册",
      }
    },
    {
      path: "/siteNotice",
      name: "siteNotice",
      component: siteNotice,
      meta: {
        title: "桃源公告",
      }
    },
    {
      path: "/video/:voiceId",
      name: "video",
      component: video,
      meta: {
        title: "语音导览",
      }
    },
    {
      path: "/FAQ_question",
      name: "FAQ_question",
      component: FAQ_question,
      meta: {
        title: "FAQ专区",
      }
    },
    {
      path: "/FAQ_answer/:faqId",
      name: "FAQ_answer",
      component: FAQ_answer,
      meta: {
        title: "FAQ专区",
      }
    },
    {
      path: "/siteTraffic",
      name: "siteTraffic",
      component: siteTraffic,
      meta: {
        title: "桃源交通",
      }
    },
    {
      path: "/voiceNavig",
      name: "voiceNavig",
      component: voiceNavig,
      meta: {
        title: "语音导览",
      }
    },
    {
      path: "/parkInfo",
      name: "parkInfo",
      component: parkInfo,
      meta: {
        title: "停车信息",
      }
    },
    {
      path: "/VReality",
      name: "VReality",
      component: VReality,
      meta: {
        title: "桃源全景",
      }
    },
    {
      path: "/siteNoticeDet/:noticeId",
      name: "siteNoticeDet",
      component: siteNoticeDet,
      meta: {
        title: "公告详情",
      }
    },
    {
      path: "/siteSphere",
      name: "siteSphere",
      component: ()=>import("../components/siteSphere"),
      meta: {
        title: "景区全景"
      }
    },
    {
      path: "/newVoice",
      name: "newVoice",
      component: ()=>import("../components/newVoice"),
      meta: {
        title: "语音导览"
      }
    },
    {
      path: "/mounted",
      name: "mounted",
      component: ()=>import("../components/mounted")
    }
  ]
})
