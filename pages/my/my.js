const app = getApp()

Page({
  data: {
    user: {},
    menu: [
      { label: '我的收藏', value: '5 个钓点' },
      { label: '我的打卡', value: '3 条记录' },
      { label: '我的发布', value: '2 个审核通过' },
      { label: '反馈建议', value: '帮助我们变好' }
    ]
  },

  onLoad() {
    this.setData({ user: app.globalData.user })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 3 })
    }
  },

  showTodo() {
    wx.showToast({ title: '功能开发中', icon: 'none' })
  }
})
