import "./style.css";

// let isDone: boolean = false;

// const name: string = "Bob";
// const lastName: string = "Jonson";
// const age: number = 12;
// const isHappy: boolean = true;
// const budget: null = null;
// const status: undefined = undefined;

// type userProfile = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };

// const user = {
//   userName: "Bob",
//   age: 12,
//   isActive: true,
// };

// function displayUserProfile(user: userProfile) {
//   return `User name is ${user.userName} his is ${user.age} yaers old and his is ${user.isActive}`;
// }

// console.log(displayUserProfile(user));

// function logName(name: string) {
//   return `${name}`
// }

// type User = {
//   name: string,
//   age: number,
// }

// function calcTotal(arr: User[]) {
// return arr.reduce((acc, el) => acc + el, 0);
// }

// const numbersArray = [10, 20, 30, 40];
// console.log(calcTotal(numbersArray));

// const users = [
//   {
//     name: "Bob",
//     age: 12,
//   },
//   {
//     name: "Bob2",
//     age: 13,
//   },
//   {
//     name: "Bob3",
//     age: 14,
//   },
// ];

// console.log(calcTotal(users));

// function safelyParseJson(jsonString: string) {
//   try {
//     const result: unknown = JSON.parse(jsonString);
//     if (typeof result === "object" && result !== null) {
//       return result;
//     }
//   } catch (error) {
//     console.error("Failed to parse JSON:", error);
//   }
//   return null;
// }

// function logDetails(value: any) {
//   console.log(`Value: ${value}, Type of value: ${typeof value}`);
// }

//Enum Types

// enum VehicleType {
//   Car = "Car",
//   Truck = "Truck",
//   Motorcycle = "Motorcycle",
// }

// function getVehicleType(vehicle: VehicleType): string {
//   return `The vehicle type is: ${vehicle}.`;
// }
// console.log(getVehicleType(VehicleType.Car));
// console.log(getVehicleType(VehicleType.Motorcycle));
// console.log(getVehicleType(VehicleType.Truck));

//Union Types

// function formatInput(value: string | number) {
//   if (typeof value === "number") {
//     return value.toFixed(2);
//   } else {
//     return value.toUpperCase();
//   }
// }

// console.log(formatInput(12.545435));

//Literal

// function lightShower(color: "green" | "yellow" | "red") {
//   if (color === "green") {
//     console.log("Go!");
//   } else if (color === "yellow") {
//     console.log("Ready");
//   } else color === "red";
//   {
//     console.log("Stop!");
//   }
// }

// lightShower("green");

// function logName(name: string): string {
//   return `${name}`;
// }

// function logName(name: string): void {
//   console.log(`${name}`);
// }

//Never

// function errorHandler(message: string): never {
//   throw new Error(message);
// }

// errorHandler("Critical error occurred!");

//Interface

// interface List {
//     [key:string]: number | null
// }

// interface User {
//   name: string;
//   age: number;
//   lastName?: string;
//   sayHello(): string;
//   sayBye(): void;
//   showAge(userAge: number): string;
// }

// const user = {
//   name: "Bob",
//   age: 12,
//   sayHello() {
//     return "Hello";
//   },
//   sayBye() {
//     console.log("Bye");
//   },
//   showAge(userAge: number) {
//     return `My age is ${userAge}`;
//   },
// };

// const student: User = {
//   name: "Bob",
//   age: 12,
//   sayHello() {
//     return "Hello";
//   },
//   sayBye() {
//     console.log("Bye");
//   },
//   showAge(userAge) {
//     return `My age is ${userAge}`;
//   },
// };

//Generic

// function getFirstElement<T>(arr: T[]): T | undefined {
//   return arr[0];
// }

// const numbersArr = [10, 20, 30];
// const stringArr = ["A", "B", "C"];
// const objArr = [{ name: "Alice" }, { name: "Bob" }];

// console.log(getFirstElement(numbersArr));
// console.log(getFirstElement(stringArr));
// console.log(getFirstElement(objArr));

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const person = {
//   name: "John",
//   age: 30,
//   occupation: "Engineer",
//   gender: "male",
// };

// const name = getProperty(person, "name");
// const age = getProperty(person, "age");
// const gender = getProperty(person, "gender");

//Partial

// interface UserProfile {
//   username: string;
//   email: string;
//   age: number;
// }

// const originalProfile: UserProfile = {
//   username: "johndoe",
//   email: "jonh@mail.com",
//   age: 28,
// };

// function updateUserProfile(
//   profile: UserProfile,
//   updates: Partial<UserProfile>
// ) {
//   return { ...profile, ...updates };
// }

// const updatedProfile = updateUserProfile(originalProfile, {
//   email: "new.john@mail.com",
//   age: 29,
// });

//Readonly

// interface User {
//   id: number;
//   name: string;
// }

// const user: Readonly<User> = {
//   id: 100,
//   name: "Bob",
// };

// user.id = 201;

//Pick

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const fullEmoloyeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "john.doe@mail.com",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };

// function displayInfo(
//   fullEmoloyeeInfo: Employee
// ): Pick<Employee, "name" | "email"> {
//   return {
//     name: fullEmoloyeeInfo.name,
//     email: fullEmoloyeeInfo.email,
//   };
// }

// interface BasicInfo {
//   name: string;
//   email: string;
// }

// function displayInfoDouble(fullEmoloyeeInfo: Employee): BasicInfo {
//   return {
//     name: fullEmoloyeeInfo.name,
//     email: fullEmoloyeeInfo.email,
//   };
// }

//Omit

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const fullEmoloyeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "john.doe@mail.com",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };

// function displayInfo(fullEmoloyeeInfo: Employee): Omit<Employee, "hireDate"> {
//   return {
//     name: fullEmoloyeeInfo.name,
//     email: fullEmoloyeeInfo.email,
//     department: fullEmoloyeeInfo.department,
//       id: fullEmoloyeeInfo.id,

//   };
// }

//Omit2

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// type EmployeeBasicInfo = Omit<Employee, "hireDate">;

//Record

// function recordTemperatures(temps: number[]): Record<string, number> {
//   let temperatureRecord: Record<string, number> = {};

//   temps.forEach((temp, idx) => {
//     temperatureRecord[`day${idx + 1}`] = temp;
//   });
//   return temperatureRecord;
// }

// const weeklyTemps = [22, 24, 23, 25, 24, 26, 27];
// const tempRecord = recordTemperatures(weeklyTemps);
// console.log(tempRecord);

// [{ day1: 22 }, { day2: 24 }];
