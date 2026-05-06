Page({
  data: {
    types: ['野钓点', '收费钓场', '农家乐', '公园水域'],
    selectedType: '收费钓场',
    facilities: [
      { key: 'child', label: '亲子友好', active: true },
      { key: 'parking', label: '停车方便', active: true },
      { key: 'toilet', label: '有厕所', active: true },
      { key: 'night', label: '可夜钓', active: false }
    ]
  },

  selectType(event) {
    this.setData({ selectedType: event.currentTarget.dataset.value })
  },

  toggleFacility(event) {
    const key = event.currentTarget.dataset.key
    const facilities = this.data.facilities.map((item) => item.key === key ? { ...item, active: !item.active } : item)
    this.setData({ facilities })
  },

  chooseLocation() {
    wx.chooseLocation({
      success: (res) => wx.showToast({ title: res.name || '已选择位置', icon: 'success' })
    })
  },

  chooseImage() {
    wx.chooseMedia({
      count: 6,
      mediaType: ['image'],
      success: () => wx.showToast({ title: '已选择照片', icon: 'success' })
    })
  },

  submit() {
    wx.showToast({ title: '已提交审核', icon: 'success' })
    setTimeout(() => wx.navigateBack({ delta: 1 }), 800)
  }
})
