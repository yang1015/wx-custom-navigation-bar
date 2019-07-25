let globalData = getApp().globalData;

Component({
    properties: {
        statusBarHeight: {
            type: Number
        },
        navBarHeight: {
            type: Number
        },
        navTitle: {
            type: String
        }
    },

    lifetimes: {
        attached() {
            const res = wx.getSystemInfoSync();
            let reg = /ios/i;
            this.setData({
                statusBarHeight: res.statusBarHeight,
                navBarHeight: reg.test(res.system) ? 44 : 48,
            })
        }
    },

    methods: {
        goBack(e) {
            wx.navigateBack();
        }
    }
})