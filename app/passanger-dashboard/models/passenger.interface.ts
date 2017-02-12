export interface Passenger {
    id: number,
    fullName: string,
    checkedIn: boolean,
    checkInDate?: number | null,
    children?: Child[]
}

export interface Child {
    name: string;
    age: number;
}
