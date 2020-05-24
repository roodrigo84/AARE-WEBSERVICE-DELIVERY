import { Injectable } from '@nestjs/common';
import { Produto } from './produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
    
    constructor(
        @InjectRepository(Produto)
        private readonly repository: Repository<Produto>) { }

    save(cliente: Produto) {
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
