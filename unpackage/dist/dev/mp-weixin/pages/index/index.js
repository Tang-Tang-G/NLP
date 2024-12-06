"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref("");
    const mainModules = common_vendor.ref([
      {
        name: "舔狗日志",
        image: "static/Dog.png"
      },
      {
        name: "土味情话",
        image: "static/Love_Saying.png"
      }
    ]);
    const colleges = common_vendor.ref([
      {
        name: "单身学院",
        sections: ["暗恋", "聊天搭讪", "社交撩妹"],
        icon: "static/Arrow_Love.png"
      },
      {
        name: "追求学院",
        sections: ["吸引异性", "约会", "表白"],
        icon: "static/Pursue.png"
      },
      {
        name: "恋爱学院",
        sections: ["了解异性", "分析情绪"],
        icon: "static/Fall_In_Love.png"
      }
    ]);
    const copyPaste = () => {
      common_vendor.index.navigateTo({
        url: "/pages/ChatInput/ChatInput"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(copyPaste),
        b: common_vendor.f(mainModules.value, (module, k0, i0) => {
          return {
            a: module.image,
            b: module.name,
            c: module.name
          };
        }),
        c: common_vendor.f(colleges.value, (college, k0, i0) => {
          return {
            a: college.icon,
            b: common_vendor.t(college.name),
            c: common_vendor.f(college.sections, (section, k1, i1) => {
              return {
                a: common_vendor.t(section),
                b: section
              };
            }),
            d: college.name
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
