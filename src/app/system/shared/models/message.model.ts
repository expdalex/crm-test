export class Message{
    constructor(
        public date: string,
        public user: string,
        public content: string,
        public id?: number
    ) {}
}