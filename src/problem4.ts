// Problem 4:
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
  shape: "circle";
  radius: number;
};

type rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type shapeType = Circle | rectangle;

function calculateShapeArea(
  theShape: shapeType): number {
  if (theShape.shape === "circle") {
    return Math.PI * theShape.radius ** 2;
  } else if (theShape.shape === "rectangle") {
    return theShape.width * theShape.height;
  }
  else {
    return 0
  }
}

// Sample Input 1:
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
