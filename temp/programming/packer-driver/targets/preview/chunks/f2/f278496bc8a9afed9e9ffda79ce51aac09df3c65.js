System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, tween, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, Game;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4272g+zHNGPqI2alZ3h0+L", "Game", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Game", Game = (_dec = ccclass('Game'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_class3 = class Game extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spriteWood", _descriptor, this);

          _initializerDefineProperty(this, "spriteKnife", _descriptor2, this);
        }

        onLoad() {
          Game.canThrow = true;
          Game.spriteWoodRotation = 2.5;
          Game.arrayKnife = [];
          Game.defaultSpriteKnife = this.spriteKnife.position;
          this.node.on(Node.EventType.TOUCH_START, this.knifeThrow, this);
        }

        onDestroy() {
          this.node.off(Node.EventType.TOUCH_START, this.knifeThrow, this);
        }

        start() {}

        update(deltaTime) {
          this.spriteWood.angle = (this.spriteWood.angle + Game.spriteWoodRotation) % 360;
        }

        knifeThrow() {
          if (Game.canThrow) {
            Game.canThrow = false;
            tween(this.spriteKnife).to(0.5, {
              position: new Vec3(this.spriteWood.position.x, this.spriteWood.position.y / 2, this.spriteWood.position.z)
            }).call(() => {}).start();
          }
        }

      }, _class3.canThrow = false, _class3.spriteWoodRotation = null, _class3.defaultSpriteKnife = null, _class3.arrayKnife = [], _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteWood", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteKnife", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f278496bc8a9afed9e9ffda79ce51aac09df3c65.js.map