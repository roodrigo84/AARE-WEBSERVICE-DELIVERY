import { Controller, Body, Post, Get, Delete, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from "./Cliente.entity";

@Controller('cliente')
export class ClienteController {

    constructor(private readonly service: ClienteService) { }

    @Post()
    save(@Body() cliente: Cliente) {
        return this.service.save(cliente);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.service.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.remove(id);
    }
}
