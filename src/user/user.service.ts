import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    deleteUser(id: any) {
        return `This API for deleteUser\n ID:${id}`;
    }
    putUser(body, id): string {
        return `This API for putUser\n Body:${body}\n ID:${id}`;
    }
    postUser(): string {
        return 'This API for postUser';
    }
    getOneUser(id): string {
        return `This API for getOneUser\n ID:${id}`;
    }
    getAlluser(): string {
        return 'This API for getAllUser';
    }
}
