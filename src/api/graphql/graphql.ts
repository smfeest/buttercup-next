/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: number; output: number; }
};

/** Defines when a policy shall be executed. */
export enum ApplyPolicy {
  /** After the resolver was executed. */
  AfterResolver = 'AFTER_RESOLVER',
  /** Before the resolver was executed. */
  BeforeResolver = 'BEFORE_RESOLVER',
  /** The policy is applied in the validation step before the execution. */
  Validation = 'VALIDATION'
}

export type AuthenticateError = IncorrectCredentialsError | TooManyAttemptsError;

export type AuthenticateInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthenticatePayload = {
  __typename?: 'AuthenticatePayload';
  accessToken?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<AuthenticateError>>;
  isSuccess: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  body: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  deleted?: Maybe<Scalars['DateTime']['output']>;
  deletedByUser?: Maybe<User>;
  id: Scalars['Long']['output'];
  modified: Scalars['DateTime']['output'];
  recipe?: Maybe<Recipe>;
  revision: Scalars['Int']['output'];
  revisions: Array<CommentRevision>;
};

export type CommentAttributesInput = {
  body: Scalars['String']['input'];
};

export type CommentFilterInput = {
  and?: InputMaybe<Array<CommentFilterInput>>;
  author?: InputMaybe<UserFilterInput>;
  body?: InputMaybe<StringOperationFilterInput>;
  created?: InputMaybe<DateTimeOperationFilterInput>;
  deleted?: InputMaybe<DateTimeOperationFilterInput>;
  deletedByUser?: InputMaybe<UserFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  modified?: InputMaybe<DateTimeOperationFilterInput>;
  or?: InputMaybe<Array<CommentFilterInput>>;
  recipe?: InputMaybe<RecipeFilterInput>;
};

export type CommentRevision = {
  __typename?: 'CommentRevision';
  body: Scalars['String']['output'];
  comment?: Maybe<Comment>;
  created: Scalars['DateTime']['output'];
  revision: Scalars['Int']['output'];
};

export type CommentSortInput = {
  author?: InputMaybe<UserSortInput>;
  created?: InputMaybe<SortEnumType>;
  deleted?: InputMaybe<SortEnumType>;
  deletedByUser?: InputMaybe<UserSortInput>;
  id?: InputMaybe<SortEnumType>;
  modified?: InputMaybe<SortEnumType>;
  recipe?: InputMaybe<RecipeSortInput>;
};

/** A connection to a list of items. */
export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CommentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Comment>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CommentsEdge = {
  __typename?: 'CommentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Comment;
};

export type ConcurrencyError = Error & {
  __typename?: 'ConcurrencyError';
  message: Scalars['String']['output'];
};

export type CreateCommentError = NotFoundError | SoftDeletedError | ValidationError;

export type CreateCommentInput = {
  attributes: CommentAttributesInput;
  recipeId: Scalars['Long']['input'];
};

export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  comment?: Maybe<Comment>;
  errors?: Maybe<Array<CreateCommentError>>;
};

export type CreateRecipeError = ValidationError;

export type CreateRecipeInput = {
  attributes: RecipeAttributesInput;
};

export type CreateRecipePayload = {
  __typename?: 'CreateRecipePayload';
  errors?: Maybe<Array<CreateRecipeError>>;
  recipe?: Maybe<Recipe>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteCommentInput = {
  id: Scalars['Long']['input'];
};

export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  comment?: Maybe<Comment>;
  deleted: Scalars['Boolean']['output'];
};

export type DeleteRecipeInput = {
  id: Scalars['Long']['input'];
};

export type DeleteRecipePayload = {
  __typename?: 'DeleteRecipePayload';
  deleted: Scalars['Boolean']['output'];
  recipe?: Maybe<Recipe>;
};

/** A connection to a list of items. */
export type DeletedCommentsConnection = {
  __typename?: 'DeletedCommentsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DeletedCommentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Comment>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DeletedCommentsEdge = {
  __typename?: 'DeletedCommentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Comment;
};

export type Error = {
  message: Scalars['String']['output'];
};

export type HardDeleteCommentInput = {
  id: Scalars['Long']['input'];
};

export type HardDeleteCommentPayload = {
  __typename?: 'HardDeleteCommentPayload';
  deleted: Scalars['Boolean']['output'];
};

export type HardDeleteRecipeInput = {
  id: Scalars['Long']['input'];
};

export type HardDeleteRecipePayload = {
  __typename?: 'HardDeleteRecipePayload';
  deleted: Scalars['Boolean']['output'];
};

export type IncorrectCredentialsError = Error & {
  __typename?: 'IncorrectCredentialsError';
  message: Scalars['String']['output'];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfCommentFilterInput = {
  all?: InputMaybe<CommentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<CommentFilterInput>;
  some?: InputMaybe<CommentFilterInput>;
};

export type LongOperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  neq?: InputMaybe<Scalars['Long']['input']>;
  ngt?: InputMaybe<Scalars['Long']['input']>;
  ngte?: InputMaybe<Scalars['Long']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  nlt?: InputMaybe<Scalars['Long']['input']>;
  nlte?: InputMaybe<Scalars['Long']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate: AuthenticatePayload;
  createComment: CreateCommentPayload;
  createRecipe: CreateRecipePayload;
  deleteComment: DeleteCommentPayload;
  deleteRecipe: DeleteRecipePayload;
  hardDeleteComment: HardDeleteCommentPayload;
  hardDeleteRecipe: HardDeleteRecipePayload;
  updateRecipe: UpdateRecipePayload;
};


export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateRecipeArgs = {
  input: CreateRecipeInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationDeleteRecipeArgs = {
  input: DeleteRecipeInput;
};


export type MutationHardDeleteCommentArgs = {
  input: HardDeleteCommentInput;
};


export type MutationHardDeleteRecipeArgs = {
  input: HardDeleteRecipeInput;
};


export type MutationUpdateRecipeArgs = {
  input: UpdateRecipeInput;
};

export type NotFoundError = Error & {
  __typename?: 'NotFoundError';
  message: Scalars['String']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments?: Maybe<CommentsConnection>;
  currentUser?: Maybe<User>;
  deletedComments?: Maybe<DeletedCommentsConnection>;
  deletedRecipes: Array<Recipe>;
  recipe?: Maybe<Recipe>;
  recipes: Array<Recipe>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryCommentArgs = {
  id: Scalars['Long']['input'];
};


export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<CommentSortInput>>;
  where?: InputMaybe<CommentFilterInput>;
};


export type QueryDeletedCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<CommentSortInput>>;
  where?: InputMaybe<CommentFilterInput>;
};


export type QueryDeletedRecipesArgs = {
  order?: InputMaybe<Array<RecipeSortInput>>;
  where?: InputMaybe<RecipeFilterInput>;
};


export type QueryRecipeArgs = {
  id: Scalars['Long']['input'];
};


export type QueryRecipesArgs = {
  order?: InputMaybe<Array<RecipeSortInput>>;
  where?: InputMaybe<RecipeFilterInput>;
};


export type QueryUserArgs = {
  id: Scalars['Long']['input'];
};


export type QueryUsersArgs = {
  order?: InputMaybe<Array<UserSortInput>>;
  where?: InputMaybe<UserFilterInput>;
};

export type Recipe = {
  __typename?: 'Recipe';
  comments: Array<Comment>;
  cookingMinutes?: Maybe<Scalars['Int']['output']>;
  created: Scalars['DateTime']['output'];
  createdByUser?: Maybe<User>;
  deleted?: Maybe<Scalars['DateTime']['output']>;
  deletedByUser?: Maybe<User>;
  deletedComments: Array<Comment>;
  id: Scalars['Long']['output'];
  ingredients: Scalars['String']['output'];
  method: Scalars['String']['output'];
  modified: Scalars['DateTime']['output'];
  modifiedByUser?: Maybe<User>;
  preparationMinutes?: Maybe<Scalars['Int']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  revision: Scalars['Int']['output'];
  revisions: Array<RecipeRevision>;
  servings?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  suggestions?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type RecipeAttributesInput = {
  cookingMinutes?: InputMaybe<Scalars['Int']['input']>;
  ingredients: Scalars['String']['input'];
  method: Scalars['String']['input'];
  preparationMinutes?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  servings?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  suggestions?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type RecipeFilterInput = {
  and?: InputMaybe<Array<RecipeFilterInput>>;
  comments?: InputMaybe<ListFilterInputTypeOfCommentFilterInput>;
  cookingMinutes?: InputMaybe<IntOperationFilterInput>;
  created?: InputMaybe<DateTimeOperationFilterInput>;
  createdByUser?: InputMaybe<UserFilterInput>;
  deleted?: InputMaybe<DateTimeOperationFilterInput>;
  deletedByUser?: InputMaybe<UserFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  ingredients?: InputMaybe<StringOperationFilterInput>;
  method?: InputMaybe<StringOperationFilterInput>;
  modified?: InputMaybe<DateTimeOperationFilterInput>;
  modifiedByUser?: InputMaybe<UserFilterInput>;
  or?: InputMaybe<Array<RecipeFilterInput>>;
  preparationMinutes?: InputMaybe<IntOperationFilterInput>;
  remarks?: InputMaybe<StringOperationFilterInput>;
  servings?: InputMaybe<IntOperationFilterInput>;
  source?: InputMaybe<StringOperationFilterInput>;
  suggestions?: InputMaybe<StringOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type RecipeRevision = {
  __typename?: 'RecipeRevision';
  cookingMinutes?: Maybe<Scalars['Int']['output']>;
  created: Scalars['DateTime']['output'];
  createdByUser?: Maybe<User>;
  ingredients: Scalars['String']['output'];
  method: Scalars['String']['output'];
  preparationMinutes?: Maybe<Scalars['Int']['output']>;
  recipe?: Maybe<Recipe>;
  remarks?: Maybe<Scalars['String']['output']>;
  revision: Scalars['Int']['output'];
  servings?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  suggestions?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type RecipeSortInput = {
  cookingMinutes?: InputMaybe<SortEnumType>;
  created?: InputMaybe<SortEnumType>;
  createdByUser?: InputMaybe<UserSortInput>;
  deleted?: InputMaybe<SortEnumType>;
  deletedByUser?: InputMaybe<UserSortInput>;
  id?: InputMaybe<SortEnumType>;
  ingredients?: InputMaybe<SortEnumType>;
  method?: InputMaybe<SortEnumType>;
  modified?: InputMaybe<SortEnumType>;
  modifiedByUser?: InputMaybe<UserSortInput>;
  preparationMinutes?: InputMaybe<SortEnumType>;
  remarks?: InputMaybe<SortEnumType>;
  servings?: InputMaybe<SortEnumType>;
  source?: InputMaybe<SortEnumType>;
  suggestions?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type SoftDeletedError = Error & {
  __typename?: 'SoftDeletedError';
  message: Scalars['String']['output'];
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TooManyAttemptsError = Error & {
  __typename?: 'TooManyAttemptsError';
  message: Scalars['String']['output'];
};

export type UpdateRecipeError = ConcurrencyError | NotFoundError | SoftDeletedError | ValidationError;

export type UpdateRecipeInput = {
  attributes: RecipeAttributesInput;
  baseRevision: Scalars['Int']['input'];
  id: Scalars['Long']['input'];
};

export type UpdateRecipePayload = {
  __typename?: 'UpdateRecipePayload';
  errors?: Maybe<Array<UpdateRecipeError>>;
  recipe?: Maybe<Recipe>;
};

export type User = {
  __typename?: 'User';
  created: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Long']['output'];
  isAdmin: Scalars['Boolean']['output'];
  modified: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  passwordCreated?: Maybe<Scalars['DateTime']['output']>;
  revision: Scalars['Int']['output'];
  timeZone: Scalars['String']['output'];
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  created?: InputMaybe<DateTimeOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  isAdmin?: InputMaybe<BooleanOperationFilterInput>;
  modified?: InputMaybe<DateTimeOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  passwordCreated?: InputMaybe<DateTimeOperationFilterInput>;
  timeZone?: InputMaybe<StringOperationFilterInput>;
};

export type UserSortInput = {
  created?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isAdmin?: InputMaybe<SortEnumType>;
  modified?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  passwordCreated?: InputMaybe<SortEnumType>;
  timeZone?: InputMaybe<SortEnumType>;
};

export type ValidationError = Error & {
  __typename?: 'ValidationError';
  code: ValidationErrorCode;
  message: Scalars['String']['output'];
  path: Array<Scalars['String']['output']>;
};

export enum ValidationErrorCode {
  InvalidStringLength = 'INVALID_STRING_LENGTH',
  OutOfRange = 'OUT_OF_RANGE',
  Required = 'REQUIRED'
}

export type SignInMutationVariables = Exact<{
  input: AuthenticateInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthenticatePayload', isSuccess: boolean, accessToken?: string | null, user?: { __typename?: 'User', id: number, name: string, email: string, isAdmin: boolean, timeZone: string } | null, errors?: Array<{ __typename?: 'IncorrectCredentialsError', message: string } | { __typename?: 'TooManyAttemptsError', message: string }> | null } };


export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthenticateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"timeZone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;