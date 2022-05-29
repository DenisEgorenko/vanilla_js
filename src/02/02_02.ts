type streetType = {
    title: string
}

type addressNewType = {
    number?: number,
    street: streetType
}

type houseType = {
    builtAt: number,
    repaired: boolean,
    address: addressNewType
}

type govBuildingsType = {
    type: string,
    budget: number,
    staffCount: number,
    address: addressNewType
}

export type cityType = {
    title: string,
    houses: Array<houseType>,
    governmentBuildings: Array<govBuildingsType>,
    citizensNumber: number
}