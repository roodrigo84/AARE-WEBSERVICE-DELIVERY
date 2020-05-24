import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedido } from "src/order/pedido.entity";


@Entity()
export class Cliente {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ name: 'name', type: 'varchar', length: '80' })
    name: string;
    
    @Column({ name: 'cpf', type: 'varchar', length: '11' })
    cpf: string;
    
    @Column({ name: 'endereco', type: 'varchar', length: '80' })
    endereco: string;
    
    @OneToMany(type => Pedido, pedido => pedido.cliente)
    @Column({ name: "pedido_id " })
    pedido: Pedido;
}


