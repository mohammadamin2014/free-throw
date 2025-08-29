namespace SpriteKind {
    //% isKind
    export const Goal = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.gameOver(true)
})