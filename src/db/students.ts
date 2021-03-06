import { Student } from "../entities/Students";
import { Entity, getConnection } from "typeorm";

const students: Student[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    city: "Belo Horizonte",
    birth: new Date("11/13/1999"),
  },
];

/**
 * Add new student to list
 * @param student New student
 * @returns new student
 */
async function addStudent(student: Student) {
  const newStudent = new Student(student);

  const repository = await getConnection().getRepository(Student);

  const createdStudent = await repository.save(newStudent);

  return createdStudent;
}

/**
 * Returns student list
 * @returns Students
 */
const getStudents = () => getConnection().getRepository(Student).find();

export { addStudent, getStudents };
