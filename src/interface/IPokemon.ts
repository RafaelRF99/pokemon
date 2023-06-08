export interface IPokemon {
    name: string;
    type: {
        first: string;
        second?: string;
    };
}