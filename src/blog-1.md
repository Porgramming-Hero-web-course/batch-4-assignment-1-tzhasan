1. The significance of union and intersection types in Typescript.

Union Type-
1. We write the Union type with " | " sign.
2. It can hold multiple types.
3. If Value could be more then one type we can use it .
4. function InputFormater(input: string | number) {
    return typeof input === "string" ? input.toUpperCase() : input.toFixed(2);
    } , this is an example .
5. This Function can work with two types (number and string).
6. Union types are nessesary when-
    A variable can have multiple possible types.
    Working with APIs that could return different data types.

Intersection Type-
1.  We write the Union type with " & " sign.
2. It's combine multiple types into one.
3. we can make sure an object includes all property from each type.
4. For example we can use - 
    interface Car{
      name: string
      color: string
    }
    interface CarModel{
      modelName: string;
      year: number
    }
    type CarDetails = Car & CarModel
    const CarInfo: CarDetails = {
  name: "Prado", color: "white", modelName: "Sepecial edition", year: 2020,
  }
5. CarDetails type will must take properties from both type Car and CarModel.
6. Intersection types are best when:
    Building complex objects by combining simpler types.
    Ensuring objects meet multiple type requirements.



///Union and intersection types in TypeScript make more flexibility and control. we can handle diverse input types, create complex data models, and build more featurefull applications. Whether dealing with varied data or combining structures, these types ensure code is safe, scalable, and clear.

