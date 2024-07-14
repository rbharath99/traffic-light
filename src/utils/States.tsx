export type TrafficStates = {
    id: number,
    color: string,
    duration: number,
}

export const states: TrafficStates[] = [
    {
        id: 0,
        color: 'red',
        duration: 4000,
    },
    {
        id: 1,
        color: 'yellow',
        duration: 500,
    },
    {
        id: 2,
        color: 'green',
        duration: 3000,
    }
]