// pages/detail/detail.js
let listDatas = require('../../datas/list-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCollected: false, // 未收藏
    detailObj: {}
  },
  // 处理收藏功能的函数
  handleCollection(){
    // 修改是否收藏的状态
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected
    })

    let title = isCollected?'收藏成功': '取消收藏';
    // 显示消息提示
    wx.showToast({
      title,
      icon: 'success'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let index = options.index;
    this.setData({
      detailObj: listDatas.list_data[index],
      index: index
    })
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