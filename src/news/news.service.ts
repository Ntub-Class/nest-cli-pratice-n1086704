import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    deleteNews(id: any): String {
        return `This API for deleteNews\n ID:${id}`
    }
    putNews(body: any, id: any): string {
        return `This API for putNews\n Body:${body}\n ID:${id}`;
    }
    postNews(): string {
        return 'This API for postNews'
    }
    getOneNews(id): string {
        return `This API for getOneNews\n ID:${id}`;
    }
    getAllNews(): string {
        return 'This API for getAllNews';
    }
}
