Component({
  data: {
    selected: 0,
    list: [
      { pagePath: '/pages/home/home', text: '首页' },
      { pagePath: '/pages/map/map', text: '地图' },
      { pagePath: '/pages/publish/publish', text: '＋', label: '发布', publish: true },
      { pagePath: '/pages/my/my', text: '我的' }
    ]
  },

  methods: {
    switchTab(event) {
      const index = event.currentTarget.dataset.index
      const item = this.data.list[index]
      wx.switchTab({ url: item.pagePath })
    }
  }
})
