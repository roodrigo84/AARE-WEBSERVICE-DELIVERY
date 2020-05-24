import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidoService {

    constructor(
        @InjectRepository(Pedido)
        private readonly repository: Repository<Pedido>) { }

    save(cliente: Pedido) {
        return this.repository.save(cliente);
    }

    delete(id: number) {
        return this.repository.delete(id);
    }

    findAll() {
        return this.repository.find();
    }

    findById(id: number) {
        return this.repository.findOne(id);
    }
}
