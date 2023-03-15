import { _decorator, Component, Node, tween, Vec3, instantiate, director, Label, quat } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property({type:Node})
        spriteWood: Node

    @property({type:Node})
        spriteKnife: Node

    @property({type:Label})
        scoreLabel: Label

    static canThrow: boolean = false;
    static spriteWoodRotation: number = null;
    static defaultSpriteKnife = null;
    static arrayKnife: Node[] = [];
    static score: number = 0;

    onLoad() {
        Game.canThrow = true;
        Game.spriteWoodRotation = 1.5;
        Game.arrayKnife = [];
        Game.defaultSpriteKnife = this.spriteKnife.position;
        console.log(Game.defaultSpriteKnife);

        this.node.on(Node.EventType.TOUCH_START, this.knifeThrow, this);

        setInterval(() => {
            this.changeSpeedWood();
        }, 3500)
    }

    onDestroy() {
        this.node.off(Node.EventType.TOUCH_START, this.knifeThrow, this);
    }

    start() {
        this.scoreLabel.string = "Score: " + Game.score;
    }

    update(deltaTime: number) {
        this.spriteWood.angle = (this.spriteWood.angle + Game.spriteWoodRotation) % 360;

        for (let knife of Game.arrayKnife) {
            knife.angle = (knife.angle + Game.spriteWoodRotation) % 360;

            let rad = Math.PI * (knife.angle - 90) / 180;

            let knifeX = knife.position.x;
            let knifeY = knife.position.x;

            knifeX = this.spriteWood.position.x + 239 * Math.cos(rad);
            knifeY = this.spriteWood.position.y + 239 * Math.sin(rad);

            knife.setPosition(new Vec3(knifeX, knifeY, 0));
        }
        // this.spriteKnife.setPosition(Game.defaultSpriteKnife);
    }

    knifeThrow() {
        if (Game.canThrow) {
            Game.canThrow = false;
            this.spriteKnife.setPosition(Game.defaultSpriteKnife);
            let spriteKnifeMove = tween(this.spriteKnife)
                .to(0.25, {position: new Vec3(this.spriteWood.position.x, this.spriteWood.position.y - 239, 0)})
                .removeSelf()
                .call(() => {
                    let gap = 15;
                    let isHit = false;

                    for (let knife of Game.arrayKnife) {
                        if (Math.abs(knife.angle) < gap || (360 - knife.angle) < gap) {
                            isHit = true;
                            Game.score = 0;
                            this.scoreLabel.string = "Score: " + Game.score;
                            break;
                        }
                    }

                    if (isHit) {
                        tween(this.spriteKnife)
                            .to(0.25, {position: new Vec3(this.spriteKnife.position.x, -900, this.spriteKnife.position.z)} , { easing: 'bounceInOut' })
                            .call(() => {
                                console.log('GameOver');
                                director.loadScene('Game');
                            }).start()
                    }
                    else {
                        let knifeNode = instantiate(this.spriteKnife);
                        knifeNode.setPosition(this.spriteKnife.position);
                        this.node.addChild(knifeNode);
                        Game.arrayKnife.push(knifeNode);
                        this.updateScore();
                        // this.spriteKnife.setPosition(Game.defaultSpriteKnife);
                        console.log(this.spriteKnife.position);
                        this.spriteKnife.active = true;
                        this.spriteKnife.setPosition(Game.defaultSpriteKnife);
                        console.log(this.spriteKnife.position);
                        console.log(Game.defaultSpriteKnife);
                        
                        // console.log(this.spriteKnife.position);
                        Game.canThrow = true;
                    }
                });
            spriteKnifeMove.start();
        }
    }

    changeSpeedWood() {
        let direction = Math.random() > 0.5 ? 1.5 : -1.5;
        let speed = 1 + Math.random() * 1.5;
        Game.spriteWoodRotation = direction * speed;
    }

    updateScore() {
        Game.score += 1;
        this.scoreLabel.string = "Score: " + Game.score;
    }
}


