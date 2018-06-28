// components/SongItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    songname: {            // 属性名
        type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
        value: '歌名'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    singername: {
        type: String,
        value: '歌手名'
    },
    album: {
        type: String,
        value: '专辑'
    },
    imgSrc: {
        type: String,
        value: '专辑图片'
    },
    songurl: {
        type: String,
        value: '歌曲地址'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
