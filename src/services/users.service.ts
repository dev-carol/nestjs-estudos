import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class UserService {
    users = [
        {
            id: 1,
            firstName: 'Maria',
            age: 24
        },
        {
            id: 2,
            firstName: 'João',
            age: 25
        },

    ]

    getUsers(query){
        let users = this.users;

        if(query?.firstName) {
          users = users.filter((user) => user.firstName === query.firstName)
        }
      
        if(query?.age) {
          users = users.filter((user) => user.age === Number(query.firstName))
        }
  
        if(users.length === 0) {
          throw new HttpException({},HttpStatus.NO_CONTENT);
        }
  
        return users;
    }
    getUserById(id: number){

        const user = this.users.find((user) => user.id === id)

        if(!user){    
         throw new HttpException({},HttpStatus.NO_CONTENT);
        }
        
        return user;
    }
}