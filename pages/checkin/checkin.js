Page({
  data: {
    count: 18,
    catchLevels: ['爆护', '不错', '一般', '较少'],
    selectedLevel: '不错',
    periods: ['上午', '下午', '傍晚', '夜晚'],
    selectedPeriod: '傍晚',
    baits: ['猪肝', '鸡肠', '火腿肠', '其他'],
    selectedBait: '猪肝',
    childFriendly: true
  },

  decrease() {
    this.setData({ count: Math.max(0, this.data.count - 1) })
  },

  increase() {
    this.setData({ count: this.data.count + 1 })
  },

  selectLevel(event) {
    this.setData({ selectedLevel: event.currentTarget.dataset.value })
  },

  selectPeriod(event) {
    this.setData({ selectedPeriod: event.currentTarget.dataset.value })
  },

  selectBait(event) {
    this.setData({ selectedBait: event.currentTarget.dataset.value })
  },

  toggleChild() {
    this.setData({ childFriendly: !this.data.childFriendly })
  },

  chooseImage() {
    wx.chooseMedia({
      count: 3,
      mediaType: ['image'],
      success: () => wx.showToast({ title: '已选择照片', icon: 'success' })
    })
  },

  submit() {
    wx.showToast({ title: '打卡已发布', icon: 'success' })
    setTimeout(() => wx.navigateBack({ delta: 1 }), 800)
  }
})
