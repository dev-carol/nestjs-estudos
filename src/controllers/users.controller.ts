import { Controller, Get, HttpException, HttpStatus, NotFoundException, Param, Query } from "@nestjs/common";
import { userQueryDto } from "./dto/user-query.dto";


@Controller('users')
export class UsersController {
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

    @Get(':id')
    getUserById(@Param('id') id: string){
       const user = this.users.find((user) => user.id === Number(id))
       if(!user){    // se não existir o usuário
        throw new HttpException({},HttpStatus.NO_CONTENT);
       }
       return user;
    }

    
    @Get()
    getUsers(@Query() query: userQueryDto){

      let users = this.users;

      if(query?.firstName) {
        users = users.filter((user) => user.firstName === query.firstName)
      }
    
      if(query?.age) {
        users = users.filter((user) => user.age === Number(query.firstName))
      }

      if(users.length === 0) {
       throw new NotFoundException();
      }


      return users;
    }
  
}