let subject = ["English", "Maths", "Economics", "Tamil"];
subject.pop("Tamil");
console.log(subject);
subject.shift("Maths");
console.log(subject);
subject.shift("English");
console.log(subject);


// let subject = ["English", "Maths", "Economics", "Tamil"];: This line initializes an array named subject with four elements: "English", "Maths", "Economics", and "Tamil".

// subject.pop("Tamil");: The pop() method is used to remove the last element from an array. However, the pop() method doesn't take any arguments. The argument "Tamil" is ignored in this context. It should be just subject.pop();.

// After this line of code, the last element ("Tamil") is removed from the subject array.

// console.log(subject);: This line prints the modified subject array after the "Tamil" element has been removed. The output would be: ["English", "Maths", "Economics"].