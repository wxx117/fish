App({
  globalData: {
    city: '杭州',
    user: {
      nickname: '小虾友',
      level: '新手虾友',
      points: 86,
      checkins: 3,
      favorites: 5,
      posts: 2
    },
    spots: [
      {
        id: 'spot-1',
        name: '溪边小龙虾垂钓园',
        district: '余杭区',
        address: '杭州市余杭区溪湾路 18 号',
        distance: '3.2km',
        price: '28 元/人',
        score: '4.6',
        childScore: '4.8',
        catchText: '不错，傍晚适合冲',
        catchCount: 18,
        feedbackCount: 5,
        recommendTime: '17:00',
        latest: '12 人刚打卡',
        tags: ['出虾多', '亲子友好', '有厕所', '停车方便'],
        type: '收费钓场',
        latitude: 30.2741,
        longitude: 120.1551,
        theme: 'green'
      },
      {
        id: 'spot-2',
        name: '夏湾农庄钓虾池',
        district: '西湖区',
        address: '杭州市西湖区夏湾村 6 号',
        distance: '5.8km',
        price: '套餐 68 元起',
        score: '4.4',
        childScore: '4.7',
        catchText: '亲子友好，适合新手',
        catchCount: 12,
        feedbackCount: 3,
        recommendTime: '16:30',
        latest: '3 人今天打卡',
        tags: ['有厕所', '可烧烤', '停车方便'],
        type: '农家乐',
        latitude: 30.2592,
        longitude: 120.1303,
        theme: 'orange'
      },
      {
        id: 'spot-3',
        name: '青塘野趣钓虾点',
        district: '拱墅区',
        address: '杭州市拱墅区青塘公园东侧',
        distance: '7.1km',
        price: '免费',
        score: '4.1',
        childScore: '3.8',
        catchText: '免费野趣，注意安全',
        catchCount: 9,
        feedbackCount: 2,
        recommendTime: '18:00',
        latest: '昨天有人打卡',
        tags: ['免费', '野钓点', '可夜钓'],
        type: '野钓点',
        latitude: 30.3112,
        longitude: 120.1648,
        theme: 'blue'
      }
    ]
  }
})
