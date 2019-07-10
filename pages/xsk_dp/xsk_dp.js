// pages/xsk_dp/xsk_dp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjects_dp: "",
    news: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var t = this;
    // this.data.news = options.newsid
    // this.setData({
    // news: options.newsid
    // })
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
        });
      }
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