Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    showBack: {
      type: Boolean,
      value: false
    },
    background: {
      type: String,
      value: '#ffffff'
    }
  },
  data: {
    statusBarHeight: 0,
    navBarHeight: 44
  },
  lifetimes: {
    attached() {
      const systemInfo = wx.getSystemInfoSync()
      this.setData({
        statusBarHeight: systemInfo.statusBarHeight,
        navBarHeight: systemInfo.platform === 'android' ? 48 : 44
      })
    }
  }
})
