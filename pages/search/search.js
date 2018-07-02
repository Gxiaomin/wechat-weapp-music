// pages/search/search.js
const {globalData} = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCancelBtn: false,
    showDeleteBtn: false,
    showHotWrapper: true,
    inputValue: '',
    current: 0,
    hotSearchArr: [
        '看海', '听海', '想带你去看晴空万里'
    ],
    searchResultList: []
  },
  //input事件
  bindKeyInput(e) {
    if(e.detail.value) {
        this.setData({
            showDeleteBtn: true,
            inputValue: e.detail.value
        })

        this.searchFun(e.detail.value);
    }
  },
  //搜索方法
  searchFun(param) {
    let that = this;
    globalData.HTTP.GET({
        params: {
            loading: true,
            url: '/213-1',
            keyword: param
        },
        success: function(res) {
            console.log(res);
            that.setData({
                'searchResultList': res.data.showapi_res_body.pagebean.contentlist
            })
        }
    })
  },
  //搜索栏聚焦处理
  searchFocus: function(e) {
    this.setData({
        showCancelBtn: true,
        showHotWrapper: false
    })
  },
  //点击取消按钮
  cancelClick: function() {
    this.setData({
        showDeleteBtn: false,
        showCancelBtn: false,
        showHotWrapper: true
    })
    this.formReset();
  },
  //点击删除按钮
  deleteClick: function() {
      this.setData({
        searchResultList: []
      });
    this.formReset();
  },
  //表单重置
  formReset: function() {
    this.setData({
        inputValue: '',
        searchResultList: []
    })
    return;
  },
  //热门搜索被点击
  hotItemClick: function(e) {
    //   console.log(e);
    this.setData({
        current: e.currentTarget.dataset.ind
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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