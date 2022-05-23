export type Card = {
    id?: string;
    image?: string;
    title: string;
    text: string;
    date: string;
    likeStatus: null | string;
    save: boolean;
}