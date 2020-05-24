import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoService } from './product/produto.service';
import { PedidoService } from './order/pedido.service';
import { ProdutoController } from './product/produto.controller';
import { PedidoController } from './order/pedido.controller';
import { ClienteController } from './customer/cliente.controller';
import { ClienteService } from './customer/cliente.service';
import { Cliente } from "./customer/cliente.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './order/pedido.entity';
import { Produto } from './product/produto.entity';
import { ItemPedido } from './orderitem/itempedido.entity';




@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'unipar',
      database: 'delivery',
      entities: [Cliente, Pedido, Produto, ItemPedido],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([
      Cliente,
      Pedido,
      Produto,
      ItemPedido
    ])
  ],
  controllers: [AppController, ClienteController, PedidoController, ProdutoController],
  providers: [AppService, ClienteService, PedidoService, ProdutoService],
  
})
export class AppModule {}