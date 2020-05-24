import { Cliente } from "src/customer/Cliente.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity ()
export class Pedido{

    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'ordemNumero', type: 'varchar', length: '80'})
    ordemNumero:  string;
    
    @Column({name: 'dataOrdem', type: 'date'})
    dataOrdem: Date;
    
    @Column({name: 'total', type: 'int'})
    total: number;

    
    @ManyToOne(type => Cliente, cliente => cliente.pedido) 
    cliente: Cliente;
    itempedido: any;


    
}