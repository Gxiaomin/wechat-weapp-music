// pages/play/play.js
const {globalData} = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    songInfo: {},
    audioCtx: null,
    isPlay: true,
    rotate: 0,
    transform: '', // 旋转动画属性
    rotateFlag: false, // 控制专辑图片旋转
    duration: '00:00',
    current: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(globalData.songInfo);
    // console.log(options.id);

    //动态设置标题栏
    // wx.setNavigationBarTitle({
    //     title: globalData.songInfo.songname//页面标题为路由参数
    // })

    let that = this;
    that.setData({
        songInfo: globalData.songInfo
    })
    // console.log(this.data.songInfo);
  },
  audioPlay: function () {
    this.setData({
        isPlay: true
    })
    this.data.audioCtx.play();
    this.myRotate();
  },
  audioPause: function () {
    this.setData({
        isPlay: false
    })
    this.data.audioCtx.pause()
  },
  updatePlay: function(e) {
    //   console.log()
      let d = parseInt(e.detail.duration)
    //   console.log(d);
      let min = parseInt(d/60);
      let sec = d%60;
      if(min < 10) min = '0' + min
      this.data.duration = min + ':' + sec;

      let current = parseInt(e.detail.currentTime);
        // console.log(current/d);
      let curr = parseInt((current/d)*100) + '%';
      console.log(curr);

  },
  // 专辑图片旋转函数
  myRotate: function() {
    this.data.rotate++;
    let transform = `transform:rotate(${rotate}deg);`;
    this.setData({
      transform,
    });
    const animation = setTimeout(() => {
      this.myRotate();
    }, 30);
    if (!this.data.isPlay) {
      clearTimeout(animation);
    };
  },
  // 控制专辑图片旋转
  toggleRotate: function() {
    if (this.data.isPlay) {
      this.audioPause();
      this.data.audioCtx.pause();
    } else {
      this.audioPlay();
      this.data.audioCtx.play();
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.data.audioCtx = wx.createAudioContext('myAudio');
    //自动播放
    this.data.audioCtx.play();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})