import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Product } from './entities/product.entity';

@Resolver(of => Product)
export class ProductResolver {
  @Query(returns => [Product])
  getAllProducts(): Product[] {
    // Implement your logic here
    return [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
    ];
  }

  @Query(returns => Product)
  getProduct(@Args('id', { type: () => Int }) id: number): Product {
    // Implement your logic here
    return { id, name: 'Sample Product', price: 10 };
  }

  @Mutation(returns => Product)
  createProduct(@Args('name') name: string, @Args('price', { type: () => Int }) price: number): Product {
    // Implement your logic here
    return {
      id: 1,
      name,
      price,
    };
  }

  @Mutation(returns => Product)
  updateProduct(@Args('id', { type: () => Int }) id: number, @Args('name') name: string, @Args('price', { type: () => Int }) price: number): Product {
    // Implement your logic here
    return {
      id,
      name,
      price,
    };
  }

  @Mutation(returns => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number): Product {
    // Implement your logic here
    return { id, name: 'Deleted Product', price: 0 };
  }
}
