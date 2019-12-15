// pages/appointment/appointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"2019-12-16",
    time:"09:00",
    address: {
      name: "张三",
      tell: "138*****094",
      address: "北京直辖市朝阳市区望京"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var index = options.index;
  },
  bindDateChange:function(e){
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange:function(e){
    this.setData({
      time: e.detail.value
    })
  },
  formsubmit:function(e){
    console.log(e.detail.value)
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