type streetType = {
    title: string
}

type addressNewType = {
    number?: number,
    street: streetType
}

export type houseType = {
    id: number
    builtAt: number,
    repaired: boolean,
    address: addressNewType
}

export type govBuildingsType = {
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