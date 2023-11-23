class Student {
    private rollNo: number;
    private studName: string;
    private marksInEng: number;
    private marksInMaths: number;
    private marksInScience: number;

    constructor(rollNo: number, studName: string, marksInEng: number, marksInMaths: number, marksInScience: number) {
        this.rollNo = rollNo;
        this.studName = studName;
        this.marksInEng = marksInEng;
        this.marksInMaths = marksInMaths;
        this.marksInScience = marksInScience;
    }

    calculateTotalMarks(): number {
        return this.marksInEng + this.marksInMaths + this.marksInScience;
    }

    calculatePercentage(): number {
        const totalMarks: number = this.calculateTotalMarks();
        const percentage: number = (totalMarks / 300) * 100;
        return percentage;
    }

    displayResult(): void {
        const totalMarks: number = this.calculateTotalMarks();
        const percentage: number = this.calculatePercentage();
        console.log(`Total Marks: ${totalMarks}`);
        console.log(`Percentage: ${percentage}%`);
    }
}

// Example usage:
const student1: Student = new Student(1, "Alice", 85, 90, 78);
student1.displayResult();
