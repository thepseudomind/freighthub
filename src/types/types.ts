export type ShipmentObject = {
    id : string,
    name : string,
    mode : string,
    type: string,
    total: number,
    status: string,
    origin: string,
    destination: string,
    userId: string,
    services: [],
    cargo : []
}

export type ShipmentDetailObject = {
    type: string,
    description: string,
    volume: string
}