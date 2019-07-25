//app.js
App({
    onLaunch: function () {
        const res = wx.getSystemInfoSync();
        this.globalData.screenHeight = res.screenHeight;
        this.globalData.pt = res.screenHeight * .25;
        this.globalData.statusBarHeight = res.statusBarHeight; // 手机状态栏高度
        let reg = /ios/i;
        this.globalData.navBarHeight = reg.test(res.system) ? 44 : 48;
        this.globalData.systemInfo = wx.getSystemInfoSync();

        console.log(wx.getMenuButtonBoundingClientRect())
    },
    globalData: {
        userInfo: null
    }
})