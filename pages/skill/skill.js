// pages/skill/skill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {
      name: "张三",
      tell: "138*****094",
      address: "北京直辖市朝阳市区望京"
    },
    serviceList: [{//推荐
      id: 0,
      name: "张吉师",
      imageUrl: "/pages/images/skilledt_img_01.png",
      title: "美容美发沙龙",
      price: "500",
      desc: "从事美发实业30年，有丰富的经验，作战在时尚的前沿",
      coordinate:{
        lon:"",
        hor:""
      }
    }, {
      id: 1,
      name: "包技师",
      imageUrl: "/pages/images/skilledt_img_02.png",
      title: "元月美甲沙龙",
      price: "888",
      desc: "从事美发美甲行业12年有余，是行业的新兴势力。",
      coordinate: {
        lon: "",
        hor: ""
      }
    }, {
      id: 2,
      name: "柳依依",
      imageUrl: "/pages/images/skilledt_img_03.png",
      title: "璀璨美睫会所",
      price: "588",
      desc: "追求的只有更漂亮",
      coordinate: {
        lon: "",
        hor: ""
      }
    }, {
      id: 3,
      name: "网技师",
      imageUrl: "/pages/images/skilledt_img_04.png",
      title: "柔丝妮美容养生馆",
      price: "198",
      desc: "著名形象设计师",
      coordinate: {
        lon: "",
        hor: ""
      }
    }, {
      id: 4,
      name: "李工技师",
      imageUrl: "/pages/images/skilledt_img_01.png",
      title: "潮流发型有限公司",
      price: "236",
      desc: "当下最时尚最潮流的发型",
      coordinate: {
        lon: "",
        hor: ""
      }
    }, {
      id: 5,
      name: "刘技师",
      imageUrl: "/pages/images/skilledt_img_02.png",
      title: "化妆大咖",
      price: "198",
      desc: "明星化妆师",
      coordinate: {
        lon: "",
        hor: ""
      }
    }]
  },
  toSkill: function (e) {
    const index = e.currentTarget.dataset.skillid;
    console.log("当前点击技师的id为："+index);
    wx.navigateTo({
      url:"skillDetail/skillDetail"
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