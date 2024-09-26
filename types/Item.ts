export interface Item {
    id: number,
    url: string,
    title: string,
    price: number,
    texts: string[],
    size: {
        width: number,
        depth: number,
        height: number,
    },
    color: string,
    material: string,
}