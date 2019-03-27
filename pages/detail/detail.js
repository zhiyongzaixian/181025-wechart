// pages/detail/detail.js
let listDatas = require('../../datas/list-data.js');
let appData = getApp();
console.log(appData, typeof appData);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCollected: false, // 未收藏
    detailObj: {},
    isMusicPlay: false // 未播放
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

    // 缓存是否收藏的状态
    // 缓存思路：
    /*
      对象 : {0: true, 1: false,  2: true}
    
     */
    let {index} = this.data;
    let obj = wx.getStorageSync('isCollected');
    console.log(obj, 'xxxx');
    // 用户首次访问预处理
    obj = obj?obj:{};
    obj[index] = isCollected;
    wx.setStorageSync('isCollected', obj)
  },
  // 处理音乐播放功能的函数
  handleMusicPlay(){
    let isMusicPlay = !this.data.isMusicPlay;
    this.setData({
      isMusicPlay
    })

    // 判断音乐是否播放
    let { dataUrl, title, coverImgUrl} = this.data.detailObj.music;
    if (isMusicPlay){
      wx.playBackgroundAudio({
        dataUrl,
        title,
        coverImgUrl
      })
    }else {
      wx.pauseBackgroundAudio();
    }
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

    // 获取本地缓存的是否收藏的状态
    let oldObj = wx.getStorageSync('isCollected');
    // 判断当前页面是否被收藏
    if(oldObj[index]){
      // 更新状态
      this.setData({
        isCollected: true
      })
    }

    // 判断当前页面的额音乐是否播放
    if(index === appData.data.pageIndex && appData.data.isPlay){
      this.setData({
        isMusicPlay: true
      })
    }


    // 监听音乐播放暂停
    wx.onBackgroundAudioPlay(() => {
      this.setData({
        isMusicPlay: true
      })
      appData.data.pageIndex = index;
      appData.data.isPlay = true;
    });
    wx.onBackgroundAudioPause(() => {
      this.setData({
        isMusicPlay: false
      })

      // appData.data.pageIndex = index;
      appData.data.isPlay = false;
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