// pages/category/index.js
import { request } from "../../request/index.js"
import regeneratorRuntime, { async } from '../../lib/runtime/runtime.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenu: [],
    rightContent: [],
    currentIndex: 0,
    scroll_top: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const local = wx.getStorageSync("categories");
    if (!local) {
      console.log("wangluo");
      this.getCatList()
    } else {
      console.log("bendi");
      this.setData({
        leftMenu: local.data.data.message,
        rightContent: local.data.data.message[0]
      });
    }

  },
  getCatList: async function () {
    let result = await request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories' });
    wx.setStorageSync("categories", { time: Date.now(), data: result });
    this.setData({
      leftMenu: result.data.message,
      rightContent: result.data.message[0]
    })
  },
  handleTap: function (e) {
    console.log(e);
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex: index,
      rightContent: this.data.leftMenu[index],
      scroll_top: 0
    })
  }
})