export const wxConfig = {
  created () {
    this.wxConfig()
  },
  mounted () {
  },
  methods: {
    /**
     * 微信jssdk配置
     * @param {*学校标识} schoolCode
     * @param {*appid} appid
     */
    async wxConfig (schoolCode, appid) {
      let request = {
        url: location.href.split('#')[0]
      }
      // let _this = this
      console.log(request)
      try {
        let response = await this.$http.Common.getWXconfig(request)
        console.log('[success] 微信JSSDK配置', response)
        if (response.errcode == '0') {
          wx.config({
            debug: false,
            appId: response.data.appId,
            timestamp: response.data.timestamp,
            nonceStr: response.data.nonceStr,
            signature: response.data.signature,
            jsApiList: ['checkJsApi', 'scanQRCode', 'chooseImage', 'uploadImage', 'previewImage']
          })
          wx.error((err) => {
            console.log(err, '报错信息')
          })
        }
      } catch (error) {
        // setTimeout(() => {
        //   _this.wxConfig()
        // }, 1500)
        // console.log(error)
      }
    }
  }
}
