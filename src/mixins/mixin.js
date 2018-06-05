export const animate = {
  created () {
  },
  mounted () {
  },
  methods: {
    animated (animateName) {
      switch (animateName){
        case 'top' :
          window.onscroll = (e) => {
            this.clientTop = this.clientBox.getBoundingClientRect().top
            this.fadeInTop(this.clientTop)
            }
          break
        case 'left' :
          window.onscroll = (e) => {
            this.clientTop = this.clientBox.getBoundingClientRect().top
            this.fadeInLeft(this.clientTop)
          }
        case 'right' :
          window.onscroll = (e) => {
            this.clientTop = this.clientBox.getBoundingClientRect().top
            this.fadeInRight(this.clientTop)
          }
          break;
        case 'bottom' :
          window.onscroll = (e) => {
            this.clientTop = this.clientBox.getBoundingClientRect().top
            this.fadeInBottom(this.clientTop)
          }
          break
      }
    },
    fadeInRight () { // 动画（往上淡入）
      console.log(454)
      if (this.clientTop < (this.fullHeight - 200)) {
        this.animation = 'aFadeInRight'
      }
    },
    fadeInLeft () { // 动画（往上淡入）
      if (this.clientTop < (this.fullHeight - 200)) {
        this.animation = 'aFadeLeft'
      }
    },
    fadeInTop () { // 动画（往上淡入）
      if (this.clientTop < (this.fullHeight - 200)) {
        this.animation = 'aFadeInUp'
      }
    },
    fadeInBottom () { // 动画（往上淡入）
      if (this.clientTop < (this.fullHeight - 200)) {
        this.animation = 'aFadeInDown'
      }
    }
  }
}
