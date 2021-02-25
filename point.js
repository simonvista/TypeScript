"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    /*   private x: number;
      private y: number;
      constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
      } */
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("X can't be negative!");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.draw = function () {
        console.log("X: " + this._x + ", Y: " + this._y);
    };
    return Point;
}());
exports.Point = Point;
