import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkspaces2Input {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
