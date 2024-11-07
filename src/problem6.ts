// Problem 6:
// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(profileObj: Profile, updateObj: Partial<Profile>):Profile {
  return { ...profileObj, ...updateObj };
}

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
updateProfile(myProfile, { age: 55 });
