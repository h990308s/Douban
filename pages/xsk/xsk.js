// pages/xsk/xsk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjects_xsk: "",
    news: ''
  },
  bindXk: function() {
    wx: wx.navigateTo({
      url: '../xk/xk',
    })
  },
  bindKg: function() {
    wx: wx.navigateTo({
      url: '../kg/kg',
    })
  },
  bindXsk_dp: function (e) {
    let t = e.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: `/pages/xsk_dp/xsk_dp?newsid=${t}`
    })
  },
  flodFn: function () {
    this.setData({
      isFold: !this.isFold
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // var t = this;
    // this.data.news = options.newsid
    // this.setData({
    // news: options.newsid
    // })
    wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/" + options.newsid,
      method: "GET",
      data: {},
      header: {
        "content-type": "json"
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          subjects_xsk: res.data,
          // director: res.data.writers,
          // performer :res.data.casts,
          // stills: res.data.photos,
          // shortCommentary: res.data.popular_reviews
        });
      }
    }),
    wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/" + options.newsid + "/comments",
      method: "GET",
      data: {},
      header: {
        "content-type": "json"
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          subjects_dp: res.data,
          // director: res.data.writers,
          // performer :res.data.casts,
          // stills: res.data.photos,
          // shortCommentary: res.data.popular_reviews
        });
      }
    }),
    wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/" + options.newsid + "/reviews",
      method: "GET",
      data: {},
      header: {
        "content-type": "json"
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          subjects_cp: res.data,
          // director: res.data.writers,
          // performer :res.data.casts,
          // stills: res.data.photos,
          // shortCommentary: res.data.popular_reviews
        });
      }
    })
    // const _this = this;
    // wx.request({
    //   url: "https://douban.uieee.com/v2/movie/subject/1292052",
    //   data: {},
    //   header: {
    //     'content-type': 'json'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //     _this.setData({
    //       subjects_xsk: res.data
    //     })
    //   }
    // }),
    // wx.request({
    //   url: "https://douban.uieee.com/v2/movie/subject/1292052/comments",
    //   data: {},
    //   header: {
    //     'content-type': 'json'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //     _this.setData({
    //       subjects_dp: res.data
    //     })
    //   }
    // }),
    // wx.request({
    //   url: "https://douban.uieee.com/v2/movie/subject/1292052/reviews",
    //   data: {},
    //   header: {
    //     'content-type': 'json'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //     _this.setData({
    //       subjects_cp: res.data
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})