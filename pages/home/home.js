var app = getApp();
// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay:true,
    duration:1000,
    interval:2000,
    vertical:false,
    indicatorDots:true,
    imgUrls: ['/pages/images/banner_01.png', '/pages/images/banner_02.png', '/pages/images/banner_03.png','/pages/images/banner_04.png'],
    currentData:0,
    navTop:[{
      id: 0,
      title:"推荐",
      imageUrl:"/pages/images/nav_icon_01.png"
    }, {
        id: 1,
        title: "美甲",
        imageUrl: "/pages/images/nav_icon_02.png"
      }, {
        id: 2,
        title: "美容",
        imageUrl: "/pages/images/nav_icon_03.png"
      }, {
        id: 3,
        title: "美发",
        imageUrl: "/pages/images/nav_icon_04.png"
      }, {
        id: 4,
        title: "美睫",
        imageUrl: "/pages/images/nav_icon_05.png"
      }],
    contentList: ["recommend", "manicure", "cosmetology", "hairdressing","eyelashes"],//获取所有选项卡类型
    contentInfo: "",//当前所选选项卡的数据
      recommend:[{//推荐
        id:0,
        imageUrl:"/pages/images/recommend_img_01.png",
        title:"秋季自然特价美甲",
        price:"198",
        desc:"教你怎么做活得精致的小仙女",
      }, {
          id: 1,
          imageUrl: "/pages/images/recommend_img_02.png",
          title: "睫毛稀疏 种睫毛来帮忙",
          price: "1888",
          desc: "长而翘的睫毛，炯炯大眼",
        },{
          id: 2,
          imageUrl: "/pages/images/recommend_img_03.png",
          title: "爱丽颗",
          price: "1588",
          desc: "我们追求的只有更好！",
        },{
          id: 3,
          imageUrl: "/pages/images/recommend_img_04.png",
          title: "一本造型",
          price: "198",
          desc: "由著名的形象设计师杨XX",
        }, {
          id: 4,
          imageUrl: "/pages/images/recommend_img_05.png",
          title: "潮流发型",
          price: "236",
          desc: "当下最时尚最潮流的发型",
        }, {
          id: 5,
          imageUrl: "/pages/images/recommend_img_06.png",
          title: "画对了妆，你就是小仙女",
          price: "198",
          desc: "《微微一笑很倾城》剧照仿妆",
        }],
    manicure: [{//美甲
      id: 0,
      imageUrl: "/pages/images/recommend_img_01.png",
      title: "秋季自然特价美甲",
      price: "198",
      desc: "教你怎么做活得精致的小仙女",
    }], cosmetology: [{//美容
      id: 2,
      imageUrl: "/pages/images/recommend_img_03.png",
      title: "爱丽颗",
      price: "1588",
      desc: "我们追求的只有更好！",
    }, {
        id: 5,
        imageUrl: "/pages/images/recommend_img_06.png",
        title: "画对了妆，你就是小仙女",
        price: "198",
        desc: "《微微一笑很倾城》剧照仿妆",
      }], hairdressing: [{//美发
        id: 3,
        imageUrl: "/pages/images/recommend_img_04.png",
        title: "一本造型",
        price: "198",
        desc: "由著名的形象设计师杨XX",
      }, {
          id: 4,
          imageUrl: "/pages/images/recommend_img_05.png",
          title: "潮流发型",
          price: "236",
          desc: "当下最时尚最潮流的发型",
        }], eyelashes: [{//美睫
      id: 1,
      imageUrl: "/pages/images/recommend_img_02.png",
      title: "睫毛稀疏 种睫毛来帮忙",
      price: "1888",
      desc: "长而翘的睫毛，炯炯大眼",
    }]
  },
  // bindchange:function(e){
  //   const that = this;
  //   that.setData({
  //     currentData:e.detail.current
  //   })
  // },
  checkCurrent:function(e){
    const that = this;
    if (that.data.currentData === e.currentTarget.dataset.current){
        return false
    }else{
      var array = this.data.contentList[e.currentTarget.dataset.current];
    
      that.setData({
        currentData: e.currentTarget.dataset.current,
        contentInfo: this.data[array] 
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      contentInfo: this.data.recommend
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