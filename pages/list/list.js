// pages/list/list.js
let listDatas = require('../../datas/list-data.js');
console.log(listDatas, typeof listDatas);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listDatas: []
  },
  // 跳转到详情页
  toDetail(event){
    console.log(event);
    let index = event.currentTarget.dataset.index;
    // 将index传递给要跳转的detail页面
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 更新listDatas的状态之
    this.setData({
      listDatas: listDatas.list_data
    });
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