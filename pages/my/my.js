Page({
  handleConsole() {
    console.log('我被点了')
  },
  handleParent() {
    console.log("父亲被点了")
  },
  handleChildren() {
    console.log("孩子被点了")
  },
  handleChick01(event) {
    console.log(event)
    console.log(event.target.dataset)
    console.log(event.target.dataset.name)
    console.log(event)
  },
  handlenavigateTo() {
    wx.navigateTo({ url: '/pages/login/login' })
  },
  handleredirectTo() {
    wx.redirectTo({ url: '/pages/login/login' })
  },
  handleswichTab() {
    wx.switchTab({ url: '/pages/index/index' })
  },
  handlereLaunch() {
    wx.reLaunch({ url: '/pages/index/index' })
  },
  handlenavigateBack() {
    wx.navigateBack({ delta: 1 })
  }
})