// pages/index/index.js
Page({ // 注册当前页面

  /**
   * 页面的初始数据
   */
  data: {
    msg: '测试数据'
  },
  toList(){
    // 跳转到list页面
    wx.switchTab({
      url: '/pages/list/list',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送ajax请求，开启定时器异步任务
    console.log('onLoad');
    // this 当前页面的实例
    console.log(this.msg);

    // React修改状态
    // this.setState({
    //   msg: 'xxx'
    // }, () => {
    //   console.log(this.state.msg);
    // })

    this.setData({
      msg: '修改数据'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
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