System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Game;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4272g+zHNGPqI2alZ3h0+L", "Game", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Game", Game = (_dec = ccclass('Game'), _dec(_class = class Game extends Component {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8ccb8ef633c08c60ab58cb107e8253afc301d0b.js.map