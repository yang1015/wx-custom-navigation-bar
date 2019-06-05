let globalData = getApp().globalData;

Component({
    properties: {
        statusBarHeight: {
            type: Number,
            value: globalData.statusBarHeight, // 状态栏高度(信号时间电量)
        },
        navBarHeight: {
            type: Number,
            value: globalData.navBarHeight
        },
        navTitle: {
            type: String
        }
    },

    methods: {
        goBack(e) {
            console.log("返回")
            wx.navigateBack();
        }
    }
})