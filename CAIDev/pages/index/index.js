//index.js
//获取应用实例
const app = getApp()

import {request} from "../../request/index.js"

Page({
  data: {
    swiperList:[],
    catesList:[],
    floorList:[]
  },
  onLoad: function () {
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList();
  },
  getSwiperList: function(){
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
    .then((result)=>{
      this.setData({
        swiperList:result.data.message
      });
    });
  },
  getCatesList: function(){
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'})
    .then((result)=>{
      this.setData({
        catesList:result.data.message
      });
    });
  },
  getFloorList: function(){
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'})
    .then((result)=>{
      this.setData({
        floorList:result.data.message
      });
    });
  },
})
