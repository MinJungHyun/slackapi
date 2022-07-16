import { CreateWorkspaces2Input } from './create-workspaces2.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkspaces2Input extends PartialType(CreateWorkspaces2Input) {
  @Field(() => Int)
  id: number;
}
