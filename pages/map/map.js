const app = getApp()

Page({
  data: {
    spots: [],
    selected: null,
    filters: ['全部', '免费', '亲子'],
    activeFilter: '全部',
    pins: [
      { id: 'spot-1', className: 'pin-red', label: '🦞' },
      { id: 'spot-2', className: 'pin-green', label: '🦞' },
      { id: 'spot-3', className: 'pin-blue', label: '🦞' }
    ]
  },

  onLoad() {
    const spots = app.globalData.spots
    this.setData({ spots, selected: spots[0] })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 })
    }
  },

  selectFilter(event) {
    this.setData({ activeFilter: event.currentTarget.dataset.value })
  },

  selectPin(event) {
    const id = event.currentTarget.dataset.id
    const selected = this.data.spots.find((spot) => spot.id === id)
    this.setData({ selected })
  },

  goDetail() {
    wx.navigateTo({ url: `/pages/detail/detail?id=${this.data.selected.id}` })
  }
})
