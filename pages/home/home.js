const app = getApp()

Page({
  data: {
    city: '杭州',
    filters: ['附近', '免费', '亲子', '出虾多', '停车'],
    activeFilter: '附近',
    spots: []
  },

  onLoad() {
    this.setData({
      city: app.globalData.city,
      spots: app.globalData.spots
    })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 })
    }
  },

  selectFilter(event) {
    const activeFilter = event.currentTarget.dataset.value
    this.setData({ activeFilter })
  },

  goDetail(event) {
    const id = event.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  },

  goMap() {
    wx.switchTab({ url: '/pages/map/map' })
  }
})
