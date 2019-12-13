// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      nickName:"未知",
      gender:0,
      avatarUrl:"/pages/images/avatar.png",
      
    },
    address: [{
      name: "张三",
      tell: "138*****094",
      address: "北京直辖市朝阳市区望京"
    }, {
      name: "双丰收",
      tell: "153*****456",
      address: "北京直辖市朝阳市区望京"
      }, {
        name: "时代峰峻",
        tell: "134*****690",
        address: "北京直辖市朝阳市区望京"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _self=this
    wx.getUserInfo({
      success: function (res) {
        // console.log(res);
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        //var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        var gender = ["未知","男","女"];
    
        _self.setData({
          userInfo: {
            nickName: userInfo.nickName,
            gender: gender[userInfo.gender],
            avatarUrl: userInfo.avatarUrl,
          }
        })
      }
    })
    if (options){
      var info = JSON.parse(options.addInfo);
      var obj = {
        name: info.name,
        tell: info.tell,
        address: info.region+info.address
      };
      console.log(obj);
      _self.data.address.push(obj);
      _self.setData({
        "address": _self.data.address
      })
    }
  },
  /**
   * 新增地址*/
  newAddress:function(){
    wx.navigateTo({
      url: '/pages/addAddress/addAddress',
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