export class Article {
    id: number = 0;
    title: string = '';
    content: string = '';
    date: string = '';
    tags: string[] = [];
    constructor(id: number, title: string, content: string, date: string, tags: string[]){
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
        this.tags = tags;
    }
}
