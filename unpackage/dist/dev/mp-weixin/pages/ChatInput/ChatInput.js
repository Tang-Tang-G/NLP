"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //键盘高度
      keyboardHeight: 0,
      //底部消息发送高度
      bottomHeight: 0,
      //滚动距离
      scrollTop: 0,
      userId: "",
      //发送的消息
      chatMsg: "",
      msgList: [
        {
          botContent: "你好啊，很高兴你可以关注我，请问我有什么可以帮助你的吗？",
          userContent: "",
          image: "/static/common/unname1.jpeg"
        },
        {
          botContent: "",
          userContent: "你好呀，非常高兴认识你",
          image: "/static/common/unname2.jpg"
        }
      ]
    };
  },
  updated() {
    this.scrollToBottom();
  },
  computed: {
    windowHeight() {
      return this.rpxTopx(common_vendor.index.getSystemInfoSync().windowHeight);
    },
    // 键盘弹起来的高度+发送框高度
    inputHeight() {
      return this.bottomHeight + this.keyboardHeight;
    }
  },
  onLoad() {
    common_vendor.index.onKeyboardHeightChange((res) => {
      this.keyboardHeight = this.rpxTopx(res.height);
      if (this.keyboardHeight < 0)
        this.keyboardHeight = 0;
    });
  },
  onUnload() {
  },
  methods: {
    goback() {
      common_vendor.index.switchTab({
        url: "/pages/tutorship/tutorship"
      });
    },
    focus() {
      this.scrollToBottom();
    },
    blur() {
      this.scrollToBottom();
    },
    // px转换成rpx
    rpxTopx(px) {
      let deviceWidth = common_vendor.index.getSystemInfoSync().windowWidth;
      let rpx = 750 / deviceWidth * Number(px);
      return Math.floor(rpx);
    },
    // 监视聊天发送栏高度
    sendHeight() {
      setTimeout(() => {
        let query = common_vendor.index.createSelectorQuery();
        query.select(".send-msg").boundingClientRect();
        query.exec((res) => {
          this.bottomHeight = this.rpxTopx(res[0].height);
        });
      }, 10);
    },
    // 滚动至聊天底部
    scrollToBottom(e) {
      setTimeout(() => {
        let query = common_vendor.index.createSelectorQuery().in(this);
        query.select("#scrollview").boundingClientRect();
        query.select("#msglistview").boundingClientRect();
        query.exec((res) => {
          if (res[1].height > res[0].height) {
            this.scrollTop = this.rpxTopx(res[1].height - res[0].height);
          }
        });
      }, 15);
    },
    // 发送消息
    handleSend() {
      if (!this.chatMsg || !/^\s+$/.test(this.chatMsg)) {
        let obj = {
          botContent: "",
          userContent: this.chatMsg,
          image: "/static/common/unname2.jpg"
        };
        this.msgList.push(obj);
        this.chatMsg = "";
        this.scrollToBottom();
      } else {
        this.$modal.showToast("不能发送空白消息");
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.msgList, (item, index, i0) => {
      return common_vendor.e({
        a: item.userContent != ""
      }, item.userContent != "" ? {
        b: common_vendor.t(item.userContent),
        c: item.image
      } : {}, {
        d: item.botContent != ""
      }, item.botContent != "" ? {
        e: item.image,
        f: common_vendor.t(item.botContent)
      } : {}, {
        g: index
      });
    }),
    b: `${$options.windowHeight - $options.inputHeight - 180}rpx`,
    c: $data.scrollTop,
    d: common_vendor.o((...args) => $options.handleSend && $options.handleSend(...args)),
    e: common_vendor.o((...args) => $options.sendHeight && $options.sendHeight(...args)),
    f: common_vendor.o((...args) => $options.focus && $options.focus(...args)),
    g: common_vendor.o((...args) => $options.blur && $options.blur(...args)),
    h: $data.chatMsg,
    i: common_vendor.o(($event) => $data.chatMsg = $event.detail.value),
    j: common_vendor.o((...args) => $options.handleSend && $options.handleSend(...args)),
    k: `${$data.keyboardHeight - 60}rpx`,
    l: `${$options.inputHeight}rpx`
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-66754769"]]);
wx.createPage(MiniProgramPage);
