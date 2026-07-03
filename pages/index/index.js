// index.js
Page({
  data: {
    name: 'justin',
    age: 19,
    userinfo: { name: 'lqz', hobby: '烫头' },
    names: ['刘亦菲', '迪丽热巴', '古力娜扎', '马儿咋哈']
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
  }
})
