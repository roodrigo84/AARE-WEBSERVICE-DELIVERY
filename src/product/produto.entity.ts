import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity ("produto")
export class Produto{

    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({name: 'name', type: 'varchar', length: '80'})
    name:  string;
   
    @Column({name: 'code', type: 'varchar', length: '80'})
    code: string;
    
    @Column({name: 'price', type: 'int'})
    price: number;
    
    @Column({name: 'stockQuantity', type: 'int'})
    stockQuantity: number;
    itempedido: any;
    
}