var Student = /** @class */ (function () {
    function Student(rollNo, studName, marksInEng, marksInMaths, marksInScience) {
        this.rollNo = rollNo;
        this.studName = studName;
        this.marksInEng = marksInEng;
        this.marksInMaths = marksInMaths;
        this.marksInScience = marksInScience;
    }
    Student.prototype.calculateTotalMarks = function () {
        return this.marksInEng + this.marksInMaths + this.marksInScience;
    };
    Student.prototype.calculatePercentage = function () {
        var totalMarks = this.calculateTotalMarks();
        var percentage = (totalMarks / 300) * 100;
        return percentage;
    };
    Student.prototype.displayResult = function () {
        var totalMarks = this.calculateTotalMarks();
        var percentage = this.calculatePercentage();
        console.log("Total Marks: ".concat(totalMarks));
        console.log("Percentage: ".concat(percentage, "%"));
    };
    return Student;
}());
// Example usage:
var student1 = new Student(1, "Alice", 85, 90, 78);
student1.displayResult();
