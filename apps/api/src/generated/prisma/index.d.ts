
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model ReviewSession
 * 
 */
export type ReviewSession = $Result.DefaultSelection<Prisma.$ReviewSessionPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model Keyword
 * 
 */
export type Keyword = $Result.DefaultSelection<Prisma.$KeywordPayload>
/**
 * Model FeedbackKeyword
 * 
 */
export type FeedbackKeyword = $Result.DefaultSelection<Prisma.$FeedbackKeywordPayload>
/**
 * Model ReviewDraft
 * 
 */
export type ReviewDraft = $Result.DefaultSelection<Prisma.$ReviewDraftPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TenantStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type TenantStatus = (typeof TenantStatus)[keyof typeof TenantStatus]


export const ReviewSessionStatus: {
  STARTED: 'STARTED',
  RATED: 'RATED',
  FEEDBACK_RECEIVED: 'FEEDBACK_RECEIVED',
  PROCESSING: 'PROCESSING',
  DRAFT_READY: 'DRAFT_READY',
  CONFIRMED: 'CONFIRMED',
  HANDED_OFF: 'HANDED_OFF'
};

export type ReviewSessionStatus = (typeof ReviewSessionStatus)[keyof typeof ReviewSessionStatus]


export const Sentiment: {
  GOOD: 'GOOD',
  BAD: 'BAD'
};

export type Sentiment = (typeof Sentiment)[keyof typeof Sentiment]


export const ReviewDraftStatus: {
  PROCESSING: 'PROCESSING',
  READY: 'READY',
  CONFIRMED: 'CONFIRMED',
  FAILED: 'FAILED'
};

export type ReviewDraftStatus = (typeof ReviewDraftStatus)[keyof typeof ReviewDraftStatus]

}

export type TenantStatus = $Enums.TenantStatus

export const TenantStatus: typeof $Enums.TenantStatus

export type ReviewSessionStatus = $Enums.ReviewSessionStatus

export const ReviewSessionStatus: typeof $Enums.ReviewSessionStatus

export type Sentiment = $Enums.Sentiment

export const Sentiment: typeof $Enums.Sentiment

export type ReviewDraftStatus = $Enums.ReviewDraftStatus

export const ReviewDraftStatus: typeof $Enums.ReviewDraftStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewSession`: Exposes CRUD operations for the **ReviewSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewSessions
    * const reviewSessions = await prisma.reviewSession.findMany()
    * ```
    */
  get reviewSession(): Prisma.ReviewSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyword`: Exposes CRUD operations for the **Keyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keywords
    * const keywords = await prisma.keyword.findMany()
    * ```
    */
  get keyword(): Prisma.KeywordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedbackKeyword`: Exposes CRUD operations for the **FeedbackKeyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedbackKeywords
    * const feedbackKeywords = await prisma.feedbackKeyword.findMany()
    * ```
    */
  get feedbackKeyword(): Prisma.FeedbackKeywordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewDraft`: Exposes CRUD operations for the **ReviewDraft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewDrafts
    * const reviewDrafts = await prisma.reviewDraft.findMany()
    * ```
    */
  get reviewDraft(): Prisma.ReviewDraftDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    Location: 'Location',
    Table: 'Table',
    ReviewSession: 'ReviewSession',
    Feedback: 'Feedback',
    Keyword: 'Keyword',
    FeedbackKeyword: 'FeedbackKeyword',
    ReviewDraft: 'ReviewDraft'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "location" | "table" | "reviewSession" | "feedback" | "keyword" | "feedbackKeyword" | "reviewDraft"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      ReviewSession: {
        payload: Prisma.$ReviewSessionPayload<ExtArgs>
        fields: Prisma.ReviewSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          findFirst: {
            args: Prisma.ReviewSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          findMany: {
            args: Prisma.ReviewSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>[]
          }
          create: {
            args: Prisma.ReviewSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          createMany: {
            args: Prisma.ReviewSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>[]
          }
          delete: {
            args: Prisma.ReviewSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          update: {
            args: Prisma.ReviewSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          deleteMany: {
            args: Prisma.ReviewSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>[]
          }
          upsert: {
            args: Prisma.ReviewSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          aggregate: {
            args: Prisma.ReviewSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewSession>
          }
          groupBy: {
            args: Prisma.ReviewSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewSessionCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      Keyword: {
        payload: Prisma.$KeywordPayload<ExtArgs>
        fields: Prisma.KeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findFirst: {
            args: Prisma.KeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findMany: {
            args: Prisma.KeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          create: {
            args: Prisma.KeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          createMany: {
            args: Prisma.KeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeywordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          delete: {
            args: Prisma.KeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          update: {
            args: Prisma.KeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          deleteMany: {
            args: Prisma.KeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeywordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          upsert: {
            args: Prisma.KeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          aggregate: {
            args: Prisma.KeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyword>
          }
          groupBy: {
            args: Prisma.KeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeywordCountArgs<ExtArgs>
            result: $Utils.Optional<KeywordCountAggregateOutputType> | number
          }
        }
      }
      FeedbackKeyword: {
        payload: Prisma.$FeedbackKeywordPayload<ExtArgs>
        fields: Prisma.FeedbackKeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackKeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackKeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackKeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackKeywordPayload>
          }
          findFirst: {
            args: Prisma.FeedbackKeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackKeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackKeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackKeywordPayload>
          }
          findMany: {
            args: Prisma.FeedbackKeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackKeywordPayload>[]
          }
          create: {
            args: Prisma.FeedbackKeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackKeywordPayload>
          }
          createMany: {
            args: Prisma.FeedbackKeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackKeywordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackKeywordPayload>[]
          }
          delete: {
            args: Prisma.FeedbackKeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackKeywordPayload>
          }
          update: {
            args: Prisma.FeedbackKeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackKeywordPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackKeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackKeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackKeywordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackKeywordPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackKeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackKeywordPayload>
          }
          aggregate: {
            args: Prisma.FeedbackKeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbackKeyword>
          }
          groupBy: {
            args: Prisma.FeedbackKeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackKeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackKeywordCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackKeywordCountAggregateOutputType> | number
          }
        }
      }
      ReviewDraft: {
        payload: Prisma.$ReviewDraftPayload<ExtArgs>
        fields: Prisma.ReviewDraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewDraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewDraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDraftPayload>
          }
          findFirst: {
            args: Prisma.ReviewDraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewDraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDraftPayload>
          }
          findMany: {
            args: Prisma.ReviewDraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDraftPayload>[]
          }
          create: {
            args: Prisma.ReviewDraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDraftPayload>
          }
          createMany: {
            args: Prisma.ReviewDraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewDraftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDraftPayload>[]
          }
          delete: {
            args: Prisma.ReviewDraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDraftPayload>
          }
          update: {
            args: Prisma.ReviewDraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDraftPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewDraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewDraftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDraftPayload>[]
          }
          upsert: {
            args: Prisma.ReviewDraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewDraftPayload>
          }
          aggregate: {
            args: Prisma.ReviewDraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewDraft>
          }
          groupBy: {
            args: Prisma.ReviewDraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewDraftGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewDraftCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewDraftCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    location?: LocationOmit
    table?: TableOmit
    reviewSession?: ReviewSessionOmit
    feedback?: FeedbackOmit
    keyword?: KeywordOmit
    feedbackKeyword?: FeedbackKeywordOmit
    reviewDraft?: ReviewDraftOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    locations: number
    keywords: number
    reviewSessions: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | TenantCountOutputTypeCountLocationsArgs
    keywords?: boolean | TenantCountOutputTypeCountKeywordsArgs
    reviewSessions?: boolean | TenantCountOutputTypeCountReviewSessionsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountReviewSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewSessionWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    tables: number
    reviewSessions: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | LocationCountOutputTypeCountTablesArgs
    reviewSessions?: boolean | LocationCountOutputTypeCountReviewSessionsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountReviewSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewSessionWhereInput
  }


  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    reviewSessions: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewSessions?: boolean | TableCountOutputTypeCountReviewSessionsArgs
  }

  // Custom InputTypes
  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountReviewSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewSessionWhereInput
  }


  /**
   * Count Type FeedbackCountOutputType
   */

  export type FeedbackCountOutputType = {
    keywords: number
  }

  export type FeedbackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keywords?: boolean | FeedbackCountOutputTypeCountKeywordsArgs
  }

  // Custom InputTypes
  /**
   * FeedbackCountOutputType without action
   */
  export type FeedbackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCountOutputType
     */
    select?: FeedbackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeedbackCountOutputType without action
   */
  export type FeedbackCountOutputTypeCountKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackKeywordWhereInput
  }


  /**
   * Count Type KeywordCountOutputType
   */

  export type KeywordCountOutputType = {
    feedbackKeywords: number
  }

  export type KeywordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbackKeywords?: boolean | KeywordCountOutputTypeCountFeedbackKeywordsArgs
  }

  // Custom InputTypes
  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCountOutputType
     */
    select?: KeywordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeCountFeedbackKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackKeywordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    status: $Enums.TenantStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    status: $Enums.TenantStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    slug: string
    status: $Enums.TenantStatus
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locations?: boolean | Tenant$locationsArgs<ExtArgs>
    keywords?: boolean | Tenant$keywordsArgs<ExtArgs>
    reviewSessions?: boolean | Tenant$reviewSessionsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | Tenant$locationsArgs<ExtArgs>
    keywords?: boolean | Tenant$keywordsArgs<ExtArgs>
    reviewSessions?: boolean | Tenant$reviewSessionsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      locations: Prisma.$LocationPayload<ExtArgs>[]
      keywords: Prisma.$KeywordPayload<ExtArgs>[]
      reviewSessions: Prisma.$ReviewSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      status: $Enums.TenantStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locations<T extends Tenant$locationsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    keywords<T extends Tenant$keywordsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$keywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewSessions<T extends Tenant$reviewSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$reviewSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly slug: FieldRef<"Tenant", 'String'>
    readonly status: FieldRef<"Tenant", 'TenantStatus'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.locations
   */
  export type Tenant$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Tenant.keywords
   */
  export type Tenant$keywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    cursor?: KeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Tenant.reviewSessions
   */
  export type Tenant$reviewSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    where?: ReviewSessionWhereInput
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    cursor?: ReviewSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewSessionScalarFieldEnum | ReviewSessionScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    address: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    address: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    address: number
    timezone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    address?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    address?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    address?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    address: string
    timezone: string
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    address?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    tables?: boolean | Location$tablesArgs<ExtArgs>
    reviewSessions?: boolean | Location$reviewSessionsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    address?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    address?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    address?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name" | "address" | "timezone" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    tables?: boolean | Location$tablesArgs<ExtArgs>
    reviewSessions?: boolean | Location$reviewSessionsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      tables: Prisma.$TablePayload<ExtArgs>[]
      reviewSessions: Prisma.$ReviewSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      address: string
      timezone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tables<T extends Location$tablesArgs<ExtArgs> = {}>(args?: Subset<T, Location$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewSessions<T extends Location$reviewSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Location$reviewSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly tenantId: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly address: FieldRef<"Location", 'String'>
    readonly timezone: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.tables
   */
  export type Location$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Location.reviewSessions
   */
  export type Location$reviewSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    where?: ReviewSessionWhereInput
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    cursor?: ReviewSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewSessionScalarFieldEnum | ReviewSessionScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableMinAggregateOutputType = {
    id: string | null
    locationId: string | null
    tableNumber: string | null
    qrToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TableMaxAggregateOutputType = {
    id: string | null
    locationId: string | null
    tableNumber: string | null
    qrToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    locationId: number
    tableNumber: number
    qrToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TableMinAggregateInputType = {
    id?: true
    locationId?: true
    tableNumber?: true
    qrToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    locationId?: true
    tableNumber?: true
    qrToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    locationId?: true
    tableNumber?: true
    qrToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: string
    locationId: string
    tableNumber: string
    qrToken: string
    createdAt: Date
    updatedAt: Date
    _count: TableCountAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    tableNumber?: boolean
    qrToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    reviewSessions?: boolean | Table$reviewSessionsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    tableNumber?: boolean
    qrToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    tableNumber?: boolean
    qrToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    id?: boolean
    locationId?: boolean
    tableNumber?: boolean
    qrToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationId" | "tableNumber" | "qrToken" | "createdAt" | "updatedAt", ExtArgs["result"]["table"]>
  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    reviewSessions?: boolean | Table$reviewSessionsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type TableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      reviewSessions: Prisma.$ReviewSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locationId: string
      tableNumber: string
      qrToken: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableFindUniqueArgs>(args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(args: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableFindFirstArgs>(args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableFindManyArgs>(args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends TableCreateArgs>(args: SelectSubset<T, TableCreateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {TableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableCreateManyArgs>(args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {TableCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableCreateManyAndReturnArgs>(args?: SelectSubset<T, TableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends TableDeleteArgs>(args: SelectSubset<T, TableDeleteArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableUpdateArgs>(args: SelectSubset<T, TableUpdateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableDeleteManyArgs>(args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableUpdateManyArgs>(args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables and returns the data updated in the database.
     * @param {TableUpdateManyAndReturnArgs} args - Arguments to update many Tables.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TableUpdateManyAndReturnArgs>(args: SelectSubset<T, TableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends TableUpsertArgs>(args: SelectSubset<T, TableUpsertArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewSessions<T extends Table$reviewSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Table$reviewSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Table model
   */
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'String'>
    readonly locationId: FieldRef<"Table", 'String'>
    readonly tableNumber: FieldRef<"Table", 'String'>
    readonly qrToken: FieldRef<"Table", 'String'>
    readonly createdAt: FieldRef<"Table", 'DateTime'>
    readonly updatedAt: FieldRef<"Table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }

  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table createManyAndReturn
   */
  export type TableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
  }

  /**
   * Table updateManyAndReturn
   */
  export type TableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }

  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to delete.
     */
    limit?: number
  }

  /**
   * Table.reviewSessions
   */
  export type Table$reviewSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    where?: ReviewSessionWhereInput
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    cursor?: ReviewSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewSessionScalarFieldEnum | ReviewSessionScalarFieldEnum[]
  }

  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
  }


  /**
   * Model ReviewSession
   */

  export type AggregateReviewSession = {
    _count: ReviewSessionCountAggregateOutputType | null
    _avg: ReviewSessionAvgAggregateOutputType | null
    _sum: ReviewSessionSumAggregateOutputType | null
    _min: ReviewSessionMinAggregateOutputType | null
    _max: ReviewSessionMaxAggregateOutputType | null
  }

  export type ReviewSessionAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSessionSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSessionMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    locationId: string | null
    tableId: string | null
    status: $Enums.ReviewSessionStatus | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewSessionMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    locationId: string | null
    tableId: string | null
    status: $Enums.ReviewSessionStatus | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewSessionCountAggregateOutputType = {
    id: number
    tenantId: number
    locationId: number
    tableId: number
    status: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewSessionAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSessionSumAggregateInputType = {
    rating?: true
  }

  export type ReviewSessionMinAggregateInputType = {
    id?: true
    tenantId?: true
    locationId?: true
    tableId?: true
    status?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewSessionMaxAggregateInputType = {
    id?: true
    tenantId?: true
    locationId?: true
    tableId?: true
    status?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewSessionCountAggregateInputType = {
    id?: true
    tenantId?: true
    locationId?: true
    tableId?: true
    status?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewSession to aggregate.
     */
    where?: ReviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSessions to fetch.
     */
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewSessions
    **/
    _count?: true | ReviewSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewSessionMaxAggregateInputType
  }

  export type GetReviewSessionAggregateType<T extends ReviewSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewSession[P]>
      : GetScalarType<T[P], AggregateReviewSession[P]>
  }




  export type ReviewSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewSessionWhereInput
    orderBy?: ReviewSessionOrderByWithAggregationInput | ReviewSessionOrderByWithAggregationInput[]
    by: ReviewSessionScalarFieldEnum[] | ReviewSessionScalarFieldEnum
    having?: ReviewSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewSessionCountAggregateInputType | true
    _avg?: ReviewSessionAvgAggregateInputType
    _sum?: ReviewSessionSumAggregateInputType
    _min?: ReviewSessionMinAggregateInputType
    _max?: ReviewSessionMaxAggregateInputType
  }

  export type ReviewSessionGroupByOutputType = {
    id: string
    tenantId: string
    locationId: string
    tableId: string
    status: $Enums.ReviewSessionStatus
    rating: number | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewSessionCountAggregateOutputType | null
    _avg: ReviewSessionAvgAggregateOutputType | null
    _sum: ReviewSessionSumAggregateOutputType | null
    _min: ReviewSessionMinAggregateOutputType | null
    _max: ReviewSessionMaxAggregateOutputType | null
  }

  type GetReviewSessionGroupByPayload<T extends ReviewSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewSessionGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    locationId?: boolean
    tableId?: boolean
    status?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    feedback?: boolean | ReviewSession$feedbackArgs<ExtArgs>
    reviewDraft?: boolean | ReviewSession$reviewDraftArgs<ExtArgs>
  }, ExtArgs["result"]["reviewSession"]>

  export type ReviewSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    locationId?: boolean
    tableId?: boolean
    status?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewSession"]>

  export type ReviewSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    locationId?: boolean
    tableId?: boolean
    status?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewSession"]>

  export type ReviewSessionSelectScalar = {
    id?: boolean
    tenantId?: boolean
    locationId?: boolean
    tableId?: boolean
    status?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "locationId" | "tableId" | "status" | "rating" | "createdAt" | "updatedAt", ExtArgs["result"]["reviewSession"]>
  export type ReviewSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
    feedback?: boolean | ReviewSession$feedbackArgs<ExtArgs>
    reviewDraft?: boolean | ReviewSession$reviewDraftArgs<ExtArgs>
  }
  export type ReviewSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
  }
  export type ReviewSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    table?: boolean | TableDefaultArgs<ExtArgs>
  }

  export type $ReviewSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewSession"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
      table: Prisma.$TablePayload<ExtArgs>
      feedback: Prisma.$FeedbackPayload<ExtArgs> | null
      reviewDraft: Prisma.$ReviewDraftPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      locationId: string
      tableId: string
      status: $Enums.ReviewSessionStatus
      rating: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reviewSession"]>
    composites: {}
  }

  type ReviewSessionGetPayload<S extends boolean | null | undefined | ReviewSessionDefaultArgs> = $Result.GetResult<Prisma.$ReviewSessionPayload, S>

  type ReviewSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewSessionCountAggregateInputType | true
    }

  export interface ReviewSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewSession'], meta: { name: 'ReviewSession' } }
    /**
     * Find zero or one ReviewSession that matches the filter.
     * @param {ReviewSessionFindUniqueArgs} args - Arguments to find a ReviewSession
     * @example
     * // Get one ReviewSession
     * const reviewSession = await prisma.reviewSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewSessionFindUniqueArgs>(args: SelectSubset<T, ReviewSessionFindUniqueArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewSessionFindUniqueOrThrowArgs} args - Arguments to find a ReviewSession
     * @example
     * // Get one ReviewSession
     * const reviewSession = await prisma.reviewSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionFindFirstArgs} args - Arguments to find a ReviewSession
     * @example
     * // Get one ReviewSession
     * const reviewSession = await prisma.reviewSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewSessionFindFirstArgs>(args?: SelectSubset<T, ReviewSessionFindFirstArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionFindFirstOrThrowArgs} args - Arguments to find a ReviewSession
     * @example
     * // Get one ReviewSession
     * const reviewSession = await prisma.reviewSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewSessions
     * const reviewSessions = await prisma.reviewSession.findMany()
     * 
     * // Get first 10 ReviewSessions
     * const reviewSessions = await prisma.reviewSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewSessionWithIdOnly = await prisma.reviewSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewSessionFindManyArgs>(args?: SelectSubset<T, ReviewSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewSession.
     * @param {ReviewSessionCreateArgs} args - Arguments to create a ReviewSession.
     * @example
     * // Create one ReviewSession
     * const ReviewSession = await prisma.reviewSession.create({
     *   data: {
     *     // ... data to create a ReviewSession
     *   }
     * })
     * 
     */
    create<T extends ReviewSessionCreateArgs>(args: SelectSubset<T, ReviewSessionCreateArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewSessions.
     * @param {ReviewSessionCreateManyArgs} args - Arguments to create many ReviewSessions.
     * @example
     * // Create many ReviewSessions
     * const reviewSession = await prisma.reviewSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewSessionCreateManyArgs>(args?: SelectSubset<T, ReviewSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewSessions and returns the data saved in the database.
     * @param {ReviewSessionCreateManyAndReturnArgs} args - Arguments to create many ReviewSessions.
     * @example
     * // Create many ReviewSessions
     * const reviewSession = await prisma.reviewSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewSessions and only return the `id`
     * const reviewSessionWithIdOnly = await prisma.reviewSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewSession.
     * @param {ReviewSessionDeleteArgs} args - Arguments to delete one ReviewSession.
     * @example
     * // Delete one ReviewSession
     * const ReviewSession = await prisma.reviewSession.delete({
     *   where: {
     *     // ... filter to delete one ReviewSession
     *   }
     * })
     * 
     */
    delete<T extends ReviewSessionDeleteArgs>(args: SelectSubset<T, ReviewSessionDeleteArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewSession.
     * @param {ReviewSessionUpdateArgs} args - Arguments to update one ReviewSession.
     * @example
     * // Update one ReviewSession
     * const reviewSession = await prisma.reviewSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewSessionUpdateArgs>(args: SelectSubset<T, ReviewSessionUpdateArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewSessions.
     * @param {ReviewSessionDeleteManyArgs} args - Arguments to filter ReviewSessions to delete.
     * @example
     * // Delete a few ReviewSessions
     * const { count } = await prisma.reviewSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewSessionDeleteManyArgs>(args?: SelectSubset<T, ReviewSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewSessions
     * const reviewSession = await prisma.reviewSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewSessionUpdateManyArgs>(args: SelectSubset<T, ReviewSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewSessions and returns the data updated in the database.
     * @param {ReviewSessionUpdateManyAndReturnArgs} args - Arguments to update many ReviewSessions.
     * @example
     * // Update many ReviewSessions
     * const reviewSession = await prisma.reviewSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewSessions and only return the `id`
     * const reviewSessionWithIdOnly = await prisma.reviewSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewSession.
     * @param {ReviewSessionUpsertArgs} args - Arguments to update or create a ReviewSession.
     * @example
     * // Update or create a ReviewSession
     * const reviewSession = await prisma.reviewSession.upsert({
     *   create: {
     *     // ... data to create a ReviewSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewSession we want to update
     *   }
     * })
     */
    upsert<T extends ReviewSessionUpsertArgs>(args: SelectSubset<T, ReviewSessionUpsertArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionCountArgs} args - Arguments to filter ReviewSessions to count.
     * @example
     * // Count the number of ReviewSessions
     * const count = await prisma.reviewSession.count({
     *   where: {
     *     // ... the filter for the ReviewSessions we want to count
     *   }
     * })
    **/
    count<T extends ReviewSessionCountArgs>(
      args?: Subset<T, ReviewSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewSessionAggregateArgs>(args: Subset<T, ReviewSessionAggregateArgs>): Prisma.PrismaPromise<GetReviewSessionAggregateType<T>>

    /**
     * Group by ReviewSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewSessionGroupByArgs['orderBy'] }
        : { orderBy?: ReviewSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewSession model
   */
  readonly fields: ReviewSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feedback<T extends ReviewSession$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, ReviewSession$feedbackArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviewDraft<T extends ReviewSession$reviewDraftArgs<ExtArgs> = {}>(args?: Subset<T, ReviewSession$reviewDraftArgs<ExtArgs>>): Prisma__ReviewDraftClient<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewSession model
   */
  interface ReviewSessionFieldRefs {
    readonly id: FieldRef<"ReviewSession", 'String'>
    readonly tenantId: FieldRef<"ReviewSession", 'String'>
    readonly locationId: FieldRef<"ReviewSession", 'String'>
    readonly tableId: FieldRef<"ReviewSession", 'String'>
    readonly status: FieldRef<"ReviewSession", 'ReviewSessionStatus'>
    readonly rating: FieldRef<"ReviewSession", 'Int'>
    readonly createdAt: FieldRef<"ReviewSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ReviewSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewSession findUnique
   */
  export type ReviewSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSession to fetch.
     */
    where: ReviewSessionWhereUniqueInput
  }

  /**
   * ReviewSession findUniqueOrThrow
   */
  export type ReviewSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSession to fetch.
     */
    where: ReviewSessionWhereUniqueInput
  }

  /**
   * ReviewSession findFirst
   */
  export type ReviewSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSession to fetch.
     */
    where?: ReviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSessions to fetch.
     */
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewSessions.
     */
    cursor?: ReviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewSessions.
     */
    distinct?: ReviewSessionScalarFieldEnum | ReviewSessionScalarFieldEnum[]
  }

  /**
   * ReviewSession findFirstOrThrow
   */
  export type ReviewSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSession to fetch.
     */
    where?: ReviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSessions to fetch.
     */
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewSessions.
     */
    cursor?: ReviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewSessions.
     */
    distinct?: ReviewSessionScalarFieldEnum | ReviewSessionScalarFieldEnum[]
  }

  /**
   * ReviewSession findMany
   */
  export type ReviewSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSessions to fetch.
     */
    where?: ReviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSessions to fetch.
     */
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewSessions.
     */
    cursor?: ReviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSessions.
     */
    skip?: number
    distinct?: ReviewSessionScalarFieldEnum | ReviewSessionScalarFieldEnum[]
  }

  /**
   * ReviewSession create
   */
  export type ReviewSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewSession.
     */
    data: XOR<ReviewSessionCreateInput, ReviewSessionUncheckedCreateInput>
  }

  /**
   * ReviewSession createMany
   */
  export type ReviewSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewSessions.
     */
    data: ReviewSessionCreateManyInput | ReviewSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewSession createManyAndReturn
   */
  export type ReviewSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewSessions.
     */
    data: ReviewSessionCreateManyInput | ReviewSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewSession update
   */
  export type ReviewSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewSession.
     */
    data: XOR<ReviewSessionUpdateInput, ReviewSessionUncheckedUpdateInput>
    /**
     * Choose, which ReviewSession to update.
     */
    where: ReviewSessionWhereUniqueInput
  }

  /**
   * ReviewSession updateMany
   */
  export type ReviewSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewSessions.
     */
    data: XOR<ReviewSessionUpdateManyMutationInput, ReviewSessionUncheckedUpdateManyInput>
    /**
     * Filter which ReviewSessions to update
     */
    where?: ReviewSessionWhereInput
    /**
     * Limit how many ReviewSessions to update.
     */
    limit?: number
  }

  /**
   * ReviewSession updateManyAndReturn
   */
  export type ReviewSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * The data used to update ReviewSessions.
     */
    data: XOR<ReviewSessionUpdateManyMutationInput, ReviewSessionUncheckedUpdateManyInput>
    /**
     * Filter which ReviewSessions to update
     */
    where?: ReviewSessionWhereInput
    /**
     * Limit how many ReviewSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewSession upsert
   */
  export type ReviewSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewSession to update in case it exists.
     */
    where: ReviewSessionWhereUniqueInput
    /**
     * In case the ReviewSession found by the `where` argument doesn't exist, create a new ReviewSession with this data.
     */
    create: XOR<ReviewSessionCreateInput, ReviewSessionUncheckedCreateInput>
    /**
     * In case the ReviewSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewSessionUpdateInput, ReviewSessionUncheckedUpdateInput>
  }

  /**
   * ReviewSession delete
   */
  export type ReviewSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter which ReviewSession to delete.
     */
    where: ReviewSessionWhereUniqueInput
  }

  /**
   * ReviewSession deleteMany
   */
  export type ReviewSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewSessions to delete
     */
    where?: ReviewSessionWhereInput
    /**
     * Limit how many ReviewSessions to delete.
     */
    limit?: number
  }

  /**
   * ReviewSession.feedback
   */
  export type ReviewSession$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
  }

  /**
   * ReviewSession.reviewDraft
   */
  export type ReviewSession$reviewDraftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftInclude<ExtArgs> | null
    where?: ReviewDraftWhereInput
  }

  /**
   * ReviewSession without action
   */
  export type ReviewSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    sessionId: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeedbackMinAggregateInputType = {
    id?: true
    sessionId?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    sessionId?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    sessionId?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    sessionId: string
    comment: string
    createdAt: Date
    updatedAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
    keywords?: boolean | Feedback$keywordsArgs<ExtArgs>
    _count?: boolean | FeedbackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    sessionId?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
    keywords?: boolean | Feedback$keywordsArgs<ExtArgs>
    _count?: boolean | FeedbackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      session: Prisma.$ReviewSessionPayload<ExtArgs>
      keywords: Prisma.$FeedbackKeywordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      comment: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ReviewSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewSessionDefaultArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    keywords<T extends Feedback$keywordsArgs<ExtArgs> = {}>(args?: Subset<T, Feedback$keywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly sessionId: FieldRef<"Feedback", 'String'>
    readonly comment: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
    readonly updatedAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback.keywords
   */
  export type Feedback$keywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
    where?: FeedbackKeywordWhereInput
    orderBy?: FeedbackKeywordOrderByWithRelationInput | FeedbackKeywordOrderByWithRelationInput[]
    cursor?: FeedbackKeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackKeywordScalarFieldEnum | FeedbackKeywordScalarFieldEnum[]
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Keyword
   */

  export type AggregateKeyword = {
    _count: KeywordCountAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  export type KeywordMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
  }

  export type KeywordMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
  }

  export type KeywordCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    _all: number
  }


  export type KeywordMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
  }

  export type KeywordMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
  }

  export type KeywordCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    _all?: true
  }

  export type KeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keyword to aggregate.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keywords
    **/
    _count?: true | KeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeywordMaxAggregateInputType
  }

  export type GetKeywordAggregateType<T extends KeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyword[P]>
      : GetScalarType<T[P], AggregateKeyword[P]>
  }




  export type KeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithAggregationInput | KeywordOrderByWithAggregationInput[]
    by: KeywordScalarFieldEnum[] | KeywordScalarFieldEnum
    having?: KeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeywordCountAggregateInputType | true
    _min?: KeywordMinAggregateInputType
    _max?: KeywordMaxAggregateInputType
  }

  export type KeywordGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    _count: KeywordCountAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  type GetKeywordGroupByPayload<T extends KeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeywordGroupByOutputType[P]>
            : GetScalarType<T[P], KeywordGroupByOutputType[P]>
        }
      >
    >


  export type KeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    feedbackKeywords?: boolean | Keyword$feedbackKeywordsArgs<ExtArgs>
    _count?: boolean | KeywordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
  }

  export type KeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name", ExtArgs["result"]["keyword"]>
  export type KeywordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    feedbackKeywords?: boolean | Keyword$feedbackKeywordsArgs<ExtArgs>
    _count?: boolean | KeywordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KeywordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type KeywordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $KeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keyword"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      feedbackKeywords: Prisma.$FeedbackKeywordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
    }, ExtArgs["result"]["keyword"]>
    composites: {}
  }

  type KeywordGetPayload<S extends boolean | null | undefined | KeywordDefaultArgs> = $Result.GetResult<Prisma.$KeywordPayload, S>

  type KeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeywordCountAggregateInputType | true
    }

  export interface KeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keyword'], meta: { name: 'Keyword' } }
    /**
     * Find zero or one Keyword that matches the filter.
     * @param {KeywordFindUniqueArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeywordFindUniqueArgs>(args: SelectSubset<T, KeywordFindUniqueArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeywordFindUniqueOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, KeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeywordFindFirstArgs>(args?: SelectSubset<T, KeywordFindFirstArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, KeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keywords
     * const keywords = await prisma.keyword.findMany()
     * 
     * // Get first 10 Keywords
     * const keywords = await prisma.keyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keywordWithIdOnly = await prisma.keyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeywordFindManyArgs>(args?: SelectSubset<T, KeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keyword.
     * @param {KeywordCreateArgs} args - Arguments to create a Keyword.
     * @example
     * // Create one Keyword
     * const Keyword = await prisma.keyword.create({
     *   data: {
     *     // ... data to create a Keyword
     *   }
     * })
     * 
     */
    create<T extends KeywordCreateArgs>(args: SelectSubset<T, KeywordCreateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keywords.
     * @param {KeywordCreateManyArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeywordCreateManyArgs>(args?: SelectSubset<T, KeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keywords and returns the data saved in the database.
     * @param {KeywordCreateManyAndReturnArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeywordCreateManyAndReturnArgs>(args?: SelectSubset<T, KeywordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Keyword.
     * @param {KeywordDeleteArgs} args - Arguments to delete one Keyword.
     * @example
     * // Delete one Keyword
     * const Keyword = await prisma.keyword.delete({
     *   where: {
     *     // ... filter to delete one Keyword
     *   }
     * })
     * 
     */
    delete<T extends KeywordDeleteArgs>(args: SelectSubset<T, KeywordDeleteArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keyword.
     * @param {KeywordUpdateArgs} args - Arguments to update one Keyword.
     * @example
     * // Update one Keyword
     * const keyword = await prisma.keyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeywordUpdateArgs>(args: SelectSubset<T, KeywordUpdateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keywords.
     * @param {KeywordDeleteManyArgs} args - Arguments to filter Keywords to delete.
     * @example
     * // Delete a few Keywords
     * const { count } = await prisma.keyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeywordDeleteManyArgs>(args?: SelectSubset<T, KeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeywordUpdateManyArgs>(args: SelectSubset<T, KeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords and returns the data updated in the database.
     * @param {KeywordUpdateManyAndReturnArgs} args - Arguments to update many Keywords.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeywordUpdateManyAndReturnArgs>(args: SelectSubset<T, KeywordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Keyword.
     * @param {KeywordUpsertArgs} args - Arguments to update or create a Keyword.
     * @example
     * // Update or create a Keyword
     * const keyword = await prisma.keyword.upsert({
     *   create: {
     *     // ... data to create a Keyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keyword we want to update
     *   }
     * })
     */
    upsert<T extends KeywordUpsertArgs>(args: SelectSubset<T, KeywordUpsertArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordCountArgs} args - Arguments to filter Keywords to count.
     * @example
     * // Count the number of Keywords
     * const count = await prisma.keyword.count({
     *   where: {
     *     // ... the filter for the Keywords we want to count
     *   }
     * })
    **/
    count<T extends KeywordCountArgs>(
      args?: Subset<T, KeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeywordAggregateArgs>(args: Subset<T, KeywordAggregateArgs>): Prisma.PrismaPromise<GetKeywordAggregateType<T>>

    /**
     * Group by Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeywordGroupByArgs['orderBy'] }
        : { orderBy?: KeywordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keyword model
   */
  readonly fields: KeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feedbackKeywords<T extends Keyword$feedbackKeywordsArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$feedbackKeywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Keyword model
   */
  interface KeywordFieldRefs {
    readonly id: FieldRef<"Keyword", 'String'>
    readonly tenantId: FieldRef<"Keyword", 'String'>
    readonly name: FieldRef<"Keyword", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Keyword findUnique
   */
  export type KeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findUniqueOrThrow
   */
  export type KeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findFirst
   */
  export type KeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findFirstOrThrow
   */
  export type KeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findMany
   */
  export type KeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword create
   */
  export type KeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to create a Keyword.
     */
    data: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
  }

  /**
   * Keyword createMany
   */
  export type KeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keyword createManyAndReturn
   */
  export type KeywordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keyword update
   */
  export type KeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to update a Keyword.
     */
    data: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
    /**
     * Choose, which Keyword to update.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword updateMany
   */
  export type KeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keyword updateManyAndReturn
   */
  export type KeywordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keyword upsert
   */
  export type KeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The filter to search for the Keyword to update in case it exists.
     */
    where: KeywordWhereUniqueInput
    /**
     * In case the Keyword found by the `where` argument doesn't exist, create a new Keyword with this data.
     */
    create: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
    /**
     * In case the Keyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
  }

  /**
   * Keyword delete
   */
  export type KeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter which Keyword to delete.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword deleteMany
   */
  export type KeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keywords to delete
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to delete.
     */
    limit?: number
  }

  /**
   * Keyword.feedbackKeywords
   */
  export type Keyword$feedbackKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
    where?: FeedbackKeywordWhereInput
    orderBy?: FeedbackKeywordOrderByWithRelationInput | FeedbackKeywordOrderByWithRelationInput[]
    cursor?: FeedbackKeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackKeywordScalarFieldEnum | FeedbackKeywordScalarFieldEnum[]
  }

  /**
   * Keyword without action
   */
  export type KeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
  }


  /**
   * Model FeedbackKeyword
   */

  export type AggregateFeedbackKeyword = {
    _count: FeedbackKeywordCountAggregateOutputType | null
    _min: FeedbackKeywordMinAggregateOutputType | null
    _max: FeedbackKeywordMaxAggregateOutputType | null
  }

  export type FeedbackKeywordMinAggregateOutputType = {
    feedbackId: string | null
    keywordId: string | null
    sentiment: $Enums.Sentiment | null
  }

  export type FeedbackKeywordMaxAggregateOutputType = {
    feedbackId: string | null
    keywordId: string | null
    sentiment: $Enums.Sentiment | null
  }

  export type FeedbackKeywordCountAggregateOutputType = {
    feedbackId: number
    keywordId: number
    sentiment: number
    _all: number
  }


  export type FeedbackKeywordMinAggregateInputType = {
    feedbackId?: true
    keywordId?: true
    sentiment?: true
  }

  export type FeedbackKeywordMaxAggregateInputType = {
    feedbackId?: true
    keywordId?: true
    sentiment?: true
  }

  export type FeedbackKeywordCountAggregateInputType = {
    feedbackId?: true
    keywordId?: true
    sentiment?: true
    _all?: true
  }

  export type FeedbackKeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackKeyword to aggregate.
     */
    where?: FeedbackKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackKeywords to fetch.
     */
    orderBy?: FeedbackKeywordOrderByWithRelationInput | FeedbackKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedbackKeywords
    **/
    _count?: true | FeedbackKeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackKeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackKeywordMaxAggregateInputType
  }

  export type GetFeedbackKeywordAggregateType<T extends FeedbackKeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbackKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbackKeyword[P]>
      : GetScalarType<T[P], AggregateFeedbackKeyword[P]>
  }




  export type FeedbackKeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackKeywordWhereInput
    orderBy?: FeedbackKeywordOrderByWithAggregationInput | FeedbackKeywordOrderByWithAggregationInput[]
    by: FeedbackKeywordScalarFieldEnum[] | FeedbackKeywordScalarFieldEnum
    having?: FeedbackKeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackKeywordCountAggregateInputType | true
    _min?: FeedbackKeywordMinAggregateInputType
    _max?: FeedbackKeywordMaxAggregateInputType
  }

  export type FeedbackKeywordGroupByOutputType = {
    feedbackId: string
    keywordId: string
    sentiment: $Enums.Sentiment
    _count: FeedbackKeywordCountAggregateOutputType | null
    _min: FeedbackKeywordMinAggregateOutputType | null
    _max: FeedbackKeywordMaxAggregateOutputType | null
  }

  type GetFeedbackKeywordGroupByPayload<T extends FeedbackKeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackKeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackKeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackKeywordGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackKeywordGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackKeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feedbackId?: boolean
    keywordId?: boolean
    sentiment?: boolean
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackKeyword"]>

  export type FeedbackKeywordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feedbackId?: boolean
    keywordId?: boolean
    sentiment?: boolean
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackKeyword"]>

  export type FeedbackKeywordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feedbackId?: boolean
    keywordId?: boolean
    sentiment?: boolean
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackKeyword"]>

  export type FeedbackKeywordSelectScalar = {
    feedbackId?: boolean
    keywordId?: boolean
    sentiment?: boolean
  }

  export type FeedbackKeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"feedbackId" | "keywordId" | "sentiment", ExtArgs["result"]["feedbackKeyword"]>
  export type FeedbackKeywordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type FeedbackKeywordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type FeedbackKeywordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | FeedbackDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }

  export type $FeedbackKeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedbackKeyword"
    objects: {
      feedback: Prisma.$FeedbackPayload<ExtArgs>
      keyword: Prisma.$KeywordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      feedbackId: string
      keywordId: string
      sentiment: $Enums.Sentiment
    }, ExtArgs["result"]["feedbackKeyword"]>
    composites: {}
  }

  type FeedbackKeywordGetPayload<S extends boolean | null | undefined | FeedbackKeywordDefaultArgs> = $Result.GetResult<Prisma.$FeedbackKeywordPayload, S>

  type FeedbackKeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackKeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackKeywordCountAggregateInputType | true
    }

  export interface FeedbackKeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedbackKeyword'], meta: { name: 'FeedbackKeyword' } }
    /**
     * Find zero or one FeedbackKeyword that matches the filter.
     * @param {FeedbackKeywordFindUniqueArgs} args - Arguments to find a FeedbackKeyword
     * @example
     * // Get one FeedbackKeyword
     * const feedbackKeyword = await prisma.feedbackKeyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackKeywordFindUniqueArgs>(args: SelectSubset<T, FeedbackKeywordFindUniqueArgs<ExtArgs>>): Prisma__FeedbackKeywordClient<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeedbackKeyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackKeywordFindUniqueOrThrowArgs} args - Arguments to find a FeedbackKeyword
     * @example
     * // Get one FeedbackKeyword
     * const feedbackKeyword = await prisma.feedbackKeyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackKeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackKeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackKeywordClient<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackKeyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackKeywordFindFirstArgs} args - Arguments to find a FeedbackKeyword
     * @example
     * // Get one FeedbackKeyword
     * const feedbackKeyword = await prisma.feedbackKeyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackKeywordFindFirstArgs>(args?: SelectSubset<T, FeedbackKeywordFindFirstArgs<ExtArgs>>): Prisma__FeedbackKeywordClient<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackKeyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackKeywordFindFirstOrThrowArgs} args - Arguments to find a FeedbackKeyword
     * @example
     * // Get one FeedbackKeyword
     * const feedbackKeyword = await prisma.feedbackKeyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackKeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackKeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackKeywordClient<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedbackKeywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackKeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedbackKeywords
     * const feedbackKeywords = await prisma.feedbackKeyword.findMany()
     * 
     * // Get first 10 FeedbackKeywords
     * const feedbackKeywords = await prisma.feedbackKeyword.findMany({ take: 10 })
     * 
     * // Only select the `feedbackId`
     * const feedbackKeywordWithFeedbackIdOnly = await prisma.feedbackKeyword.findMany({ select: { feedbackId: true } })
     * 
     */
    findMany<T extends FeedbackKeywordFindManyArgs>(args?: SelectSubset<T, FeedbackKeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeedbackKeyword.
     * @param {FeedbackKeywordCreateArgs} args - Arguments to create a FeedbackKeyword.
     * @example
     * // Create one FeedbackKeyword
     * const FeedbackKeyword = await prisma.feedbackKeyword.create({
     *   data: {
     *     // ... data to create a FeedbackKeyword
     *   }
     * })
     * 
     */
    create<T extends FeedbackKeywordCreateArgs>(args: SelectSubset<T, FeedbackKeywordCreateArgs<ExtArgs>>): Prisma__FeedbackKeywordClient<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeedbackKeywords.
     * @param {FeedbackKeywordCreateManyArgs} args - Arguments to create many FeedbackKeywords.
     * @example
     * // Create many FeedbackKeywords
     * const feedbackKeyword = await prisma.feedbackKeyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackKeywordCreateManyArgs>(args?: SelectSubset<T, FeedbackKeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeedbackKeywords and returns the data saved in the database.
     * @param {FeedbackKeywordCreateManyAndReturnArgs} args - Arguments to create many FeedbackKeywords.
     * @example
     * // Create many FeedbackKeywords
     * const feedbackKeyword = await prisma.feedbackKeyword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeedbackKeywords and only return the `feedbackId`
     * const feedbackKeywordWithFeedbackIdOnly = await prisma.feedbackKeyword.createManyAndReturn({
     *   select: { feedbackId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackKeywordCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackKeywordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeedbackKeyword.
     * @param {FeedbackKeywordDeleteArgs} args - Arguments to delete one FeedbackKeyword.
     * @example
     * // Delete one FeedbackKeyword
     * const FeedbackKeyword = await prisma.feedbackKeyword.delete({
     *   where: {
     *     // ... filter to delete one FeedbackKeyword
     *   }
     * })
     * 
     */
    delete<T extends FeedbackKeywordDeleteArgs>(args: SelectSubset<T, FeedbackKeywordDeleteArgs<ExtArgs>>): Prisma__FeedbackKeywordClient<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeedbackKeyword.
     * @param {FeedbackKeywordUpdateArgs} args - Arguments to update one FeedbackKeyword.
     * @example
     * // Update one FeedbackKeyword
     * const feedbackKeyword = await prisma.feedbackKeyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackKeywordUpdateArgs>(args: SelectSubset<T, FeedbackKeywordUpdateArgs<ExtArgs>>): Prisma__FeedbackKeywordClient<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeedbackKeywords.
     * @param {FeedbackKeywordDeleteManyArgs} args - Arguments to filter FeedbackKeywords to delete.
     * @example
     * // Delete a few FeedbackKeywords
     * const { count } = await prisma.feedbackKeyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackKeywordDeleteManyArgs>(args?: SelectSubset<T, FeedbackKeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackKeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedbackKeywords
     * const feedbackKeyword = await prisma.feedbackKeyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackKeywordUpdateManyArgs>(args: SelectSubset<T, FeedbackKeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackKeywords and returns the data updated in the database.
     * @param {FeedbackKeywordUpdateManyAndReturnArgs} args - Arguments to update many FeedbackKeywords.
     * @example
     * // Update many FeedbackKeywords
     * const feedbackKeyword = await prisma.feedbackKeyword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeedbackKeywords and only return the `feedbackId`
     * const feedbackKeywordWithFeedbackIdOnly = await prisma.feedbackKeyword.updateManyAndReturn({
     *   select: { feedbackId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackKeywordUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackKeywordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeedbackKeyword.
     * @param {FeedbackKeywordUpsertArgs} args - Arguments to update or create a FeedbackKeyword.
     * @example
     * // Update or create a FeedbackKeyword
     * const feedbackKeyword = await prisma.feedbackKeyword.upsert({
     *   create: {
     *     // ... data to create a FeedbackKeyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedbackKeyword we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackKeywordUpsertArgs>(args: SelectSubset<T, FeedbackKeywordUpsertArgs<ExtArgs>>): Prisma__FeedbackKeywordClient<$Result.GetResult<Prisma.$FeedbackKeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeedbackKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackKeywordCountArgs} args - Arguments to filter FeedbackKeywords to count.
     * @example
     * // Count the number of FeedbackKeywords
     * const count = await prisma.feedbackKeyword.count({
     *   where: {
     *     // ... the filter for the FeedbackKeywords we want to count
     *   }
     * })
    **/
    count<T extends FeedbackKeywordCountArgs>(
      args?: Subset<T, FeedbackKeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackKeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedbackKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackKeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackKeywordAggregateArgs>(args: Subset<T, FeedbackKeywordAggregateArgs>): Prisma.PrismaPromise<GetFeedbackKeywordAggregateType<T>>

    /**
     * Group by FeedbackKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackKeywordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackKeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackKeywordGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackKeywordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackKeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedbackKeyword model
   */
  readonly fields: FeedbackKeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedbackKeyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackKeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedback<T extends FeedbackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeedbackDefaultArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    keyword<T extends KeywordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeywordDefaultArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeedbackKeyword model
   */
  interface FeedbackKeywordFieldRefs {
    readonly feedbackId: FieldRef<"FeedbackKeyword", 'String'>
    readonly keywordId: FieldRef<"FeedbackKeyword", 'String'>
    readonly sentiment: FieldRef<"FeedbackKeyword", 'Sentiment'>
  }
    

  // Custom InputTypes
  /**
   * FeedbackKeyword findUnique
   */
  export type FeedbackKeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackKeyword to fetch.
     */
    where: FeedbackKeywordWhereUniqueInput
  }

  /**
   * FeedbackKeyword findUniqueOrThrow
   */
  export type FeedbackKeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackKeyword to fetch.
     */
    where: FeedbackKeywordWhereUniqueInput
  }

  /**
   * FeedbackKeyword findFirst
   */
  export type FeedbackKeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackKeyword to fetch.
     */
    where?: FeedbackKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackKeywords to fetch.
     */
    orderBy?: FeedbackKeywordOrderByWithRelationInput | FeedbackKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackKeywords.
     */
    cursor?: FeedbackKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackKeywords.
     */
    distinct?: FeedbackKeywordScalarFieldEnum | FeedbackKeywordScalarFieldEnum[]
  }

  /**
   * FeedbackKeyword findFirstOrThrow
   */
  export type FeedbackKeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackKeyword to fetch.
     */
    where?: FeedbackKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackKeywords to fetch.
     */
    orderBy?: FeedbackKeywordOrderByWithRelationInput | FeedbackKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackKeywords.
     */
    cursor?: FeedbackKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackKeywords.
     */
    distinct?: FeedbackKeywordScalarFieldEnum | FeedbackKeywordScalarFieldEnum[]
  }

  /**
   * FeedbackKeyword findMany
   */
  export type FeedbackKeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackKeywords to fetch.
     */
    where?: FeedbackKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackKeywords to fetch.
     */
    orderBy?: FeedbackKeywordOrderByWithRelationInput | FeedbackKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedbackKeywords.
     */
    cursor?: FeedbackKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackKeywords.
     */
    skip?: number
    distinct?: FeedbackKeywordScalarFieldEnum | FeedbackKeywordScalarFieldEnum[]
  }

  /**
   * FeedbackKeyword create
   */
  export type FeedbackKeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedbackKeyword.
     */
    data: XOR<FeedbackKeywordCreateInput, FeedbackKeywordUncheckedCreateInput>
  }

  /**
   * FeedbackKeyword createMany
   */
  export type FeedbackKeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedbackKeywords.
     */
    data: FeedbackKeywordCreateManyInput | FeedbackKeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeedbackKeyword createManyAndReturn
   */
  export type FeedbackKeywordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * The data used to create many FeedbackKeywords.
     */
    data: FeedbackKeywordCreateManyInput | FeedbackKeywordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeedbackKeyword update
   */
  export type FeedbackKeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedbackKeyword.
     */
    data: XOR<FeedbackKeywordUpdateInput, FeedbackKeywordUncheckedUpdateInput>
    /**
     * Choose, which FeedbackKeyword to update.
     */
    where: FeedbackKeywordWhereUniqueInput
  }

  /**
   * FeedbackKeyword updateMany
   */
  export type FeedbackKeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedbackKeywords.
     */
    data: XOR<FeedbackKeywordUpdateManyMutationInput, FeedbackKeywordUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackKeywords to update
     */
    where?: FeedbackKeywordWhereInput
    /**
     * Limit how many FeedbackKeywords to update.
     */
    limit?: number
  }

  /**
   * FeedbackKeyword updateManyAndReturn
   */
  export type FeedbackKeywordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * The data used to update FeedbackKeywords.
     */
    data: XOR<FeedbackKeywordUpdateManyMutationInput, FeedbackKeywordUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackKeywords to update
     */
    where?: FeedbackKeywordWhereInput
    /**
     * Limit how many FeedbackKeywords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeedbackKeyword upsert
   */
  export type FeedbackKeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedbackKeyword to update in case it exists.
     */
    where: FeedbackKeywordWhereUniqueInput
    /**
     * In case the FeedbackKeyword found by the `where` argument doesn't exist, create a new FeedbackKeyword with this data.
     */
    create: XOR<FeedbackKeywordCreateInput, FeedbackKeywordUncheckedCreateInput>
    /**
     * In case the FeedbackKeyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackKeywordUpdateInput, FeedbackKeywordUncheckedUpdateInput>
  }

  /**
   * FeedbackKeyword delete
   */
  export type FeedbackKeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
    /**
     * Filter which FeedbackKeyword to delete.
     */
    where: FeedbackKeywordWhereUniqueInput
  }

  /**
   * FeedbackKeyword deleteMany
   */
  export type FeedbackKeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackKeywords to delete
     */
    where?: FeedbackKeywordWhereInput
    /**
     * Limit how many FeedbackKeywords to delete.
     */
    limit?: number
  }

  /**
   * FeedbackKeyword without action
   */
  export type FeedbackKeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackKeyword
     */
    select?: FeedbackKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackKeyword
     */
    omit?: FeedbackKeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackKeywordInclude<ExtArgs> | null
  }


  /**
   * Model ReviewDraft
   */

  export type AggregateReviewDraft = {
    _count: ReviewDraftCountAggregateOutputType | null
    _min: ReviewDraftMinAggregateOutputType | null
    _max: ReviewDraftMaxAggregateOutputType | null
  }

  export type ReviewDraftMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    rawText: string | null
    text: string | null
    status: $Enums.ReviewDraftStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewDraftMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    rawText: string | null
    text: string | null
    status: $Enums.ReviewDraftStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewDraftCountAggregateOutputType = {
    id: number
    sessionId: number
    rawText: number
    text: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewDraftMinAggregateInputType = {
    id?: true
    sessionId?: true
    rawText?: true
    text?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewDraftMaxAggregateInputType = {
    id?: true
    sessionId?: true
    rawText?: true
    text?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewDraftCountAggregateInputType = {
    id?: true
    sessionId?: true
    rawText?: true
    text?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewDraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewDraft to aggregate.
     */
    where?: ReviewDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewDrafts to fetch.
     */
    orderBy?: ReviewDraftOrderByWithRelationInput | ReviewDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewDrafts
    **/
    _count?: true | ReviewDraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewDraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewDraftMaxAggregateInputType
  }

  export type GetReviewDraftAggregateType<T extends ReviewDraftAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewDraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewDraft[P]>
      : GetScalarType<T[P], AggregateReviewDraft[P]>
  }




  export type ReviewDraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewDraftWhereInput
    orderBy?: ReviewDraftOrderByWithAggregationInput | ReviewDraftOrderByWithAggregationInput[]
    by: ReviewDraftScalarFieldEnum[] | ReviewDraftScalarFieldEnum
    having?: ReviewDraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewDraftCountAggregateInputType | true
    _min?: ReviewDraftMinAggregateInputType
    _max?: ReviewDraftMaxAggregateInputType
  }

  export type ReviewDraftGroupByOutputType = {
    id: string
    sessionId: string
    rawText: string
    text: string
    status: $Enums.ReviewDraftStatus
    createdAt: Date
    updatedAt: Date
    _count: ReviewDraftCountAggregateOutputType | null
    _min: ReviewDraftMinAggregateOutputType | null
    _max: ReviewDraftMaxAggregateOutputType | null
  }

  type GetReviewDraftGroupByPayload<T extends ReviewDraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewDraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewDraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewDraftGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewDraftGroupByOutputType[P]>
        }
      >
    >


  export type ReviewDraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    rawText?: boolean
    text?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewDraft"]>

  export type ReviewDraftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    rawText?: boolean
    text?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewDraft"]>

  export type ReviewDraftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    rawText?: boolean
    text?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewDraft"]>

  export type ReviewDraftSelectScalar = {
    id?: boolean
    sessionId?: boolean
    rawText?: boolean
    text?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewDraftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "rawText" | "text" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["reviewDraft"]>
  export type ReviewDraftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
  }
  export type ReviewDraftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
  }
  export type ReviewDraftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ReviewSessionDefaultArgs<ExtArgs>
  }

  export type $ReviewDraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewDraft"
    objects: {
      session: Prisma.$ReviewSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      rawText: string
      text: string
      status: $Enums.ReviewDraftStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reviewDraft"]>
    composites: {}
  }

  type ReviewDraftGetPayload<S extends boolean | null | undefined | ReviewDraftDefaultArgs> = $Result.GetResult<Prisma.$ReviewDraftPayload, S>

  type ReviewDraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewDraftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewDraftCountAggregateInputType | true
    }

  export interface ReviewDraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewDraft'], meta: { name: 'ReviewDraft' } }
    /**
     * Find zero or one ReviewDraft that matches the filter.
     * @param {ReviewDraftFindUniqueArgs} args - Arguments to find a ReviewDraft
     * @example
     * // Get one ReviewDraft
     * const reviewDraft = await prisma.reviewDraft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewDraftFindUniqueArgs>(args: SelectSubset<T, ReviewDraftFindUniqueArgs<ExtArgs>>): Prisma__ReviewDraftClient<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewDraft that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewDraftFindUniqueOrThrowArgs} args - Arguments to find a ReviewDraft
     * @example
     * // Get one ReviewDraft
     * const reviewDraft = await prisma.reviewDraft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewDraftFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewDraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewDraftClient<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewDraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDraftFindFirstArgs} args - Arguments to find a ReviewDraft
     * @example
     * // Get one ReviewDraft
     * const reviewDraft = await prisma.reviewDraft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewDraftFindFirstArgs>(args?: SelectSubset<T, ReviewDraftFindFirstArgs<ExtArgs>>): Prisma__ReviewDraftClient<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewDraft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDraftFindFirstOrThrowArgs} args - Arguments to find a ReviewDraft
     * @example
     * // Get one ReviewDraft
     * const reviewDraft = await prisma.reviewDraft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewDraftFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewDraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewDraftClient<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewDrafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewDrafts
     * const reviewDrafts = await prisma.reviewDraft.findMany()
     * 
     * // Get first 10 ReviewDrafts
     * const reviewDrafts = await prisma.reviewDraft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewDraftWithIdOnly = await prisma.reviewDraft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewDraftFindManyArgs>(args?: SelectSubset<T, ReviewDraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewDraft.
     * @param {ReviewDraftCreateArgs} args - Arguments to create a ReviewDraft.
     * @example
     * // Create one ReviewDraft
     * const ReviewDraft = await prisma.reviewDraft.create({
     *   data: {
     *     // ... data to create a ReviewDraft
     *   }
     * })
     * 
     */
    create<T extends ReviewDraftCreateArgs>(args: SelectSubset<T, ReviewDraftCreateArgs<ExtArgs>>): Prisma__ReviewDraftClient<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewDrafts.
     * @param {ReviewDraftCreateManyArgs} args - Arguments to create many ReviewDrafts.
     * @example
     * // Create many ReviewDrafts
     * const reviewDraft = await prisma.reviewDraft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewDraftCreateManyArgs>(args?: SelectSubset<T, ReviewDraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewDrafts and returns the data saved in the database.
     * @param {ReviewDraftCreateManyAndReturnArgs} args - Arguments to create many ReviewDrafts.
     * @example
     * // Create many ReviewDrafts
     * const reviewDraft = await prisma.reviewDraft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewDrafts and only return the `id`
     * const reviewDraftWithIdOnly = await prisma.reviewDraft.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewDraftCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewDraftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewDraft.
     * @param {ReviewDraftDeleteArgs} args - Arguments to delete one ReviewDraft.
     * @example
     * // Delete one ReviewDraft
     * const ReviewDraft = await prisma.reviewDraft.delete({
     *   where: {
     *     // ... filter to delete one ReviewDraft
     *   }
     * })
     * 
     */
    delete<T extends ReviewDraftDeleteArgs>(args: SelectSubset<T, ReviewDraftDeleteArgs<ExtArgs>>): Prisma__ReviewDraftClient<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewDraft.
     * @param {ReviewDraftUpdateArgs} args - Arguments to update one ReviewDraft.
     * @example
     * // Update one ReviewDraft
     * const reviewDraft = await prisma.reviewDraft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewDraftUpdateArgs>(args: SelectSubset<T, ReviewDraftUpdateArgs<ExtArgs>>): Prisma__ReviewDraftClient<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewDrafts.
     * @param {ReviewDraftDeleteManyArgs} args - Arguments to filter ReviewDrafts to delete.
     * @example
     * // Delete a few ReviewDrafts
     * const { count } = await prisma.reviewDraft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDraftDeleteManyArgs>(args?: SelectSubset<T, ReviewDraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewDrafts
     * const reviewDraft = await prisma.reviewDraft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewDraftUpdateManyArgs>(args: SelectSubset<T, ReviewDraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewDrafts and returns the data updated in the database.
     * @param {ReviewDraftUpdateManyAndReturnArgs} args - Arguments to update many ReviewDrafts.
     * @example
     * // Update many ReviewDrafts
     * const reviewDraft = await prisma.reviewDraft.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewDrafts and only return the `id`
     * const reviewDraftWithIdOnly = await prisma.reviewDraft.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewDraftUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewDraftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewDraft.
     * @param {ReviewDraftUpsertArgs} args - Arguments to update or create a ReviewDraft.
     * @example
     * // Update or create a ReviewDraft
     * const reviewDraft = await prisma.reviewDraft.upsert({
     *   create: {
     *     // ... data to create a ReviewDraft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewDraft we want to update
     *   }
     * })
     */
    upsert<T extends ReviewDraftUpsertArgs>(args: SelectSubset<T, ReviewDraftUpsertArgs<ExtArgs>>): Prisma__ReviewDraftClient<$Result.GetResult<Prisma.$ReviewDraftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDraftCountArgs} args - Arguments to filter ReviewDrafts to count.
     * @example
     * // Count the number of ReviewDrafts
     * const count = await prisma.reviewDraft.count({
     *   where: {
     *     // ... the filter for the ReviewDrafts we want to count
     *   }
     * })
    **/
    count<T extends ReviewDraftCountArgs>(
      args?: Subset<T, ReviewDraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewDraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewDraftAggregateArgs>(args: Subset<T, ReviewDraftAggregateArgs>): Prisma.PrismaPromise<GetReviewDraftAggregateType<T>>

    /**
     * Group by ReviewDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewDraftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewDraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewDraftGroupByArgs['orderBy'] }
        : { orderBy?: ReviewDraftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewDraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewDraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewDraft model
   */
  readonly fields: ReviewDraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewDraft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewDraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ReviewSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewSessionDefaultArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewDraft model
   */
  interface ReviewDraftFieldRefs {
    readonly id: FieldRef<"ReviewDraft", 'String'>
    readonly sessionId: FieldRef<"ReviewDraft", 'String'>
    readonly rawText: FieldRef<"ReviewDraft", 'String'>
    readonly text: FieldRef<"ReviewDraft", 'String'>
    readonly status: FieldRef<"ReviewDraft", 'ReviewDraftStatus'>
    readonly createdAt: FieldRef<"ReviewDraft", 'DateTime'>
    readonly updatedAt: FieldRef<"ReviewDraft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewDraft findUnique
   */
  export type ReviewDraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftInclude<ExtArgs> | null
    /**
     * Filter, which ReviewDraft to fetch.
     */
    where: ReviewDraftWhereUniqueInput
  }

  /**
   * ReviewDraft findUniqueOrThrow
   */
  export type ReviewDraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftInclude<ExtArgs> | null
    /**
     * Filter, which ReviewDraft to fetch.
     */
    where: ReviewDraftWhereUniqueInput
  }

  /**
   * ReviewDraft findFirst
   */
  export type ReviewDraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftInclude<ExtArgs> | null
    /**
     * Filter, which ReviewDraft to fetch.
     */
    where?: ReviewDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewDrafts to fetch.
     */
    orderBy?: ReviewDraftOrderByWithRelationInput | ReviewDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewDrafts.
     */
    cursor?: ReviewDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewDrafts.
     */
    distinct?: ReviewDraftScalarFieldEnum | ReviewDraftScalarFieldEnum[]
  }

  /**
   * ReviewDraft findFirstOrThrow
   */
  export type ReviewDraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftInclude<ExtArgs> | null
    /**
     * Filter, which ReviewDraft to fetch.
     */
    where?: ReviewDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewDrafts to fetch.
     */
    orderBy?: ReviewDraftOrderByWithRelationInput | ReviewDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewDrafts.
     */
    cursor?: ReviewDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewDrafts.
     */
    distinct?: ReviewDraftScalarFieldEnum | ReviewDraftScalarFieldEnum[]
  }

  /**
   * ReviewDraft findMany
   */
  export type ReviewDraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftInclude<ExtArgs> | null
    /**
     * Filter, which ReviewDrafts to fetch.
     */
    where?: ReviewDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewDrafts to fetch.
     */
    orderBy?: ReviewDraftOrderByWithRelationInput | ReviewDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewDrafts.
     */
    cursor?: ReviewDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewDrafts.
     */
    skip?: number
    distinct?: ReviewDraftScalarFieldEnum | ReviewDraftScalarFieldEnum[]
  }

  /**
   * ReviewDraft create
   */
  export type ReviewDraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewDraft.
     */
    data: XOR<ReviewDraftCreateInput, ReviewDraftUncheckedCreateInput>
  }

  /**
   * ReviewDraft createMany
   */
  export type ReviewDraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewDrafts.
     */
    data: ReviewDraftCreateManyInput | ReviewDraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewDraft createManyAndReturn
   */
  export type ReviewDraftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewDrafts.
     */
    data: ReviewDraftCreateManyInput | ReviewDraftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewDraft update
   */
  export type ReviewDraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewDraft.
     */
    data: XOR<ReviewDraftUpdateInput, ReviewDraftUncheckedUpdateInput>
    /**
     * Choose, which ReviewDraft to update.
     */
    where: ReviewDraftWhereUniqueInput
  }

  /**
   * ReviewDraft updateMany
   */
  export type ReviewDraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewDrafts.
     */
    data: XOR<ReviewDraftUpdateManyMutationInput, ReviewDraftUncheckedUpdateManyInput>
    /**
     * Filter which ReviewDrafts to update
     */
    where?: ReviewDraftWhereInput
    /**
     * Limit how many ReviewDrafts to update.
     */
    limit?: number
  }

  /**
   * ReviewDraft updateManyAndReturn
   */
  export type ReviewDraftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * The data used to update ReviewDrafts.
     */
    data: XOR<ReviewDraftUpdateManyMutationInput, ReviewDraftUncheckedUpdateManyInput>
    /**
     * Filter which ReviewDrafts to update
     */
    where?: ReviewDraftWhereInput
    /**
     * Limit how many ReviewDrafts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewDraft upsert
   */
  export type ReviewDraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewDraft to update in case it exists.
     */
    where: ReviewDraftWhereUniqueInput
    /**
     * In case the ReviewDraft found by the `where` argument doesn't exist, create a new ReviewDraft with this data.
     */
    create: XOR<ReviewDraftCreateInput, ReviewDraftUncheckedCreateInput>
    /**
     * In case the ReviewDraft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewDraftUpdateInput, ReviewDraftUncheckedUpdateInput>
  }

  /**
   * ReviewDraft delete
   */
  export type ReviewDraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftInclude<ExtArgs> | null
    /**
     * Filter which ReviewDraft to delete.
     */
    where: ReviewDraftWhereUniqueInput
  }

  /**
   * ReviewDraft deleteMany
   */
  export type ReviewDraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewDrafts to delete
     */
    where?: ReviewDraftWhereInput
    /**
     * Limit how many ReviewDrafts to delete.
     */
    limit?: number
  }

  /**
   * ReviewDraft without action
   */
  export type ReviewDraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewDraft
     */
    select?: ReviewDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewDraft
     */
    omit?: ReviewDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewDraftInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    address: 'address',
    timezone: 'timezone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    tableNumber: 'tableNumber',
    qrToken: 'qrToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const ReviewSessionScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    locationId: 'locationId',
    tableId: 'tableId',
    status: 'status',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewSessionScalarFieldEnum = (typeof ReviewSessionScalarFieldEnum)[keyof typeof ReviewSessionScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const KeywordScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name'
  };

  export type KeywordScalarFieldEnum = (typeof KeywordScalarFieldEnum)[keyof typeof KeywordScalarFieldEnum]


  export const FeedbackKeywordScalarFieldEnum: {
    feedbackId: 'feedbackId',
    keywordId: 'keywordId',
    sentiment: 'sentiment'
  };

  export type FeedbackKeywordScalarFieldEnum = (typeof FeedbackKeywordScalarFieldEnum)[keyof typeof FeedbackKeywordScalarFieldEnum]


  export const ReviewDraftScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    rawText: 'rawText',
    text: 'text',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewDraftScalarFieldEnum = (typeof ReviewDraftScalarFieldEnum)[keyof typeof ReviewDraftScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TenantStatus'
   */
  export type EnumTenantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantStatus'>
    


  /**
   * Reference to a field of type 'TenantStatus[]'
   */
  export type ListEnumTenantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ReviewSessionStatus'
   */
  export type EnumReviewSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewSessionStatus'>
    


  /**
   * Reference to a field of type 'ReviewSessionStatus[]'
   */
  export type ListEnumReviewSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewSessionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Sentiment'
   */
  export type EnumSentimentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sentiment'>
    


  /**
   * Reference to a field of type 'Sentiment[]'
   */
  export type ListEnumSentimentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sentiment[]'>
    


  /**
   * Reference to a field of type 'ReviewDraftStatus'
   */
  export type EnumReviewDraftStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewDraftStatus'>
    


  /**
   * Reference to a field of type 'ReviewDraftStatus[]'
   */
  export type ListEnumReviewDraftStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewDraftStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    slug?: StringFilter<"Tenant"> | string
    status?: EnumTenantStatusFilter<"Tenant"> | $Enums.TenantStatus
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    locations?: LocationListRelationFilter
    keywords?: KeywordListRelationFilter
    reviewSessions?: ReviewSessionListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locations?: LocationOrderByRelationAggregateInput
    keywords?: KeywordOrderByRelationAggregateInput
    reviewSessions?: ReviewSessionOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    status?: EnumTenantStatusFilter<"Tenant"> | $Enums.TenantStatus
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    locations?: LocationListRelationFilter
    keywords?: KeywordListRelationFilter
    reviewSessions?: ReviewSessionListRelationFilter
  }, "id" | "slug">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    slug?: StringWithAggregatesFilter<"Tenant"> | string
    status?: EnumTenantStatusWithAggregatesFilter<"Tenant"> | $Enums.TenantStatus
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    tenantId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    timezone?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    tables?: TableListRelationFilter
    reviewSessions?: ReviewSessionListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    tables?: TableOrderByRelationAggregateInput
    reviewSessions?: ReviewSessionOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    tenantId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    timezone?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    tables?: TableListRelationFilter
    reviewSessions?: ReviewSessionListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    tenantId?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    address?: StringWithAggregatesFilter<"Location"> | string
    timezone?: StringWithAggregatesFilter<"Location"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: StringFilter<"Table"> | string
    locationId?: StringFilter<"Table"> | string
    tableNumber?: StringFilter<"Table"> | string
    qrToken?: StringFilter<"Table"> | string
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    reviewSessions?: ReviewSessionListRelationFilter
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    tableNumber?: SortOrder
    qrToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    reviewSessions?: ReviewSessionOrderByRelationAggregateInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qrToken?: string
    locationId_tableNumber?: TableLocationIdTableNumberCompoundUniqueInput
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    locationId?: StringFilter<"Table"> | string
    tableNumber?: StringFilter<"Table"> | string
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    reviewSessions?: ReviewSessionListRelationFilter
  }, "id" | "qrToken" | "locationId_tableNumber">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    tableNumber?: SortOrder
    qrToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TableCountOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Table"> | string
    locationId?: StringWithAggregatesFilter<"Table"> | string
    tableNumber?: StringWithAggregatesFilter<"Table"> | string
    qrToken?: StringWithAggregatesFilter<"Table"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
  }

  export type ReviewSessionWhereInput = {
    AND?: ReviewSessionWhereInput | ReviewSessionWhereInput[]
    OR?: ReviewSessionWhereInput[]
    NOT?: ReviewSessionWhereInput | ReviewSessionWhereInput[]
    id?: StringFilter<"ReviewSession"> | string
    tenantId?: StringFilter<"ReviewSession"> | string
    locationId?: StringFilter<"ReviewSession"> | string
    tableId?: StringFilter<"ReviewSession"> | string
    status?: EnumReviewSessionStatusFilter<"ReviewSession"> | $Enums.ReviewSessionStatus
    rating?: IntNullableFilter<"ReviewSession"> | number | null
    createdAt?: DateTimeFilter<"ReviewSession"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewSession"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    feedback?: XOR<FeedbackNullableScalarRelationFilter, FeedbackWhereInput> | null
    reviewDraft?: XOR<ReviewDraftNullableScalarRelationFilter, ReviewDraftWhereInput> | null
  }

  export type ReviewSessionOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    locationId?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    table?: TableOrderByWithRelationInput
    feedback?: FeedbackOrderByWithRelationInput
    reviewDraft?: ReviewDraftOrderByWithRelationInput
  }

  export type ReviewSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewSessionWhereInput | ReviewSessionWhereInput[]
    OR?: ReviewSessionWhereInput[]
    NOT?: ReviewSessionWhereInput | ReviewSessionWhereInput[]
    tenantId?: StringFilter<"ReviewSession"> | string
    locationId?: StringFilter<"ReviewSession"> | string
    tableId?: StringFilter<"ReviewSession"> | string
    status?: EnumReviewSessionStatusFilter<"ReviewSession"> | $Enums.ReviewSessionStatus
    rating?: IntNullableFilter<"ReviewSession"> | number | null
    createdAt?: DateTimeFilter<"ReviewSession"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewSession"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    feedback?: XOR<FeedbackNullableScalarRelationFilter, FeedbackWhereInput> | null
    reviewDraft?: XOR<ReviewDraftNullableScalarRelationFilter, ReviewDraftWhereInput> | null
  }, "id">

  export type ReviewSessionOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    locationId?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewSessionCountOrderByAggregateInput
    _avg?: ReviewSessionAvgOrderByAggregateInput
    _max?: ReviewSessionMaxOrderByAggregateInput
    _min?: ReviewSessionMinOrderByAggregateInput
    _sum?: ReviewSessionSumOrderByAggregateInput
  }

  export type ReviewSessionScalarWhereWithAggregatesInput = {
    AND?: ReviewSessionScalarWhereWithAggregatesInput | ReviewSessionScalarWhereWithAggregatesInput[]
    OR?: ReviewSessionScalarWhereWithAggregatesInput[]
    NOT?: ReviewSessionScalarWhereWithAggregatesInput | ReviewSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewSession"> | string
    tenantId?: StringWithAggregatesFilter<"ReviewSession"> | string
    locationId?: StringWithAggregatesFilter<"ReviewSession"> | string
    tableId?: StringWithAggregatesFilter<"ReviewSession"> | string
    status?: EnumReviewSessionStatusWithAggregatesFilter<"ReviewSession"> | $Enums.ReviewSessionStatus
    rating?: IntNullableWithAggregatesFilter<"ReviewSession"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ReviewSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReviewSession"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    sessionId?: StringFilter<"Feedback"> | string
    comment?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeFilter<"Feedback"> | Date | string
    session?: XOR<ReviewSessionScalarRelationFilter, ReviewSessionWhereInput>
    keywords?: FeedbackKeywordListRelationFilter
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: ReviewSessionOrderByWithRelationInput
    keywords?: FeedbackKeywordOrderByRelationAggregateInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    comment?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeFilter<"Feedback"> | Date | string
    session?: XOR<ReviewSessionScalarRelationFilter, ReviewSessionWhereInput>
    keywords?: FeedbackKeywordListRelationFilter
  }, "id" | "sessionId">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    sessionId?: StringWithAggregatesFilter<"Feedback"> | string
    comment?: StringWithAggregatesFilter<"Feedback"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type KeywordWhereInput = {
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    id?: StringFilter<"Keyword"> | string
    tenantId?: StringFilter<"Keyword"> | string
    name?: StringFilter<"Keyword"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    feedbackKeywords?: FeedbackKeywordListRelationFilter
  }

  export type KeywordOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    feedbackKeywords?: FeedbackKeywordOrderByRelationAggregateInput
  }

  export type KeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_name?: KeywordTenantIdNameCompoundUniqueInput
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    tenantId?: StringFilter<"Keyword"> | string
    name?: StringFilter<"Keyword"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    feedbackKeywords?: FeedbackKeywordListRelationFilter
  }, "id" | "tenantId_name">

  export type KeywordOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    _count?: KeywordCountOrderByAggregateInput
    _max?: KeywordMaxOrderByAggregateInput
    _min?: KeywordMinOrderByAggregateInput
  }

  export type KeywordScalarWhereWithAggregatesInput = {
    AND?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    OR?: KeywordScalarWhereWithAggregatesInput[]
    NOT?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Keyword"> | string
    tenantId?: StringWithAggregatesFilter<"Keyword"> | string
    name?: StringWithAggregatesFilter<"Keyword"> | string
  }

  export type FeedbackKeywordWhereInput = {
    AND?: FeedbackKeywordWhereInput | FeedbackKeywordWhereInput[]
    OR?: FeedbackKeywordWhereInput[]
    NOT?: FeedbackKeywordWhereInput | FeedbackKeywordWhereInput[]
    feedbackId?: StringFilter<"FeedbackKeyword"> | string
    keywordId?: StringFilter<"FeedbackKeyword"> | string
    sentiment?: EnumSentimentFilter<"FeedbackKeyword"> | $Enums.Sentiment
    feedback?: XOR<FeedbackScalarRelationFilter, FeedbackWhereInput>
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }

  export type FeedbackKeywordOrderByWithRelationInput = {
    feedbackId?: SortOrder
    keywordId?: SortOrder
    sentiment?: SortOrder
    feedback?: FeedbackOrderByWithRelationInput
    keyword?: KeywordOrderByWithRelationInput
  }

  export type FeedbackKeywordWhereUniqueInput = Prisma.AtLeast<{
    feedbackId_keywordId?: FeedbackKeywordFeedbackIdKeywordIdCompoundUniqueInput
    AND?: FeedbackKeywordWhereInput | FeedbackKeywordWhereInput[]
    OR?: FeedbackKeywordWhereInput[]
    NOT?: FeedbackKeywordWhereInput | FeedbackKeywordWhereInput[]
    feedbackId?: StringFilter<"FeedbackKeyword"> | string
    keywordId?: StringFilter<"FeedbackKeyword"> | string
    sentiment?: EnumSentimentFilter<"FeedbackKeyword"> | $Enums.Sentiment
    feedback?: XOR<FeedbackScalarRelationFilter, FeedbackWhereInput>
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }, "feedbackId_keywordId">

  export type FeedbackKeywordOrderByWithAggregationInput = {
    feedbackId?: SortOrder
    keywordId?: SortOrder
    sentiment?: SortOrder
    _count?: FeedbackKeywordCountOrderByAggregateInput
    _max?: FeedbackKeywordMaxOrderByAggregateInput
    _min?: FeedbackKeywordMinOrderByAggregateInput
  }

  export type FeedbackKeywordScalarWhereWithAggregatesInput = {
    AND?: FeedbackKeywordScalarWhereWithAggregatesInput | FeedbackKeywordScalarWhereWithAggregatesInput[]
    OR?: FeedbackKeywordScalarWhereWithAggregatesInput[]
    NOT?: FeedbackKeywordScalarWhereWithAggregatesInput | FeedbackKeywordScalarWhereWithAggregatesInput[]
    feedbackId?: StringWithAggregatesFilter<"FeedbackKeyword"> | string
    keywordId?: StringWithAggregatesFilter<"FeedbackKeyword"> | string
    sentiment?: EnumSentimentWithAggregatesFilter<"FeedbackKeyword"> | $Enums.Sentiment
  }

  export type ReviewDraftWhereInput = {
    AND?: ReviewDraftWhereInput | ReviewDraftWhereInput[]
    OR?: ReviewDraftWhereInput[]
    NOT?: ReviewDraftWhereInput | ReviewDraftWhereInput[]
    id?: StringFilter<"ReviewDraft"> | string
    sessionId?: StringFilter<"ReviewDraft"> | string
    rawText?: StringFilter<"ReviewDraft"> | string
    text?: StringFilter<"ReviewDraft"> | string
    status?: EnumReviewDraftStatusFilter<"ReviewDraft"> | $Enums.ReviewDraftStatus
    createdAt?: DateTimeFilter<"ReviewDraft"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewDraft"> | Date | string
    session?: XOR<ReviewSessionScalarRelationFilter, ReviewSessionWhereInput>
  }

  export type ReviewDraftOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    rawText?: SortOrder
    text?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: ReviewSessionOrderByWithRelationInput
  }

  export type ReviewDraftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: ReviewDraftWhereInput | ReviewDraftWhereInput[]
    OR?: ReviewDraftWhereInput[]
    NOT?: ReviewDraftWhereInput | ReviewDraftWhereInput[]
    rawText?: StringFilter<"ReviewDraft"> | string
    text?: StringFilter<"ReviewDraft"> | string
    status?: EnumReviewDraftStatusFilter<"ReviewDraft"> | $Enums.ReviewDraftStatus
    createdAt?: DateTimeFilter<"ReviewDraft"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewDraft"> | Date | string
    session?: XOR<ReviewSessionScalarRelationFilter, ReviewSessionWhereInput>
  }, "id" | "sessionId">

  export type ReviewDraftOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    rawText?: SortOrder
    text?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewDraftCountOrderByAggregateInput
    _max?: ReviewDraftMaxOrderByAggregateInput
    _min?: ReviewDraftMinOrderByAggregateInput
  }

  export type ReviewDraftScalarWhereWithAggregatesInput = {
    AND?: ReviewDraftScalarWhereWithAggregatesInput | ReviewDraftScalarWhereWithAggregatesInput[]
    OR?: ReviewDraftScalarWhereWithAggregatesInput[]
    NOT?: ReviewDraftScalarWhereWithAggregatesInput | ReviewDraftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewDraft"> | string
    sessionId?: StringWithAggregatesFilter<"ReviewDraft"> | string
    rawText?: StringWithAggregatesFilter<"ReviewDraft"> | string
    text?: StringWithAggregatesFilter<"ReviewDraft"> | string
    status?: EnumReviewDraftStatusWithAggregatesFilter<"ReviewDraft"> | $Enums.ReviewDraftStatus
    createdAt?: DateTimeWithAggregatesFilter<"ReviewDraft"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReviewDraft"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationCreateNestedManyWithoutTenantInput
    keywords?: KeywordCreateNestedManyWithoutTenantInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutTenantInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutTenantInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUpdateManyWithoutTenantNestedInput
    keywords?: KeywordUpdateManyWithoutTenantNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutTenantNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutTenantNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    address: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLocationsInput
    tables?: TableCreateNestedManyWithoutLocationInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    address: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tables?: TableUncheckedCreateNestedManyWithoutLocationInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLocationsNestedInput
    tables?: TableUpdateManyWithoutLocationNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUncheckedUpdateManyWithoutLocationNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    address: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableCreateInput = {
    id?: string
    tableNumber: string
    qrToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutTablesInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    id?: string
    locationId: string
    tableNumber: string
    qrToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutTablesNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    id?: string
    locationId: string
    tableNumber: string
    qrToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewSessionCreateInput = {
    id?: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutReviewSessionsInput
    location: LocationCreateNestedOneWithoutReviewSessionsInput
    table: TableCreateNestedOneWithoutReviewSessionsInput
    feedback?: FeedbackCreateNestedOneWithoutSessionInput
    reviewDraft?: ReviewDraftCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionUncheckedCreateInput = {
    id?: string
    tenantId: string
    locationId: string
    tableId: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedOneWithoutSessionInput
    reviewDraft?: ReviewDraftUncheckedCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutReviewSessionsNestedInput
    location?: LocationUpdateOneRequiredWithoutReviewSessionsNestedInput
    table?: TableUpdateOneRequiredWithoutReviewSessionsNestedInput
    feedback?: FeedbackUpdateOneWithoutSessionNestedInput
    reviewDraft?: ReviewDraftUpdateOneWithoutSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateOneWithoutSessionNestedInput
    reviewDraft?: ReviewDraftUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type ReviewSessionCreateManyInput = {
    id?: string
    tenantId: string
    locationId: string
    tableId: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    session: ReviewSessionCreateNestedOneWithoutFeedbackInput
    keywords?: FeedbackKeywordCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    sessionId: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    keywords?: FeedbackKeywordUncheckedCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ReviewSessionUpdateOneRequiredWithoutFeedbackNestedInput
    keywords?: FeedbackKeywordUpdateManyWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: FeedbackKeywordUncheckedUpdateManyWithoutFeedbackNestedInput
  }

  export type FeedbackCreateManyInput = {
    id?: string
    sessionId: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordCreateInput = {
    id?: string
    name: string
    tenant: TenantCreateNestedOneWithoutKeywordsInput
    feedbackKeywords?: FeedbackKeywordCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    feedbackKeywords?: FeedbackKeywordUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutKeywordsNestedInput
    feedbackKeywords?: FeedbackKeywordUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    feedbackKeywords?: FeedbackKeywordUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordCreateManyInput = {
    id?: string
    tenantId: string
    name: string
  }

  export type KeywordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KeywordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackKeywordCreateInput = {
    sentiment: $Enums.Sentiment
    feedback: FeedbackCreateNestedOneWithoutKeywordsInput
    keyword: KeywordCreateNestedOneWithoutFeedbackKeywordsInput
  }

  export type FeedbackKeywordUncheckedCreateInput = {
    feedbackId: string
    keywordId: string
    sentiment: $Enums.Sentiment
  }

  export type FeedbackKeywordUpdateInput = {
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    feedback?: FeedbackUpdateOneRequiredWithoutKeywordsNestedInput
    keyword?: KeywordUpdateOneRequiredWithoutFeedbackKeywordsNestedInput
  }

  export type FeedbackKeywordUncheckedUpdateInput = {
    feedbackId?: StringFieldUpdateOperationsInput | string
    keywordId?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
  }

  export type FeedbackKeywordCreateManyInput = {
    feedbackId: string
    keywordId: string
    sentiment: $Enums.Sentiment
  }

  export type FeedbackKeywordUpdateManyMutationInput = {
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
  }

  export type FeedbackKeywordUncheckedUpdateManyInput = {
    feedbackId?: StringFieldUpdateOperationsInput | string
    keywordId?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
  }

  export type ReviewDraftCreateInput = {
    id?: string
    rawText: string
    text: string
    status?: $Enums.ReviewDraftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    session: ReviewSessionCreateNestedOneWithoutReviewDraftInput
  }

  export type ReviewDraftUncheckedCreateInput = {
    id?: string
    sessionId: string
    rawText: string
    text: string
    status?: $Enums.ReviewDraftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewDraftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewDraftStatusFieldUpdateOperationsInput | $Enums.ReviewDraftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ReviewSessionUpdateOneRequiredWithoutReviewDraftNestedInput
  }

  export type ReviewDraftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewDraftStatusFieldUpdateOperationsInput | $Enums.ReviewDraftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewDraftCreateManyInput = {
    id?: string
    sessionId: string
    rawText: string
    text: string
    status?: $Enums.ReviewDraftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewDraftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewDraftStatusFieldUpdateOperationsInput | $Enums.ReviewDraftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewDraftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewDraftStatusFieldUpdateOperationsInput | $Enums.ReviewDraftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTenantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantStatusFilter<$PrismaModel> | $Enums.TenantStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type KeywordListRelationFilter = {
    every?: KeywordWhereInput
    some?: KeywordWhereInput
    none?: KeywordWhereInput
  }

  export type ReviewSessionListRelationFilter = {
    every?: ReviewSessionWhereInput
    some?: ReviewSessionWhereInput
    none?: ReviewSessionWhereInput
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeywordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumTenantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantStatusWithAggregatesFilter<$PrismaModel> | $Enums.TenantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantStatusFilter<$PrismaModel>
    _max?: NestedEnumTenantStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type TableListRelationFilter = {
    every?: TableWhereInput
    some?: TableWhereInput
    none?: TableWhereInput
  }

  export type TableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type TableLocationIdTableNumberCompoundUniqueInput = {
    locationId: string
    tableNumber: string
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    tableNumber?: SortOrder
    qrToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    tableNumber?: SortOrder
    qrToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    tableNumber?: SortOrder
    qrToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReviewSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewSessionStatus | EnumReviewSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewSessionStatus[] | ListEnumReviewSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewSessionStatus[] | ListEnumReviewSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewSessionStatusFilter<$PrismaModel> | $Enums.ReviewSessionStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TableScalarRelationFilter = {
    is?: TableWhereInput
    isNot?: TableWhereInput
  }

  export type FeedbackNullableScalarRelationFilter = {
    is?: FeedbackWhereInput | null
    isNot?: FeedbackWhereInput | null
  }

  export type ReviewDraftNullableScalarRelationFilter = {
    is?: ReviewDraftWhereInput | null
    isNot?: ReviewDraftWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewSessionCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    locationId?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSessionAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    locationId?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSessionMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    locationId?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSessionSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type EnumReviewSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewSessionStatus | EnumReviewSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewSessionStatus[] | ListEnumReviewSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewSessionStatus[] | ListEnumReviewSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewSessionStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ReviewSessionScalarRelationFilter = {
    is?: ReviewSessionWhereInput
    isNot?: ReviewSessionWhereInput
  }

  export type FeedbackKeywordListRelationFilter = {
    every?: FeedbackKeywordWhereInput
    some?: FeedbackKeywordWhereInput
    none?: FeedbackKeywordWhereInput
  }

  export type FeedbackKeywordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeywordTenantIdNameCompoundUniqueInput = {
    tenantId: string
    name: string
  }

  export type KeywordCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
  }

  export type KeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
  }

  export type KeywordMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
  }

  export type EnumSentimentFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel>
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentFilter<$PrismaModel> | $Enums.Sentiment
  }

  export type FeedbackScalarRelationFilter = {
    is?: FeedbackWhereInput
    isNot?: FeedbackWhereInput
  }

  export type KeywordScalarRelationFilter = {
    is?: KeywordWhereInput
    isNot?: KeywordWhereInput
  }

  export type FeedbackKeywordFeedbackIdKeywordIdCompoundUniqueInput = {
    feedbackId: string
    keywordId: string
  }

  export type FeedbackKeywordCountOrderByAggregateInput = {
    feedbackId?: SortOrder
    keywordId?: SortOrder
    sentiment?: SortOrder
  }

  export type FeedbackKeywordMaxOrderByAggregateInput = {
    feedbackId?: SortOrder
    keywordId?: SortOrder
    sentiment?: SortOrder
  }

  export type FeedbackKeywordMinOrderByAggregateInput = {
    feedbackId?: SortOrder
    keywordId?: SortOrder
    sentiment?: SortOrder
  }

  export type EnumSentimentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel>
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentWithAggregatesFilter<$PrismaModel> | $Enums.Sentiment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSentimentFilter<$PrismaModel>
    _max?: NestedEnumSentimentFilter<$PrismaModel>
  }

  export type EnumReviewDraftStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewDraftStatus | EnumReviewDraftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewDraftStatus[] | ListEnumReviewDraftStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewDraftStatus[] | ListEnumReviewDraftStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewDraftStatusFilter<$PrismaModel> | $Enums.ReviewDraftStatus
  }

  export type ReviewDraftCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    rawText?: SortOrder
    text?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewDraftMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    rawText?: SortOrder
    text?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewDraftMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    rawText?: SortOrder
    text?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReviewDraftStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewDraftStatus | EnumReviewDraftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewDraftStatus[] | ListEnumReviewDraftStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewDraftStatus[] | ListEnumReviewDraftStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewDraftStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewDraftStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewDraftStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewDraftStatusFilter<$PrismaModel>
  }

  export type LocationCreateNestedManyWithoutTenantInput = {
    create?: XOR<LocationCreateWithoutTenantInput, LocationUncheckedCreateWithoutTenantInput> | LocationCreateWithoutTenantInput[] | LocationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutTenantInput | LocationCreateOrConnectWithoutTenantInput[]
    createMany?: LocationCreateManyTenantInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type KeywordCreateNestedManyWithoutTenantInput = {
    create?: XOR<KeywordCreateWithoutTenantInput, KeywordUncheckedCreateWithoutTenantInput> | KeywordCreateWithoutTenantInput[] | KeywordUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutTenantInput | KeywordCreateOrConnectWithoutTenantInput[]
    createMany?: KeywordCreateManyTenantInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type ReviewSessionCreateNestedManyWithoutTenantInput = {
    create?: XOR<ReviewSessionCreateWithoutTenantInput, ReviewSessionUncheckedCreateWithoutTenantInput> | ReviewSessionCreateWithoutTenantInput[] | ReviewSessionUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutTenantInput | ReviewSessionCreateOrConnectWithoutTenantInput[]
    createMany?: ReviewSessionCreateManyTenantInputEnvelope
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<LocationCreateWithoutTenantInput, LocationUncheckedCreateWithoutTenantInput> | LocationCreateWithoutTenantInput[] | LocationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutTenantInput | LocationCreateOrConnectWithoutTenantInput[]
    createMany?: LocationCreateManyTenantInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type KeywordUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<KeywordCreateWithoutTenantInput, KeywordUncheckedCreateWithoutTenantInput> | KeywordCreateWithoutTenantInput[] | KeywordUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutTenantInput | KeywordCreateOrConnectWithoutTenantInput[]
    createMany?: KeywordCreateManyTenantInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type ReviewSessionUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ReviewSessionCreateWithoutTenantInput, ReviewSessionUncheckedCreateWithoutTenantInput> | ReviewSessionCreateWithoutTenantInput[] | ReviewSessionUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutTenantInput | ReviewSessionCreateOrConnectWithoutTenantInput[]
    createMany?: ReviewSessionCreateManyTenantInputEnvelope
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTenantStatusFieldUpdateOperationsInput = {
    set?: $Enums.TenantStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LocationUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LocationCreateWithoutTenantInput, LocationUncheckedCreateWithoutTenantInput> | LocationCreateWithoutTenantInput[] | LocationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutTenantInput | LocationCreateOrConnectWithoutTenantInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutTenantInput | LocationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LocationCreateManyTenantInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutTenantInput | LocationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutTenantInput | LocationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type KeywordUpdateManyWithoutTenantNestedInput = {
    create?: XOR<KeywordCreateWithoutTenantInput, KeywordUncheckedCreateWithoutTenantInput> | KeywordCreateWithoutTenantInput[] | KeywordUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutTenantInput | KeywordCreateOrConnectWithoutTenantInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutTenantInput | KeywordUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: KeywordCreateManyTenantInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutTenantInput | KeywordUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutTenantInput | KeywordUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type ReviewSessionUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutTenantInput, ReviewSessionUncheckedCreateWithoutTenantInput> | ReviewSessionCreateWithoutTenantInput[] | ReviewSessionUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutTenantInput | ReviewSessionCreateOrConnectWithoutTenantInput[]
    upsert?: ReviewSessionUpsertWithWhereUniqueWithoutTenantInput | ReviewSessionUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ReviewSessionCreateManyTenantInputEnvelope
    set?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    disconnect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    delete?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    update?: ReviewSessionUpdateWithWhereUniqueWithoutTenantInput | ReviewSessionUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ReviewSessionUpdateManyWithWhereWithoutTenantInput | ReviewSessionUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LocationCreateWithoutTenantInput, LocationUncheckedCreateWithoutTenantInput> | LocationCreateWithoutTenantInput[] | LocationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutTenantInput | LocationCreateOrConnectWithoutTenantInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutTenantInput | LocationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LocationCreateManyTenantInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutTenantInput | LocationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutTenantInput | LocationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type KeywordUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<KeywordCreateWithoutTenantInput, KeywordUncheckedCreateWithoutTenantInput> | KeywordCreateWithoutTenantInput[] | KeywordUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutTenantInput | KeywordCreateOrConnectWithoutTenantInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutTenantInput | KeywordUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: KeywordCreateManyTenantInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutTenantInput | KeywordUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutTenantInput | KeywordUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type ReviewSessionUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutTenantInput, ReviewSessionUncheckedCreateWithoutTenantInput> | ReviewSessionCreateWithoutTenantInput[] | ReviewSessionUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutTenantInput | ReviewSessionCreateOrConnectWithoutTenantInput[]
    upsert?: ReviewSessionUpsertWithWhereUniqueWithoutTenantInput | ReviewSessionUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ReviewSessionCreateManyTenantInputEnvelope
    set?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    disconnect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    delete?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    update?: ReviewSessionUpdateWithWhereUniqueWithoutTenantInput | ReviewSessionUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ReviewSessionUpdateManyWithWhereWithoutTenantInput | ReviewSessionUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutLocationsInput = {
    create?: XOR<TenantCreateWithoutLocationsInput, TenantUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLocationsInput
    connect?: TenantWhereUniqueInput
  }

  export type TableCreateNestedManyWithoutLocationInput = {
    create?: XOR<TableCreateWithoutLocationInput, TableUncheckedCreateWithoutLocationInput> | TableCreateWithoutLocationInput[] | TableUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: TableCreateOrConnectWithoutLocationInput | TableCreateOrConnectWithoutLocationInput[]
    createMany?: TableCreateManyLocationInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type ReviewSessionCreateNestedManyWithoutLocationInput = {
    create?: XOR<ReviewSessionCreateWithoutLocationInput, ReviewSessionUncheckedCreateWithoutLocationInput> | ReviewSessionCreateWithoutLocationInput[] | ReviewSessionUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutLocationInput | ReviewSessionCreateOrConnectWithoutLocationInput[]
    createMany?: ReviewSessionCreateManyLocationInputEnvelope
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<TableCreateWithoutLocationInput, TableUncheckedCreateWithoutLocationInput> | TableCreateWithoutLocationInput[] | TableUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: TableCreateOrConnectWithoutLocationInput | TableCreateOrConnectWithoutLocationInput[]
    createMany?: TableCreateManyLocationInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type ReviewSessionUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<ReviewSessionCreateWithoutLocationInput, ReviewSessionUncheckedCreateWithoutLocationInput> | ReviewSessionCreateWithoutLocationInput[] | ReviewSessionUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutLocationInput | ReviewSessionCreateOrConnectWithoutLocationInput[]
    createMany?: ReviewSessionCreateManyLocationInputEnvelope
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<TenantCreateWithoutLocationsInput, TenantUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLocationsInput
    upsert?: TenantUpsertWithoutLocationsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutLocationsInput, TenantUpdateWithoutLocationsInput>, TenantUncheckedUpdateWithoutLocationsInput>
  }

  export type TableUpdateManyWithoutLocationNestedInput = {
    create?: XOR<TableCreateWithoutLocationInput, TableUncheckedCreateWithoutLocationInput> | TableCreateWithoutLocationInput[] | TableUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: TableCreateOrConnectWithoutLocationInput | TableCreateOrConnectWithoutLocationInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutLocationInput | TableUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: TableCreateManyLocationInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutLocationInput | TableUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: TableUpdateManyWithWhereWithoutLocationInput | TableUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type ReviewSessionUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutLocationInput, ReviewSessionUncheckedCreateWithoutLocationInput> | ReviewSessionCreateWithoutLocationInput[] | ReviewSessionUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutLocationInput | ReviewSessionCreateOrConnectWithoutLocationInput[]
    upsert?: ReviewSessionUpsertWithWhereUniqueWithoutLocationInput | ReviewSessionUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ReviewSessionCreateManyLocationInputEnvelope
    set?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    disconnect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    delete?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    update?: ReviewSessionUpdateWithWhereUniqueWithoutLocationInput | ReviewSessionUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ReviewSessionUpdateManyWithWhereWithoutLocationInput | ReviewSessionUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
  }

  export type TableUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<TableCreateWithoutLocationInput, TableUncheckedCreateWithoutLocationInput> | TableCreateWithoutLocationInput[] | TableUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: TableCreateOrConnectWithoutLocationInput | TableCreateOrConnectWithoutLocationInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutLocationInput | TableUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: TableCreateManyLocationInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutLocationInput | TableUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: TableUpdateManyWithWhereWithoutLocationInput | TableUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type ReviewSessionUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutLocationInput, ReviewSessionUncheckedCreateWithoutLocationInput> | ReviewSessionCreateWithoutLocationInput[] | ReviewSessionUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutLocationInput | ReviewSessionCreateOrConnectWithoutLocationInput[]
    upsert?: ReviewSessionUpsertWithWhereUniqueWithoutLocationInput | ReviewSessionUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ReviewSessionCreateManyLocationInputEnvelope
    set?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    disconnect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    delete?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    update?: ReviewSessionUpdateWithWhereUniqueWithoutLocationInput | ReviewSessionUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ReviewSessionUpdateManyWithWhereWithoutLocationInput | ReviewSessionUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutTablesInput = {
    create?: XOR<LocationCreateWithoutTablesInput, LocationUncheckedCreateWithoutTablesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutTablesInput
    connect?: LocationWhereUniqueInput
  }

  export type ReviewSessionCreateNestedManyWithoutTableInput = {
    create?: XOR<ReviewSessionCreateWithoutTableInput, ReviewSessionUncheckedCreateWithoutTableInput> | ReviewSessionCreateWithoutTableInput[] | ReviewSessionUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutTableInput | ReviewSessionCreateOrConnectWithoutTableInput[]
    createMany?: ReviewSessionCreateManyTableInputEnvelope
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
  }

  export type ReviewSessionUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<ReviewSessionCreateWithoutTableInput, ReviewSessionUncheckedCreateWithoutTableInput> | ReviewSessionCreateWithoutTableInput[] | ReviewSessionUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutTableInput | ReviewSessionCreateOrConnectWithoutTableInput[]
    createMany?: ReviewSessionCreateManyTableInputEnvelope
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
  }

  export type LocationUpdateOneRequiredWithoutTablesNestedInput = {
    create?: XOR<LocationCreateWithoutTablesInput, LocationUncheckedCreateWithoutTablesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutTablesInput
    upsert?: LocationUpsertWithoutTablesInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutTablesInput, LocationUpdateWithoutTablesInput>, LocationUncheckedUpdateWithoutTablesInput>
  }

  export type ReviewSessionUpdateManyWithoutTableNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutTableInput, ReviewSessionUncheckedCreateWithoutTableInput> | ReviewSessionCreateWithoutTableInput[] | ReviewSessionUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutTableInput | ReviewSessionCreateOrConnectWithoutTableInput[]
    upsert?: ReviewSessionUpsertWithWhereUniqueWithoutTableInput | ReviewSessionUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ReviewSessionCreateManyTableInputEnvelope
    set?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    disconnect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    delete?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    update?: ReviewSessionUpdateWithWhereUniqueWithoutTableInput | ReviewSessionUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ReviewSessionUpdateManyWithWhereWithoutTableInput | ReviewSessionUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
  }

  export type ReviewSessionUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutTableInput, ReviewSessionUncheckedCreateWithoutTableInput> | ReviewSessionCreateWithoutTableInput[] | ReviewSessionUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutTableInput | ReviewSessionCreateOrConnectWithoutTableInput[]
    upsert?: ReviewSessionUpsertWithWhereUniqueWithoutTableInput | ReviewSessionUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ReviewSessionCreateManyTableInputEnvelope
    set?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    disconnect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    delete?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    update?: ReviewSessionUpdateWithWhereUniqueWithoutTableInput | ReviewSessionUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ReviewSessionUpdateManyWithWhereWithoutTableInput | ReviewSessionUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutReviewSessionsInput = {
    create?: XOR<TenantCreateWithoutReviewSessionsInput, TenantUncheckedCreateWithoutReviewSessionsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutReviewSessionsInput
    connect?: TenantWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutReviewSessionsInput = {
    create?: XOR<LocationCreateWithoutReviewSessionsInput, LocationUncheckedCreateWithoutReviewSessionsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutReviewSessionsInput
    connect?: LocationWhereUniqueInput
  }

  export type TableCreateNestedOneWithoutReviewSessionsInput = {
    create?: XOR<TableCreateWithoutReviewSessionsInput, TableUncheckedCreateWithoutReviewSessionsInput>
    connectOrCreate?: TableCreateOrConnectWithoutReviewSessionsInput
    connect?: TableWhereUniqueInput
  }

  export type FeedbackCreateNestedOneWithoutSessionInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput>
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput
    connect?: FeedbackWhereUniqueInput
  }

  export type ReviewDraftCreateNestedOneWithoutSessionInput = {
    create?: XOR<ReviewDraftCreateWithoutSessionInput, ReviewDraftUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReviewDraftCreateOrConnectWithoutSessionInput
    connect?: ReviewDraftWhereUniqueInput
  }

  export type FeedbackUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput>
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput
    connect?: FeedbackWhereUniqueInput
  }

  export type ReviewDraftUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<ReviewDraftCreateWithoutSessionInput, ReviewDraftUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReviewDraftCreateOrConnectWithoutSessionInput
    connect?: ReviewDraftWhereUniqueInput
  }

  export type EnumReviewSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewSessionStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUpdateOneRequiredWithoutReviewSessionsNestedInput = {
    create?: XOR<TenantCreateWithoutReviewSessionsInput, TenantUncheckedCreateWithoutReviewSessionsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutReviewSessionsInput
    upsert?: TenantUpsertWithoutReviewSessionsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutReviewSessionsInput, TenantUpdateWithoutReviewSessionsInput>, TenantUncheckedUpdateWithoutReviewSessionsInput>
  }

  export type LocationUpdateOneRequiredWithoutReviewSessionsNestedInput = {
    create?: XOR<LocationCreateWithoutReviewSessionsInput, LocationUncheckedCreateWithoutReviewSessionsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutReviewSessionsInput
    upsert?: LocationUpsertWithoutReviewSessionsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutReviewSessionsInput, LocationUpdateWithoutReviewSessionsInput>, LocationUncheckedUpdateWithoutReviewSessionsInput>
  }

  export type TableUpdateOneRequiredWithoutReviewSessionsNestedInput = {
    create?: XOR<TableCreateWithoutReviewSessionsInput, TableUncheckedCreateWithoutReviewSessionsInput>
    connectOrCreate?: TableCreateOrConnectWithoutReviewSessionsInput
    upsert?: TableUpsertWithoutReviewSessionsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutReviewSessionsInput, TableUpdateWithoutReviewSessionsInput>, TableUncheckedUpdateWithoutReviewSessionsInput>
  }

  export type FeedbackUpdateOneWithoutSessionNestedInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput>
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput
    upsert?: FeedbackUpsertWithoutSessionInput
    disconnect?: FeedbackWhereInput | boolean
    delete?: FeedbackWhereInput | boolean
    connect?: FeedbackWhereUniqueInput
    update?: XOR<XOR<FeedbackUpdateToOneWithWhereWithoutSessionInput, FeedbackUpdateWithoutSessionInput>, FeedbackUncheckedUpdateWithoutSessionInput>
  }

  export type ReviewDraftUpdateOneWithoutSessionNestedInput = {
    create?: XOR<ReviewDraftCreateWithoutSessionInput, ReviewDraftUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReviewDraftCreateOrConnectWithoutSessionInput
    upsert?: ReviewDraftUpsertWithoutSessionInput
    disconnect?: ReviewDraftWhereInput | boolean
    delete?: ReviewDraftWhereInput | boolean
    connect?: ReviewDraftWhereUniqueInput
    update?: XOR<XOR<ReviewDraftUpdateToOneWithWhereWithoutSessionInput, ReviewDraftUpdateWithoutSessionInput>, ReviewDraftUncheckedUpdateWithoutSessionInput>
  }

  export type FeedbackUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput>
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput
    upsert?: FeedbackUpsertWithoutSessionInput
    disconnect?: FeedbackWhereInput | boolean
    delete?: FeedbackWhereInput | boolean
    connect?: FeedbackWhereUniqueInput
    update?: XOR<XOR<FeedbackUpdateToOneWithWhereWithoutSessionInput, FeedbackUpdateWithoutSessionInput>, FeedbackUncheckedUpdateWithoutSessionInput>
  }

  export type ReviewDraftUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<ReviewDraftCreateWithoutSessionInput, ReviewDraftUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReviewDraftCreateOrConnectWithoutSessionInput
    upsert?: ReviewDraftUpsertWithoutSessionInput
    disconnect?: ReviewDraftWhereInput | boolean
    delete?: ReviewDraftWhereInput | boolean
    connect?: ReviewDraftWhereUniqueInput
    update?: XOR<XOR<ReviewDraftUpdateToOneWithWhereWithoutSessionInput, ReviewDraftUpdateWithoutSessionInput>, ReviewDraftUncheckedUpdateWithoutSessionInput>
  }

  export type ReviewSessionCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<ReviewSessionCreateWithoutFeedbackInput, ReviewSessionUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutFeedbackInput
    connect?: ReviewSessionWhereUniqueInput
  }

  export type FeedbackKeywordCreateNestedManyWithoutFeedbackInput = {
    create?: XOR<FeedbackKeywordCreateWithoutFeedbackInput, FeedbackKeywordUncheckedCreateWithoutFeedbackInput> | FeedbackKeywordCreateWithoutFeedbackInput[] | FeedbackKeywordUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: FeedbackKeywordCreateOrConnectWithoutFeedbackInput | FeedbackKeywordCreateOrConnectWithoutFeedbackInput[]
    createMany?: FeedbackKeywordCreateManyFeedbackInputEnvelope
    connect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
  }

  export type FeedbackKeywordUncheckedCreateNestedManyWithoutFeedbackInput = {
    create?: XOR<FeedbackKeywordCreateWithoutFeedbackInput, FeedbackKeywordUncheckedCreateWithoutFeedbackInput> | FeedbackKeywordCreateWithoutFeedbackInput[] | FeedbackKeywordUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: FeedbackKeywordCreateOrConnectWithoutFeedbackInput | FeedbackKeywordCreateOrConnectWithoutFeedbackInput[]
    createMany?: FeedbackKeywordCreateManyFeedbackInputEnvelope
    connect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
  }

  export type ReviewSessionUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutFeedbackInput, ReviewSessionUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutFeedbackInput
    upsert?: ReviewSessionUpsertWithoutFeedbackInput
    connect?: ReviewSessionWhereUniqueInput
    update?: XOR<XOR<ReviewSessionUpdateToOneWithWhereWithoutFeedbackInput, ReviewSessionUpdateWithoutFeedbackInput>, ReviewSessionUncheckedUpdateWithoutFeedbackInput>
  }

  export type FeedbackKeywordUpdateManyWithoutFeedbackNestedInput = {
    create?: XOR<FeedbackKeywordCreateWithoutFeedbackInput, FeedbackKeywordUncheckedCreateWithoutFeedbackInput> | FeedbackKeywordCreateWithoutFeedbackInput[] | FeedbackKeywordUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: FeedbackKeywordCreateOrConnectWithoutFeedbackInput | FeedbackKeywordCreateOrConnectWithoutFeedbackInput[]
    upsert?: FeedbackKeywordUpsertWithWhereUniqueWithoutFeedbackInput | FeedbackKeywordUpsertWithWhereUniqueWithoutFeedbackInput[]
    createMany?: FeedbackKeywordCreateManyFeedbackInputEnvelope
    set?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    disconnect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    delete?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    connect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    update?: FeedbackKeywordUpdateWithWhereUniqueWithoutFeedbackInput | FeedbackKeywordUpdateWithWhereUniqueWithoutFeedbackInput[]
    updateMany?: FeedbackKeywordUpdateManyWithWhereWithoutFeedbackInput | FeedbackKeywordUpdateManyWithWhereWithoutFeedbackInput[]
    deleteMany?: FeedbackKeywordScalarWhereInput | FeedbackKeywordScalarWhereInput[]
  }

  export type FeedbackKeywordUncheckedUpdateManyWithoutFeedbackNestedInput = {
    create?: XOR<FeedbackKeywordCreateWithoutFeedbackInput, FeedbackKeywordUncheckedCreateWithoutFeedbackInput> | FeedbackKeywordCreateWithoutFeedbackInput[] | FeedbackKeywordUncheckedCreateWithoutFeedbackInput[]
    connectOrCreate?: FeedbackKeywordCreateOrConnectWithoutFeedbackInput | FeedbackKeywordCreateOrConnectWithoutFeedbackInput[]
    upsert?: FeedbackKeywordUpsertWithWhereUniqueWithoutFeedbackInput | FeedbackKeywordUpsertWithWhereUniqueWithoutFeedbackInput[]
    createMany?: FeedbackKeywordCreateManyFeedbackInputEnvelope
    set?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    disconnect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    delete?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    connect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    update?: FeedbackKeywordUpdateWithWhereUniqueWithoutFeedbackInput | FeedbackKeywordUpdateWithWhereUniqueWithoutFeedbackInput[]
    updateMany?: FeedbackKeywordUpdateManyWithWhereWithoutFeedbackInput | FeedbackKeywordUpdateManyWithWhereWithoutFeedbackInput[]
    deleteMany?: FeedbackKeywordScalarWhereInput | FeedbackKeywordScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutKeywordsInput = {
    create?: XOR<TenantCreateWithoutKeywordsInput, TenantUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutKeywordsInput
    connect?: TenantWhereUniqueInput
  }

  export type FeedbackKeywordCreateNestedManyWithoutKeywordInput = {
    create?: XOR<FeedbackKeywordCreateWithoutKeywordInput, FeedbackKeywordUncheckedCreateWithoutKeywordInput> | FeedbackKeywordCreateWithoutKeywordInput[] | FeedbackKeywordUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: FeedbackKeywordCreateOrConnectWithoutKeywordInput | FeedbackKeywordCreateOrConnectWithoutKeywordInput[]
    createMany?: FeedbackKeywordCreateManyKeywordInputEnvelope
    connect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
  }

  export type FeedbackKeywordUncheckedCreateNestedManyWithoutKeywordInput = {
    create?: XOR<FeedbackKeywordCreateWithoutKeywordInput, FeedbackKeywordUncheckedCreateWithoutKeywordInput> | FeedbackKeywordCreateWithoutKeywordInput[] | FeedbackKeywordUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: FeedbackKeywordCreateOrConnectWithoutKeywordInput | FeedbackKeywordCreateOrConnectWithoutKeywordInput[]
    createMany?: FeedbackKeywordCreateManyKeywordInputEnvelope
    connect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutKeywordsNestedInput = {
    create?: XOR<TenantCreateWithoutKeywordsInput, TenantUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutKeywordsInput
    upsert?: TenantUpsertWithoutKeywordsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutKeywordsInput, TenantUpdateWithoutKeywordsInput>, TenantUncheckedUpdateWithoutKeywordsInput>
  }

  export type FeedbackKeywordUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<FeedbackKeywordCreateWithoutKeywordInput, FeedbackKeywordUncheckedCreateWithoutKeywordInput> | FeedbackKeywordCreateWithoutKeywordInput[] | FeedbackKeywordUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: FeedbackKeywordCreateOrConnectWithoutKeywordInput | FeedbackKeywordCreateOrConnectWithoutKeywordInput[]
    upsert?: FeedbackKeywordUpsertWithWhereUniqueWithoutKeywordInput | FeedbackKeywordUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: FeedbackKeywordCreateManyKeywordInputEnvelope
    set?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    disconnect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    delete?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    connect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    update?: FeedbackKeywordUpdateWithWhereUniqueWithoutKeywordInput | FeedbackKeywordUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: FeedbackKeywordUpdateManyWithWhereWithoutKeywordInput | FeedbackKeywordUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: FeedbackKeywordScalarWhereInput | FeedbackKeywordScalarWhereInput[]
  }

  export type FeedbackKeywordUncheckedUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<FeedbackKeywordCreateWithoutKeywordInput, FeedbackKeywordUncheckedCreateWithoutKeywordInput> | FeedbackKeywordCreateWithoutKeywordInput[] | FeedbackKeywordUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: FeedbackKeywordCreateOrConnectWithoutKeywordInput | FeedbackKeywordCreateOrConnectWithoutKeywordInput[]
    upsert?: FeedbackKeywordUpsertWithWhereUniqueWithoutKeywordInput | FeedbackKeywordUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: FeedbackKeywordCreateManyKeywordInputEnvelope
    set?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    disconnect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    delete?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    connect?: FeedbackKeywordWhereUniqueInput | FeedbackKeywordWhereUniqueInput[]
    update?: FeedbackKeywordUpdateWithWhereUniqueWithoutKeywordInput | FeedbackKeywordUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: FeedbackKeywordUpdateManyWithWhereWithoutKeywordInput | FeedbackKeywordUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: FeedbackKeywordScalarWhereInput | FeedbackKeywordScalarWhereInput[]
  }

  export type FeedbackCreateNestedOneWithoutKeywordsInput = {
    create?: XOR<FeedbackCreateWithoutKeywordsInput, FeedbackUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: FeedbackCreateOrConnectWithoutKeywordsInput
    connect?: FeedbackWhereUniqueInput
  }

  export type KeywordCreateNestedOneWithoutFeedbackKeywordsInput = {
    create?: XOR<KeywordCreateWithoutFeedbackKeywordsInput, KeywordUncheckedCreateWithoutFeedbackKeywordsInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutFeedbackKeywordsInput
    connect?: KeywordWhereUniqueInput
  }

  export type EnumSentimentFieldUpdateOperationsInput = {
    set?: $Enums.Sentiment
  }

  export type FeedbackUpdateOneRequiredWithoutKeywordsNestedInput = {
    create?: XOR<FeedbackCreateWithoutKeywordsInput, FeedbackUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: FeedbackCreateOrConnectWithoutKeywordsInput
    upsert?: FeedbackUpsertWithoutKeywordsInput
    connect?: FeedbackWhereUniqueInput
    update?: XOR<XOR<FeedbackUpdateToOneWithWhereWithoutKeywordsInput, FeedbackUpdateWithoutKeywordsInput>, FeedbackUncheckedUpdateWithoutKeywordsInput>
  }

  export type KeywordUpdateOneRequiredWithoutFeedbackKeywordsNestedInput = {
    create?: XOR<KeywordCreateWithoutFeedbackKeywordsInput, KeywordUncheckedCreateWithoutFeedbackKeywordsInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutFeedbackKeywordsInput
    upsert?: KeywordUpsertWithoutFeedbackKeywordsInput
    connect?: KeywordWhereUniqueInput
    update?: XOR<XOR<KeywordUpdateToOneWithWhereWithoutFeedbackKeywordsInput, KeywordUpdateWithoutFeedbackKeywordsInput>, KeywordUncheckedUpdateWithoutFeedbackKeywordsInput>
  }

  export type ReviewSessionCreateNestedOneWithoutReviewDraftInput = {
    create?: XOR<ReviewSessionCreateWithoutReviewDraftInput, ReviewSessionUncheckedCreateWithoutReviewDraftInput>
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutReviewDraftInput
    connect?: ReviewSessionWhereUniqueInput
  }

  export type EnumReviewDraftStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewDraftStatus
  }

  export type ReviewSessionUpdateOneRequiredWithoutReviewDraftNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutReviewDraftInput, ReviewSessionUncheckedCreateWithoutReviewDraftInput>
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutReviewDraftInput
    upsert?: ReviewSessionUpsertWithoutReviewDraftInput
    connect?: ReviewSessionWhereUniqueInput
    update?: XOR<XOR<ReviewSessionUpdateToOneWithWhereWithoutReviewDraftInput, ReviewSessionUpdateWithoutReviewDraftInput>, ReviewSessionUncheckedUpdateWithoutReviewDraftInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTenantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantStatusFilter<$PrismaModel> | $Enums.TenantStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumTenantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TenantStatus[] | ListEnumTenantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTenantStatusWithAggregatesFilter<$PrismaModel> | $Enums.TenantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantStatusFilter<$PrismaModel>
    _max?: NestedEnumTenantStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumReviewSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewSessionStatus | EnumReviewSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewSessionStatus[] | ListEnumReviewSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewSessionStatus[] | ListEnumReviewSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewSessionStatusFilter<$PrismaModel> | $Enums.ReviewSessionStatus
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumReviewSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewSessionStatus | EnumReviewSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewSessionStatus[] | ListEnumReviewSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewSessionStatus[] | ListEnumReviewSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewSessionStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSentimentFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel>
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentFilter<$PrismaModel> | $Enums.Sentiment
  }

  export type NestedEnumSentimentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel>
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentWithAggregatesFilter<$PrismaModel> | $Enums.Sentiment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSentimentFilter<$PrismaModel>
    _max?: NestedEnumSentimentFilter<$PrismaModel>
  }

  export type NestedEnumReviewDraftStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewDraftStatus | EnumReviewDraftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewDraftStatus[] | ListEnumReviewDraftStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewDraftStatus[] | ListEnumReviewDraftStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewDraftStatusFilter<$PrismaModel> | $Enums.ReviewDraftStatus
  }

  export type NestedEnumReviewDraftStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewDraftStatus | EnumReviewDraftStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewDraftStatus[] | ListEnumReviewDraftStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewDraftStatus[] | ListEnumReviewDraftStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewDraftStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewDraftStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewDraftStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewDraftStatusFilter<$PrismaModel>
  }

  export type LocationCreateWithoutTenantInput = {
    id?: string
    name: string
    address: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tables?: TableCreateNestedManyWithoutLocationInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    address: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tables?: TableUncheckedCreateNestedManyWithoutLocationInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutTenantInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutTenantInput, LocationUncheckedCreateWithoutTenantInput>
  }

  export type LocationCreateManyTenantInputEnvelope = {
    data: LocationCreateManyTenantInput | LocationCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type KeywordCreateWithoutTenantInput = {
    id?: string
    name: string
    feedbackKeywords?: FeedbackKeywordCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    feedbackKeywords?: FeedbackKeywordUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordCreateOrConnectWithoutTenantInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutTenantInput, KeywordUncheckedCreateWithoutTenantInput>
  }

  export type KeywordCreateManyTenantInputEnvelope = {
    data: KeywordCreateManyTenantInput | KeywordCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ReviewSessionCreateWithoutTenantInput = {
    id?: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutReviewSessionsInput
    table: TableCreateNestedOneWithoutReviewSessionsInput
    feedback?: FeedbackCreateNestedOneWithoutSessionInput
    reviewDraft?: ReviewDraftCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionUncheckedCreateWithoutTenantInput = {
    id?: string
    locationId: string
    tableId: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedOneWithoutSessionInput
    reviewDraft?: ReviewDraftUncheckedCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionCreateOrConnectWithoutTenantInput = {
    where: ReviewSessionWhereUniqueInput
    create: XOR<ReviewSessionCreateWithoutTenantInput, ReviewSessionUncheckedCreateWithoutTenantInput>
  }

  export type ReviewSessionCreateManyTenantInputEnvelope = {
    data: ReviewSessionCreateManyTenantInput | ReviewSessionCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithWhereUniqueWithoutTenantInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutTenantInput, LocationUncheckedUpdateWithoutTenantInput>
    create: XOR<LocationCreateWithoutTenantInput, LocationUncheckedCreateWithoutTenantInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutTenantInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutTenantInput, LocationUncheckedUpdateWithoutTenantInput>
  }

  export type LocationUpdateManyWithWhereWithoutTenantInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutTenantInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: StringFilter<"Location"> | string
    tenantId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    address?: StringFilter<"Location"> | string
    timezone?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
  }

  export type KeywordUpsertWithWhereUniqueWithoutTenantInput = {
    where: KeywordWhereUniqueInput
    update: XOR<KeywordUpdateWithoutTenantInput, KeywordUncheckedUpdateWithoutTenantInput>
    create: XOR<KeywordCreateWithoutTenantInput, KeywordUncheckedCreateWithoutTenantInput>
  }

  export type KeywordUpdateWithWhereUniqueWithoutTenantInput = {
    where: KeywordWhereUniqueInput
    data: XOR<KeywordUpdateWithoutTenantInput, KeywordUncheckedUpdateWithoutTenantInput>
  }

  export type KeywordUpdateManyWithWhereWithoutTenantInput = {
    where: KeywordScalarWhereInput
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyWithoutTenantInput>
  }

  export type KeywordScalarWhereInput = {
    AND?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
    OR?: KeywordScalarWhereInput[]
    NOT?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
    id?: StringFilter<"Keyword"> | string
    tenantId?: StringFilter<"Keyword"> | string
    name?: StringFilter<"Keyword"> | string
  }

  export type ReviewSessionUpsertWithWhereUniqueWithoutTenantInput = {
    where: ReviewSessionWhereUniqueInput
    update: XOR<ReviewSessionUpdateWithoutTenantInput, ReviewSessionUncheckedUpdateWithoutTenantInput>
    create: XOR<ReviewSessionCreateWithoutTenantInput, ReviewSessionUncheckedCreateWithoutTenantInput>
  }

  export type ReviewSessionUpdateWithWhereUniqueWithoutTenantInput = {
    where: ReviewSessionWhereUniqueInput
    data: XOR<ReviewSessionUpdateWithoutTenantInput, ReviewSessionUncheckedUpdateWithoutTenantInput>
  }

  export type ReviewSessionUpdateManyWithWhereWithoutTenantInput = {
    where: ReviewSessionScalarWhereInput
    data: XOR<ReviewSessionUpdateManyMutationInput, ReviewSessionUncheckedUpdateManyWithoutTenantInput>
  }

  export type ReviewSessionScalarWhereInput = {
    AND?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
    OR?: ReviewSessionScalarWhereInput[]
    NOT?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
    id?: StringFilter<"ReviewSession"> | string
    tenantId?: StringFilter<"ReviewSession"> | string
    locationId?: StringFilter<"ReviewSession"> | string
    tableId?: StringFilter<"ReviewSession"> | string
    status?: EnumReviewSessionStatusFilter<"ReviewSession"> | $Enums.ReviewSessionStatus
    rating?: IntNullableFilter<"ReviewSession"> | number | null
    createdAt?: DateTimeFilter<"ReviewSession"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewSession"> | Date | string
  }

  export type TenantCreateWithoutLocationsInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    keywords?: KeywordCreateNestedManyWithoutTenantInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutLocationsInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    keywords?: KeywordUncheckedCreateNestedManyWithoutTenantInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutLocationsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutLocationsInput, TenantUncheckedCreateWithoutLocationsInput>
  }

  export type TableCreateWithoutLocationInput = {
    id?: string
    tableNumber: string
    qrToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSessions?: ReviewSessionCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutLocationInput = {
    id?: string
    tableNumber: string
    qrToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutLocationInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutLocationInput, TableUncheckedCreateWithoutLocationInput>
  }

  export type TableCreateManyLocationInputEnvelope = {
    data: TableCreateManyLocationInput | TableCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type ReviewSessionCreateWithoutLocationInput = {
    id?: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutReviewSessionsInput
    table: TableCreateNestedOneWithoutReviewSessionsInput
    feedback?: FeedbackCreateNestedOneWithoutSessionInput
    reviewDraft?: ReviewDraftCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionUncheckedCreateWithoutLocationInput = {
    id?: string
    tenantId: string
    tableId: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedOneWithoutSessionInput
    reviewDraft?: ReviewDraftUncheckedCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionCreateOrConnectWithoutLocationInput = {
    where: ReviewSessionWhereUniqueInput
    create: XOR<ReviewSessionCreateWithoutLocationInput, ReviewSessionUncheckedCreateWithoutLocationInput>
  }

  export type ReviewSessionCreateManyLocationInputEnvelope = {
    data: ReviewSessionCreateManyLocationInput | ReviewSessionCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutLocationsInput = {
    update: XOR<TenantUpdateWithoutLocationsInput, TenantUncheckedUpdateWithoutLocationsInput>
    create: XOR<TenantCreateWithoutLocationsInput, TenantUncheckedCreateWithoutLocationsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLocationsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutLocationsInput, TenantUncheckedUpdateWithoutLocationsInput>
  }

  export type TenantUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: KeywordUpdateManyWithoutTenantNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: KeywordUncheckedUpdateManyWithoutTenantNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TableUpsertWithWhereUniqueWithoutLocationInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutLocationInput, TableUncheckedUpdateWithoutLocationInput>
    create: XOR<TableCreateWithoutLocationInput, TableUncheckedCreateWithoutLocationInput>
  }

  export type TableUpdateWithWhereUniqueWithoutLocationInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutLocationInput, TableUncheckedUpdateWithoutLocationInput>
  }

  export type TableUpdateManyWithWhereWithoutLocationInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutLocationInput>
  }

  export type TableScalarWhereInput = {
    AND?: TableScalarWhereInput | TableScalarWhereInput[]
    OR?: TableScalarWhereInput[]
    NOT?: TableScalarWhereInput | TableScalarWhereInput[]
    id?: StringFilter<"Table"> | string
    locationId?: StringFilter<"Table"> | string
    tableNumber?: StringFilter<"Table"> | string
    qrToken?: StringFilter<"Table"> | string
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
  }

  export type ReviewSessionUpsertWithWhereUniqueWithoutLocationInput = {
    where: ReviewSessionWhereUniqueInput
    update: XOR<ReviewSessionUpdateWithoutLocationInput, ReviewSessionUncheckedUpdateWithoutLocationInput>
    create: XOR<ReviewSessionCreateWithoutLocationInput, ReviewSessionUncheckedCreateWithoutLocationInput>
  }

  export type ReviewSessionUpdateWithWhereUniqueWithoutLocationInput = {
    where: ReviewSessionWhereUniqueInput
    data: XOR<ReviewSessionUpdateWithoutLocationInput, ReviewSessionUncheckedUpdateWithoutLocationInput>
  }

  export type ReviewSessionUpdateManyWithWhereWithoutLocationInput = {
    where: ReviewSessionScalarWhereInput
    data: XOR<ReviewSessionUpdateManyMutationInput, ReviewSessionUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationCreateWithoutTablesInput = {
    id?: string
    name: string
    address: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLocationsInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutTablesInput = {
    id?: string
    tenantId: string
    name: string
    address: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutTablesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutTablesInput, LocationUncheckedCreateWithoutTablesInput>
  }

  export type ReviewSessionCreateWithoutTableInput = {
    id?: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutReviewSessionsInput
    location: LocationCreateNestedOneWithoutReviewSessionsInput
    feedback?: FeedbackCreateNestedOneWithoutSessionInput
    reviewDraft?: ReviewDraftCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionUncheckedCreateWithoutTableInput = {
    id?: string
    tenantId: string
    locationId: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedOneWithoutSessionInput
    reviewDraft?: ReviewDraftUncheckedCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionCreateOrConnectWithoutTableInput = {
    where: ReviewSessionWhereUniqueInput
    create: XOR<ReviewSessionCreateWithoutTableInput, ReviewSessionUncheckedCreateWithoutTableInput>
  }

  export type ReviewSessionCreateManyTableInputEnvelope = {
    data: ReviewSessionCreateManyTableInput | ReviewSessionCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutTablesInput = {
    update: XOR<LocationUpdateWithoutTablesInput, LocationUncheckedUpdateWithoutTablesInput>
    create: XOR<LocationCreateWithoutTablesInput, LocationUncheckedCreateWithoutTablesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutTablesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutTablesInput, LocationUncheckedUpdateWithoutTablesInput>
  }

  export type LocationUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLocationsNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type ReviewSessionUpsertWithWhereUniqueWithoutTableInput = {
    where: ReviewSessionWhereUniqueInput
    update: XOR<ReviewSessionUpdateWithoutTableInput, ReviewSessionUncheckedUpdateWithoutTableInput>
    create: XOR<ReviewSessionCreateWithoutTableInput, ReviewSessionUncheckedCreateWithoutTableInput>
  }

  export type ReviewSessionUpdateWithWhereUniqueWithoutTableInput = {
    where: ReviewSessionWhereUniqueInput
    data: XOR<ReviewSessionUpdateWithoutTableInput, ReviewSessionUncheckedUpdateWithoutTableInput>
  }

  export type ReviewSessionUpdateManyWithWhereWithoutTableInput = {
    where: ReviewSessionScalarWhereInput
    data: XOR<ReviewSessionUpdateManyMutationInput, ReviewSessionUncheckedUpdateManyWithoutTableInput>
  }

  export type TenantCreateWithoutReviewSessionsInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationCreateNestedManyWithoutTenantInput
    keywords?: KeywordCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutReviewSessionsInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutTenantInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutReviewSessionsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutReviewSessionsInput, TenantUncheckedCreateWithoutReviewSessionsInput>
  }

  export type LocationCreateWithoutReviewSessionsInput = {
    id?: string
    name: string
    address: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLocationsInput
    tables?: TableCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutReviewSessionsInput = {
    id?: string
    tenantId: string
    name: string
    address: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tables?: TableUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutReviewSessionsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutReviewSessionsInput, LocationUncheckedCreateWithoutReviewSessionsInput>
  }

  export type TableCreateWithoutReviewSessionsInput = {
    id?: string
    tableNumber: string
    qrToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutTablesInput
  }

  export type TableUncheckedCreateWithoutReviewSessionsInput = {
    id?: string
    locationId: string
    tableNumber: string
    qrToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TableCreateOrConnectWithoutReviewSessionsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutReviewSessionsInput, TableUncheckedCreateWithoutReviewSessionsInput>
  }

  export type FeedbackCreateWithoutSessionInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    keywords?: FeedbackKeywordCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutSessionInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    keywords?: FeedbackKeywordUncheckedCreateNestedManyWithoutFeedbackInput
  }

  export type FeedbackCreateOrConnectWithoutSessionInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput>
  }

  export type ReviewDraftCreateWithoutSessionInput = {
    id?: string
    rawText: string
    text: string
    status?: $Enums.ReviewDraftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewDraftUncheckedCreateWithoutSessionInput = {
    id?: string
    rawText: string
    text: string
    status?: $Enums.ReviewDraftStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewDraftCreateOrConnectWithoutSessionInput = {
    where: ReviewDraftWhereUniqueInput
    create: XOR<ReviewDraftCreateWithoutSessionInput, ReviewDraftUncheckedCreateWithoutSessionInput>
  }

  export type TenantUpsertWithoutReviewSessionsInput = {
    update: XOR<TenantUpdateWithoutReviewSessionsInput, TenantUncheckedUpdateWithoutReviewSessionsInput>
    create: XOR<TenantCreateWithoutReviewSessionsInput, TenantUncheckedCreateWithoutReviewSessionsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutReviewSessionsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutReviewSessionsInput, TenantUncheckedUpdateWithoutReviewSessionsInput>
  }

  export type TenantUpdateWithoutReviewSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUpdateManyWithoutTenantNestedInput
    keywords?: KeywordUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutReviewSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutTenantNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type LocationUpsertWithoutReviewSessionsInput = {
    update: XOR<LocationUpdateWithoutReviewSessionsInput, LocationUncheckedUpdateWithoutReviewSessionsInput>
    create: XOR<LocationCreateWithoutReviewSessionsInput, LocationUncheckedCreateWithoutReviewSessionsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutReviewSessionsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutReviewSessionsInput, LocationUncheckedUpdateWithoutReviewSessionsInput>
  }

  export type LocationUpdateWithoutReviewSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLocationsNestedInput
    tables?: TableUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutReviewSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type TableUpsertWithoutReviewSessionsInput = {
    update: XOR<TableUpdateWithoutReviewSessionsInput, TableUncheckedUpdateWithoutReviewSessionsInput>
    create: XOR<TableCreateWithoutReviewSessionsInput, TableUncheckedCreateWithoutReviewSessionsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutReviewSessionsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutReviewSessionsInput, TableUncheckedUpdateWithoutReviewSessionsInput>
  }

  export type TableUpdateWithoutReviewSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutTablesNestedInput
  }

  export type TableUncheckedUpdateWithoutReviewSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpsertWithoutSessionInput = {
    update: XOR<FeedbackUpdateWithoutSessionInput, FeedbackUncheckedUpdateWithoutSessionInput>
    create: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput>
    where?: FeedbackWhereInput
  }

  export type FeedbackUpdateToOneWithWhereWithoutSessionInput = {
    where?: FeedbackWhereInput
    data: XOR<FeedbackUpdateWithoutSessionInput, FeedbackUncheckedUpdateWithoutSessionInput>
  }

  export type FeedbackUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: FeedbackKeywordUpdateManyWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: FeedbackKeywordUncheckedUpdateManyWithoutFeedbackNestedInput
  }

  export type ReviewDraftUpsertWithoutSessionInput = {
    update: XOR<ReviewDraftUpdateWithoutSessionInput, ReviewDraftUncheckedUpdateWithoutSessionInput>
    create: XOR<ReviewDraftCreateWithoutSessionInput, ReviewDraftUncheckedCreateWithoutSessionInput>
    where?: ReviewDraftWhereInput
  }

  export type ReviewDraftUpdateToOneWithWhereWithoutSessionInput = {
    where?: ReviewDraftWhereInput
    data: XOR<ReviewDraftUpdateWithoutSessionInput, ReviewDraftUncheckedUpdateWithoutSessionInput>
  }

  export type ReviewDraftUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewDraftStatusFieldUpdateOperationsInput | $Enums.ReviewDraftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewDraftUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewDraftStatusFieldUpdateOperationsInput | $Enums.ReviewDraftStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewSessionCreateWithoutFeedbackInput = {
    id?: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutReviewSessionsInput
    location: LocationCreateNestedOneWithoutReviewSessionsInput
    table: TableCreateNestedOneWithoutReviewSessionsInput
    reviewDraft?: ReviewDraftCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionUncheckedCreateWithoutFeedbackInput = {
    id?: string
    tenantId: string
    locationId: string
    tableId: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewDraft?: ReviewDraftUncheckedCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionCreateOrConnectWithoutFeedbackInput = {
    where: ReviewSessionWhereUniqueInput
    create: XOR<ReviewSessionCreateWithoutFeedbackInput, ReviewSessionUncheckedCreateWithoutFeedbackInput>
  }

  export type FeedbackKeywordCreateWithoutFeedbackInput = {
    sentiment: $Enums.Sentiment
    keyword: KeywordCreateNestedOneWithoutFeedbackKeywordsInput
  }

  export type FeedbackKeywordUncheckedCreateWithoutFeedbackInput = {
    keywordId: string
    sentiment: $Enums.Sentiment
  }

  export type FeedbackKeywordCreateOrConnectWithoutFeedbackInput = {
    where: FeedbackKeywordWhereUniqueInput
    create: XOR<FeedbackKeywordCreateWithoutFeedbackInput, FeedbackKeywordUncheckedCreateWithoutFeedbackInput>
  }

  export type FeedbackKeywordCreateManyFeedbackInputEnvelope = {
    data: FeedbackKeywordCreateManyFeedbackInput | FeedbackKeywordCreateManyFeedbackInput[]
    skipDuplicates?: boolean
  }

  export type ReviewSessionUpsertWithoutFeedbackInput = {
    update: XOR<ReviewSessionUpdateWithoutFeedbackInput, ReviewSessionUncheckedUpdateWithoutFeedbackInput>
    create: XOR<ReviewSessionCreateWithoutFeedbackInput, ReviewSessionUncheckedCreateWithoutFeedbackInput>
    where?: ReviewSessionWhereInput
  }

  export type ReviewSessionUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: ReviewSessionWhereInput
    data: XOR<ReviewSessionUpdateWithoutFeedbackInput, ReviewSessionUncheckedUpdateWithoutFeedbackInput>
  }

  export type ReviewSessionUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutReviewSessionsNestedInput
    location?: LocationUpdateOneRequiredWithoutReviewSessionsNestedInput
    table?: TableUpdateOneRequiredWithoutReviewSessionsNestedInput
    reviewDraft?: ReviewDraftUpdateOneWithoutSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewDraft?: ReviewDraftUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type FeedbackKeywordUpsertWithWhereUniqueWithoutFeedbackInput = {
    where: FeedbackKeywordWhereUniqueInput
    update: XOR<FeedbackKeywordUpdateWithoutFeedbackInput, FeedbackKeywordUncheckedUpdateWithoutFeedbackInput>
    create: XOR<FeedbackKeywordCreateWithoutFeedbackInput, FeedbackKeywordUncheckedCreateWithoutFeedbackInput>
  }

  export type FeedbackKeywordUpdateWithWhereUniqueWithoutFeedbackInput = {
    where: FeedbackKeywordWhereUniqueInput
    data: XOR<FeedbackKeywordUpdateWithoutFeedbackInput, FeedbackKeywordUncheckedUpdateWithoutFeedbackInput>
  }

  export type FeedbackKeywordUpdateManyWithWhereWithoutFeedbackInput = {
    where: FeedbackKeywordScalarWhereInput
    data: XOR<FeedbackKeywordUpdateManyMutationInput, FeedbackKeywordUncheckedUpdateManyWithoutFeedbackInput>
  }

  export type FeedbackKeywordScalarWhereInput = {
    AND?: FeedbackKeywordScalarWhereInput | FeedbackKeywordScalarWhereInput[]
    OR?: FeedbackKeywordScalarWhereInput[]
    NOT?: FeedbackKeywordScalarWhereInput | FeedbackKeywordScalarWhereInput[]
    feedbackId?: StringFilter<"FeedbackKeyword"> | string
    keywordId?: StringFilter<"FeedbackKeyword"> | string
    sentiment?: EnumSentimentFilter<"FeedbackKeyword"> | $Enums.Sentiment
  }

  export type TenantCreateWithoutKeywordsInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationCreateNestedManyWithoutTenantInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutKeywordsInput = {
    id?: string
    name: string
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutTenantInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutKeywordsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutKeywordsInput, TenantUncheckedCreateWithoutKeywordsInput>
  }

  export type FeedbackKeywordCreateWithoutKeywordInput = {
    sentiment: $Enums.Sentiment
    feedback: FeedbackCreateNestedOneWithoutKeywordsInput
  }

  export type FeedbackKeywordUncheckedCreateWithoutKeywordInput = {
    feedbackId: string
    sentiment: $Enums.Sentiment
  }

  export type FeedbackKeywordCreateOrConnectWithoutKeywordInput = {
    where: FeedbackKeywordWhereUniqueInput
    create: XOR<FeedbackKeywordCreateWithoutKeywordInput, FeedbackKeywordUncheckedCreateWithoutKeywordInput>
  }

  export type FeedbackKeywordCreateManyKeywordInputEnvelope = {
    data: FeedbackKeywordCreateManyKeywordInput | FeedbackKeywordCreateManyKeywordInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutKeywordsInput = {
    update: XOR<TenantUpdateWithoutKeywordsInput, TenantUncheckedUpdateWithoutKeywordsInput>
    create: XOR<TenantCreateWithoutKeywordsInput, TenantUncheckedCreateWithoutKeywordsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutKeywordsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutKeywordsInput, TenantUncheckedUpdateWithoutKeywordsInput>
  }

  export type TenantUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUpdateManyWithoutTenantNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutTenantNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type FeedbackKeywordUpsertWithWhereUniqueWithoutKeywordInput = {
    where: FeedbackKeywordWhereUniqueInput
    update: XOR<FeedbackKeywordUpdateWithoutKeywordInput, FeedbackKeywordUncheckedUpdateWithoutKeywordInput>
    create: XOR<FeedbackKeywordCreateWithoutKeywordInput, FeedbackKeywordUncheckedCreateWithoutKeywordInput>
  }

  export type FeedbackKeywordUpdateWithWhereUniqueWithoutKeywordInput = {
    where: FeedbackKeywordWhereUniqueInput
    data: XOR<FeedbackKeywordUpdateWithoutKeywordInput, FeedbackKeywordUncheckedUpdateWithoutKeywordInput>
  }

  export type FeedbackKeywordUpdateManyWithWhereWithoutKeywordInput = {
    where: FeedbackKeywordScalarWhereInput
    data: XOR<FeedbackKeywordUpdateManyMutationInput, FeedbackKeywordUncheckedUpdateManyWithoutKeywordInput>
  }

  export type FeedbackCreateWithoutKeywordsInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    session: ReviewSessionCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutKeywordsInput = {
    id?: string
    sessionId: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutKeywordsInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutKeywordsInput, FeedbackUncheckedCreateWithoutKeywordsInput>
  }

  export type KeywordCreateWithoutFeedbackKeywordsInput = {
    id?: string
    name: string
    tenant: TenantCreateNestedOneWithoutKeywordsInput
  }

  export type KeywordUncheckedCreateWithoutFeedbackKeywordsInput = {
    id?: string
    tenantId: string
    name: string
  }

  export type KeywordCreateOrConnectWithoutFeedbackKeywordsInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutFeedbackKeywordsInput, KeywordUncheckedCreateWithoutFeedbackKeywordsInput>
  }

  export type FeedbackUpsertWithoutKeywordsInput = {
    update: XOR<FeedbackUpdateWithoutKeywordsInput, FeedbackUncheckedUpdateWithoutKeywordsInput>
    create: XOR<FeedbackCreateWithoutKeywordsInput, FeedbackUncheckedCreateWithoutKeywordsInput>
    where?: FeedbackWhereInput
  }

  export type FeedbackUpdateToOneWithWhereWithoutKeywordsInput = {
    where?: FeedbackWhereInput
    data: XOR<FeedbackUpdateWithoutKeywordsInput, FeedbackUncheckedUpdateWithoutKeywordsInput>
  }

  export type FeedbackUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ReviewSessionUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUpsertWithoutFeedbackKeywordsInput = {
    update: XOR<KeywordUpdateWithoutFeedbackKeywordsInput, KeywordUncheckedUpdateWithoutFeedbackKeywordsInput>
    create: XOR<KeywordCreateWithoutFeedbackKeywordsInput, KeywordUncheckedCreateWithoutFeedbackKeywordsInput>
    where?: KeywordWhereInput
  }

  export type KeywordUpdateToOneWithWhereWithoutFeedbackKeywordsInput = {
    where?: KeywordWhereInput
    data: XOR<KeywordUpdateWithoutFeedbackKeywordsInput, KeywordUncheckedUpdateWithoutFeedbackKeywordsInput>
  }

  export type KeywordUpdateWithoutFeedbackKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutKeywordsNestedInput
  }

  export type KeywordUncheckedUpdateWithoutFeedbackKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewSessionCreateWithoutReviewDraftInput = {
    id?: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutReviewSessionsInput
    location: LocationCreateNestedOneWithoutReviewSessionsInput
    table: TableCreateNestedOneWithoutReviewSessionsInput
    feedback?: FeedbackCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionUncheckedCreateWithoutReviewDraftInput = {
    id?: string
    tenantId: string
    locationId: string
    tableId: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedOneWithoutSessionInput
  }

  export type ReviewSessionCreateOrConnectWithoutReviewDraftInput = {
    where: ReviewSessionWhereUniqueInput
    create: XOR<ReviewSessionCreateWithoutReviewDraftInput, ReviewSessionUncheckedCreateWithoutReviewDraftInput>
  }

  export type ReviewSessionUpsertWithoutReviewDraftInput = {
    update: XOR<ReviewSessionUpdateWithoutReviewDraftInput, ReviewSessionUncheckedUpdateWithoutReviewDraftInput>
    create: XOR<ReviewSessionCreateWithoutReviewDraftInput, ReviewSessionUncheckedCreateWithoutReviewDraftInput>
    where?: ReviewSessionWhereInput
  }

  export type ReviewSessionUpdateToOneWithWhereWithoutReviewDraftInput = {
    where?: ReviewSessionWhereInput
    data: XOR<ReviewSessionUpdateWithoutReviewDraftInput, ReviewSessionUncheckedUpdateWithoutReviewDraftInput>
  }

  export type ReviewSessionUpdateWithoutReviewDraftInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutReviewSessionsNestedInput
    location?: LocationUpdateOneRequiredWithoutReviewSessionsNestedInput
    table?: TableUpdateOneRequiredWithoutReviewSessionsNestedInput
    feedback?: FeedbackUpdateOneWithoutSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateWithoutReviewDraftInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type LocationCreateManyTenantInput = {
    id?: string
    name: string
    address: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeywordCreateManyTenantInput = {
    id?: string
    name: string
  }

  export type ReviewSessionCreateManyTenantInput = {
    id?: string
    locationId: string
    tableId: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUpdateManyWithoutLocationNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUncheckedUpdateManyWithoutLocationNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    feedbackKeywords?: FeedbackKeywordUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    feedbackKeywords?: FeedbackKeywordUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewSessionUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutReviewSessionsNestedInput
    table?: TableUpdateOneRequiredWithoutReviewSessionsNestedInput
    feedback?: FeedbackUpdateOneWithoutSessionNestedInput
    reviewDraft?: ReviewDraftUpdateOneWithoutSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateOneWithoutSessionNestedInput
    reviewDraft?: ReviewDraftUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableCreateManyLocationInput = {
    id?: string
    tableNumber: string
    qrToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewSessionCreateManyLocationInput = {
    id?: string
    tenantId: string
    tableId: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TableUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSessions?: ReviewSessionUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewSessionUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutReviewSessionsNestedInput
    table?: TableUpdateOneRequiredWithoutReviewSessionsNestedInput
    feedback?: FeedbackUpdateOneWithoutSessionNestedInput
    reviewDraft?: ReviewDraftUpdateOneWithoutSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateOneWithoutSessionNestedInput
    reviewDraft?: ReviewDraftUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewSessionCreateManyTableInput = {
    id?: string
    tenantId: string
    locationId: string
    status?: $Enums.ReviewSessionStatus
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewSessionUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutReviewSessionsNestedInput
    location?: LocationUpdateOneRequiredWithoutReviewSessionsNestedInput
    feedback?: FeedbackUpdateOneWithoutSessionNestedInput
    reviewDraft?: ReviewDraftUpdateOneWithoutSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateOneWithoutSessionNestedInput
    reviewDraft?: ReviewDraftUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    status?: EnumReviewSessionStatusFieldUpdateOperationsInput | $Enums.ReviewSessionStatus
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackKeywordCreateManyFeedbackInput = {
    keywordId: string
    sentiment: $Enums.Sentiment
  }

  export type FeedbackKeywordUpdateWithoutFeedbackInput = {
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    keyword?: KeywordUpdateOneRequiredWithoutFeedbackKeywordsNestedInput
  }

  export type FeedbackKeywordUncheckedUpdateWithoutFeedbackInput = {
    keywordId?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
  }

  export type FeedbackKeywordUncheckedUpdateManyWithoutFeedbackInput = {
    keywordId?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
  }

  export type FeedbackKeywordCreateManyKeywordInput = {
    feedbackId: string
    sentiment: $Enums.Sentiment
  }

  export type FeedbackKeywordUpdateWithoutKeywordInput = {
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
    feedback?: FeedbackUpdateOneRequiredWithoutKeywordsNestedInput
  }

  export type FeedbackKeywordUncheckedUpdateWithoutKeywordInput = {
    feedbackId?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
  }

  export type FeedbackKeywordUncheckedUpdateManyWithoutKeywordInput = {
    feedbackId?: StringFieldUpdateOperationsInput | string
    sentiment?: EnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}