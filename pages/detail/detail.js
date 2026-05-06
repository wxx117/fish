const app = getApp()

Page({
  data: {
    spot: null,
    checkins: [
      {
        user: '小丸子爸爸',
        content: '带娃钓了 23 只，水边有护栏，推荐猪肝。'
      },
      {
        user: '阿泽',
        content: '傍晚去比较好，停车方便，蚊子略多。'
      }
    ]
  },

  onLoad(options) {
    const spot = app.globalData.spots.find((item) => item.id === options.id) || app.globalData.spots[0]
    this.setData({ spot })
  },

  goCheckin() {
    wx.navigateTo({ url: `/pages/checkin/checkin?id=${this.data.spot.id}` })
  },

  openLocation() {
    const { latitude, longitude, name, address } = this.data.spot
    wx.openLocation({ latitude, longitude, name, address, scale: 16 })
  },

  toggleFavorite() {
    wx.showToast({ title: '已收藏', icon: 'success' })
  },

  onShareAppMessage() {
    return {
      title: `${this.data.spot.name}：今日虾况${this.data.spot.catchText}`,
      path: `/pages/detail/detail?id=${this.data.spot.id}`
    }
  }
})
