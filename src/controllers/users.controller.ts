import { Controller, Get, HttpException, HttpStatus, NotFoundException, Param, Query } from "@nestjs/common";
import { UserService } from "src/services/users.service";
import { userQueryDto } from "./dto/user-query.dto";


@Controller('users')

export class UsersController {
   constructor( private userService : UserService){}

    @Get(':id')
    getUserById(@Param('id') id: string){
      return this.userService.getUserById(Number(id))
    }

    
    @Get()
    getUsers(@Query() query: userQueryDto){
     return this.userService.getUsers(query)
    
    }
  
}