class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
}
const circle = new Shape('circle', 'black');
const square = new Shape('square', 'black');
circle.radius = 3;
square.edgeLength = 5;
square.calcArea = function(edgeLength) {
    return edgeLength * edgeLength;
};
// var a = square.calcArea(square.edgeLength);
circle.calcArea = function(radius) {
    return radius * radius * 3.14;
};

function calcShapeArea(shapeObj) {
    if (shapeObj.type === 'circle') {
        return shapeObj.calcArea(shapeObj.radius);
    } else if (shapeObj.type === 'square') {
        return shapeObj.calcArea(shapeObj.edgeLength);
    }
}
const b = calcShapeArea(circle);
const s = calcShapeArea(square);
