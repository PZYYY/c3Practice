export const animate = {
  created () {
  },
  mounted () {
  },
  methods: {
    animated () {
      window.addEventListener('scroll', () => {
        this.clientTop = this.clientBox.getBoundingClientRect().top // 目标组件到浏览器顶部的距离
      })
      // window.onscroll = () => {
      //   this.clientTop = this.clientBox.getBoundingClientRect().top // 目标组件到浏览器顶部的距离
      // }
    },
    fadeInRight () {
      if (this.clientTop < (this.fullHeight - 100)) {
        this.animation = 'aFadeInRight' // 样式名
      }
    },
    fadeInLeft () {
      if (this.clientTop < (this.fullHeight - 100)) {
        this.animation = 'aFadeLeft'
      }
    },
    fadeInTop () { // 动画（往上淡入）
      if (this.clientTop < (this.fullHeight - 100)) {
        this.animation = 'aFadeInUp'
      }
    },
    fadeInBottom () {
      if (this.clientTop < (this.fullHeight - 100)) {
        this.animation = 'aFadeInDown'
      }
    }
  }
}
