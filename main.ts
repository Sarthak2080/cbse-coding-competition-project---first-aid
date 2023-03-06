namespace SpriteKind {
    export const thing = SpriteKind.create()
    export const victim = SpriteKind.create()
    export const thing2cloth = SpriteKind.create()
    export const Bob_ = SpriteKind.create()
    export const Cloth = SpriteKind.create()
    export const Bob_1 = SpriteKind.create()
    export const Bob = SpriteKind.create()
    export const BOB_4 = SpriteKind.create()
    export const Onmt = SpriteKind.create()
    export const Bob_5 = SpriteKind.create()
    export const BobF = SpriteKind.create()
    export const BobF1 = SpriteKind.create()
    export const CutF = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.victim, function (sprite, otherSprite) {
    sprites.destroy(mySprite4)
    game.showLongText("Joe:- Now we want to apply direct pressure to stop bleeding.", DialogLayout.Top)
    sprites.destroy(BobC)
    BobC = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d 2 4 . . . . . 
        . . . f 2 2 2 e d 2 e . . . . . 
        . . . f 5 5 4 f e 2 f . . . . . 
        . . . . f f f f 2 2 . . . . . . 
        . . . . . . f f 2 . . . . . . . 
        `, SpriteKind.Bob_1)
    BobC.setPosition(113, 87)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bob, function (sprite, otherSprite) {
    game.showLongText("Joe:- First you want to wash your cut.", DialogLayout.Top)
    pause(1000)
    sprites.destroy(BobC)
    BobC = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d 2 4 . . . . . 
        . . . f 2 2 2 e d 2 e . . . . . 
        . . . f 5 5 4 f e 2 f . . . . . 
        . . . . f f f f 2 2 . . . . . . 
        . . . . . . f f 2 . . . . . . . 
        `, SpriteKind.Bob_)
    BobC.setPosition(113, 87)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bob_1, function (sprite, otherSprite) {
    sprites.destroy(BobC)
    BobC = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d 3 4 f . . . . 
        . . . f 2 2 2 e d 3 e f . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `, SpriteKind.BOB_4)
    BobC.setPosition(113, 87)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BOB_4, function (sprite, otherSprite) {
    game.showLongText("Pick up the ointment", DialogLayout.Top)
    Onmt2 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........dd55........
        ........5555........
        .........44.........
        ........5555........
        ........5d55........
        .......5d5555.......
        .......d55555.......
        .......555555.......
        .......555555.......
        .......555555.......
        .......555555.......
        ........5555........
        ........4444........
        ....................
        `, SpriteKind.Onmt)
    Onmt2.setPosition(23, 82)
    sprites.destroy(BobC)
    BobC = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d 3 4 f . . . . 
        . . . f 2 2 2 e d 3 e f . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `, SpriteKind.Bob_5)
    BobC.setPosition(113, 87)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Onmt, function (sprite, otherSprite) {
    sprites.destroy(Onmt2)
    game.showLongText("Now go to Bob to apply ointment", DialogLayout.Top)
    sprites.destroy(BobC)
    BobC = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d 3 4 f . . . . 
        . . . f 2 2 2 e d 3 e f . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `, SpriteKind.BobF1)
    BobC.setPosition(113, 87)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BobF1, function (sprite, otherSprite) {
    game.showLongText("Bob:- THANKS FOR TREATING MY CUT!", DialogLayout.Top)
    game.showLongText("Joe:- Welcome, it will fully heal in a few days", DialogLayout.Top)
    sprites.destroy(BobC)
    BobC = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d 3 4 f . . . . 
        . . . f 2 2 2 e d 3 e f . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `, SpriteKind.CutF)
    BobC.setPosition(113, 87)
    sprites.destroy(BobC)
    BobC = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.CutF)
    BobC.setPosition(113, 87)
    sprites.destroy(mySprite)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(113, 87)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff11111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff1111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff111111fffffffff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff1111ffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff1111fffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff1111fffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff1111ffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff1111ffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff111ff111fffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff111ff111ffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff111ff111fffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff111ff111fffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff1111f111ffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff1111f111fffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff1111111111ffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffff111ffffffffffffff1111111ffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffff111fffffffffffff1111111111ffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffff111ffffffffffff111111111111fffffffffffffffffffff1111fffffffffffffffff111ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffff111ffffffffffff1111fff111111fffffffffffffffffff11111fffffffffffffffff111ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffff1111ffffffffffff111ffffff1111fffffffffffffffffff11111ffffffffffffffff1111ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffff1111ffffffffffff111fffffff111111ffffffffffffffff11111ffffffffffffffff1111ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffff111ffffffffffff1111fffffff111111fffffffffffffff111111ffffffffffffffff1111ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffff1111ffffffffffff1111ffffffff11111fffffffffffffff111111fffffffffffffff11111fffffffffffff111ffffffff
        ffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffff1111ffffffffffff111fffffffff11111ffffffffffffff1111111fffffffffffffff11111fffffffffffff111ffffffff
        fffffffffffffffffffffffff1111111111ffffffffffffffffffffffffff1111fffffffffffff111fffffffff11111ffffffffffffff1111111fffffffffffffff11111fffffffffffff1111fffffff
        fffffffffffffffffffffff1111111111111fffffffffffffffffffffffff1111fffffffffffff111ffffffff111111ffffffffffffff111f111fffffffffffffff11111fffffffffffff1111fffffff
        ffffffffffffffffffffff111111111111111fffffffffffffffffffffff1111ffffffffffffff111ffffffff111111fffffffffffff1111f1111fffffffffffff111111ffffffffffffff1111ffffff
        fffffffffffffffffffff111111ffff11111111ffffffffffffffffffff11111ffffffffffffff111ffffffff111111fffffffffffff1111f1111fffffffffffff111111ffffffffffffff1111ffffff
        fffffffffffffffffffff1111ffffff111111111fffffffffffffffffff1111fffffffffffffff111fffffff1111111ffffffffffff1111fff1111fffffffffff1111111fffffffffffffff1111fffff
        fffffffffffffffffffff111fffffff111f1111111ffffffffffffffff1111ffffffffffffffff111ffffff11111111ffffffffffff1111fff1111ffffffffff1111111ffffffffffffffff1111fffff
        fffffffffffffffffffff111fffffff111fff1111111ffffffffffffff1111ffffffffffffffff111ffff1111111111ffffffffffff111fffff1111ffffffff11111111fffffffffffffffff111fffff
        fffffffffffffffffffff1111ffffff111ffff1111111ffffffffffff1111fffffffffffffffff1111f111111111111fffffffffff1111fffff1111ffffff1111111111fffffffffffffffff111fffff
        fffffffffffffffffffff1111ffffff111ffffff111111fffffffffff1111fffffffffffffffff1111111111111111fffffffffff11111ffffff1111fff111111111111fffffffffffffffff111fffff
        ffffffffffffffffffffff1111fffff111ffffffff111111ffffffff1111fffffffffffffffffff11111111111f111ffffffffff11111fffffff1111111111111f1111ffffffffffffffffff111fffff
        ffffffffffffffffffffff1111fffff111fffffffff11111111ffff11111ffffffffffffffffffff111111111ff1111fffffffff1111fffffffff1111111111fff1111ffffffffffffffffff111fffff
        fffffffffffffffffffffff1111ffff111ffffffffff111111111111111ffffffffffffffffffffffff111111ff111111fff1111111fffffffffff1111111ffff1111ffffffffffffffffff1111fffff
        fffffffffffffffffffffff11111fff111ffffffffffff111111111111fffffffffffffffffffffff1111111ffff111111111111111ffffffffffffffffffffff1111ffffffffffffffffff1111fffff
        ffffffffffffffffffffffff11111ff111ffffffffffffff1111111111111fffffffffffffffff11111111fffffff1111111111111fffffffffffffffffffffff111ffffffffffffffffff1111ffffff
        fffffffffffffffffffffffff111111111fffffffffff1111111111111111111111fffff1111111111111ffffffffff1111111fffffffffffffffffffffffffff111ffffffffffffffffff1111ffffff
        ffffffffffffffffffffffffff111111111111111111111111111ff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffff11111fffffff
        fffffffffffffffffffffffffff11111111111111111111111fffffffff111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffff1111111fffffff
        ffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffff111111111ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffff111111111111ffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f11111111111111111ffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111fffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111ffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ffffffffffff1111fffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffff1111ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffff1111ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffff1111fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffff11111fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffff1111ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff1111fffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffff11111fffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffff11111ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffff1111111fffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ff11111111111ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111ffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffff1111ffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffff11111ffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffff11111ffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff111111111111111ffffffffff111111ffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff11111fffff111111ffffffff111111fffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff111fffffffff11111ffffff111111ffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffff11111fff111111fffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffff111111111111ffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffff1111111111ffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111ffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111ffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffff111111111fffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.thing, function (sprite, otherSprite) {
    sprites.destroy(mySprite3)
    game.showLongText("Move to Bob using your keys.", DialogLayout.Top)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bob_, function (sprite, otherSprite) {
    game.showLongText("Pick up the cloth", DialogLayout.Top)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . . 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . . . 1 1 1 1 1 1 1 1 1 1 1 
        . . . . . 1 1 1 1 1 1 1 1 1 1 1 
        . . . . . . 1 1 1 1 1 1 1 1 1 1 
        . . . . . . 1 1 1 1 1 1 1 1 1 1 
        . . . . . . 1 1 1 1 1 1 1 1 1 1 
        . . . . . . . 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . . 1 1 1 1 1 1 
        `, SpriteKind.victim)
    mySprite4.setPosition(23, 82)
    sprites.destroy(BobC)
    BobC = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d 2 4 . . . . . 
        . . . f 2 2 2 e d 2 e . . . . . 
        . . . f 5 5 4 f e 2 f . . . . . 
        . . . . f f f f 2 2 . . . . . . 
        . . . . . . f f 2 . . . . . . . 
        `, SpriteKind.BobF)
    BobC.setPosition(113, 87)
})
let Onmt2: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let BobC: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999991111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999991111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999911111111111119911111111111111111111199999999911119999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999911111111111111119999999111111111111111111111111111111111111199999999111111999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999991111111111111111111999991111111111111111111111111111111111111119999999111111199999999999999999999999999999999999999999999999999999999999999999
    9999999999999999911111111111111111111199991111111111111111111111111111111111111111111999111111119999911111111119999999999999999999999999999999999999999999999999
    9999999999999999111111111111111111111111111111111111111111111111111111111111111111111191111111119991111111111111119999999999999999999999999999999999999999999999
    9999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999
    9999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999
    9999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999
    9999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119999999999999999999999999999
    9999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119999999999999999999999999999
    9999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999999999999999999999999
    9999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999
    9999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999
    9999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999
    9999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999
    9999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999
    9999999999111111111111191111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999
    9999999999999999999999999911111111111111111991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999
    9999999999999999999999999991111111111111199999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999
    9999999999999999999999999999911111111119999999111111111111111111111199999991111111111111111111111111111111111111111111111111111111111111999999999999999999999999
    9999999999999999999999999999999999999999999999911111111111111111111199999999111111111111111911111111111111111111111111111111111111111111999999999999999999999999
    9999999999999999999999999999999999999999999999911111111111111111111199999999999911111111119991111111111111111111111111191111111111111199999999999999999999999999
    9999999999999999999999999999999999999999999999911111111111111111111199999999999999911111199999111111111111111111111119999911111111199999999999999999999999999999
    9999999999999999999999999999999999999999999999999911111111111111111999999999999999999999999999991111111111111111111999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999991111111111111119999999999999999999999999999999911111111111119999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999991111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999991111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777677777777777777777777777777777777777777777677777777777767777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777776777777777777677777777777777767777777777777777777777777667777777777667777
    7777777777777777777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777767777777777777777777777777767777777776777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777767777777777777777777777777777777777777777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777767777777777777767777777777777767777777777777777777777777777777777777777777777777777667777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777767777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777677777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777666777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777776677777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777767777777777777777777677777777777777777776777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777776777777777777777777677777777777777777766777777777777777777777777777777677777777777777777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777776777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777776777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(13, 87)
mySprite.setStayInScreen(true)
game.showLongText("Hello and welcome to Ohio, I am Joe", DialogLayout.Top)
game.showLongText("I am going to make you learn how to do basic first aid.", DialogLayout.Top)
game.showLongText("Along the way we will also help some people.", DialogLayout.Top)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f f . 
    f f e 4 e 1 f 4 4 f f . . 
    . f f f e 4 4 4 4 f . . . 
    . 4 4 4 e e e e f f . . . 
    . e 4 4 e 7 7 7 7 f . . . 
    . f e e f 6 6 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f f . . 
    . f f f e e 4 4 4 f . . . 
    . . f e 4 4 e e f f . . . 
    . . f e 4 4 e 7 7 f . . . 
    . f f f e e f 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `,img`
    . . . f f f f f . . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f . . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f . . . 
    . f f f e 4 4 4 4 f . . . 
    . . f e e e e e f f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . e 4 4 e 7 7 7 f . . . 
    . . f e e f 6 6 6 f . . . 
    . . . f f f f f f . . . . 
    . . . . f f f . . . . . . 
    `],
200,
true
)
scroller.scrollBackgroundWithSpeed(-50, 0)
mySprite.vx += 7
pause(5000)
scroller.setBackgroundScrollOffset(scroller.getBackgroundXOffset(), scroller.getBackgroundYOffset())
scroller.scrollBackgroundWithSpeed(0, 0)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111911111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111
    1999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    1119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111
    1119999999999999991111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111
    1111999999991111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111
    1111199991111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999911111199111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111119999111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999111111111111111111111111999999991111111111111111111
    1111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999911111111111111111111119999999999911111111111111111
    1111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999991111111111119999999999999999999999999911111111
    1111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111
    1111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111
    1999999911111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111
    9999999991111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111
    9999999999991111111111111111111119999991111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999111111111111111111999999999111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777677777777777777777777777777777777777777777677777777777767777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777776777777777777677777777777777767777777777777777777777777667777777777667777
    7777777777777777777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777767777777777777777777777777767777777776777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777767777777777777777777777777777777777777777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777767777777777777767777777777777767777777777777777777777777777777777777777777777777777667777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777767777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777677777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777666777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777776677777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777767777777777777777777677777777777777777776777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777776777777777777777777677777777777777777766777777777777777777777777777777677777777777777777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777776777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777776777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
scroller.setBackgroundScrollOffset(0, 0)
scroller.scrollBackgroundWithSpeed(0, 0)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111911111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111
    1999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    1119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111
    1119999999999999991111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111
    1111999999991111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111
    1111199991111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999911111199111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111119999111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999111111111111111111111111999999991111111111111111111
    1111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999911111111111111111111119999999999911111111111111111
    1111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999991111111111119999999999999999999999999911111111
    1111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111
    1111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111
    1999999911111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111
    9999999991111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999991111111111111111111119999991111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999111111111111111111999999999111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777677777777777777777777777777777777777777777677777777777767777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777776777777777777677777777777777767777777777777777777777777667777777777667777
    7777777777777777777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777767777777777777777777777777767777777776777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777767777777777777777777777777777777777777777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777767777777777777767777777777777767777777777777777777777777777777777777777777777777777667777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777767777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777677777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777666777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777776677777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777767777777777777777777677777777777777777776777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777776777777777777777777677777777777777777766777777777777777777777777777777677777777777777777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777776777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777776777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
pause(100)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111911111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111
    9999999991111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111
    9991111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111
    1111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999911111199111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111119999111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999111111111111111111111111999999991111111111111111111111111111
    1111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999911111111111111111111119999999999911111111111111111111111111
    1111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999991111111111119999999999999999999999999911111111111111111
    1111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111
    1111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111
    1111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111
    1111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9991111111111111111111119999991111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999111111111111111111999999999111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777677777777777777777777777777777777777777777677777777777767777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777776777777777777677777777777777767777777777777777777777777667777777777667777
    7777777777777777777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777767777777777777777777777777767777777776777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777767777777777777777777777777777777777777777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777767777777777777767777777777777767777777777777777777777777777777777777777777777777777667777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777767777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777677777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777666777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777776677777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777767777777777777777777677777777777777777776777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777776777777777777777777677777777777777777766777777777777777777777777777777677777777777777777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777776777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777776777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
pause(100)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111119999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111911111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111
    9991111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111
    1111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111
    1111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999911111199111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111111111111111119999111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999111111111111111111111111999999991111111111111111111111111111111111
    1111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999911111111111111111111119999999999911111111111111111111111111111111
    1111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999991111111111119999999999999999999999999911111111111111111111111
    1111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111
    1111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111
    1111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111
    1111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111
    1111111111111111119999991111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111
    1111111111111111999999999111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6622
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6622
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6622
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6622266
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6622266
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6622266
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777677777777777777777777777777777777777777777677777777777767777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777776777777777777677777777777777767777777777777777777777777667777777777667777
    7777777777777777777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777767777777777777777777777777767777777776777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777767777777777777777777777777777777777777777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777767777777777777767777777777777767777777777777777777777777777777777777777777777777777667777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777767777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777677777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777666777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777776677777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777767777777777777777777677777777777777777776777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777776777777777777777777677777777777777777766777777777777777777777777777777677777777777777777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777776777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777776777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
pause(100)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111199999111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111191111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111
    1199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111
    1111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111
    1111111999999999999999999999999999999999999999999999999999999999999999999999999999991111119911111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111119999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111119999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111199999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111119999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111119999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111119999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111119999999999999999999999999999999999999999999999111111111111111111111111111999911111111111111111111111111111111111111111111111111
    1111111111111111111111111111111119999999999999999999999999999999999999999999999911111111111111111111111199999999111111111111111111111111111111111111111111111111
    1111111111111111111111111111111199999999999999999999999999999999999999999999999991111111111111111111111999999999991111111111111111111111111111111111111111111111
    1111111111111111111111111111111199999999999999999999999999999999999999999999999999999111111111111999999999999999999999999991111111111111111111111111111111111111
    1111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111
    1111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111
    1111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111
    1111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111
    1111999999111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111
    1199999999911111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111119
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffff6
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666622
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666622
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666622
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666622
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66622266622
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66622266622
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66622266666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777677777777777777777777777777777777777777777677777777777767777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777776777777777777677777777777777767777777777777777777777777667777777777667777
    7777777777777777777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777767777777777777777777777777767777777776777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777767777777777777777777777777777777777777777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777767777777777777767777777777777767777777777777777777777777777777777777777777777777777667777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777767777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777677777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777666777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777776677777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777767777777777777777777677777777777777777776777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777776777777777777777777677777777777777777766777777777777777777777777777777677777777777777777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777776777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777776777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
pause(100)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111119111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111
    1119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111
    1111199999999999999999999999999999999999999999999999999999999999999999999999999999111111991111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111119999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111199999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111199999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111119999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111999999999999999999999999999999999999999999999911111111111111111111111111199991111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111999999999999999999999999999999999999999999999991111111111111111111111119999999911111111111111111111111111111111111111111111111111
    1111111111111111111111111111119999999999999999999999999999999999999999999999999111111111111111111111199999999999111111111111111111111111111111111111111111111111
    1111111111111111111111111111119999999999999999999999999999999999999999999999999999911111111111199999999999999999999999999111111111111111111111111111111111111111
    1111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111
    1111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111
    1111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111
    1111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111
    1199999911111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111
    9999999991111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffff6
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffff6666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666662226
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666662226
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666662226
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66222666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66222666622266
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66222666622266
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666622266
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666666
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777677777777777777777777777777777777777777777677777777777767777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777776777777777777677777777777777767777777777777777777777777667777777777667777
    7777777777777777777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777767777777777777777777777777767777777776777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777767777777777777777777777777777777777777777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777767777777777777767777777777777767777777777777777777777777777777777777777777777777777667777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777767777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777677777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777666777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777776677777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777767777777777777777777677777777777777777776777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777776777777777777777777677777777777777777766777777777777777777777777777777677777777777777777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777776777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777776777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
pause(100)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111119111111111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999111111991111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111119999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111199999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111199999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111119999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111999999999999999999999999999999999999999999999911111111111111111111111111199991111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111999999999999999999999999999999999999999999999991111111111111111111111119999999911111111111111111111111111111111111111111111111111111111111111111
    1111111111111119999999999999999999999999999999999999999999999999111111111111111111111199999999999111111111111111111111111111111111111111111111111111111111111111
    1111111111111119999999999999999999999999999999999999999999999999999911111111111199999999999999999999999999111111111111111111111111111111111111111111111111111111
    1111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111
    1111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111
    1111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111199999991111111111111111111111111111199999
    1111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111119999999999
    1111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffff
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffff
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffff66
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff6666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff6666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffff66666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff6666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff6666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffff66666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff66666666666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666666666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666666666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff6666666622266
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666622266
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666622266
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666666222666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666666222666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666622266666222666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666622266666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666622266666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff666666666666666666
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777677777777777777777777777777777777777777777677777777777767777
    7777777777777777777777777777777777777777777777777777777776777777777777776777777777777776777777777777677777777777777767777777777777777777777777667777777777667777
    7777777777777777777777777777777777777777777777777777777777777777777777776777777777777776777777777777777777777777777767777777777777777777777777767777777776777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777767777777777777777777777777777777777777777777
    7777777777777777767777777777777777777777777777777777777777777777777777777777777777777777677777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777767777777777777767777777777777767777777777777777777777777777777777777777777777777777667777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777767777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777677777777
    7777777767777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777666777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777677777777777777777777777777777777777777776677777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777767777777777777777777677777777777777777776777777777777777777777777777777677777777777777777777777777777777777777777777777777777777677777777
    7777777777777777777777776777777777777777777677777777777777777766777777777777777777777777777777677777777777777777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777776777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777767777777777777777
    7777777777777777777777777777777777777777777777777767777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777776777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
pause(100)
animation.stopAnimation(animation.AnimationTypes.All, mySprite)
mySprite.vx += -7
pause(100)
BobC = sprites.create(img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d 2 4 . . . . . 
    . . . f 2 2 2 e d 2 e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . 2 2 2 2 . 
    `, SpriteKind.Bob)
BobC.setPosition(113, 87)
game.showLongText("OUCH! That hurts", DialogLayout.Top)
game.showLongText("Joe:- What happened Bob? Why are you screaming?", DialogLayout.Top)
game.showLongText("Bob:- I was picking flowers, but a thorn gave me a painful cut!", DialogLayout.Top)
game.showLongText("Joe:- As I can see, YOU ARE BLEEDING!", DialogLayout.Top)
game.showLongText("Bob:- YES I KNOW, AND PLEASE STOP IT!", DialogLayout.Top)
game.showLongText("Joe:- Let me help", DialogLayout.Top)
controller.moveSprite(mySprite, 50, 0)
mySprite3 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .....7977777777.....
    .....7777777777.....
    ......66666666......
    ......77777777......
    .....7797777777.....
    .....7977777777.....
    .....7977777777.....
    .....7777777777.....
    .....7777777777.....
    .....7777777776.....
    .....7777777776.....
    ......76666666......
    ....................
    ....................
    `, SpriteKind.thing)
mySprite3.setPosition(29, 82)
game.showLongText("Use A and D keys to move and pick up the water bottle.", DialogLayout.Top)
