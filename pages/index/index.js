//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
        '../../assets/images/296992.jpg',
        '../../assets/images/296866.jpg',
        '../../assets/images/291035.jpg',
        '../../assets/images/296561.jpg',
        '../../assets/images/296978.jpg'
    ],
    // wiperLinks: [
    //     'http://y.qq.com/m/act/sfhd/129.html?ADTAG=myqq&amp;from=myqq&amp;channel=10007100',
    //     'https://y.qq.com/msa/360/5_5615.html?ADTAG=myqq&amp;from=myqq&amp;channel=10007100',
    //     'https://y.qq.com/m/act/KingCross/index.html?ADTAG=myqq&amp;from=myqq&amp;channel=10007100',
    //     'https://y.qq.com/msa/362/35_5568.html?ADTAG=myqq&amp;from=myqq&amp;channel=10007100',
    //     'https://y.qq.com/m/client/music_headline/index.html?_hidehd=1&amp;_button=2&amp;zid=852116&amp;ADTAG=myqq&amp;from=myqq&amp;channel=10007100'
    // ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    'indicator-color': '#909090cc',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
//   getUserInfo: function(e) {
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   },
  
})
