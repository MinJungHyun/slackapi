import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Workspaces2 {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
