import {studentType} from '../02/02';
import {addSkill, doesStudentLiveIn, makeStudentActive} from './03';

let student: studentType;

beforeEach(()=>{
    student = {
        name: "Denis",
        age: 25,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {id: 1, title: "HTML"},
            {id:2, title: "CSS"},
            {id:3, title: "React"}
        ]
    }
})

test.skip("new skill should be added", ()=>{

    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
})


test.skip("student should be active", ()=>{

    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})


test.skip("student live in city?", ()=>{


    let result1 = doesStudentLiveIn(student, "Moscow")
    let result2 = doesStudentLiveIn(student, "Minsk")

    expect(result1).toBe(false);
    expect(result2).toBe(true)

})