"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        {
          imgUrl: "../../static/logo.png",
          title: "恋爱，始于聊天",
          description: "聊天技巧"
        },
        {
          imgUrl: "../../static/logo.png",
          title: "恋爱，始于聊天",
          description: "聊天技巧"
        },
        {
          imgUrl: "../../static/logo.png",
          title: "恋爱，始于聊天",
          description: "聊天技巧"
        },
        {
          imgUrl: "../../static/logo.png",
          title: "恋爱，始于聊天",
          description: "聊天技巧"
        }
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.imgUrl,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.description),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
