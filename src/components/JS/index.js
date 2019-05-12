import Vue from "vue";
import MsgBox from "./MsgBox";

export var myMsgBox = (function() {
  var defaults = {
    title: "",
    content: "",
    cancel: "",
    ok: "",
    isCancel: null,
    isOk: null
  };
  var MyComponent = Vue.extend(MsgBox);
  return function(opt) {
    for (var attr in opt) {
      defaults[attr] = opt[attr];
    }
    var vm = new MyComponent({
      el: document.createElement("div"),
      data: {
        title: defaults.title,
        content: defaults.content,
        cancel: defaults.cancel,
        ok: defaults.ok
      },
      methods: {
        isCancel() {
          defaults.isCancel && defaults.isCancel.call(this);
          document.body.removeChild(vm.$el);
        },
        isOk() {
          defaults.isOk && defaults.isOk.call(this);
          document.body.removeChild(vm.$el);
        }
      }
    });
    document.body.appendChild(vm.$el);
  };
})();
