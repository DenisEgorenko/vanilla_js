type technologiesType = {
    id: number,
    title: string
}

type localCityType = {
    title: string
    countryTitle: string
}


type addressType = {
    streetTitle: string
    city: localCityType
}


type studentType = {
    name: string,
    age: number,
    isActive: boolean
    address: addressType,
    technologies: Array<technologiesType>
}



const student:studentType = {
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
};


