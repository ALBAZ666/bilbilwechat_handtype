// index.js
Page({
  data: {
    name: 'justin',
    age: 19,
    userinfo: { name: 'lqz', hobby: '烫头' },
    names: ['刘亦菲', '迪丽热巴', '古力娜扎', '马儿咋哈'],
    goodsList: [{ id: 1001, name: '钢笔', price: 9 }, { id: 1002, name: '铅笔', price: 6 }, { id: 1003, name: '脸盆', price: 99 }],
    showPhoto: false,
    score: 0
  },

  handleAddAge() {
    let a = this.data.age + 1
    this.setData({
      age: a
    })
  },

  handleChangeHobby() {
    this.setData({
      'userinfo.hobby': '篮球'
    })
  },

  handleAddName() {
    this.data.names.push('亚瑟王')
    this.setData({
      names: this.data.names
    })
  },

  handleShowPhoto() {
    this.setData({
      showPhoto: !this.data.showPhoto
    })
  }
})
