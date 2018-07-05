// components/SongItem.js
const {globalData} = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    songInfo: null
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem() {
        //设置全局变量，保存当前歌曲信息
        globalData.songInfo = this.properties.songInfo;
        //跳转至播放页面
        wx.navigateTo({
            url: '../../pages/play/play?id=' + this.properties.songInfo.songid
        })
    }
  }
})
