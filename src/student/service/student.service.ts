import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    deleateStudent(id): string {
        return `This API for deleateStudent\n ID:${id}`;
    }
    putStudent(body, id): String {
        return `This API for putStudent\n Body:${body}\n ID${id}`;
    }
    postStudent(): string {
        return 'This  API for postStudent';
    }
    getOneStudent(id): string {
        return `This  API for getOneStudent\n ID:${id}`;
    }
    getAllStudent(): string {
        return 'This  API for getAllStudent';
    }
}
