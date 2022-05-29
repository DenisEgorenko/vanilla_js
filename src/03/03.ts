import {student, studentType} from '../02/02';
import {govBuildingsType, houseType} from '../02/02_02';

const sum = (a: number, b: number) => {
    return a + b
}

function sum2(a: number, b: number) {
    return a + b
}

export const addSkill = (student: studentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}

function addSkill2(student: studentType, skill: string) {
    student.technologies.push({id: new Date().getTime(), title: skill})
}


export function makeStudentActive(student: studentType){
    student.isActive = true
}


export function doesStudentLiveIn(student: studentType, city:string){
    return (student.address.city.title === city)
}


export function addMoneyToBudget(building: govBuildingsType, amount:number){
    building.budget += amount
}

export function repairHouse(house: houseType){
    house.repaired = true
}

export function toFireStaff(building: govBuildingsType, st:number){
    building.staffCount -= st
}

export function toHireStaff(building: govBuildingsType, st: number){
    building.staffCount += st
}



const user = {
    name: "Bob",
    age: 26,
    isMarried: true,
    friends: ["alex", "Mark"],
    address: {
        city: "Rostov",
        street: "Lenin str"
    }
}

const deepCopyUser = {...user, friends: [...user.friends], address: {...user.address}}

