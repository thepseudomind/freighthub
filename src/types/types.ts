export type ShipmentObject = {
    id : string,
    name : string,
    mode : string,
    type: string,
    total: number,
    status: string,
    origin: string,
    destination: string,
    cargo : []
}

export type ShipmentDetailObject = {
    type: string,
    description: string,
    volume: string
}