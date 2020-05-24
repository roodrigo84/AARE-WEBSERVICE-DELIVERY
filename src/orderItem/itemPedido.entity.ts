import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, Column } from "typeorm";
import { Produto } from "src/product/produto.entity";
import { Pedido } from "src/order/pedido.entity";



@Entity ()

export class ItemPedido{

    @PrimaryGeneratedColumn()
    id: number;

    
    @ManyToOne(type => Produto, produto => produto.itempedido)
    @JoinColumn({name: 'produto_id'})
    Produto: Produto
    
    
    @ManyToOne(type => Pedido , pedido => pedido.itempedido)
    @JoinColumn({name: 'pedido_id'})
    Pedido: Pedido
    
    @Column({name: 'quantity', type: 'int'})
    quantity: number;
    
    @Column({name: 'unitValue', type: 'int'})
    unitValue: number;
    
    @Column({name: 'totalValue', type: 'int'})
    totalValue: number;


}