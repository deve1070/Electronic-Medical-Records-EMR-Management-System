
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Patients
 * 
 */
export type Patients = $Result.DefaultSelection<Prisma.$PatientsPayload>
/**
 * Model Doctors
 * 
 */
export type Doctors = $Result.DefaultSelection<Prisma.$DoctorsPayload>
/**
 * Model MedicalHistory
 * 
 */
export type MedicalHistory = $Result.DefaultSelection<Prisma.$MedicalHistoryPayload>
/**
 * Model LabOrders
 * 
 */
export type LabOrders = $Result.DefaultSelection<Prisma.$LabOrdersPayload>
/**
 * Model LabResults
 * 
 */
export type LabResults = $Result.DefaultSelection<Prisma.$LabResultsPayload>
/**
 * Model Diseases
 * 
 */
export type Diseases = $Result.DefaultSelection<Prisma.$DiseasesPayload>
/**
 * Model Diagnoses
 * 
 */
export type Diagnoses = $Result.DefaultSelection<Prisma.$DiagnosesPayload>
/**
 * Model Cases
 * 
 */
export type Cases = $Result.DefaultSelection<Prisma.$CasesPayload>
/**
 * Model AccessLogs
 * 
 */
export type AccessLogs = $Result.DefaultSelection<Prisma.$AccessLogsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patients`: Exposes CRUD operations for the **Patients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patients.findMany()
    * ```
    */
  get patients(): Prisma.PatientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctors`: Exposes CRUD operations for the **Doctors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctors.findMany()
    * ```
    */
  get doctors(): Prisma.DoctorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalHistory`: Exposes CRUD operations for the **MedicalHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalHistories
    * const medicalHistories = await prisma.medicalHistory.findMany()
    * ```
    */
  get medicalHistory(): Prisma.MedicalHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labOrders`: Exposes CRUD operations for the **LabOrders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabOrders
    * const labOrders = await prisma.labOrders.findMany()
    * ```
    */
  get labOrders(): Prisma.LabOrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labResults`: Exposes CRUD operations for the **LabResults** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabResults
    * const labResults = await prisma.labResults.findMany()
    * ```
    */
  get labResults(): Prisma.LabResultsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diseases`: Exposes CRUD operations for the **Diseases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diseases
    * const diseases = await prisma.diseases.findMany()
    * ```
    */
  get diseases(): Prisma.DiseasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnoses`: Exposes CRUD operations for the **Diagnoses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnoses
    * const diagnoses = await prisma.diagnoses.findMany()
    * ```
    */
  get diagnoses(): Prisma.DiagnosesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cases`: Exposes CRUD operations for the **Cases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cases
    * const cases = await prisma.cases.findMany()
    * ```
    */
  get cases(): Prisma.CasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessLogs`: Exposes CRUD operations for the **AccessLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessLogs
    * const accessLogs = await prisma.accessLogs.findMany()
    * ```
    */
  get accessLogs(): Prisma.AccessLogsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Users: 'Users',
    Patients: 'Patients',
    Doctors: 'Doctors',
    MedicalHistory: 'MedicalHistory',
    LabOrders: 'LabOrders',
    LabResults: 'LabResults',
    Diseases: 'Diseases',
    Diagnoses: 'Diagnoses',
    Cases: 'Cases',
    AccessLogs: 'AccessLogs'
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
      modelProps: "users" | "patients" | "doctors" | "medicalHistory" | "labOrders" | "labResults" | "diseases" | "diagnoses" | "cases" | "accessLogs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Patients: {
        payload: Prisma.$PatientsPayload<ExtArgs>
        fields: Prisma.PatientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          findFirst: {
            args: Prisma.PatientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          findMany: {
            args: Prisma.PatientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          create: {
            args: Prisma.PatientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          createMany: {
            args: Prisma.PatientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          delete: {
            args: Prisma.PatientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          update: {
            args: Prisma.PatientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          deleteMany: {
            args: Prisma.PatientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          upsert: {
            args: Prisma.PatientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          aggregate: {
            args: Prisma.PatientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatients>
          }
          groupBy: {
            args: Prisma.PatientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientsCountArgs<ExtArgs>
            result: $Utils.Optional<PatientsCountAggregateOutputType> | number
          }
        }
      }
      Doctors: {
        payload: Prisma.$DoctorsPayload<ExtArgs>
        fields: Prisma.DoctorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          findFirst: {
            args: Prisma.DoctorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          findMany: {
            args: Prisma.DoctorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>[]
          }
          create: {
            args: Prisma.DoctorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          createMany: {
            args: Prisma.DoctorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>[]
          }
          delete: {
            args: Prisma.DoctorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          update: {
            args: Prisma.DoctorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          deleteMany: {
            args: Prisma.DoctorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>[]
          }
          upsert: {
            args: Prisma.DoctorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          aggregate: {
            args: Prisma.DoctorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctors>
          }
          groupBy: {
            args: Prisma.DoctorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorsCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorsCountAggregateOutputType> | number
          }
        }
      }
      MedicalHistory: {
        payload: Prisma.$MedicalHistoryPayload<ExtArgs>
        fields: Prisma.MedicalHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          findFirst: {
            args: Prisma.MedicalHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          findMany: {
            args: Prisma.MedicalHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>[]
          }
          create: {
            args: Prisma.MedicalHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          createMany: {
            args: Prisma.MedicalHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>[]
          }
          delete: {
            args: Prisma.MedicalHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          update: {
            args: Prisma.MedicalHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          deleteMany: {
            args: Prisma.MedicalHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>[]
          }
          upsert: {
            args: Prisma.MedicalHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalHistoryPayload>
          }
          aggregate: {
            args: Prisma.MedicalHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalHistory>
          }
          groupBy: {
            args: Prisma.MedicalHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalHistoryCountAggregateOutputType> | number
          }
        }
      }
      LabOrders: {
        payload: Prisma.$LabOrdersPayload<ExtArgs>
        fields: Prisma.LabOrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabOrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabOrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabOrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabOrdersPayload>
          }
          findFirst: {
            args: Prisma.LabOrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabOrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabOrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabOrdersPayload>
          }
          findMany: {
            args: Prisma.LabOrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabOrdersPayload>[]
          }
          create: {
            args: Prisma.LabOrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabOrdersPayload>
          }
          createMany: {
            args: Prisma.LabOrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabOrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabOrdersPayload>[]
          }
          delete: {
            args: Prisma.LabOrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabOrdersPayload>
          }
          update: {
            args: Prisma.LabOrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabOrdersPayload>
          }
          deleteMany: {
            args: Prisma.LabOrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabOrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabOrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabOrdersPayload>[]
          }
          upsert: {
            args: Prisma.LabOrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabOrdersPayload>
          }
          aggregate: {
            args: Prisma.LabOrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabOrders>
          }
          groupBy: {
            args: Prisma.LabOrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabOrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabOrdersCountArgs<ExtArgs>
            result: $Utils.Optional<LabOrdersCountAggregateOutputType> | number
          }
        }
      }
      LabResults: {
        payload: Prisma.$LabResultsPayload<ExtArgs>
        fields: Prisma.LabResultsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabResultsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabResultsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultsPayload>
          }
          findFirst: {
            args: Prisma.LabResultsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabResultsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultsPayload>
          }
          findMany: {
            args: Prisma.LabResultsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultsPayload>[]
          }
          create: {
            args: Prisma.LabResultsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultsPayload>
          }
          createMany: {
            args: Prisma.LabResultsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabResultsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultsPayload>[]
          }
          delete: {
            args: Prisma.LabResultsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultsPayload>
          }
          update: {
            args: Prisma.LabResultsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultsPayload>
          }
          deleteMany: {
            args: Prisma.LabResultsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabResultsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabResultsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultsPayload>[]
          }
          upsert: {
            args: Prisma.LabResultsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabResultsPayload>
          }
          aggregate: {
            args: Prisma.LabResultsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabResults>
          }
          groupBy: {
            args: Prisma.LabResultsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabResultsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabResultsCountArgs<ExtArgs>
            result: $Utils.Optional<LabResultsCountAggregateOutputType> | number
          }
        }
      }
      Diseases: {
        payload: Prisma.$DiseasesPayload<ExtArgs>
        fields: Prisma.DiseasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiseasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiseasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasesPayload>
          }
          findFirst: {
            args: Prisma.DiseasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiseasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasesPayload>
          }
          findMany: {
            args: Prisma.DiseasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasesPayload>[]
          }
          create: {
            args: Prisma.DiseasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasesPayload>
          }
          createMany: {
            args: Prisma.DiseasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiseasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasesPayload>[]
          }
          delete: {
            args: Prisma.DiseasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasesPayload>
          }
          update: {
            args: Prisma.DiseasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasesPayload>
          }
          deleteMany: {
            args: Prisma.DiseasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiseasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiseasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasesPayload>[]
          }
          upsert: {
            args: Prisma.DiseasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasesPayload>
          }
          aggregate: {
            args: Prisma.DiseasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiseases>
          }
          groupBy: {
            args: Prisma.DiseasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiseasesCountArgs<ExtArgs>
            result: $Utils.Optional<DiseasesCountAggregateOutputType> | number
          }
        }
      }
      Diagnoses: {
        payload: Prisma.$DiagnosesPayload<ExtArgs>
        fields: Prisma.DiagnosesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          findFirst: {
            args: Prisma.DiagnosesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          findMany: {
            args: Prisma.DiagnosesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>[]
          }
          create: {
            args: Prisma.DiagnosesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          createMany: {
            args: Prisma.DiagnosesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiagnosesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>[]
          }
          delete: {
            args: Prisma.DiagnosesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          update: {
            args: Prisma.DiagnosesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiagnosesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>[]
          }
          upsert: {
            args: Prisma.DiagnosesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          aggregate: {
            args: Prisma.DiagnosesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnoses>
          }
          groupBy: {
            args: Prisma.DiagnosesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosesCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosesCountAggregateOutputType> | number
          }
        }
      }
      Cases: {
        payload: Prisma.$CasesPayload<ExtArgs>
        fields: Prisma.CasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          findFirst: {
            args: Prisma.CasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          findMany: {
            args: Prisma.CasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>[]
          }
          create: {
            args: Prisma.CasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          createMany: {
            args: Prisma.CasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>[]
          }
          delete: {
            args: Prisma.CasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          update: {
            args: Prisma.CasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          deleteMany: {
            args: Prisma.CasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>[]
          }
          upsert: {
            args: Prisma.CasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasesPayload>
          }
          aggregate: {
            args: Prisma.CasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCases>
          }
          groupBy: {
            args: Prisma.CasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasesCountArgs<ExtArgs>
            result: $Utils.Optional<CasesCountAggregateOutputType> | number
          }
        }
      }
      AccessLogs: {
        payload: Prisma.$AccessLogsPayload<ExtArgs>
        fields: Prisma.AccessLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogsPayload>
          }
          findFirst: {
            args: Prisma.AccessLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogsPayload>
          }
          findMany: {
            args: Prisma.AccessLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogsPayload>[]
          }
          create: {
            args: Prisma.AccessLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogsPayload>
          }
          createMany: {
            args: Prisma.AccessLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogsPayload>[]
          }
          delete: {
            args: Prisma.AccessLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogsPayload>
          }
          update: {
            args: Prisma.AccessLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogsPayload>
          }
          deleteMany: {
            args: Prisma.AccessLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogsPayload>[]
          }
          upsert: {
            args: Prisma.AccessLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogsPayload>
          }
          aggregate: {
            args: Prisma.AccessLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessLogs>
          }
          groupBy: {
            args: Prisma.AccessLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessLogsCountArgs<ExtArgs>
            result: $Utils.Optional<AccessLogsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    users?: UsersOmit
    patients?: PatientsOmit
    doctors?: DoctorsOmit
    medicalHistory?: MedicalHistoryOmit
    labOrders?: LabOrdersOmit
    labResults?: LabResultsOmit
    diseases?: DiseasesOmit
    diagnoses?: DiagnosesOmit
    cases?: CasesOmit
    accessLogs?: AccessLogsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    LabOrders: number
    MedicalHistory: number
    LabResults: number
    AccessLogs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LabOrders?: boolean | UsersCountOutputTypeCountLabOrdersArgs
    MedicalHistory?: boolean | UsersCountOutputTypeCountMedicalHistoryArgs
    LabResults?: boolean | UsersCountOutputTypeCountLabResultsArgs
    AccessLogs?: boolean | UsersCountOutputTypeCountAccessLogsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLabOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabOrdersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMedicalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalHistoryWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLabResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabResultsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessLogsWhereInput
  }


  /**
   * Count Type PatientsCountOutputType
   */

  export type PatientsCountOutputType = {
    MedicalHistory: number
    LabOrders: number
    LabResults: number
    Diagnoses: number
    Cases: number
    AccessLogs: number
  }

  export type PatientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MedicalHistory?: boolean | PatientsCountOutputTypeCountMedicalHistoryArgs
    LabOrders?: boolean | PatientsCountOutputTypeCountLabOrdersArgs
    LabResults?: boolean | PatientsCountOutputTypeCountLabResultsArgs
    Diagnoses?: boolean | PatientsCountOutputTypeCountDiagnosesArgs
    Cases?: boolean | PatientsCountOutputTypeCountCasesArgs
    AccessLogs?: boolean | PatientsCountOutputTypeCountAccessLogsArgs
  }

  // Custom InputTypes
  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientsCountOutputType
     */
    select?: PatientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountMedicalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalHistoryWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountLabOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabOrdersWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountLabResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabResultsWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountDiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosesWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasesWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessLogsWhereInput
  }


  /**
   * Count Type DoctorsCountOutputType
   */

  export type DoctorsCountOutputType = {
    Cases: number
  }

  export type DoctorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cases?: boolean | DoctorsCountOutputTypeCountCasesArgs
  }

  // Custom InputTypes
  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsCountOutputType
     */
    select?: DoctorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasesWhereInput
  }


  /**
   * Count Type LabOrdersCountOutputType
   */

  export type LabOrdersCountOutputType = {
    LabResults: number
  }

  export type LabOrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LabResults?: boolean | LabOrdersCountOutputTypeCountLabResultsArgs
  }

  // Custom InputTypes
  /**
   * LabOrdersCountOutputType without action
   */
  export type LabOrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrdersCountOutputType
     */
    select?: LabOrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabOrdersCountOutputType without action
   */
  export type LabOrdersCountOutputTypeCountLabResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabResultsWhereInput
  }


  /**
   * Count Type DiseasesCountOutputType
   */

  export type DiseasesCountOutputType = {
    Diagnoses: number
  }

  export type DiseasesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diagnoses?: boolean | DiseasesCountOutputTypeCountDiagnosesArgs
  }

  // Custom InputTypes
  /**
   * DiseasesCountOutputType without action
   */
  export type DiseasesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseasesCountOutputType
     */
    select?: DiseasesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiseasesCountOutputType without action
   */
  export type DiseasesCountOutputTypeCountDiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosesWhereInput
  }


  /**
   * Count Type DiagnosesCountOutputType
   */

  export type DiagnosesCountOutputType = {
    Cases: number
  }

  export type DiagnosesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cases?: boolean | DiagnosesCountOutputTypeCountCasesArgs
  }

  // Custom InputTypes
  /**
   * DiagnosesCountOutputType without action
   */
  export type DiagnosesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosesCountOutputType
     */
    select?: DiagnosesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosesCountOutputType without action
   */
  export type DiagnosesCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    username: string | null
    password_hash: string | null
    full_name: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    username: string | null
    password_hash: string | null
    full_name: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    username: number
    password_hash: number
    full_name: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    username?: true
    password_hash?: true
    full_name?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    username?: true
    password_hash?: true
    full_name?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    username?: true
    password_hash?: true
    full_name?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    password_hash?: boolean
    full_name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    doctor?: boolean | Users$doctorArgs<ExtArgs>
    LabOrders?: boolean | Users$LabOrdersArgs<ExtArgs>
    MedicalHistory?: boolean | Users$MedicalHistoryArgs<ExtArgs>
    LabResults?: boolean | Users$LabResultsArgs<ExtArgs>
    AccessLogs?: boolean | Users$AccessLogsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    password_hash?: boolean
    full_name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    password_hash?: boolean
    full_name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_id?: boolean
    username?: boolean
    password_hash?: boolean
    full_name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "password_hash" | "full_name" | "role" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | Users$doctorArgs<ExtArgs>
    LabOrders?: boolean | Users$LabOrdersArgs<ExtArgs>
    MedicalHistory?: boolean | Users$MedicalHistoryArgs<ExtArgs>
    LabResults?: boolean | Users$LabResultsArgs<ExtArgs>
    AccessLogs?: boolean | Users$AccessLogsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      doctor: Prisma.$DoctorsPayload<ExtArgs> | null
      LabOrders: Prisma.$LabOrdersPayload<ExtArgs>[]
      MedicalHistory: Prisma.$MedicalHistoryPayload<ExtArgs>[]
      LabResults: Prisma.$LabResultsPayload<ExtArgs>[]
      AccessLogs: Prisma.$AccessLogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      username: string
      password_hash: string
      full_name: string
      role: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends Users$doctorArgs<ExtArgs> = {}>(args?: Subset<T, Users$doctorArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    LabOrders<T extends Users$LabOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Users$LabOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MedicalHistory<T extends Users$MedicalHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Users$MedicalHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LabResults<T extends Users$LabResultsArgs<ExtArgs> = {}>(args?: Subset<T, Users$LabResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AccessLogs<T extends Users$AccessLogsArgs<ExtArgs> = {}>(args?: Subset<T, Users$AccessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'Int'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password_hash: FieldRef<"Users", 'String'>
    readonly full_name: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.doctor
   */
  export type Users$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    where?: DoctorsWhereInput
  }

  /**
   * Users.LabOrders
   */
  export type Users$LabOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
    where?: LabOrdersWhereInput
    orderBy?: LabOrdersOrderByWithRelationInput | LabOrdersOrderByWithRelationInput[]
    cursor?: LabOrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabOrdersScalarFieldEnum | LabOrdersScalarFieldEnum[]
  }

  /**
   * Users.MedicalHistory
   */
  export type Users$MedicalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    where?: MedicalHistoryWhereInput
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    cursor?: MedicalHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * Users.LabResults
   */
  export type Users$LabResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    where?: LabResultsWhereInput
    orderBy?: LabResultsOrderByWithRelationInput | LabResultsOrderByWithRelationInput[]
    cursor?: LabResultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabResultsScalarFieldEnum | LabResultsScalarFieldEnum[]
  }

  /**
   * Users.AccessLogs
   */
  export type Users$AccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
    where?: AccessLogsWhereInput
    orderBy?: AccessLogsOrderByWithRelationInput | AccessLogsOrderByWithRelationInput[]
    cursor?: AccessLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessLogsScalarFieldEnum | AccessLogsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Patients
   */

  export type AggregatePatients = {
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  export type PatientsAvgAggregateOutputType = {
    patient_id: number | null
  }

  export type PatientsSumAggregateOutputType = {
    patient_id: number | null
  }

  export type PatientsMinAggregateOutputType = {
    patient_id: number | null
    full_name: string | null
    date_of_birth: Date | null
    gender: string | null
    phone_number: string | null
    address: string | null
    allergies: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PatientsMaxAggregateOutputType = {
    patient_id: number | null
    full_name: string | null
    date_of_birth: Date | null
    gender: string | null
    phone_number: string | null
    address: string | null
    allergies: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PatientsCountAggregateOutputType = {
    patient_id: number
    full_name: number
    date_of_birth: number
    gender: number
    phone_number: number
    address: number
    allergies: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PatientsAvgAggregateInputType = {
    patient_id?: true
  }

  export type PatientsSumAggregateInputType = {
    patient_id?: true
  }

  export type PatientsMinAggregateInputType = {
    patient_id?: true
    full_name?: true
    date_of_birth?: true
    gender?: true
    phone_number?: true
    address?: true
    allergies?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type PatientsMaxAggregateInputType = {
    patient_id?: true
    full_name?: true
    date_of_birth?: true
    gender?: true
    phone_number?: true
    address?: true
    allergies?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type PatientsCountAggregateInputType = {
    patient_id?: true
    full_name?: true
    date_of_birth?: true
    gender?: true
    phone_number?: true
    address?: true
    allergies?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PatientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to aggregate.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientsMaxAggregateInputType
  }

  export type GetPatientsAggregateType<T extends PatientsAggregateArgs> = {
        [P in keyof T & keyof AggregatePatients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatients[P]>
      : GetScalarType<T[P], AggregatePatients[P]>
  }




  export type PatientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientsWhereInput
    orderBy?: PatientsOrderByWithAggregationInput | PatientsOrderByWithAggregationInput[]
    by: PatientsScalarFieldEnum[] | PatientsScalarFieldEnum
    having?: PatientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientsCountAggregateInputType | true
    _avg?: PatientsAvgAggregateInputType
    _sum?: PatientsSumAggregateInputType
    _min?: PatientsMinAggregateInputType
    _max?: PatientsMaxAggregateInputType
  }

  export type PatientsGroupByOutputType = {
    patient_id: number
    full_name: string
    date_of_birth: Date
    gender: string
    phone_number: string
    address: string
    allergies: string | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  type GetPatientsGroupByPayload<T extends PatientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientsGroupByOutputType[P]>
            : GetScalarType<T[P], PatientsGroupByOutputType[P]>
        }
      >
    >


  export type PatientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    full_name?: boolean
    date_of_birth?: boolean
    gender?: boolean
    phone_number?: boolean
    address?: boolean
    allergies?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    MedicalHistory?: boolean | Patients$MedicalHistoryArgs<ExtArgs>
    LabOrders?: boolean | Patients$LabOrdersArgs<ExtArgs>
    LabResults?: boolean | Patients$LabResultsArgs<ExtArgs>
    Diagnoses?: boolean | Patients$DiagnosesArgs<ExtArgs>
    Cases?: boolean | Patients$CasesArgs<ExtArgs>
    AccessLogs?: boolean | Patients$AccessLogsArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type PatientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    full_name?: boolean
    date_of_birth?: boolean
    gender?: boolean
    phone_number?: boolean
    address?: boolean
    allergies?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["patients"]>

  export type PatientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    full_name?: boolean
    date_of_birth?: boolean
    gender?: boolean
    phone_number?: boolean
    address?: boolean
    allergies?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["patients"]>

  export type PatientsSelectScalar = {
    patient_id?: boolean
    full_name?: boolean
    date_of_birth?: boolean
    gender?: boolean
    phone_number?: boolean
    address?: boolean
    allergies?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PatientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"patient_id" | "full_name" | "date_of_birth" | "gender" | "phone_number" | "address" | "allergies" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["patients"]>
  export type PatientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MedicalHistory?: boolean | Patients$MedicalHistoryArgs<ExtArgs>
    LabOrders?: boolean | Patients$LabOrdersArgs<ExtArgs>
    LabResults?: boolean | Patients$LabResultsArgs<ExtArgs>
    Diagnoses?: boolean | Patients$DiagnosesArgs<ExtArgs>
    Cases?: boolean | Patients$CasesArgs<ExtArgs>
    AccessLogs?: boolean | Patients$AccessLogsArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patients"
    objects: {
      MedicalHistory: Prisma.$MedicalHistoryPayload<ExtArgs>[]
      LabOrders: Prisma.$LabOrdersPayload<ExtArgs>[]
      LabResults: Prisma.$LabResultsPayload<ExtArgs>[]
      Diagnoses: Prisma.$DiagnosesPayload<ExtArgs>[]
      Cases: Prisma.$CasesPayload<ExtArgs>[]
      AccessLogs: Prisma.$AccessLogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      patient_id: number
      full_name: string
      date_of_birth: Date
      gender: string
      phone_number: string
      address: string
      allergies: string | null
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["patients"]>
    composites: {}
  }

  type PatientsGetPayload<S extends boolean | null | undefined | PatientsDefaultArgs> = $Result.GetResult<Prisma.$PatientsPayload, S>

  type PatientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientsCountAggregateInputType | true
    }

  export interface PatientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patients'], meta: { name: 'Patients' } }
    /**
     * Find zero or one Patients that matches the filter.
     * @param {PatientsFindUniqueArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientsFindUniqueArgs>(args: SelectSubset<T, PatientsFindUniqueArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientsFindUniqueOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientsFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindFirstArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientsFindFirstArgs>(args?: SelectSubset<T, PatientsFindFirstArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindFirstOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientsFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patients.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patients.findMany({ take: 10 })
     * 
     * // Only select the `patient_id`
     * const patientsWithPatient_idOnly = await prisma.patients.findMany({ select: { patient_id: true } })
     * 
     */
    findMany<T extends PatientsFindManyArgs>(args?: SelectSubset<T, PatientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patients.
     * @param {PatientsCreateArgs} args - Arguments to create a Patients.
     * @example
     * // Create one Patients
     * const Patients = await prisma.patients.create({
     *   data: {
     *     // ... data to create a Patients
     *   }
     * })
     * 
     */
    create<T extends PatientsCreateArgs>(args: SelectSubset<T, PatientsCreateArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientsCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientsCreateManyArgs>(args?: SelectSubset<T, PatientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientsCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `patient_id`
     * const patientsWithPatient_idOnly = await prisma.patients.createManyAndReturn({
     *   select: { patient_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientsCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patients.
     * @param {PatientsDeleteArgs} args - Arguments to delete one Patients.
     * @example
     * // Delete one Patients
     * const Patients = await prisma.patients.delete({
     *   where: {
     *     // ... filter to delete one Patients
     *   }
     * })
     * 
     */
    delete<T extends PatientsDeleteArgs>(args: SelectSubset<T, PatientsDeleteArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patients.
     * @param {PatientsUpdateArgs} args - Arguments to update one Patients.
     * @example
     * // Update one Patients
     * const patients = await prisma.patients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientsUpdateArgs>(args: SelectSubset<T, PatientsUpdateArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientsDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientsDeleteManyArgs>(args?: SelectSubset<T, PatientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientsUpdateManyArgs>(args: SelectSubset<T, PatientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientsUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `patient_id`
     * const patientsWithPatient_idOnly = await prisma.patients.updateManyAndReturn({
     *   select: { patient_id: true },
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
    updateManyAndReturn<T extends PatientsUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patients.
     * @param {PatientsUpsertArgs} args - Arguments to update or create a Patients.
     * @example
     * // Update or create a Patients
     * const patients = await prisma.patients.upsert({
     *   create: {
     *     // ... data to create a Patients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patients we want to update
     *   }
     * })
     */
    upsert<T extends PatientsUpsertArgs>(args: SelectSubset<T, PatientsUpsertArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patients.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientsCountArgs>(
      args?: Subset<T, PatientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientsAggregateArgs>(args: Subset<T, PatientsAggregateArgs>): Prisma.PrismaPromise<GetPatientsAggregateType<T>>

    /**
     * Group by Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsGroupByArgs} args - Group by arguments.
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
      T extends PatientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientsGroupByArgs['orderBy'] }
        : { orderBy?: PatientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patients model
   */
  readonly fields: PatientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MedicalHistory<T extends Patients$MedicalHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Patients$MedicalHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LabOrders<T extends Patients$LabOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Patients$LabOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LabResults<T extends Patients$LabResultsArgs<ExtArgs> = {}>(args?: Subset<T, Patients$LabResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Diagnoses<T extends Patients$DiagnosesArgs<ExtArgs> = {}>(args?: Subset<T, Patients$DiagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cases<T extends Patients$CasesArgs<ExtArgs> = {}>(args?: Subset<T, Patients$CasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AccessLogs<T extends Patients$AccessLogsArgs<ExtArgs> = {}>(args?: Subset<T, Patients$AccessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patients model
   */
  interface PatientsFieldRefs {
    readonly patient_id: FieldRef<"Patients", 'Int'>
    readonly full_name: FieldRef<"Patients", 'String'>
    readonly date_of_birth: FieldRef<"Patients", 'DateTime'>
    readonly gender: FieldRef<"Patients", 'String'>
    readonly phone_number: FieldRef<"Patients", 'String'>
    readonly address: FieldRef<"Patients", 'String'>
    readonly allergies: FieldRef<"Patients", 'String'>
    readonly is_active: FieldRef<"Patients", 'Boolean'>
    readonly created_at: FieldRef<"Patients", 'DateTime'>
    readonly updated_at: FieldRef<"Patients", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patients findUnique
   */
  export type PatientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients findUniqueOrThrow
   */
  export type PatientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients findFirst
   */
  export type PatientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients findFirstOrThrow
   */
  export type PatientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients findMany
   */
  export type PatientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients create
   */
  export type PatientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Patients.
     */
    data: XOR<PatientsCreateInput, PatientsUncheckedCreateInput>
  }

  /**
   * Patients createMany
   */
  export type PatientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientsCreateManyInput | PatientsCreateManyInput[]
  }

  /**
   * Patients createManyAndReturn
   */
  export type PatientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientsCreateManyInput | PatientsCreateManyInput[]
  }

  /**
   * Patients update
   */
  export type PatientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Patients.
     */
    data: XOR<PatientsUpdateInput, PatientsUncheckedUpdateInput>
    /**
     * Choose, which Patients to update.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients updateMany
   */
  export type PatientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patients updateManyAndReturn
   */
  export type PatientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patients upsert
   */
  export type PatientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Patients to update in case it exists.
     */
    where: PatientsWhereUniqueInput
    /**
     * In case the Patients found by the `where` argument doesn't exist, create a new Patients with this data.
     */
    create: XOR<PatientsCreateInput, PatientsUncheckedCreateInput>
    /**
     * In case the Patients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientsUpdateInput, PatientsUncheckedUpdateInput>
  }

  /**
   * Patients delete
   */
  export type PatientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter which Patients to delete.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients deleteMany
   */
  export type PatientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patients.MedicalHistory
   */
  export type Patients$MedicalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    where?: MedicalHistoryWhereInput
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    cursor?: MedicalHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * Patients.LabOrders
   */
  export type Patients$LabOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
    where?: LabOrdersWhereInput
    orderBy?: LabOrdersOrderByWithRelationInput | LabOrdersOrderByWithRelationInput[]
    cursor?: LabOrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabOrdersScalarFieldEnum | LabOrdersScalarFieldEnum[]
  }

  /**
   * Patients.LabResults
   */
  export type Patients$LabResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    where?: LabResultsWhereInput
    orderBy?: LabResultsOrderByWithRelationInput | LabResultsOrderByWithRelationInput[]
    cursor?: LabResultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabResultsScalarFieldEnum | LabResultsScalarFieldEnum[]
  }

  /**
   * Patients.Diagnoses
   */
  export type Patients$DiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    where?: DiagnosesWhereInput
    orderBy?: DiagnosesOrderByWithRelationInput | DiagnosesOrderByWithRelationInput[]
    cursor?: DiagnosesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * Patients.Cases
   */
  export type Patients$CasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    where?: CasesWhereInput
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    cursor?: CasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasesScalarFieldEnum | CasesScalarFieldEnum[]
  }

  /**
   * Patients.AccessLogs
   */
  export type Patients$AccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
    where?: AccessLogsWhereInput
    orderBy?: AccessLogsOrderByWithRelationInput | AccessLogsOrderByWithRelationInput[]
    cursor?: AccessLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessLogsScalarFieldEnum | AccessLogsScalarFieldEnum[]
  }

  /**
   * Patients without action
   */
  export type PatientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
  }


  /**
   * Model Doctors
   */

  export type AggregateDoctors = {
    _count: DoctorsCountAggregateOutputType | null
    _avg: DoctorsAvgAggregateOutputType | null
    _sum: DoctorsSumAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  export type DoctorsAvgAggregateOutputType = {
    doctor_id: number | null
    user_id: number | null
  }

  export type DoctorsSumAggregateOutputType = {
    doctor_id: number | null
    user_id: number | null
  }

  export type DoctorsMinAggregateOutputType = {
    doctor_id: number | null
    user_id: number | null
    specialty: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DoctorsMaxAggregateOutputType = {
    doctor_id: number | null
    user_id: number | null
    specialty: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DoctorsCountAggregateOutputType = {
    doctor_id: number
    user_id: number
    specialty: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DoctorsAvgAggregateInputType = {
    doctor_id?: true
    user_id?: true
  }

  export type DoctorsSumAggregateInputType = {
    doctor_id?: true
    user_id?: true
  }

  export type DoctorsMinAggregateInputType = {
    doctor_id?: true
    user_id?: true
    specialty?: true
    created_at?: true
    updated_at?: true
  }

  export type DoctorsMaxAggregateInputType = {
    doctor_id?: true
    user_id?: true
    specialty?: true
    created_at?: true
    updated_at?: true
  }

  export type DoctorsCountAggregateInputType = {
    doctor_id?: true
    user_id?: true
    specialty?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DoctorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to aggregate.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorsMaxAggregateInputType
  }

  export type GetDoctorsAggregateType<T extends DoctorsAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctors[P]>
      : GetScalarType<T[P], AggregateDoctors[P]>
  }




  export type DoctorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorsWhereInput
    orderBy?: DoctorsOrderByWithAggregationInput | DoctorsOrderByWithAggregationInput[]
    by: DoctorsScalarFieldEnum[] | DoctorsScalarFieldEnum
    having?: DoctorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorsCountAggregateInputType | true
    _avg?: DoctorsAvgAggregateInputType
    _sum?: DoctorsSumAggregateInputType
    _min?: DoctorsMinAggregateInputType
    _max?: DoctorsMaxAggregateInputType
  }

  export type DoctorsGroupByOutputType = {
    doctor_id: number
    user_id: number
    specialty: string
    created_at: Date
    updated_at: Date
    _count: DoctorsCountAggregateOutputType | null
    _avg: DoctorsAvgAggregateOutputType | null
    _sum: DoctorsSumAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  type GetDoctorsGroupByPayload<T extends DoctorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
        }
      >
    >


  export type DoctorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctor_id?: boolean
    user_id?: boolean
    specialty?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Cases?: boolean | Doctors$CasesArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type DoctorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctor_id?: boolean
    user_id?: boolean
    specialty?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type DoctorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctor_id?: boolean
    user_id?: boolean
    specialty?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type DoctorsSelectScalar = {
    doctor_id?: boolean
    user_id?: boolean
    specialty?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DoctorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"doctor_id" | "user_id" | "specialty" | "created_at" | "updated_at", ExtArgs["result"]["doctors"]>
  export type DoctorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Cases?: boolean | Doctors$CasesArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type DoctorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $DoctorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctors"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      Cases: Prisma.$CasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      doctor_id: number
      user_id: number
      specialty: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["doctors"]>
    composites: {}
  }

  type DoctorsGetPayload<S extends boolean | null | undefined | DoctorsDefaultArgs> = $Result.GetResult<Prisma.$DoctorsPayload, S>

  type DoctorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorsCountAggregateInputType | true
    }

  export interface DoctorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctors'], meta: { name: 'Doctors' } }
    /**
     * Find zero or one Doctors that matches the filter.
     * @param {DoctorsFindUniqueArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorsFindUniqueArgs>(args: SelectSubset<T, DoctorsFindUniqueArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorsFindUniqueOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorsFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsFindFirstArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorsFindFirstArgs>(args?: SelectSubset<T, DoctorsFindFirstArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsFindFirstOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorsFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctors.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctors.findMany({ take: 10 })
     * 
     * // Only select the `doctor_id`
     * const doctorsWithDoctor_idOnly = await prisma.doctors.findMany({ select: { doctor_id: true } })
     * 
     */
    findMany<T extends DoctorsFindManyArgs>(args?: SelectSubset<T, DoctorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctors.
     * @param {DoctorsCreateArgs} args - Arguments to create a Doctors.
     * @example
     * // Create one Doctors
     * const Doctors = await prisma.doctors.create({
     *   data: {
     *     // ... data to create a Doctors
     *   }
     * })
     * 
     */
    create<T extends DoctorsCreateArgs>(args: SelectSubset<T, DoctorsCreateArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorsCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctors = await prisma.doctors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorsCreateManyArgs>(args?: SelectSubset<T, DoctorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorsCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctors = await prisma.doctors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `doctor_id`
     * const doctorsWithDoctor_idOnly = await prisma.doctors.createManyAndReturn({
     *   select: { doctor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorsCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctors.
     * @param {DoctorsDeleteArgs} args - Arguments to delete one Doctors.
     * @example
     * // Delete one Doctors
     * const Doctors = await prisma.doctors.delete({
     *   where: {
     *     // ... filter to delete one Doctors
     *   }
     * })
     * 
     */
    delete<T extends DoctorsDeleteArgs>(args: SelectSubset<T, DoctorsDeleteArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctors.
     * @param {DoctorsUpdateArgs} args - Arguments to update one Doctors.
     * @example
     * // Update one Doctors
     * const doctors = await prisma.doctors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorsUpdateArgs>(args: SelectSubset<T, DoctorsUpdateArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorsDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorsDeleteManyArgs>(args?: SelectSubset<T, DoctorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctors = await prisma.doctors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorsUpdateManyArgs>(args: SelectSubset<T, DoctorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorsUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctors = await prisma.doctors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `doctor_id`
     * const doctorsWithDoctor_idOnly = await prisma.doctors.updateManyAndReturn({
     *   select: { doctor_id: true },
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
    updateManyAndReturn<T extends DoctorsUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctors.
     * @param {DoctorsUpsertArgs} args - Arguments to update or create a Doctors.
     * @example
     * // Update or create a Doctors
     * const doctors = await prisma.doctors.upsert({
     *   create: {
     *     // ... data to create a Doctors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctors we want to update
     *   }
     * })
     */
    upsert<T extends DoctorsUpsertArgs>(args: SelectSubset<T, DoctorsUpsertArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctors.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorsCountArgs>(
      args?: Subset<T, DoctorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorsAggregateArgs>(args: Subset<T, DoctorsAggregateArgs>): Prisma.PrismaPromise<GetDoctorsAggregateType<T>>

    /**
     * Group by Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsGroupByArgs} args - Group by arguments.
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
      T extends DoctorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorsGroupByArgs['orderBy'] }
        : { orderBy?: DoctorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctors model
   */
  readonly fields: DoctorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Cases<T extends Doctors$CasesArgs<ExtArgs> = {}>(args?: Subset<T, Doctors$CasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Doctors model
   */
  interface DoctorsFieldRefs {
    readonly doctor_id: FieldRef<"Doctors", 'Int'>
    readonly user_id: FieldRef<"Doctors", 'Int'>
    readonly specialty: FieldRef<"Doctors", 'String'>
    readonly created_at: FieldRef<"Doctors", 'DateTime'>
    readonly updated_at: FieldRef<"Doctors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doctors findUnique
   */
  export type DoctorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors findUniqueOrThrow
   */
  export type DoctorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors findFirst
   */
  export type DoctorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * Doctors findFirstOrThrow
   */
  export type DoctorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * Doctors findMany
   */
  export type DoctorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * Doctors create
   */
  export type DoctorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctors.
     */
    data: XOR<DoctorsCreateInput, DoctorsUncheckedCreateInput>
  }

  /**
   * Doctors createMany
   */
  export type DoctorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorsCreateManyInput | DoctorsCreateManyInput[]
  }

  /**
   * Doctors createManyAndReturn
   */
  export type DoctorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorsCreateManyInput | DoctorsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctors update
   */
  export type DoctorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctors.
     */
    data: XOR<DoctorsUpdateInput, DoctorsUncheckedUpdateInput>
    /**
     * Choose, which Doctors to update.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors updateMany
   */
  export type DoctorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorsUpdateManyMutationInput, DoctorsUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorsWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctors updateManyAndReturn
   */
  export type DoctorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorsUpdateManyMutationInput, DoctorsUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorsWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctors upsert
   */
  export type DoctorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctors to update in case it exists.
     */
    where: DoctorsWhereUniqueInput
    /**
     * In case the Doctors found by the `where` argument doesn't exist, create a new Doctors with this data.
     */
    create: XOR<DoctorsCreateInput, DoctorsUncheckedCreateInput>
    /**
     * In case the Doctors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorsUpdateInput, DoctorsUncheckedUpdateInput>
  }

  /**
   * Doctors delete
   */
  export type DoctorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter which Doctors to delete.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors deleteMany
   */
  export type DoctorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorsWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctors.Cases
   */
  export type Doctors$CasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    where?: CasesWhereInput
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    cursor?: CasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasesScalarFieldEnum | CasesScalarFieldEnum[]
  }

  /**
   * Doctors without action
   */
  export type DoctorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
  }


  /**
   * Model MedicalHistory
   */

  export type AggregateMedicalHistory = {
    _count: MedicalHistoryCountAggregateOutputType | null
    _avg: MedicalHistoryAvgAggregateOutputType | null
    _sum: MedicalHistorySumAggregateOutputType | null
    _min: MedicalHistoryMinAggregateOutputType | null
    _max: MedicalHistoryMaxAggregateOutputType | null
  }

  export type MedicalHistoryAvgAggregateOutputType = {
    history_id: number | null
    patient_id: number | null
    technician_id: number | null
  }

  export type MedicalHistorySumAggregateOutputType = {
    history_id: number | null
    patient_id: number | null
    technician_id: number | null
  }

  export type MedicalHistoryMinAggregateOutputType = {
    history_id: number | null
    patient_id: number | null
    technician_id: number | null
    record_date: Date | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MedicalHistoryMaxAggregateOutputType = {
    history_id: number | null
    patient_id: number | null
    technician_id: number | null
    record_date: Date | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MedicalHistoryCountAggregateOutputType = {
    history_id: number
    patient_id: number
    technician_id: number
    record_date: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MedicalHistoryAvgAggregateInputType = {
    history_id?: true
    patient_id?: true
    technician_id?: true
  }

  export type MedicalHistorySumAggregateInputType = {
    history_id?: true
    patient_id?: true
    technician_id?: true
  }

  export type MedicalHistoryMinAggregateInputType = {
    history_id?: true
    patient_id?: true
    technician_id?: true
    record_date?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type MedicalHistoryMaxAggregateInputType = {
    history_id?: true
    patient_id?: true
    technician_id?: true
    record_date?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type MedicalHistoryCountAggregateInputType = {
    history_id?: true
    patient_id?: true
    technician_id?: true
    record_date?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MedicalHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalHistory to aggregate.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalHistories
    **/
    _count?: true | MedicalHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalHistoryMaxAggregateInputType
  }

  export type GetMedicalHistoryAggregateType<T extends MedicalHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalHistory[P]>
      : GetScalarType<T[P], AggregateMedicalHistory[P]>
  }




  export type MedicalHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalHistoryWhereInput
    orderBy?: MedicalHistoryOrderByWithAggregationInput | MedicalHistoryOrderByWithAggregationInput[]
    by: MedicalHistoryScalarFieldEnum[] | MedicalHistoryScalarFieldEnum
    having?: MedicalHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalHistoryCountAggregateInputType | true
    _avg?: MedicalHistoryAvgAggregateInputType
    _sum?: MedicalHistorySumAggregateInputType
    _min?: MedicalHistoryMinAggregateInputType
    _max?: MedicalHistoryMaxAggregateInputType
  }

  export type MedicalHistoryGroupByOutputType = {
    history_id: number
    patient_id: number
    technician_id: number
    record_date: Date
    description: string
    created_at: Date
    updated_at: Date
    _count: MedicalHistoryCountAggregateOutputType | null
    _avg: MedicalHistoryAvgAggregateOutputType | null
    _sum: MedicalHistorySumAggregateOutputType | null
    _min: MedicalHistoryMinAggregateOutputType | null
    _max: MedicalHistoryMaxAggregateOutputType | null
  }

  type GetMedicalHistoryGroupByPayload<T extends MedicalHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalHistoryGroupByOutputType[P]>
        }
      >
    >


  export type MedicalHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    history_id?: boolean
    patient_id?: boolean
    technician_id?: boolean
    record_date?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalHistory"]>

  export type MedicalHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    history_id?: boolean
    patient_id?: boolean
    technician_id?: boolean
    record_date?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalHistory"]>

  export type MedicalHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    history_id?: boolean
    patient_id?: boolean
    technician_id?: boolean
    record_date?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalHistory"]>

  export type MedicalHistorySelectScalar = {
    history_id?: boolean
    patient_id?: boolean
    technician_id?: boolean
    record_date?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MedicalHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"history_id" | "patient_id" | "technician_id" | "record_date" | "description" | "created_at" | "updated_at", ExtArgs["result"]["medicalHistory"]>
  export type MedicalHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MedicalHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MedicalHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $MedicalHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalHistory"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
      technician: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      history_id: number
      patient_id: number
      technician_id: number
      record_date: Date
      description: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["medicalHistory"]>
    composites: {}
  }

  type MedicalHistoryGetPayload<S extends boolean | null | undefined | MedicalHistoryDefaultArgs> = $Result.GetResult<Prisma.$MedicalHistoryPayload, S>

  type MedicalHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalHistoryCountAggregateInputType | true
    }

  export interface MedicalHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalHistory'], meta: { name: 'MedicalHistory' } }
    /**
     * Find zero or one MedicalHistory that matches the filter.
     * @param {MedicalHistoryFindUniqueArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalHistoryFindUniqueArgs>(args: SelectSubset<T, MedicalHistoryFindUniqueArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalHistoryFindUniqueOrThrowArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindFirstArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalHistoryFindFirstArgs>(args?: SelectSubset<T, MedicalHistoryFindFirstArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindFirstOrThrowArgs} args - Arguments to find a MedicalHistory
     * @example
     * // Get one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalHistories
     * const medicalHistories = await prisma.medicalHistory.findMany()
     * 
     * // Get first 10 MedicalHistories
     * const medicalHistories = await prisma.medicalHistory.findMany({ take: 10 })
     * 
     * // Only select the `history_id`
     * const medicalHistoryWithHistory_idOnly = await prisma.medicalHistory.findMany({ select: { history_id: true } })
     * 
     */
    findMany<T extends MedicalHistoryFindManyArgs>(args?: SelectSubset<T, MedicalHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalHistory.
     * @param {MedicalHistoryCreateArgs} args - Arguments to create a MedicalHistory.
     * @example
     * // Create one MedicalHistory
     * const MedicalHistory = await prisma.medicalHistory.create({
     *   data: {
     *     // ... data to create a MedicalHistory
     *   }
     * })
     * 
     */
    create<T extends MedicalHistoryCreateArgs>(args: SelectSubset<T, MedicalHistoryCreateArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalHistories.
     * @param {MedicalHistoryCreateManyArgs} args - Arguments to create many MedicalHistories.
     * @example
     * // Create many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalHistoryCreateManyArgs>(args?: SelectSubset<T, MedicalHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalHistories and returns the data saved in the database.
     * @param {MedicalHistoryCreateManyAndReturnArgs} args - Arguments to create many MedicalHistories.
     * @example
     * // Create many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalHistories and only return the `history_id`
     * const medicalHistoryWithHistory_idOnly = await prisma.medicalHistory.createManyAndReturn({
     *   select: { history_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalHistory.
     * @param {MedicalHistoryDeleteArgs} args - Arguments to delete one MedicalHistory.
     * @example
     * // Delete one MedicalHistory
     * const MedicalHistory = await prisma.medicalHistory.delete({
     *   where: {
     *     // ... filter to delete one MedicalHistory
     *   }
     * })
     * 
     */
    delete<T extends MedicalHistoryDeleteArgs>(args: SelectSubset<T, MedicalHistoryDeleteArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalHistory.
     * @param {MedicalHistoryUpdateArgs} args - Arguments to update one MedicalHistory.
     * @example
     * // Update one MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalHistoryUpdateArgs>(args: SelectSubset<T, MedicalHistoryUpdateArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalHistories.
     * @param {MedicalHistoryDeleteManyArgs} args - Arguments to filter MedicalHistories to delete.
     * @example
     * // Delete a few MedicalHistories
     * const { count } = await prisma.medicalHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalHistoryDeleteManyArgs>(args?: SelectSubset<T, MedicalHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalHistoryUpdateManyArgs>(args: SelectSubset<T, MedicalHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalHistories and returns the data updated in the database.
     * @param {MedicalHistoryUpdateManyAndReturnArgs} args - Arguments to update many MedicalHistories.
     * @example
     * // Update many MedicalHistories
     * const medicalHistory = await prisma.medicalHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalHistories and only return the `history_id`
     * const medicalHistoryWithHistory_idOnly = await prisma.medicalHistory.updateManyAndReturn({
     *   select: { history_id: true },
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
    updateManyAndReturn<T extends MedicalHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalHistory.
     * @param {MedicalHistoryUpsertArgs} args - Arguments to update or create a MedicalHistory.
     * @example
     * // Update or create a MedicalHistory
     * const medicalHistory = await prisma.medicalHistory.upsert({
     *   create: {
     *     // ... data to create a MedicalHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalHistory we want to update
     *   }
     * })
     */
    upsert<T extends MedicalHistoryUpsertArgs>(args: SelectSubset<T, MedicalHistoryUpsertArgs<ExtArgs>>): Prisma__MedicalHistoryClient<$Result.GetResult<Prisma.$MedicalHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryCountArgs} args - Arguments to filter MedicalHistories to count.
     * @example
     * // Count the number of MedicalHistories
     * const count = await prisma.medicalHistory.count({
     *   where: {
     *     // ... the filter for the MedicalHistories we want to count
     *   }
     * })
    **/
    count<T extends MedicalHistoryCountArgs>(
      args?: Subset<T, MedicalHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalHistoryAggregateArgs>(args: Subset<T, MedicalHistoryAggregateArgs>): Prisma.PrismaPromise<GetMedicalHistoryAggregateType<T>>

    /**
     * Group by MedicalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalHistoryGroupByArgs} args - Group by arguments.
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
      T extends MedicalHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalHistoryGroupByArgs['orderBy'] }
        : { orderBy?: MedicalHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalHistory model
   */
  readonly fields: MedicalHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    technician<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicalHistory model
   */
  interface MedicalHistoryFieldRefs {
    readonly history_id: FieldRef<"MedicalHistory", 'Int'>
    readonly patient_id: FieldRef<"MedicalHistory", 'Int'>
    readonly technician_id: FieldRef<"MedicalHistory", 'Int'>
    readonly record_date: FieldRef<"MedicalHistory", 'DateTime'>
    readonly description: FieldRef<"MedicalHistory", 'String'>
    readonly created_at: FieldRef<"MedicalHistory", 'DateTime'>
    readonly updated_at: FieldRef<"MedicalHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalHistory findUnique
   */
  export type MedicalHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory findUniqueOrThrow
   */
  export type MedicalHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory findFirst
   */
  export type MedicalHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalHistories.
     */
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory findFirstOrThrow
   */
  export type MedicalHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistory to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalHistories.
     */
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory findMany
   */
  export type MedicalHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalHistories to fetch.
     */
    where?: MedicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalHistories to fetch.
     */
    orderBy?: MedicalHistoryOrderByWithRelationInput | MedicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalHistories.
     */
    cursor?: MedicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalHistories.
     */
    skip?: number
    distinct?: MedicalHistoryScalarFieldEnum | MedicalHistoryScalarFieldEnum[]
  }

  /**
   * MedicalHistory create
   */
  export type MedicalHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalHistory.
     */
    data: XOR<MedicalHistoryCreateInput, MedicalHistoryUncheckedCreateInput>
  }

  /**
   * MedicalHistory createMany
   */
  export type MedicalHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalHistories.
     */
    data: MedicalHistoryCreateManyInput | MedicalHistoryCreateManyInput[]
  }

  /**
   * MedicalHistory createManyAndReturn
   */
  export type MedicalHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalHistories.
     */
    data: MedicalHistoryCreateManyInput | MedicalHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalHistory update
   */
  export type MedicalHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalHistory.
     */
    data: XOR<MedicalHistoryUpdateInput, MedicalHistoryUncheckedUpdateInput>
    /**
     * Choose, which MedicalHistory to update.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory updateMany
   */
  export type MedicalHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalHistories.
     */
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicalHistories to update
     */
    where?: MedicalHistoryWhereInput
    /**
     * Limit how many MedicalHistories to update.
     */
    limit?: number
  }

  /**
   * MedicalHistory updateManyAndReturn
   */
  export type MedicalHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * The data used to update MedicalHistories.
     */
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicalHistories to update
     */
    where?: MedicalHistoryWhereInput
    /**
     * Limit how many MedicalHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalHistory upsert
   */
  export type MedicalHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalHistory to update in case it exists.
     */
    where: MedicalHistoryWhereUniqueInput
    /**
     * In case the MedicalHistory found by the `where` argument doesn't exist, create a new MedicalHistory with this data.
     */
    create: XOR<MedicalHistoryCreateInput, MedicalHistoryUncheckedCreateInput>
    /**
     * In case the MedicalHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalHistoryUpdateInput, MedicalHistoryUncheckedUpdateInput>
  }

  /**
   * MedicalHistory delete
   */
  export type MedicalHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
    /**
     * Filter which MedicalHistory to delete.
     */
    where: MedicalHistoryWhereUniqueInput
  }

  /**
   * MedicalHistory deleteMany
   */
  export type MedicalHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalHistories to delete
     */
    where?: MedicalHistoryWhereInput
    /**
     * Limit how many MedicalHistories to delete.
     */
    limit?: number
  }

  /**
   * MedicalHistory without action
   */
  export type MedicalHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalHistory
     */
    select?: MedicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalHistory
     */
    omit?: MedicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalHistoryInclude<ExtArgs> | null
  }


  /**
   * Model LabOrders
   */

  export type AggregateLabOrders = {
    _count: LabOrdersCountAggregateOutputType | null
    _avg: LabOrdersAvgAggregateOutputType | null
    _sum: LabOrdersSumAggregateOutputType | null
    _min: LabOrdersMinAggregateOutputType | null
    _max: LabOrdersMaxAggregateOutputType | null
  }

  export type LabOrdersAvgAggregateOutputType = {
    order_id: number | null
    patient_id: number | null
    ordered_by: number | null
  }

  export type LabOrdersSumAggregateOutputType = {
    order_id: number | null
    patient_id: number | null
    ordered_by: number | null
  }

  export type LabOrdersMinAggregateOutputType = {
    order_id: number | null
    patient_id: number | null
    ordered_by: number | null
    test_type: string | null
    order_date: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LabOrdersMaxAggregateOutputType = {
    order_id: number | null
    patient_id: number | null
    ordered_by: number | null
    test_type: string | null
    order_date: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LabOrdersCountAggregateOutputType = {
    order_id: number
    patient_id: number
    ordered_by: number
    test_type: number
    order_date: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LabOrdersAvgAggregateInputType = {
    order_id?: true
    patient_id?: true
    ordered_by?: true
  }

  export type LabOrdersSumAggregateInputType = {
    order_id?: true
    patient_id?: true
    ordered_by?: true
  }

  export type LabOrdersMinAggregateInputType = {
    order_id?: true
    patient_id?: true
    ordered_by?: true
    test_type?: true
    order_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type LabOrdersMaxAggregateInputType = {
    order_id?: true
    patient_id?: true
    ordered_by?: true
    test_type?: true
    order_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type LabOrdersCountAggregateInputType = {
    order_id?: true
    patient_id?: true
    ordered_by?: true
    test_type?: true
    order_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LabOrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabOrders to aggregate.
     */
    where?: LabOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabOrders to fetch.
     */
    orderBy?: LabOrdersOrderByWithRelationInput | LabOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabOrders
    **/
    _count?: true | LabOrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabOrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabOrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabOrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabOrdersMaxAggregateInputType
  }

  export type GetLabOrdersAggregateType<T extends LabOrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateLabOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabOrders[P]>
      : GetScalarType<T[P], AggregateLabOrders[P]>
  }




  export type LabOrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabOrdersWhereInput
    orderBy?: LabOrdersOrderByWithAggregationInput | LabOrdersOrderByWithAggregationInput[]
    by: LabOrdersScalarFieldEnum[] | LabOrdersScalarFieldEnum
    having?: LabOrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabOrdersCountAggregateInputType | true
    _avg?: LabOrdersAvgAggregateInputType
    _sum?: LabOrdersSumAggregateInputType
    _min?: LabOrdersMinAggregateInputType
    _max?: LabOrdersMaxAggregateInputType
  }

  export type LabOrdersGroupByOutputType = {
    order_id: number
    patient_id: number
    ordered_by: number
    test_type: string
    order_date: Date
    status: string
    created_at: Date
    updated_at: Date
    _count: LabOrdersCountAggregateOutputType | null
    _avg: LabOrdersAvgAggregateOutputType | null
    _sum: LabOrdersSumAggregateOutputType | null
    _min: LabOrdersMinAggregateOutputType | null
    _max: LabOrdersMaxAggregateOutputType | null
  }

  type GetLabOrdersGroupByPayload<T extends LabOrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabOrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabOrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabOrdersGroupByOutputType[P]>
            : GetScalarType<T[P], LabOrdersGroupByOutputType[P]>
        }
      >
    >


  export type LabOrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    patient_id?: boolean
    ordered_by?: boolean
    test_type?: boolean
    order_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    orderedBy?: boolean | UsersDefaultArgs<ExtArgs>
    LabResults?: boolean | LabOrders$LabResultsArgs<ExtArgs>
    _count?: boolean | LabOrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labOrders"]>

  export type LabOrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    patient_id?: boolean
    ordered_by?: boolean
    test_type?: boolean
    order_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    orderedBy?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labOrders"]>

  export type LabOrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    patient_id?: boolean
    ordered_by?: boolean
    test_type?: boolean
    order_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    orderedBy?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labOrders"]>

  export type LabOrdersSelectScalar = {
    order_id?: boolean
    patient_id?: boolean
    ordered_by?: boolean
    test_type?: boolean
    order_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LabOrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "patient_id" | "ordered_by" | "test_type" | "order_date" | "status" | "created_at" | "updated_at", ExtArgs["result"]["labOrders"]>
  export type LabOrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    orderedBy?: boolean | UsersDefaultArgs<ExtArgs>
    LabResults?: boolean | LabOrders$LabResultsArgs<ExtArgs>
    _count?: boolean | LabOrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabOrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    orderedBy?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LabOrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    orderedBy?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $LabOrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabOrders"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
      orderedBy: Prisma.$UsersPayload<ExtArgs>
      LabResults: Prisma.$LabResultsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      patient_id: number
      ordered_by: number
      test_type: string
      order_date: Date
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["labOrders"]>
    composites: {}
  }

  type LabOrdersGetPayload<S extends boolean | null | undefined | LabOrdersDefaultArgs> = $Result.GetResult<Prisma.$LabOrdersPayload, S>

  type LabOrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabOrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabOrdersCountAggregateInputType | true
    }

  export interface LabOrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabOrders'], meta: { name: 'LabOrders' } }
    /**
     * Find zero or one LabOrders that matches the filter.
     * @param {LabOrdersFindUniqueArgs} args - Arguments to find a LabOrders
     * @example
     * // Get one LabOrders
     * const labOrders = await prisma.labOrders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabOrdersFindUniqueArgs>(args: SelectSubset<T, LabOrdersFindUniqueArgs<ExtArgs>>): Prisma__LabOrdersClient<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabOrders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabOrdersFindUniqueOrThrowArgs} args - Arguments to find a LabOrders
     * @example
     * // Get one LabOrders
     * const labOrders = await prisma.labOrders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabOrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, LabOrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabOrdersClient<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabOrdersFindFirstArgs} args - Arguments to find a LabOrders
     * @example
     * // Get one LabOrders
     * const labOrders = await prisma.labOrders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabOrdersFindFirstArgs>(args?: SelectSubset<T, LabOrdersFindFirstArgs<ExtArgs>>): Prisma__LabOrdersClient<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabOrders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabOrdersFindFirstOrThrowArgs} args - Arguments to find a LabOrders
     * @example
     * // Get one LabOrders
     * const labOrders = await prisma.labOrders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabOrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, LabOrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabOrdersClient<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabOrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabOrders
     * const labOrders = await prisma.labOrders.findMany()
     * 
     * // Get first 10 LabOrders
     * const labOrders = await prisma.labOrders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const labOrdersWithOrder_idOnly = await prisma.labOrders.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends LabOrdersFindManyArgs>(args?: SelectSubset<T, LabOrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabOrders.
     * @param {LabOrdersCreateArgs} args - Arguments to create a LabOrders.
     * @example
     * // Create one LabOrders
     * const LabOrders = await prisma.labOrders.create({
     *   data: {
     *     // ... data to create a LabOrders
     *   }
     * })
     * 
     */
    create<T extends LabOrdersCreateArgs>(args: SelectSubset<T, LabOrdersCreateArgs<ExtArgs>>): Prisma__LabOrdersClient<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabOrders.
     * @param {LabOrdersCreateManyArgs} args - Arguments to create many LabOrders.
     * @example
     * // Create many LabOrders
     * const labOrders = await prisma.labOrders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabOrdersCreateManyArgs>(args?: SelectSubset<T, LabOrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabOrders and returns the data saved in the database.
     * @param {LabOrdersCreateManyAndReturnArgs} args - Arguments to create many LabOrders.
     * @example
     * // Create many LabOrders
     * const labOrders = await prisma.labOrders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabOrders and only return the `order_id`
     * const labOrdersWithOrder_idOnly = await prisma.labOrders.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabOrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, LabOrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabOrders.
     * @param {LabOrdersDeleteArgs} args - Arguments to delete one LabOrders.
     * @example
     * // Delete one LabOrders
     * const LabOrders = await prisma.labOrders.delete({
     *   where: {
     *     // ... filter to delete one LabOrders
     *   }
     * })
     * 
     */
    delete<T extends LabOrdersDeleteArgs>(args: SelectSubset<T, LabOrdersDeleteArgs<ExtArgs>>): Prisma__LabOrdersClient<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabOrders.
     * @param {LabOrdersUpdateArgs} args - Arguments to update one LabOrders.
     * @example
     * // Update one LabOrders
     * const labOrders = await prisma.labOrders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabOrdersUpdateArgs>(args: SelectSubset<T, LabOrdersUpdateArgs<ExtArgs>>): Prisma__LabOrdersClient<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabOrders.
     * @param {LabOrdersDeleteManyArgs} args - Arguments to filter LabOrders to delete.
     * @example
     * // Delete a few LabOrders
     * const { count } = await prisma.labOrders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabOrdersDeleteManyArgs>(args?: SelectSubset<T, LabOrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabOrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabOrders
     * const labOrders = await prisma.labOrders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabOrdersUpdateManyArgs>(args: SelectSubset<T, LabOrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabOrders and returns the data updated in the database.
     * @param {LabOrdersUpdateManyAndReturnArgs} args - Arguments to update many LabOrders.
     * @example
     * // Update many LabOrders
     * const labOrders = await prisma.labOrders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabOrders and only return the `order_id`
     * const labOrdersWithOrder_idOnly = await prisma.labOrders.updateManyAndReturn({
     *   select: { order_id: true },
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
    updateManyAndReturn<T extends LabOrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, LabOrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabOrders.
     * @param {LabOrdersUpsertArgs} args - Arguments to update or create a LabOrders.
     * @example
     * // Update or create a LabOrders
     * const labOrders = await prisma.labOrders.upsert({
     *   create: {
     *     // ... data to create a LabOrders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabOrders we want to update
     *   }
     * })
     */
    upsert<T extends LabOrdersUpsertArgs>(args: SelectSubset<T, LabOrdersUpsertArgs<ExtArgs>>): Prisma__LabOrdersClient<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabOrdersCountArgs} args - Arguments to filter LabOrders to count.
     * @example
     * // Count the number of LabOrders
     * const count = await prisma.labOrders.count({
     *   where: {
     *     // ... the filter for the LabOrders we want to count
     *   }
     * })
    **/
    count<T extends LabOrdersCountArgs>(
      args?: Subset<T, LabOrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabOrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabOrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabOrdersAggregateArgs>(args: Subset<T, LabOrdersAggregateArgs>): Prisma.PrismaPromise<GetLabOrdersAggregateType<T>>

    /**
     * Group by LabOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabOrdersGroupByArgs} args - Group by arguments.
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
      T extends LabOrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabOrdersGroupByArgs['orderBy'] }
        : { orderBy?: LabOrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabOrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabOrders model
   */
  readonly fields: LabOrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabOrders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabOrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderedBy<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    LabResults<T extends LabOrders$LabResultsArgs<ExtArgs> = {}>(args?: Subset<T, LabOrders$LabResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LabOrders model
   */
  interface LabOrdersFieldRefs {
    readonly order_id: FieldRef<"LabOrders", 'Int'>
    readonly patient_id: FieldRef<"LabOrders", 'Int'>
    readonly ordered_by: FieldRef<"LabOrders", 'Int'>
    readonly test_type: FieldRef<"LabOrders", 'String'>
    readonly order_date: FieldRef<"LabOrders", 'DateTime'>
    readonly status: FieldRef<"LabOrders", 'String'>
    readonly created_at: FieldRef<"LabOrders", 'DateTime'>
    readonly updated_at: FieldRef<"LabOrders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LabOrders findUnique
   */
  export type LabOrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
    /**
     * Filter, which LabOrders to fetch.
     */
    where: LabOrdersWhereUniqueInput
  }

  /**
   * LabOrders findUniqueOrThrow
   */
  export type LabOrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
    /**
     * Filter, which LabOrders to fetch.
     */
    where: LabOrdersWhereUniqueInput
  }

  /**
   * LabOrders findFirst
   */
  export type LabOrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
    /**
     * Filter, which LabOrders to fetch.
     */
    where?: LabOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabOrders to fetch.
     */
    orderBy?: LabOrdersOrderByWithRelationInput | LabOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabOrders.
     */
    cursor?: LabOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabOrders.
     */
    distinct?: LabOrdersScalarFieldEnum | LabOrdersScalarFieldEnum[]
  }

  /**
   * LabOrders findFirstOrThrow
   */
  export type LabOrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
    /**
     * Filter, which LabOrders to fetch.
     */
    where?: LabOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabOrders to fetch.
     */
    orderBy?: LabOrdersOrderByWithRelationInput | LabOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabOrders.
     */
    cursor?: LabOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabOrders.
     */
    distinct?: LabOrdersScalarFieldEnum | LabOrdersScalarFieldEnum[]
  }

  /**
   * LabOrders findMany
   */
  export type LabOrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
    /**
     * Filter, which LabOrders to fetch.
     */
    where?: LabOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabOrders to fetch.
     */
    orderBy?: LabOrdersOrderByWithRelationInput | LabOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabOrders.
     */
    cursor?: LabOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabOrders.
     */
    skip?: number
    distinct?: LabOrdersScalarFieldEnum | LabOrdersScalarFieldEnum[]
  }

  /**
   * LabOrders create
   */
  export type LabOrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a LabOrders.
     */
    data: XOR<LabOrdersCreateInput, LabOrdersUncheckedCreateInput>
  }

  /**
   * LabOrders createMany
   */
  export type LabOrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabOrders.
     */
    data: LabOrdersCreateManyInput | LabOrdersCreateManyInput[]
  }

  /**
   * LabOrders createManyAndReturn
   */
  export type LabOrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * The data used to create many LabOrders.
     */
    data: LabOrdersCreateManyInput | LabOrdersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabOrders update
   */
  export type LabOrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a LabOrders.
     */
    data: XOR<LabOrdersUpdateInput, LabOrdersUncheckedUpdateInput>
    /**
     * Choose, which LabOrders to update.
     */
    where: LabOrdersWhereUniqueInput
  }

  /**
   * LabOrders updateMany
   */
  export type LabOrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabOrders.
     */
    data: XOR<LabOrdersUpdateManyMutationInput, LabOrdersUncheckedUpdateManyInput>
    /**
     * Filter which LabOrders to update
     */
    where?: LabOrdersWhereInput
    /**
     * Limit how many LabOrders to update.
     */
    limit?: number
  }

  /**
   * LabOrders updateManyAndReturn
   */
  export type LabOrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * The data used to update LabOrders.
     */
    data: XOR<LabOrdersUpdateManyMutationInput, LabOrdersUncheckedUpdateManyInput>
    /**
     * Filter which LabOrders to update
     */
    where?: LabOrdersWhereInput
    /**
     * Limit how many LabOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabOrders upsert
   */
  export type LabOrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the LabOrders to update in case it exists.
     */
    where: LabOrdersWhereUniqueInput
    /**
     * In case the LabOrders found by the `where` argument doesn't exist, create a new LabOrders with this data.
     */
    create: XOR<LabOrdersCreateInput, LabOrdersUncheckedCreateInput>
    /**
     * In case the LabOrders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabOrdersUpdateInput, LabOrdersUncheckedUpdateInput>
  }

  /**
   * LabOrders delete
   */
  export type LabOrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
    /**
     * Filter which LabOrders to delete.
     */
    where: LabOrdersWhereUniqueInput
  }

  /**
   * LabOrders deleteMany
   */
  export type LabOrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabOrders to delete
     */
    where?: LabOrdersWhereInput
    /**
     * Limit how many LabOrders to delete.
     */
    limit?: number
  }

  /**
   * LabOrders.LabResults
   */
  export type LabOrders$LabResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    where?: LabResultsWhereInput
    orderBy?: LabResultsOrderByWithRelationInput | LabResultsOrderByWithRelationInput[]
    cursor?: LabResultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabResultsScalarFieldEnum | LabResultsScalarFieldEnum[]
  }

  /**
   * LabOrders without action
   */
  export type LabOrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabOrders
     */
    select?: LabOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabOrders
     */
    omit?: LabOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabOrdersInclude<ExtArgs> | null
  }


  /**
   * Model LabResults
   */

  export type AggregateLabResults = {
    _count: LabResultsCountAggregateOutputType | null
    _avg: LabResultsAvgAggregateOutputType | null
    _sum: LabResultsSumAggregateOutputType | null
    _min: LabResultsMinAggregateOutputType | null
    _max: LabResultsMaxAggregateOutputType | null
  }

  export type LabResultsAvgAggregateOutputType = {
    result_id: number | null
    patient_id: number | null
    technician_id: number | null
    order_id: number | null
    result_value: number | null
  }

  export type LabResultsSumAggregateOutputType = {
    result_id: number | null
    patient_id: number | null
    technician_id: number | null
    order_id: number | null
    result_value: number | null
  }

  export type LabResultsMinAggregateOutputType = {
    result_id: number | null
    patient_id: number | null
    technician_id: number | null
    order_id: number | null
    test_date: Date | null
    test_type: string | null
    result_value: number | null
    unit: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LabResultsMaxAggregateOutputType = {
    result_id: number | null
    patient_id: number | null
    technician_id: number | null
    order_id: number | null
    test_date: Date | null
    test_type: string | null
    result_value: number | null
    unit: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LabResultsCountAggregateOutputType = {
    result_id: number
    patient_id: number
    technician_id: number
    order_id: number
    test_date: number
    test_type: number
    result_value: number
    unit: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LabResultsAvgAggregateInputType = {
    result_id?: true
    patient_id?: true
    technician_id?: true
    order_id?: true
    result_value?: true
  }

  export type LabResultsSumAggregateInputType = {
    result_id?: true
    patient_id?: true
    technician_id?: true
    order_id?: true
    result_value?: true
  }

  export type LabResultsMinAggregateInputType = {
    result_id?: true
    patient_id?: true
    technician_id?: true
    order_id?: true
    test_date?: true
    test_type?: true
    result_value?: true
    unit?: true
    created_at?: true
    updated_at?: true
  }

  export type LabResultsMaxAggregateInputType = {
    result_id?: true
    patient_id?: true
    technician_id?: true
    order_id?: true
    test_date?: true
    test_type?: true
    result_value?: true
    unit?: true
    created_at?: true
    updated_at?: true
  }

  export type LabResultsCountAggregateInputType = {
    result_id?: true
    patient_id?: true
    technician_id?: true
    order_id?: true
    test_date?: true
    test_type?: true
    result_value?: true
    unit?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LabResultsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabResults to aggregate.
     */
    where?: LabResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultsOrderByWithRelationInput | LabResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabResults
    **/
    _count?: true | LabResultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabResultsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabResultsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabResultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabResultsMaxAggregateInputType
  }

  export type GetLabResultsAggregateType<T extends LabResultsAggregateArgs> = {
        [P in keyof T & keyof AggregateLabResults]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabResults[P]>
      : GetScalarType<T[P], AggregateLabResults[P]>
  }




  export type LabResultsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabResultsWhereInput
    orderBy?: LabResultsOrderByWithAggregationInput | LabResultsOrderByWithAggregationInput[]
    by: LabResultsScalarFieldEnum[] | LabResultsScalarFieldEnum
    having?: LabResultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabResultsCountAggregateInputType | true
    _avg?: LabResultsAvgAggregateInputType
    _sum?: LabResultsSumAggregateInputType
    _min?: LabResultsMinAggregateInputType
    _max?: LabResultsMaxAggregateInputType
  }

  export type LabResultsGroupByOutputType = {
    result_id: number
    patient_id: number
    technician_id: number
    order_id: number
    test_date: Date
    test_type: string
    result_value: number
    unit: string
    created_at: Date
    updated_at: Date
    _count: LabResultsCountAggregateOutputType | null
    _avg: LabResultsAvgAggregateOutputType | null
    _sum: LabResultsSumAggregateOutputType | null
    _min: LabResultsMinAggregateOutputType | null
    _max: LabResultsMaxAggregateOutputType | null
  }

  type GetLabResultsGroupByPayload<T extends LabResultsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabResultsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabResultsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabResultsGroupByOutputType[P]>
            : GetScalarType<T[P], LabResultsGroupByOutputType[P]>
        }
      >
    >


  export type LabResultsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    result_id?: boolean
    patient_id?: boolean
    technician_id?: boolean
    order_id?: boolean
    test_date?: boolean
    test_type?: boolean
    result_value?: boolean
    unit?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
    order?: boolean | LabOrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labResults"]>

  export type LabResultsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    result_id?: boolean
    patient_id?: boolean
    technician_id?: boolean
    order_id?: boolean
    test_date?: boolean
    test_type?: boolean
    result_value?: boolean
    unit?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
    order?: boolean | LabOrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labResults"]>

  export type LabResultsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    result_id?: boolean
    patient_id?: boolean
    technician_id?: boolean
    order_id?: boolean
    test_date?: boolean
    test_type?: boolean
    result_value?: boolean
    unit?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
    order?: boolean | LabOrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labResults"]>

  export type LabResultsSelectScalar = {
    result_id?: boolean
    patient_id?: boolean
    technician_id?: boolean
    order_id?: boolean
    test_date?: boolean
    test_type?: boolean
    result_value?: boolean
    unit?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LabResultsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"result_id" | "patient_id" | "technician_id" | "order_id" | "test_date" | "test_type" | "result_value" | "unit" | "created_at" | "updated_at", ExtArgs["result"]["labResults"]>
  export type LabResultsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
    order?: boolean | LabOrdersDefaultArgs<ExtArgs>
  }
  export type LabResultsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
    order?: boolean | LabOrdersDefaultArgs<ExtArgs>
  }
  export type LabResultsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    technician?: boolean | UsersDefaultArgs<ExtArgs>
    order?: boolean | LabOrdersDefaultArgs<ExtArgs>
  }

  export type $LabResultsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabResults"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
      technician: Prisma.$UsersPayload<ExtArgs>
      order: Prisma.$LabOrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      result_id: number
      patient_id: number
      technician_id: number
      order_id: number
      test_date: Date
      test_type: string
      result_value: number
      unit: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["labResults"]>
    composites: {}
  }

  type LabResultsGetPayload<S extends boolean | null | undefined | LabResultsDefaultArgs> = $Result.GetResult<Prisma.$LabResultsPayload, S>

  type LabResultsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabResultsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabResultsCountAggregateInputType | true
    }

  export interface LabResultsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabResults'], meta: { name: 'LabResults' } }
    /**
     * Find zero or one LabResults that matches the filter.
     * @param {LabResultsFindUniqueArgs} args - Arguments to find a LabResults
     * @example
     * // Get one LabResults
     * const labResults = await prisma.labResults.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabResultsFindUniqueArgs>(args: SelectSubset<T, LabResultsFindUniqueArgs<ExtArgs>>): Prisma__LabResultsClient<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabResults that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabResultsFindUniqueOrThrowArgs} args - Arguments to find a LabResults
     * @example
     * // Get one LabResults
     * const labResults = await prisma.labResults.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabResultsFindUniqueOrThrowArgs>(args: SelectSubset<T, LabResultsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabResultsClient<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultsFindFirstArgs} args - Arguments to find a LabResults
     * @example
     * // Get one LabResults
     * const labResults = await prisma.labResults.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabResultsFindFirstArgs>(args?: SelectSubset<T, LabResultsFindFirstArgs<ExtArgs>>): Prisma__LabResultsClient<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabResults that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultsFindFirstOrThrowArgs} args - Arguments to find a LabResults
     * @example
     * // Get one LabResults
     * const labResults = await prisma.labResults.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabResultsFindFirstOrThrowArgs>(args?: SelectSubset<T, LabResultsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabResultsClient<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabResults
     * const labResults = await prisma.labResults.findMany()
     * 
     * // Get first 10 LabResults
     * const labResults = await prisma.labResults.findMany({ take: 10 })
     * 
     * // Only select the `result_id`
     * const labResultsWithResult_idOnly = await prisma.labResults.findMany({ select: { result_id: true } })
     * 
     */
    findMany<T extends LabResultsFindManyArgs>(args?: SelectSubset<T, LabResultsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabResults.
     * @param {LabResultsCreateArgs} args - Arguments to create a LabResults.
     * @example
     * // Create one LabResults
     * const LabResults = await prisma.labResults.create({
     *   data: {
     *     // ... data to create a LabResults
     *   }
     * })
     * 
     */
    create<T extends LabResultsCreateArgs>(args: SelectSubset<T, LabResultsCreateArgs<ExtArgs>>): Prisma__LabResultsClient<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabResults.
     * @param {LabResultsCreateManyArgs} args - Arguments to create many LabResults.
     * @example
     * // Create many LabResults
     * const labResults = await prisma.labResults.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabResultsCreateManyArgs>(args?: SelectSubset<T, LabResultsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabResults and returns the data saved in the database.
     * @param {LabResultsCreateManyAndReturnArgs} args - Arguments to create many LabResults.
     * @example
     * // Create many LabResults
     * const labResults = await prisma.labResults.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabResults and only return the `result_id`
     * const labResultsWithResult_idOnly = await prisma.labResults.createManyAndReturn({
     *   select: { result_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabResultsCreateManyAndReturnArgs>(args?: SelectSubset<T, LabResultsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabResults.
     * @param {LabResultsDeleteArgs} args - Arguments to delete one LabResults.
     * @example
     * // Delete one LabResults
     * const LabResults = await prisma.labResults.delete({
     *   where: {
     *     // ... filter to delete one LabResults
     *   }
     * })
     * 
     */
    delete<T extends LabResultsDeleteArgs>(args: SelectSubset<T, LabResultsDeleteArgs<ExtArgs>>): Prisma__LabResultsClient<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabResults.
     * @param {LabResultsUpdateArgs} args - Arguments to update one LabResults.
     * @example
     * // Update one LabResults
     * const labResults = await prisma.labResults.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabResultsUpdateArgs>(args: SelectSubset<T, LabResultsUpdateArgs<ExtArgs>>): Prisma__LabResultsClient<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabResults.
     * @param {LabResultsDeleteManyArgs} args - Arguments to filter LabResults to delete.
     * @example
     * // Delete a few LabResults
     * const { count } = await prisma.labResults.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabResultsDeleteManyArgs>(args?: SelectSubset<T, LabResultsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabResults
     * const labResults = await prisma.labResults.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabResultsUpdateManyArgs>(args: SelectSubset<T, LabResultsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabResults and returns the data updated in the database.
     * @param {LabResultsUpdateManyAndReturnArgs} args - Arguments to update many LabResults.
     * @example
     * // Update many LabResults
     * const labResults = await prisma.labResults.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabResults and only return the `result_id`
     * const labResultsWithResult_idOnly = await prisma.labResults.updateManyAndReturn({
     *   select: { result_id: true },
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
    updateManyAndReturn<T extends LabResultsUpdateManyAndReturnArgs>(args: SelectSubset<T, LabResultsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabResults.
     * @param {LabResultsUpsertArgs} args - Arguments to update or create a LabResults.
     * @example
     * // Update or create a LabResults
     * const labResults = await prisma.labResults.upsert({
     *   create: {
     *     // ... data to create a LabResults
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabResults we want to update
     *   }
     * })
     */
    upsert<T extends LabResultsUpsertArgs>(args: SelectSubset<T, LabResultsUpsertArgs<ExtArgs>>): Prisma__LabResultsClient<$Result.GetResult<Prisma.$LabResultsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultsCountArgs} args - Arguments to filter LabResults to count.
     * @example
     * // Count the number of LabResults
     * const count = await prisma.labResults.count({
     *   where: {
     *     // ... the filter for the LabResults we want to count
     *   }
     * })
    **/
    count<T extends LabResultsCountArgs>(
      args?: Subset<T, LabResultsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabResultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabResultsAggregateArgs>(args: Subset<T, LabResultsAggregateArgs>): Prisma.PrismaPromise<GetLabResultsAggregateType<T>>

    /**
     * Group by LabResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabResultsGroupByArgs} args - Group by arguments.
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
      T extends LabResultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabResultsGroupByArgs['orderBy'] }
        : { orderBy?: LabResultsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabResultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabResultsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabResults model
   */
  readonly fields: LabResultsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabResults.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabResultsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    technician<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends LabOrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabOrdersDefaultArgs<ExtArgs>>): Prisma__LabOrdersClient<$Result.GetResult<Prisma.$LabOrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LabResults model
   */
  interface LabResultsFieldRefs {
    readonly result_id: FieldRef<"LabResults", 'Int'>
    readonly patient_id: FieldRef<"LabResults", 'Int'>
    readonly technician_id: FieldRef<"LabResults", 'Int'>
    readonly order_id: FieldRef<"LabResults", 'Int'>
    readonly test_date: FieldRef<"LabResults", 'DateTime'>
    readonly test_type: FieldRef<"LabResults", 'String'>
    readonly result_value: FieldRef<"LabResults", 'Float'>
    readonly unit: FieldRef<"LabResults", 'String'>
    readonly created_at: FieldRef<"LabResults", 'DateTime'>
    readonly updated_at: FieldRef<"LabResults", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LabResults findUnique
   */
  export type LabResultsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    /**
     * Filter, which LabResults to fetch.
     */
    where: LabResultsWhereUniqueInput
  }

  /**
   * LabResults findUniqueOrThrow
   */
  export type LabResultsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    /**
     * Filter, which LabResults to fetch.
     */
    where: LabResultsWhereUniqueInput
  }

  /**
   * LabResults findFirst
   */
  export type LabResultsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    /**
     * Filter, which LabResults to fetch.
     */
    where?: LabResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultsOrderByWithRelationInput | LabResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabResults.
     */
    cursor?: LabResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabResults.
     */
    distinct?: LabResultsScalarFieldEnum | LabResultsScalarFieldEnum[]
  }

  /**
   * LabResults findFirstOrThrow
   */
  export type LabResultsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    /**
     * Filter, which LabResults to fetch.
     */
    where?: LabResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultsOrderByWithRelationInput | LabResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabResults.
     */
    cursor?: LabResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabResults.
     */
    distinct?: LabResultsScalarFieldEnum | LabResultsScalarFieldEnum[]
  }

  /**
   * LabResults findMany
   */
  export type LabResultsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    /**
     * Filter, which LabResults to fetch.
     */
    where?: LabResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabResults to fetch.
     */
    orderBy?: LabResultsOrderByWithRelationInput | LabResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabResults.
     */
    cursor?: LabResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabResults.
     */
    skip?: number
    distinct?: LabResultsScalarFieldEnum | LabResultsScalarFieldEnum[]
  }

  /**
   * LabResults create
   */
  export type LabResultsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    /**
     * The data needed to create a LabResults.
     */
    data: XOR<LabResultsCreateInput, LabResultsUncheckedCreateInput>
  }

  /**
   * LabResults createMany
   */
  export type LabResultsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabResults.
     */
    data: LabResultsCreateManyInput | LabResultsCreateManyInput[]
  }

  /**
   * LabResults createManyAndReturn
   */
  export type LabResultsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * The data used to create many LabResults.
     */
    data: LabResultsCreateManyInput | LabResultsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabResults update
   */
  export type LabResultsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    /**
     * The data needed to update a LabResults.
     */
    data: XOR<LabResultsUpdateInput, LabResultsUncheckedUpdateInput>
    /**
     * Choose, which LabResults to update.
     */
    where: LabResultsWhereUniqueInput
  }

  /**
   * LabResults updateMany
   */
  export type LabResultsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabResults.
     */
    data: XOR<LabResultsUpdateManyMutationInput, LabResultsUncheckedUpdateManyInput>
    /**
     * Filter which LabResults to update
     */
    where?: LabResultsWhereInput
    /**
     * Limit how many LabResults to update.
     */
    limit?: number
  }

  /**
   * LabResults updateManyAndReturn
   */
  export type LabResultsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * The data used to update LabResults.
     */
    data: XOR<LabResultsUpdateManyMutationInput, LabResultsUncheckedUpdateManyInput>
    /**
     * Filter which LabResults to update
     */
    where?: LabResultsWhereInput
    /**
     * Limit how many LabResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabResults upsert
   */
  export type LabResultsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    /**
     * The filter to search for the LabResults to update in case it exists.
     */
    where: LabResultsWhereUniqueInput
    /**
     * In case the LabResults found by the `where` argument doesn't exist, create a new LabResults with this data.
     */
    create: XOR<LabResultsCreateInput, LabResultsUncheckedCreateInput>
    /**
     * In case the LabResults was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabResultsUpdateInput, LabResultsUncheckedUpdateInput>
  }

  /**
   * LabResults delete
   */
  export type LabResultsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
    /**
     * Filter which LabResults to delete.
     */
    where: LabResultsWhereUniqueInput
  }

  /**
   * LabResults deleteMany
   */
  export type LabResultsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabResults to delete
     */
    where?: LabResultsWhereInput
    /**
     * Limit how many LabResults to delete.
     */
    limit?: number
  }

  /**
   * LabResults without action
   */
  export type LabResultsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabResults
     */
    select?: LabResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabResults
     */
    omit?: LabResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabResultsInclude<ExtArgs> | null
  }


  /**
   * Model Diseases
   */

  export type AggregateDiseases = {
    _count: DiseasesCountAggregateOutputType | null
    _avg: DiseasesAvgAggregateOutputType | null
    _sum: DiseasesSumAggregateOutputType | null
    _min: DiseasesMinAggregateOutputType | null
    _max: DiseasesMaxAggregateOutputType | null
  }

  export type DiseasesAvgAggregateOutputType = {
    disease_id: number | null
  }

  export type DiseasesSumAggregateOutputType = {
    disease_id: number | null
  }

  export type DiseasesMinAggregateOutputType = {
    disease_id: number | null
    disease_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DiseasesMaxAggregateOutputType = {
    disease_id: number | null
    disease_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DiseasesCountAggregateOutputType = {
    disease_id: number
    disease_name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DiseasesAvgAggregateInputType = {
    disease_id?: true
  }

  export type DiseasesSumAggregateInputType = {
    disease_id?: true
  }

  export type DiseasesMinAggregateInputType = {
    disease_id?: true
    disease_name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type DiseasesMaxAggregateInputType = {
    disease_id?: true
    disease_name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type DiseasesCountAggregateInputType = {
    disease_id?: true
    disease_name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DiseasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diseases to aggregate.
     */
    where?: DiseasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseasesOrderByWithRelationInput | DiseasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiseasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diseases
    **/
    _count?: true | DiseasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiseasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiseasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseasesMaxAggregateInputType
  }

  export type GetDiseasesAggregateType<T extends DiseasesAggregateArgs> = {
        [P in keyof T & keyof AggregateDiseases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiseases[P]>
      : GetScalarType<T[P], AggregateDiseases[P]>
  }




  export type DiseasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseasesWhereInput
    orderBy?: DiseasesOrderByWithAggregationInput | DiseasesOrderByWithAggregationInput[]
    by: DiseasesScalarFieldEnum[] | DiseasesScalarFieldEnum
    having?: DiseasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseasesCountAggregateInputType | true
    _avg?: DiseasesAvgAggregateInputType
    _sum?: DiseasesSumAggregateInputType
    _min?: DiseasesMinAggregateInputType
    _max?: DiseasesMaxAggregateInputType
  }

  export type DiseasesGroupByOutputType = {
    disease_id: number
    disease_name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: DiseasesCountAggregateOutputType | null
    _avg: DiseasesAvgAggregateOutputType | null
    _sum: DiseasesSumAggregateOutputType | null
    _min: DiseasesMinAggregateOutputType | null
    _max: DiseasesMaxAggregateOutputType | null
  }

  type GetDiseasesGroupByPayload<T extends DiseasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseasesGroupByOutputType[P]>
            : GetScalarType<T[P], DiseasesGroupByOutputType[P]>
        }
      >
    >


  export type DiseasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    disease_id?: boolean
    disease_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    Diagnoses?: boolean | Diseases$DiagnosesArgs<ExtArgs>
    _count?: boolean | DiseasesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseases"]>

  export type DiseasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    disease_id?: boolean
    disease_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["diseases"]>

  export type DiseasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    disease_id?: boolean
    disease_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["diseases"]>

  export type DiseasesSelectScalar = {
    disease_id?: boolean
    disease_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DiseasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"disease_id" | "disease_name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["diseases"]>
  export type DiseasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diagnoses?: boolean | Diseases$DiagnosesArgs<ExtArgs>
    _count?: boolean | DiseasesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiseasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DiseasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DiseasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diseases"
    objects: {
      Diagnoses: Prisma.$DiagnosesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      disease_id: number
      disease_name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["diseases"]>
    composites: {}
  }

  type DiseasesGetPayload<S extends boolean | null | undefined | DiseasesDefaultArgs> = $Result.GetResult<Prisma.$DiseasesPayload, S>

  type DiseasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiseasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiseasesCountAggregateInputType | true
    }

  export interface DiseasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diseases'], meta: { name: 'Diseases' } }
    /**
     * Find zero or one Diseases that matches the filter.
     * @param {DiseasesFindUniqueArgs} args - Arguments to find a Diseases
     * @example
     * // Get one Diseases
     * const diseases = await prisma.diseases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiseasesFindUniqueArgs>(args: SelectSubset<T, DiseasesFindUniqueArgs<ExtArgs>>): Prisma__DiseasesClient<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diseases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiseasesFindUniqueOrThrowArgs} args - Arguments to find a Diseases
     * @example
     * // Get one Diseases
     * const diseases = await prisma.diseases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiseasesFindUniqueOrThrowArgs>(args: SelectSubset<T, DiseasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiseasesClient<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasesFindFirstArgs} args - Arguments to find a Diseases
     * @example
     * // Get one Diseases
     * const diseases = await prisma.diseases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiseasesFindFirstArgs>(args?: SelectSubset<T, DiseasesFindFirstArgs<ExtArgs>>): Prisma__DiseasesClient<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diseases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasesFindFirstOrThrowArgs} args - Arguments to find a Diseases
     * @example
     * // Get one Diseases
     * const diseases = await prisma.diseases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiseasesFindFirstOrThrowArgs>(args?: SelectSubset<T, DiseasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiseasesClient<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diseases
     * const diseases = await prisma.diseases.findMany()
     * 
     * // Get first 10 Diseases
     * const diseases = await prisma.diseases.findMany({ take: 10 })
     * 
     * // Only select the `disease_id`
     * const diseasesWithDisease_idOnly = await prisma.diseases.findMany({ select: { disease_id: true } })
     * 
     */
    findMany<T extends DiseasesFindManyArgs>(args?: SelectSubset<T, DiseasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diseases.
     * @param {DiseasesCreateArgs} args - Arguments to create a Diseases.
     * @example
     * // Create one Diseases
     * const Diseases = await prisma.diseases.create({
     *   data: {
     *     // ... data to create a Diseases
     *   }
     * })
     * 
     */
    create<T extends DiseasesCreateArgs>(args: SelectSubset<T, DiseasesCreateArgs<ExtArgs>>): Prisma__DiseasesClient<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diseases.
     * @param {DiseasesCreateManyArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const diseases = await prisma.diseases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiseasesCreateManyArgs>(args?: SelectSubset<T, DiseasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diseases and returns the data saved in the database.
     * @param {DiseasesCreateManyAndReturnArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const diseases = await prisma.diseases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diseases and only return the `disease_id`
     * const diseasesWithDisease_idOnly = await prisma.diseases.createManyAndReturn({
     *   select: { disease_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiseasesCreateManyAndReturnArgs>(args?: SelectSubset<T, DiseasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diseases.
     * @param {DiseasesDeleteArgs} args - Arguments to delete one Diseases.
     * @example
     * // Delete one Diseases
     * const Diseases = await prisma.diseases.delete({
     *   where: {
     *     // ... filter to delete one Diseases
     *   }
     * })
     * 
     */
    delete<T extends DiseasesDeleteArgs>(args: SelectSubset<T, DiseasesDeleteArgs<ExtArgs>>): Prisma__DiseasesClient<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diseases.
     * @param {DiseasesUpdateArgs} args - Arguments to update one Diseases.
     * @example
     * // Update one Diseases
     * const diseases = await prisma.diseases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiseasesUpdateArgs>(args: SelectSubset<T, DiseasesUpdateArgs<ExtArgs>>): Prisma__DiseasesClient<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diseases.
     * @param {DiseasesDeleteManyArgs} args - Arguments to filter Diseases to delete.
     * @example
     * // Delete a few Diseases
     * const { count } = await prisma.diseases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiseasesDeleteManyArgs>(args?: SelectSubset<T, DiseasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diseases
     * const diseases = await prisma.diseases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiseasesUpdateManyArgs>(args: SelectSubset<T, DiseasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases and returns the data updated in the database.
     * @param {DiseasesUpdateManyAndReturnArgs} args - Arguments to update many Diseases.
     * @example
     * // Update many Diseases
     * const diseases = await prisma.diseases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diseases and only return the `disease_id`
     * const diseasesWithDisease_idOnly = await prisma.diseases.updateManyAndReturn({
     *   select: { disease_id: true },
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
    updateManyAndReturn<T extends DiseasesUpdateManyAndReturnArgs>(args: SelectSubset<T, DiseasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diseases.
     * @param {DiseasesUpsertArgs} args - Arguments to update or create a Diseases.
     * @example
     * // Update or create a Diseases
     * const diseases = await prisma.diseases.upsert({
     *   create: {
     *     // ... data to create a Diseases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diseases we want to update
     *   }
     * })
     */
    upsert<T extends DiseasesUpsertArgs>(args: SelectSubset<T, DiseasesUpsertArgs<ExtArgs>>): Prisma__DiseasesClient<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasesCountArgs} args - Arguments to filter Diseases to count.
     * @example
     * // Count the number of Diseases
     * const count = await prisma.diseases.count({
     *   where: {
     *     // ... the filter for the Diseases we want to count
     *   }
     * })
    **/
    count<T extends DiseasesCountArgs>(
      args?: Subset<T, DiseasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiseasesAggregateArgs>(args: Subset<T, DiseasesAggregateArgs>): Prisma.PrismaPromise<GetDiseasesAggregateType<T>>

    /**
     * Group by Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasesGroupByArgs} args - Group by arguments.
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
      T extends DiseasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiseasesGroupByArgs['orderBy'] }
        : { orderBy?: DiseasesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiseasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diseases model
   */
  readonly fields: DiseasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diseases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiseasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Diagnoses<T extends Diseases$DiagnosesArgs<ExtArgs> = {}>(args?: Subset<T, Diseases$DiagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Diseases model
   */
  interface DiseasesFieldRefs {
    readonly disease_id: FieldRef<"Diseases", 'Int'>
    readonly disease_name: FieldRef<"Diseases", 'String'>
    readonly description: FieldRef<"Diseases", 'String'>
    readonly created_at: FieldRef<"Diseases", 'DateTime'>
    readonly updated_at: FieldRef<"Diseases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Diseases findUnique
   */
  export type DiseasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseasesInclude<ExtArgs> | null
    /**
     * Filter, which Diseases to fetch.
     */
    where: DiseasesWhereUniqueInput
  }

  /**
   * Diseases findUniqueOrThrow
   */
  export type DiseasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseasesInclude<ExtArgs> | null
    /**
     * Filter, which Diseases to fetch.
     */
    where: DiseasesWhereUniqueInput
  }

  /**
   * Diseases findFirst
   */
  export type DiseasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseasesInclude<ExtArgs> | null
    /**
     * Filter, which Diseases to fetch.
     */
    where?: DiseasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseasesOrderByWithRelationInput | DiseasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseasesScalarFieldEnum | DiseasesScalarFieldEnum[]
  }

  /**
   * Diseases findFirstOrThrow
   */
  export type DiseasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseasesInclude<ExtArgs> | null
    /**
     * Filter, which Diseases to fetch.
     */
    where?: DiseasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseasesOrderByWithRelationInput | DiseasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseasesScalarFieldEnum | DiseasesScalarFieldEnum[]
  }

  /**
   * Diseases findMany
   */
  export type DiseasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseasesInclude<ExtArgs> | null
    /**
     * Filter, which Diseases to fetch.
     */
    where?: DiseasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseasesOrderByWithRelationInput | DiseasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diseases.
     */
    cursor?: DiseasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    distinct?: DiseasesScalarFieldEnum | DiseasesScalarFieldEnum[]
  }

  /**
   * Diseases create
   */
  export type DiseasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseasesInclude<ExtArgs> | null
    /**
     * The data needed to create a Diseases.
     */
    data: XOR<DiseasesCreateInput, DiseasesUncheckedCreateInput>
  }

  /**
   * Diseases createMany
   */
  export type DiseasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diseases.
     */
    data: DiseasesCreateManyInput | DiseasesCreateManyInput[]
  }

  /**
   * Diseases createManyAndReturn
   */
  export type DiseasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * The data used to create many Diseases.
     */
    data: DiseasesCreateManyInput | DiseasesCreateManyInput[]
  }

  /**
   * Diseases update
   */
  export type DiseasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseasesInclude<ExtArgs> | null
    /**
     * The data needed to update a Diseases.
     */
    data: XOR<DiseasesUpdateInput, DiseasesUncheckedUpdateInput>
    /**
     * Choose, which Diseases to update.
     */
    where: DiseasesWhereUniqueInput
  }

  /**
   * Diseases updateMany
   */
  export type DiseasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseasesUpdateManyMutationInput, DiseasesUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseasesWhereInput
    /**
     * Limit how many Diseases to update.
     */
    limit?: number
  }

  /**
   * Diseases updateManyAndReturn
   */
  export type DiseasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseasesUpdateManyMutationInput, DiseasesUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseasesWhereInput
    /**
     * Limit how many Diseases to update.
     */
    limit?: number
  }

  /**
   * Diseases upsert
   */
  export type DiseasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseasesInclude<ExtArgs> | null
    /**
     * The filter to search for the Diseases to update in case it exists.
     */
    where: DiseasesWhereUniqueInput
    /**
     * In case the Diseases found by the `where` argument doesn't exist, create a new Diseases with this data.
     */
    create: XOR<DiseasesCreateInput, DiseasesUncheckedCreateInput>
    /**
     * In case the Diseases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiseasesUpdateInput, DiseasesUncheckedUpdateInput>
  }

  /**
   * Diseases delete
   */
  export type DiseasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseasesInclude<ExtArgs> | null
    /**
     * Filter which Diseases to delete.
     */
    where: DiseasesWhereUniqueInput
  }

  /**
   * Diseases deleteMany
   */
  export type DiseasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diseases to delete
     */
    where?: DiseasesWhereInput
    /**
     * Limit how many Diseases to delete.
     */
    limit?: number
  }

  /**
   * Diseases.Diagnoses
   */
  export type Diseases$DiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    where?: DiagnosesWhereInput
    orderBy?: DiagnosesOrderByWithRelationInput | DiagnosesOrderByWithRelationInput[]
    cursor?: DiagnosesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * Diseases without action
   */
  export type DiseasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diseases
     */
    select?: DiseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diseases
     */
    omit?: DiseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseasesInclude<ExtArgs> | null
  }


  /**
   * Model Diagnoses
   */

  export type AggregateDiagnoses = {
    _count: DiagnosesCountAggregateOutputType | null
    _avg: DiagnosesAvgAggregateOutputType | null
    _sum: DiagnosesSumAggregateOutputType | null
    _min: DiagnosesMinAggregateOutputType | null
    _max: DiagnosesMaxAggregateOutputType | null
  }

  export type DiagnosesAvgAggregateOutputType = {
    diagnosis_id: number | null
    patient_id: number | null
    disease_id: number | null
  }

  export type DiagnosesSumAggregateOutputType = {
    diagnosis_id: number | null
    patient_id: number | null
    disease_id: number | null
  }

  export type DiagnosesMinAggregateOutputType = {
    diagnosis_id: number | null
    patient_id: number | null
    disease_id: number | null
    diagnosis_date: Date | null
    status: string | null
    recovery_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DiagnosesMaxAggregateOutputType = {
    diagnosis_id: number | null
    patient_id: number | null
    disease_id: number | null
    diagnosis_date: Date | null
    status: string | null
    recovery_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DiagnosesCountAggregateOutputType = {
    diagnosis_id: number
    patient_id: number
    disease_id: number
    diagnosis_date: number
    status: number
    recovery_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DiagnosesAvgAggregateInputType = {
    diagnosis_id?: true
    patient_id?: true
    disease_id?: true
  }

  export type DiagnosesSumAggregateInputType = {
    diagnosis_id?: true
    patient_id?: true
    disease_id?: true
  }

  export type DiagnosesMinAggregateInputType = {
    diagnosis_id?: true
    patient_id?: true
    disease_id?: true
    diagnosis_date?: true
    status?: true
    recovery_date?: true
    created_at?: true
    updated_at?: true
  }

  export type DiagnosesMaxAggregateInputType = {
    diagnosis_id?: true
    patient_id?: true
    disease_id?: true
    diagnosis_date?: true
    status?: true
    recovery_date?: true
    created_at?: true
    updated_at?: true
  }

  export type DiagnosesCountAggregateInputType = {
    diagnosis_id?: true
    patient_id?: true
    disease_id?: true
    diagnosis_date?: true
    status?: true
    recovery_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DiagnosesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnoses to aggregate.
     */
    where?: DiagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosesOrderByWithRelationInput | DiagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnoses
    **/
    _count?: true | DiagnosesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosesMaxAggregateInputType
  }

  export type GetDiagnosesAggregateType<T extends DiagnosesAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnoses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnoses[P]>
      : GetScalarType<T[P], AggregateDiagnoses[P]>
  }




  export type DiagnosesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosesWhereInput
    orderBy?: DiagnosesOrderByWithAggregationInput | DiagnosesOrderByWithAggregationInput[]
    by: DiagnosesScalarFieldEnum[] | DiagnosesScalarFieldEnum
    having?: DiagnosesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosesCountAggregateInputType | true
    _avg?: DiagnosesAvgAggregateInputType
    _sum?: DiagnosesSumAggregateInputType
    _min?: DiagnosesMinAggregateInputType
    _max?: DiagnosesMaxAggregateInputType
  }

  export type DiagnosesGroupByOutputType = {
    diagnosis_id: number
    patient_id: number
    disease_id: number
    diagnosis_date: Date
    status: string
    recovery_date: Date | null
    created_at: Date
    updated_at: Date
    _count: DiagnosesCountAggregateOutputType | null
    _avg: DiagnosesAvgAggregateOutputType | null
    _sum: DiagnosesSumAggregateOutputType | null
    _min: DiagnosesMinAggregateOutputType | null
    _max: DiagnosesMaxAggregateOutputType | null
  }

  type GetDiagnosesGroupByPayload<T extends DiagnosesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosesGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosesGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnosis_id?: boolean
    patient_id?: boolean
    disease_id?: boolean
    diagnosis_date?: boolean
    status?: boolean
    recovery_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    disease?: boolean | DiseasesDefaultArgs<ExtArgs>
    Cases?: boolean | Diagnoses$CasesArgs<ExtArgs>
    _count?: boolean | DiagnosesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnoses"]>

  export type DiagnosesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnosis_id?: boolean
    patient_id?: boolean
    disease_id?: boolean
    diagnosis_date?: boolean
    status?: boolean
    recovery_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    disease?: boolean | DiseasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnoses"]>

  export type DiagnosesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnosis_id?: boolean
    patient_id?: boolean
    disease_id?: boolean
    diagnosis_date?: boolean
    status?: boolean
    recovery_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    disease?: boolean | DiseasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnoses"]>

  export type DiagnosesSelectScalar = {
    diagnosis_id?: boolean
    patient_id?: boolean
    disease_id?: boolean
    diagnosis_date?: boolean
    status?: boolean
    recovery_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DiagnosesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"diagnosis_id" | "patient_id" | "disease_id" | "diagnosis_date" | "status" | "recovery_date" | "created_at" | "updated_at", ExtArgs["result"]["diagnoses"]>
  export type DiagnosesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    disease?: boolean | DiseasesDefaultArgs<ExtArgs>
    Cases?: boolean | Diagnoses$CasesArgs<ExtArgs>
    _count?: boolean | DiagnosesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiagnosesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    disease?: boolean | DiseasesDefaultArgs<ExtArgs>
  }
  export type DiagnosesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    disease?: boolean | DiseasesDefaultArgs<ExtArgs>
  }

  export type $DiagnosesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnoses"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
      disease: Prisma.$DiseasesPayload<ExtArgs>
      Cases: Prisma.$CasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      diagnosis_id: number
      patient_id: number
      disease_id: number
      diagnosis_date: Date
      status: string
      recovery_date: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["diagnoses"]>
    composites: {}
  }

  type DiagnosesGetPayload<S extends boolean | null | undefined | DiagnosesDefaultArgs> = $Result.GetResult<Prisma.$DiagnosesPayload, S>

  type DiagnosesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosesCountAggregateInputType | true
    }

  export interface DiagnosesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnoses'], meta: { name: 'Diagnoses' } }
    /**
     * Find zero or one Diagnoses that matches the filter.
     * @param {DiagnosesFindUniqueArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosesFindUniqueArgs>(args: SelectSubset<T, DiagnosesFindUniqueArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnoses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosesFindUniqueOrThrowArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosesFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesFindFirstArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosesFindFirstArgs>(args?: SelectSubset<T, DiagnosesFindFirstArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnoses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesFindFirstOrThrowArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosesFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnoses
     * const diagnoses = await prisma.diagnoses.findMany()
     * 
     * // Get first 10 Diagnoses
     * const diagnoses = await prisma.diagnoses.findMany({ take: 10 })
     * 
     * // Only select the `diagnosis_id`
     * const diagnosesWithDiagnosis_idOnly = await prisma.diagnoses.findMany({ select: { diagnosis_id: true } })
     * 
     */
    findMany<T extends DiagnosesFindManyArgs>(args?: SelectSubset<T, DiagnosesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnoses.
     * @param {DiagnosesCreateArgs} args - Arguments to create a Diagnoses.
     * @example
     * // Create one Diagnoses
     * const Diagnoses = await prisma.diagnoses.create({
     *   data: {
     *     // ... data to create a Diagnoses
     *   }
     * })
     * 
     */
    create<T extends DiagnosesCreateArgs>(args: SelectSubset<T, DiagnosesCreateArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnoses.
     * @param {DiagnosesCreateManyArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnoses = await prisma.diagnoses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosesCreateManyArgs>(args?: SelectSubset<T, DiagnosesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnoses and returns the data saved in the database.
     * @param {DiagnosesCreateManyAndReturnArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnoses = await prisma.diagnoses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnoses and only return the `diagnosis_id`
     * const diagnosesWithDiagnosis_idOnly = await prisma.diagnoses.createManyAndReturn({
     *   select: { diagnosis_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiagnosesCreateManyAndReturnArgs>(args?: SelectSubset<T, DiagnosesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnoses.
     * @param {DiagnosesDeleteArgs} args - Arguments to delete one Diagnoses.
     * @example
     * // Delete one Diagnoses
     * const Diagnoses = await prisma.diagnoses.delete({
     *   where: {
     *     // ... filter to delete one Diagnoses
     *   }
     * })
     * 
     */
    delete<T extends DiagnosesDeleteArgs>(args: SelectSubset<T, DiagnosesDeleteArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnoses.
     * @param {DiagnosesUpdateArgs} args - Arguments to update one Diagnoses.
     * @example
     * // Update one Diagnoses
     * const diagnoses = await prisma.diagnoses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosesUpdateArgs>(args: SelectSubset<T, DiagnosesUpdateArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnoses.
     * @param {DiagnosesDeleteManyArgs} args - Arguments to filter Diagnoses to delete.
     * @example
     * // Delete a few Diagnoses
     * const { count } = await prisma.diagnoses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosesDeleteManyArgs>(args?: SelectSubset<T, DiagnosesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnoses
     * const diagnoses = await prisma.diagnoses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosesUpdateManyArgs>(args: SelectSubset<T, DiagnosesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses and returns the data updated in the database.
     * @param {DiagnosesUpdateManyAndReturnArgs} args - Arguments to update many Diagnoses.
     * @example
     * // Update many Diagnoses
     * const diagnoses = await prisma.diagnoses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnoses and only return the `diagnosis_id`
     * const diagnosesWithDiagnosis_idOnly = await prisma.diagnoses.updateManyAndReturn({
     *   select: { diagnosis_id: true },
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
    updateManyAndReturn<T extends DiagnosesUpdateManyAndReturnArgs>(args: SelectSubset<T, DiagnosesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnoses.
     * @param {DiagnosesUpsertArgs} args - Arguments to update or create a Diagnoses.
     * @example
     * // Update or create a Diagnoses
     * const diagnoses = await prisma.diagnoses.upsert({
     *   create: {
     *     // ... data to create a Diagnoses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnoses we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosesUpsertArgs>(args: SelectSubset<T, DiagnosesUpsertArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesCountArgs} args - Arguments to filter Diagnoses to count.
     * @example
     * // Count the number of Diagnoses
     * const count = await prisma.diagnoses.count({
     *   where: {
     *     // ... the filter for the Diagnoses we want to count
     *   }
     * })
    **/
    count<T extends DiagnosesCountArgs>(
      args?: Subset<T, DiagnosesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosesAggregateArgs>(args: Subset<T, DiagnosesAggregateArgs>): Prisma.PrismaPromise<GetDiagnosesAggregateType<T>>

    /**
     * Group by Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesGroupByArgs} args - Group by arguments.
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
      T extends DiagnosesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosesGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnoses model
   */
  readonly fields: DiagnosesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnoses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disease<T extends DiseasesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiseasesDefaultArgs<ExtArgs>>): Prisma__DiseasesClient<$Result.GetResult<Prisma.$DiseasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Cases<T extends Diagnoses$CasesArgs<ExtArgs> = {}>(args?: Subset<T, Diagnoses$CasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Diagnoses model
   */
  interface DiagnosesFieldRefs {
    readonly diagnosis_id: FieldRef<"Diagnoses", 'Int'>
    readonly patient_id: FieldRef<"Diagnoses", 'Int'>
    readonly disease_id: FieldRef<"Diagnoses", 'Int'>
    readonly diagnosis_date: FieldRef<"Diagnoses", 'DateTime'>
    readonly status: FieldRef<"Diagnoses", 'String'>
    readonly recovery_date: FieldRef<"Diagnoses", 'DateTime'>
    readonly created_at: FieldRef<"Diagnoses", 'DateTime'>
    readonly updated_at: FieldRef<"Diagnoses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Diagnoses findUnique
   */
  export type DiagnosesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where: DiagnosesWhereUniqueInput
  }

  /**
   * Diagnoses findUniqueOrThrow
   */
  export type DiagnosesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where: DiagnosesWhereUniqueInput
  }

  /**
   * Diagnoses findFirst
   */
  export type DiagnosesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where?: DiagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosesOrderByWithRelationInput | DiagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * Diagnoses findFirstOrThrow
   */
  export type DiagnosesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where?: DiagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosesOrderByWithRelationInput | DiagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * Diagnoses findMany
   */
  export type DiagnosesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where?: DiagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosesOrderByWithRelationInput | DiagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnoses.
     */
    cursor?: DiagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * Diagnoses create
   */
  export type DiagnosesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnoses.
     */
    data: XOR<DiagnosesCreateInput, DiagnosesUncheckedCreateInput>
  }

  /**
   * Diagnoses createMany
   */
  export type DiagnosesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnoses.
     */
    data: DiagnosesCreateManyInput | DiagnosesCreateManyInput[]
  }

  /**
   * Diagnoses createManyAndReturn
   */
  export type DiagnosesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * The data used to create many Diagnoses.
     */
    data: DiagnosesCreateManyInput | DiagnosesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnoses update
   */
  export type DiagnosesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnoses.
     */
    data: XOR<DiagnosesUpdateInput, DiagnosesUncheckedUpdateInput>
    /**
     * Choose, which Diagnoses to update.
     */
    where: DiagnosesWhereUniqueInput
  }

  /**
   * Diagnoses updateMany
   */
  export type DiagnosesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnoses.
     */
    data: XOR<DiagnosesUpdateManyMutationInput, DiagnosesUncheckedUpdateManyInput>
    /**
     * Filter which Diagnoses to update
     */
    where?: DiagnosesWhereInput
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number
  }

  /**
   * Diagnoses updateManyAndReturn
   */
  export type DiagnosesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * The data used to update Diagnoses.
     */
    data: XOR<DiagnosesUpdateManyMutationInput, DiagnosesUncheckedUpdateManyInput>
    /**
     * Filter which Diagnoses to update
     */
    where?: DiagnosesWhereInput
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnoses upsert
   */
  export type DiagnosesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnoses to update in case it exists.
     */
    where: DiagnosesWhereUniqueInput
    /**
     * In case the Diagnoses found by the `where` argument doesn't exist, create a new Diagnoses with this data.
     */
    create: XOR<DiagnosesCreateInput, DiagnosesUncheckedCreateInput>
    /**
     * In case the Diagnoses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosesUpdateInput, DiagnosesUncheckedUpdateInput>
  }

  /**
   * Diagnoses delete
   */
  export type DiagnosesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter which Diagnoses to delete.
     */
    where: DiagnosesWhereUniqueInput
  }

  /**
   * Diagnoses deleteMany
   */
  export type DiagnosesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnoses to delete
     */
    where?: DiagnosesWhereInput
    /**
     * Limit how many Diagnoses to delete.
     */
    limit?: number
  }

  /**
   * Diagnoses.Cases
   */
  export type Diagnoses$CasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    where?: CasesWhereInput
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    cursor?: CasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasesScalarFieldEnum | CasesScalarFieldEnum[]
  }

  /**
   * Diagnoses without action
   */
  export type DiagnosesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
  }


  /**
   * Model Cases
   */

  export type AggregateCases = {
    _count: CasesCountAggregateOutputType | null
    _avg: CasesAvgAggregateOutputType | null
    _sum: CasesSumAggregateOutputType | null
    _min: CasesMinAggregateOutputType | null
    _max: CasesMaxAggregateOutputType | null
  }

  export type CasesAvgAggregateOutputType = {
    case_id: number | null
    patient_id: number | null
    doctor_id: number | null
    diagnosis_id: number | null
  }

  export type CasesSumAggregateOutputType = {
    case_id: number | null
    patient_id: number | null
    doctor_id: number | null
    diagnosis_id: number | null
  }

  export type CasesMinAggregateOutputType = {
    case_id: number | null
    patient_id: number | null
    doctor_id: number | null
    diagnosis_id: number | null
    case_date: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CasesMaxAggregateOutputType = {
    case_id: number | null
    patient_id: number | null
    doctor_id: number | null
    diagnosis_id: number | null
    case_date: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CasesCountAggregateOutputType = {
    case_id: number
    patient_id: number
    doctor_id: number
    diagnosis_id: number
    case_date: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CasesAvgAggregateInputType = {
    case_id?: true
    patient_id?: true
    doctor_id?: true
    diagnosis_id?: true
  }

  export type CasesSumAggregateInputType = {
    case_id?: true
    patient_id?: true
    doctor_id?: true
    diagnosis_id?: true
  }

  export type CasesMinAggregateInputType = {
    case_id?: true
    patient_id?: true
    doctor_id?: true
    diagnosis_id?: true
    case_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CasesMaxAggregateInputType = {
    case_id?: true
    patient_id?: true
    doctor_id?: true
    diagnosis_id?: true
    case_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CasesCountAggregateInputType = {
    case_id?: true
    patient_id?: true
    doctor_id?: true
    diagnosis_id?: true
    case_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cases to aggregate.
     */
    where?: CasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cases
    **/
    _count?: true | CasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasesMaxAggregateInputType
  }

  export type GetCasesAggregateType<T extends CasesAggregateArgs> = {
        [P in keyof T & keyof AggregateCases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCases[P]>
      : GetScalarType<T[P], AggregateCases[P]>
  }




  export type CasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasesWhereInput
    orderBy?: CasesOrderByWithAggregationInput | CasesOrderByWithAggregationInput[]
    by: CasesScalarFieldEnum[] | CasesScalarFieldEnum
    having?: CasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasesCountAggregateInputType | true
    _avg?: CasesAvgAggregateInputType
    _sum?: CasesSumAggregateInputType
    _min?: CasesMinAggregateInputType
    _max?: CasesMaxAggregateInputType
  }

  export type CasesGroupByOutputType = {
    case_id: number
    patient_id: number
    doctor_id: number
    diagnosis_id: number
    case_date: Date
    status: string
    created_at: Date
    updated_at: Date
    _count: CasesCountAggregateOutputType | null
    _avg: CasesAvgAggregateOutputType | null
    _sum: CasesSumAggregateOutputType | null
    _min: CasesMinAggregateOutputType | null
    _max: CasesMaxAggregateOutputType | null
  }

  type GetCasesGroupByPayload<T extends CasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasesGroupByOutputType[P]>
            : GetScalarType<T[P], CasesGroupByOutputType[P]>
        }
      >
    >


  export type CasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    case_id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    diagnosis_id?: boolean
    case_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
    diagnosis?: boolean | DiagnosesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cases"]>

  export type CasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    case_id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    diagnosis_id?: boolean
    case_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
    diagnosis?: boolean | DiagnosesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cases"]>

  export type CasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    case_id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    diagnosis_id?: boolean
    case_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
    diagnosis?: boolean | DiagnosesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cases"]>

  export type CasesSelectScalar = {
    case_id?: boolean
    patient_id?: boolean
    doctor_id?: boolean
    diagnosis_id?: boolean
    case_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"case_id" | "patient_id" | "doctor_id" | "diagnosis_id" | "case_date" | "status" | "created_at" | "updated_at", ExtArgs["result"]["cases"]>
  export type CasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
    diagnosis?: boolean | DiagnosesDefaultArgs<ExtArgs>
  }
  export type CasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
    diagnosis?: boolean | DiagnosesDefaultArgs<ExtArgs>
  }
  export type CasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorsDefaultArgs<ExtArgs>
    diagnosis?: boolean | DiagnosesDefaultArgs<ExtArgs>
  }

  export type $CasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cases"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
      doctor: Prisma.$DoctorsPayload<ExtArgs>
      diagnosis: Prisma.$DiagnosesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      case_id: number
      patient_id: number
      doctor_id: number
      diagnosis_id: number
      case_date: Date
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cases"]>
    composites: {}
  }

  type CasesGetPayload<S extends boolean | null | undefined | CasesDefaultArgs> = $Result.GetResult<Prisma.$CasesPayload, S>

  type CasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CasesCountAggregateInputType | true
    }

  export interface CasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cases'], meta: { name: 'Cases' } }
    /**
     * Find zero or one Cases that matches the filter.
     * @param {CasesFindUniqueArgs} args - Arguments to find a Cases
     * @example
     * // Get one Cases
     * const cases = await prisma.cases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasesFindUniqueArgs>(args: SelectSubset<T, CasesFindUniqueArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CasesFindUniqueOrThrowArgs} args - Arguments to find a Cases
     * @example
     * // Get one Cases
     * const cases = await prisma.cases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasesFindUniqueOrThrowArgs>(args: SelectSubset<T, CasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesFindFirstArgs} args - Arguments to find a Cases
     * @example
     * // Get one Cases
     * const cases = await prisma.cases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasesFindFirstArgs>(args?: SelectSubset<T, CasesFindFirstArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesFindFirstOrThrowArgs} args - Arguments to find a Cases
     * @example
     * // Get one Cases
     * const cases = await prisma.cases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasesFindFirstOrThrowArgs>(args?: SelectSubset<T, CasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cases
     * const cases = await prisma.cases.findMany()
     * 
     * // Get first 10 Cases
     * const cases = await prisma.cases.findMany({ take: 10 })
     * 
     * // Only select the `case_id`
     * const casesWithCase_idOnly = await prisma.cases.findMany({ select: { case_id: true } })
     * 
     */
    findMany<T extends CasesFindManyArgs>(args?: SelectSubset<T, CasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cases.
     * @param {CasesCreateArgs} args - Arguments to create a Cases.
     * @example
     * // Create one Cases
     * const Cases = await prisma.cases.create({
     *   data: {
     *     // ... data to create a Cases
     *   }
     * })
     * 
     */
    create<T extends CasesCreateArgs>(args: SelectSubset<T, CasesCreateArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cases.
     * @param {CasesCreateManyArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const cases = await prisma.cases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasesCreateManyArgs>(args?: SelectSubset<T, CasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cases and returns the data saved in the database.
     * @param {CasesCreateManyAndReturnArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const cases = await prisma.cases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cases and only return the `case_id`
     * const casesWithCase_idOnly = await prisma.cases.createManyAndReturn({
     *   select: { case_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasesCreateManyAndReturnArgs>(args?: SelectSubset<T, CasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cases.
     * @param {CasesDeleteArgs} args - Arguments to delete one Cases.
     * @example
     * // Delete one Cases
     * const Cases = await prisma.cases.delete({
     *   where: {
     *     // ... filter to delete one Cases
     *   }
     * })
     * 
     */
    delete<T extends CasesDeleteArgs>(args: SelectSubset<T, CasesDeleteArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cases.
     * @param {CasesUpdateArgs} args - Arguments to update one Cases.
     * @example
     * // Update one Cases
     * const cases = await prisma.cases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasesUpdateArgs>(args: SelectSubset<T, CasesUpdateArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cases.
     * @param {CasesDeleteManyArgs} args - Arguments to filter Cases to delete.
     * @example
     * // Delete a few Cases
     * const { count } = await prisma.cases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasesDeleteManyArgs>(args?: SelectSubset<T, CasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cases
     * const cases = await prisma.cases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasesUpdateManyArgs>(args: SelectSubset<T, CasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases and returns the data updated in the database.
     * @param {CasesUpdateManyAndReturnArgs} args - Arguments to update many Cases.
     * @example
     * // Update many Cases
     * const cases = await prisma.cases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cases and only return the `case_id`
     * const casesWithCase_idOnly = await prisma.cases.updateManyAndReturn({
     *   select: { case_id: true },
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
    updateManyAndReturn<T extends CasesUpdateManyAndReturnArgs>(args: SelectSubset<T, CasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cases.
     * @param {CasesUpsertArgs} args - Arguments to update or create a Cases.
     * @example
     * // Update or create a Cases
     * const cases = await prisma.cases.upsert({
     *   create: {
     *     // ... data to create a Cases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cases we want to update
     *   }
     * })
     */
    upsert<T extends CasesUpsertArgs>(args: SelectSubset<T, CasesUpsertArgs<ExtArgs>>): Prisma__CasesClient<$Result.GetResult<Prisma.$CasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesCountArgs} args - Arguments to filter Cases to count.
     * @example
     * // Count the number of Cases
     * const count = await prisma.cases.count({
     *   where: {
     *     // ... the filter for the Cases we want to count
     *   }
     * })
    **/
    count<T extends CasesCountArgs>(
      args?: Subset<T, CasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasesAggregateArgs>(args: Subset<T, CasesAggregateArgs>): Prisma.PrismaPromise<GetCasesAggregateType<T>>

    /**
     * Group by Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasesGroupByArgs} args - Group by arguments.
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
      T extends CasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasesGroupByArgs['orderBy'] }
        : { orderBy?: CasesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cases model
   */
  readonly fields: CasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorsDefaultArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    diagnosis<T extends DiagnosesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosesDefaultArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cases model
   */
  interface CasesFieldRefs {
    readonly case_id: FieldRef<"Cases", 'Int'>
    readonly patient_id: FieldRef<"Cases", 'Int'>
    readonly doctor_id: FieldRef<"Cases", 'Int'>
    readonly diagnosis_id: FieldRef<"Cases", 'Int'>
    readonly case_date: FieldRef<"Cases", 'DateTime'>
    readonly status: FieldRef<"Cases", 'String'>
    readonly created_at: FieldRef<"Cases", 'DateTime'>
    readonly updated_at: FieldRef<"Cases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cases findUnique
   */
  export type CasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where: CasesWhereUniqueInput
  }

  /**
   * Cases findUniqueOrThrow
   */
  export type CasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where: CasesWhereUniqueInput
  }

  /**
   * Cases findFirst
   */
  export type CasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CasesScalarFieldEnum | CasesScalarFieldEnum[]
  }

  /**
   * Cases findFirstOrThrow
   */
  export type CasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CasesScalarFieldEnum | CasesScalarFieldEnum[]
  }

  /**
   * Cases findMany
   */
  export type CasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CasesOrderByWithRelationInput | CasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cases.
     */
    cursor?: CasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    distinct?: CasesScalarFieldEnum | CasesScalarFieldEnum[]
  }

  /**
   * Cases create
   */
  export type CasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * The data needed to create a Cases.
     */
    data: XOR<CasesCreateInput, CasesUncheckedCreateInput>
  }

  /**
   * Cases createMany
   */
  export type CasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cases.
     */
    data: CasesCreateManyInput | CasesCreateManyInput[]
  }

  /**
   * Cases createManyAndReturn
   */
  export type CasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * The data used to create many Cases.
     */
    data: CasesCreateManyInput | CasesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cases update
   */
  export type CasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * The data needed to update a Cases.
     */
    data: XOR<CasesUpdateInput, CasesUncheckedUpdateInput>
    /**
     * Choose, which Cases to update.
     */
    where: CasesWhereUniqueInput
  }

  /**
   * Cases updateMany
   */
  export type CasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cases.
     */
    data: XOR<CasesUpdateManyMutationInput, CasesUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CasesWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
  }

  /**
   * Cases updateManyAndReturn
   */
  export type CasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * The data used to update Cases.
     */
    data: XOR<CasesUpdateManyMutationInput, CasesUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CasesWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cases upsert
   */
  export type CasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * The filter to search for the Cases to update in case it exists.
     */
    where: CasesWhereUniqueInput
    /**
     * In case the Cases found by the `where` argument doesn't exist, create a new Cases with this data.
     */
    create: XOR<CasesCreateInput, CasesUncheckedCreateInput>
    /**
     * In case the Cases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasesUpdateInput, CasesUncheckedUpdateInput>
  }

  /**
   * Cases delete
   */
  export type CasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
    /**
     * Filter which Cases to delete.
     */
    where: CasesWhereUniqueInput
  }

  /**
   * Cases deleteMany
   */
  export type CasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cases to delete
     */
    where?: CasesWhereInput
    /**
     * Limit how many Cases to delete.
     */
    limit?: number
  }

  /**
   * Cases without action
   */
  export type CasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cases
     */
    select?: CasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cases
     */
    omit?: CasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasesInclude<ExtArgs> | null
  }


  /**
   * Model AccessLogs
   */

  export type AggregateAccessLogs = {
    _count: AccessLogsCountAggregateOutputType | null
    _avg: AccessLogsAvgAggregateOutputType | null
    _sum: AccessLogsSumAggregateOutputType | null
    _min: AccessLogsMinAggregateOutputType | null
    _max: AccessLogsMaxAggregateOutputType | null
  }

  export type AccessLogsAvgAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    patient_id: number | null
    resource_id: number | null
  }

  export type AccessLogsSumAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    patient_id: number | null
    resource_id: number | null
  }

  export type AccessLogsMinAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    patient_id: number | null
    access_time: Date | null
    action: string | null
    resource_type: string | null
    resource_id: number | null
    created_at: Date | null
  }

  export type AccessLogsMaxAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    patient_id: number | null
    access_time: Date | null
    action: string | null
    resource_type: string | null
    resource_id: number | null
    created_at: Date | null
  }

  export type AccessLogsCountAggregateOutputType = {
    log_id: number
    user_id: number
    patient_id: number
    access_time: number
    action: number
    resource_type: number
    resource_id: number
    created_at: number
    _all: number
  }


  export type AccessLogsAvgAggregateInputType = {
    log_id?: true
    user_id?: true
    patient_id?: true
    resource_id?: true
  }

  export type AccessLogsSumAggregateInputType = {
    log_id?: true
    user_id?: true
    patient_id?: true
    resource_id?: true
  }

  export type AccessLogsMinAggregateInputType = {
    log_id?: true
    user_id?: true
    patient_id?: true
    access_time?: true
    action?: true
    resource_type?: true
    resource_id?: true
    created_at?: true
  }

  export type AccessLogsMaxAggregateInputType = {
    log_id?: true
    user_id?: true
    patient_id?: true
    access_time?: true
    action?: true
    resource_type?: true
    resource_id?: true
    created_at?: true
  }

  export type AccessLogsCountAggregateInputType = {
    log_id?: true
    user_id?: true
    patient_id?: true
    access_time?: true
    action?: true
    resource_type?: true
    resource_id?: true
    created_at?: true
    _all?: true
  }

  export type AccessLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessLogs to aggregate.
     */
    where?: AccessLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogsOrderByWithRelationInput | AccessLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessLogs
    **/
    _count?: true | AccessLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessLogsMaxAggregateInputType
  }

  export type GetAccessLogsAggregateType<T extends AccessLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessLogs[P]>
      : GetScalarType<T[P], AggregateAccessLogs[P]>
  }




  export type AccessLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessLogsWhereInput
    orderBy?: AccessLogsOrderByWithAggregationInput | AccessLogsOrderByWithAggregationInput[]
    by: AccessLogsScalarFieldEnum[] | AccessLogsScalarFieldEnum
    having?: AccessLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessLogsCountAggregateInputType | true
    _avg?: AccessLogsAvgAggregateInputType
    _sum?: AccessLogsSumAggregateInputType
    _min?: AccessLogsMinAggregateInputType
    _max?: AccessLogsMaxAggregateInputType
  }

  export type AccessLogsGroupByOutputType = {
    log_id: number
    user_id: number
    patient_id: number
    access_time: Date
    action: string
    resource_type: string
    resource_id: number
    created_at: Date
    _count: AccessLogsCountAggregateOutputType | null
    _avg: AccessLogsAvgAggregateOutputType | null
    _sum: AccessLogsSumAggregateOutputType | null
    _min: AccessLogsMinAggregateOutputType | null
    _max: AccessLogsMaxAggregateOutputType | null
  }

  type GetAccessLogsGroupByPayload<T extends AccessLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessLogsGroupByOutputType[P]>
            : GetScalarType<T[P], AccessLogsGroupByOutputType[P]>
        }
      >
    >


  export type AccessLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    patient_id?: boolean
    access_time?: boolean
    action?: boolean
    resource_type?: boolean
    resource_id?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessLogs"]>

  export type AccessLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    patient_id?: boolean
    access_time?: boolean
    action?: boolean
    resource_type?: boolean
    resource_id?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessLogs"]>

  export type AccessLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    patient_id?: boolean
    access_time?: boolean
    action?: boolean
    resource_type?: boolean
    resource_id?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessLogs"]>

  export type AccessLogsSelectScalar = {
    log_id?: boolean
    user_id?: boolean
    patient_id?: boolean
    access_time?: boolean
    action?: boolean
    resource_type?: boolean
    resource_id?: boolean
    created_at?: boolean
  }

  export type AccessLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"log_id" | "user_id" | "patient_id" | "access_time" | "action" | "resource_type" | "resource_id" | "created_at", ExtArgs["result"]["accessLogs"]>
  export type AccessLogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type AccessLogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }
  export type AccessLogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
  }

  export type $AccessLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessLogs"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      patient: Prisma.$PatientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      log_id: number
      user_id: number
      patient_id: number
      access_time: Date
      action: string
      resource_type: string
      resource_id: number
      created_at: Date
    }, ExtArgs["result"]["accessLogs"]>
    composites: {}
  }

  type AccessLogsGetPayload<S extends boolean | null | undefined | AccessLogsDefaultArgs> = $Result.GetResult<Prisma.$AccessLogsPayload, S>

  type AccessLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessLogsCountAggregateInputType | true
    }

  export interface AccessLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessLogs'], meta: { name: 'AccessLogs' } }
    /**
     * Find zero or one AccessLogs that matches the filter.
     * @param {AccessLogsFindUniqueArgs} args - Arguments to find a AccessLogs
     * @example
     * // Get one AccessLogs
     * const accessLogs = await prisma.accessLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessLogsFindUniqueArgs>(args: SelectSubset<T, AccessLogsFindUniqueArgs<ExtArgs>>): Prisma__AccessLogsClient<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessLogsFindUniqueOrThrowArgs} args - Arguments to find a AccessLogs
     * @example
     * // Get one AccessLogs
     * const accessLogs = await prisma.accessLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessLogsClient<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogsFindFirstArgs} args - Arguments to find a AccessLogs
     * @example
     * // Get one AccessLogs
     * const accessLogs = await prisma.accessLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessLogsFindFirstArgs>(args?: SelectSubset<T, AccessLogsFindFirstArgs<ExtArgs>>): Prisma__AccessLogsClient<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogsFindFirstOrThrowArgs} args - Arguments to find a AccessLogs
     * @example
     * // Get one AccessLogs
     * const accessLogs = await prisma.accessLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessLogsClient<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessLogs
     * const accessLogs = await prisma.accessLogs.findMany()
     * 
     * // Get first 10 AccessLogs
     * const accessLogs = await prisma.accessLogs.findMany({ take: 10 })
     * 
     * // Only select the `log_id`
     * const accessLogsWithLog_idOnly = await prisma.accessLogs.findMany({ select: { log_id: true } })
     * 
     */
    findMany<T extends AccessLogsFindManyArgs>(args?: SelectSubset<T, AccessLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessLogs.
     * @param {AccessLogsCreateArgs} args - Arguments to create a AccessLogs.
     * @example
     * // Create one AccessLogs
     * const AccessLogs = await prisma.accessLogs.create({
     *   data: {
     *     // ... data to create a AccessLogs
     *   }
     * })
     * 
     */
    create<T extends AccessLogsCreateArgs>(args: SelectSubset<T, AccessLogsCreateArgs<ExtArgs>>): Prisma__AccessLogsClient<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessLogs.
     * @param {AccessLogsCreateManyArgs} args - Arguments to create many AccessLogs.
     * @example
     * // Create many AccessLogs
     * const accessLogs = await prisma.accessLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessLogsCreateManyArgs>(args?: SelectSubset<T, AccessLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessLogs and returns the data saved in the database.
     * @param {AccessLogsCreateManyAndReturnArgs} args - Arguments to create many AccessLogs.
     * @example
     * // Create many AccessLogs
     * const accessLogs = await prisma.accessLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessLogs and only return the `log_id`
     * const accessLogsWithLog_idOnly = await prisma.accessLogs.createManyAndReturn({
     *   select: { log_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessLogs.
     * @param {AccessLogsDeleteArgs} args - Arguments to delete one AccessLogs.
     * @example
     * // Delete one AccessLogs
     * const AccessLogs = await prisma.accessLogs.delete({
     *   where: {
     *     // ... filter to delete one AccessLogs
     *   }
     * })
     * 
     */
    delete<T extends AccessLogsDeleteArgs>(args: SelectSubset<T, AccessLogsDeleteArgs<ExtArgs>>): Prisma__AccessLogsClient<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessLogs.
     * @param {AccessLogsUpdateArgs} args - Arguments to update one AccessLogs.
     * @example
     * // Update one AccessLogs
     * const accessLogs = await prisma.accessLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessLogsUpdateArgs>(args: SelectSubset<T, AccessLogsUpdateArgs<ExtArgs>>): Prisma__AccessLogsClient<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessLogs.
     * @param {AccessLogsDeleteManyArgs} args - Arguments to filter AccessLogs to delete.
     * @example
     * // Delete a few AccessLogs
     * const { count } = await prisma.accessLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessLogsDeleteManyArgs>(args?: SelectSubset<T, AccessLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessLogs
     * const accessLogs = await prisma.accessLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessLogsUpdateManyArgs>(args: SelectSubset<T, AccessLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessLogs and returns the data updated in the database.
     * @param {AccessLogsUpdateManyAndReturnArgs} args - Arguments to update many AccessLogs.
     * @example
     * // Update many AccessLogs
     * const accessLogs = await prisma.accessLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessLogs and only return the `log_id`
     * const accessLogsWithLog_idOnly = await prisma.accessLogs.updateManyAndReturn({
     *   select: { log_id: true },
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
    updateManyAndReturn<T extends AccessLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessLogs.
     * @param {AccessLogsUpsertArgs} args - Arguments to update or create a AccessLogs.
     * @example
     * // Update or create a AccessLogs
     * const accessLogs = await prisma.accessLogs.upsert({
     *   create: {
     *     // ... data to create a AccessLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessLogs we want to update
     *   }
     * })
     */
    upsert<T extends AccessLogsUpsertArgs>(args: SelectSubset<T, AccessLogsUpsertArgs<ExtArgs>>): Prisma__AccessLogsClient<$Result.GetResult<Prisma.$AccessLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogsCountArgs} args - Arguments to filter AccessLogs to count.
     * @example
     * // Count the number of AccessLogs
     * const count = await prisma.accessLogs.count({
     *   where: {
     *     // ... the filter for the AccessLogs we want to count
     *   }
     * })
    **/
    count<T extends AccessLogsCountArgs>(
      args?: Subset<T, AccessLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccessLogsAggregateArgs>(args: Subset<T, AccessLogsAggregateArgs>): Prisma.PrismaPromise<GetAccessLogsAggregateType<T>>

    /**
     * Group by AccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogsGroupByArgs} args - Group by arguments.
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
      T extends AccessLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessLogsGroupByArgs['orderBy'] }
        : { orderBy?: AccessLogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccessLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessLogs model
   */
  readonly fields: AccessLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AccessLogs model
   */
  interface AccessLogsFieldRefs {
    readonly log_id: FieldRef<"AccessLogs", 'Int'>
    readonly user_id: FieldRef<"AccessLogs", 'Int'>
    readonly patient_id: FieldRef<"AccessLogs", 'Int'>
    readonly access_time: FieldRef<"AccessLogs", 'DateTime'>
    readonly action: FieldRef<"AccessLogs", 'String'>
    readonly resource_type: FieldRef<"AccessLogs", 'String'>
    readonly resource_id: FieldRef<"AccessLogs", 'Int'>
    readonly created_at: FieldRef<"AccessLogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccessLogs findUnique
   */
  export type AccessLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
    /**
     * Filter, which AccessLogs to fetch.
     */
    where: AccessLogsWhereUniqueInput
  }

  /**
   * AccessLogs findUniqueOrThrow
   */
  export type AccessLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
    /**
     * Filter, which AccessLogs to fetch.
     */
    where: AccessLogsWhereUniqueInput
  }

  /**
   * AccessLogs findFirst
   */
  export type AccessLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
    /**
     * Filter, which AccessLogs to fetch.
     */
    where?: AccessLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogsOrderByWithRelationInput | AccessLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessLogs.
     */
    cursor?: AccessLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessLogs.
     */
    distinct?: AccessLogsScalarFieldEnum | AccessLogsScalarFieldEnum[]
  }

  /**
   * AccessLogs findFirstOrThrow
   */
  export type AccessLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
    /**
     * Filter, which AccessLogs to fetch.
     */
    where?: AccessLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogsOrderByWithRelationInput | AccessLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessLogs.
     */
    cursor?: AccessLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessLogs.
     */
    distinct?: AccessLogsScalarFieldEnum | AccessLogsScalarFieldEnum[]
  }

  /**
   * AccessLogs findMany
   */
  export type AccessLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
    /**
     * Filter, which AccessLogs to fetch.
     */
    where?: AccessLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogsOrderByWithRelationInput | AccessLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessLogs.
     */
    cursor?: AccessLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    distinct?: AccessLogsScalarFieldEnum | AccessLogsScalarFieldEnum[]
  }

  /**
   * AccessLogs create
   */
  export type AccessLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessLogs.
     */
    data: XOR<AccessLogsCreateInput, AccessLogsUncheckedCreateInput>
  }

  /**
   * AccessLogs createMany
   */
  export type AccessLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessLogs.
     */
    data: AccessLogsCreateManyInput | AccessLogsCreateManyInput[]
  }

  /**
   * AccessLogs createManyAndReturn
   */
  export type AccessLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * The data used to create many AccessLogs.
     */
    data: AccessLogsCreateManyInput | AccessLogsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessLogs update
   */
  export type AccessLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessLogs.
     */
    data: XOR<AccessLogsUpdateInput, AccessLogsUncheckedUpdateInput>
    /**
     * Choose, which AccessLogs to update.
     */
    where: AccessLogsWhereUniqueInput
  }

  /**
   * AccessLogs updateMany
   */
  export type AccessLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessLogs.
     */
    data: XOR<AccessLogsUpdateManyMutationInput, AccessLogsUncheckedUpdateManyInput>
    /**
     * Filter which AccessLogs to update
     */
    where?: AccessLogsWhereInput
    /**
     * Limit how many AccessLogs to update.
     */
    limit?: number
  }

  /**
   * AccessLogs updateManyAndReturn
   */
  export type AccessLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * The data used to update AccessLogs.
     */
    data: XOR<AccessLogsUpdateManyMutationInput, AccessLogsUncheckedUpdateManyInput>
    /**
     * Filter which AccessLogs to update
     */
    where?: AccessLogsWhereInput
    /**
     * Limit how many AccessLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessLogs upsert
   */
  export type AccessLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessLogs to update in case it exists.
     */
    where: AccessLogsWhereUniqueInput
    /**
     * In case the AccessLogs found by the `where` argument doesn't exist, create a new AccessLogs with this data.
     */
    create: XOR<AccessLogsCreateInput, AccessLogsUncheckedCreateInput>
    /**
     * In case the AccessLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessLogsUpdateInput, AccessLogsUncheckedUpdateInput>
  }

  /**
   * AccessLogs delete
   */
  export type AccessLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
    /**
     * Filter which AccessLogs to delete.
     */
    where: AccessLogsWhereUniqueInput
  }

  /**
   * AccessLogs deleteMany
   */
  export type AccessLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessLogs to delete
     */
    where?: AccessLogsWhereInput
    /**
     * Limit how many AccessLogs to delete.
     */
    limit?: number
  }

  /**
   * AccessLogs without action
   */
  export type AccessLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLogs
     */
    select?: AccessLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLogs
     */
    omit?: AccessLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    password_hash: 'password_hash',
    full_name: 'full_name',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PatientsScalarFieldEnum: {
    patient_id: 'patient_id',
    full_name: 'full_name',
    date_of_birth: 'date_of_birth',
    gender: 'gender',
    phone_number: 'phone_number',
    address: 'address',
    allergies: 'allergies',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PatientsScalarFieldEnum = (typeof PatientsScalarFieldEnum)[keyof typeof PatientsScalarFieldEnum]


  export const DoctorsScalarFieldEnum: {
    doctor_id: 'doctor_id',
    user_id: 'user_id',
    specialty: 'specialty',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DoctorsScalarFieldEnum = (typeof DoctorsScalarFieldEnum)[keyof typeof DoctorsScalarFieldEnum]


  export const MedicalHistoryScalarFieldEnum: {
    history_id: 'history_id',
    patient_id: 'patient_id',
    technician_id: 'technician_id',
    record_date: 'record_date',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MedicalHistoryScalarFieldEnum = (typeof MedicalHistoryScalarFieldEnum)[keyof typeof MedicalHistoryScalarFieldEnum]


  export const LabOrdersScalarFieldEnum: {
    order_id: 'order_id',
    patient_id: 'patient_id',
    ordered_by: 'ordered_by',
    test_type: 'test_type',
    order_date: 'order_date',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LabOrdersScalarFieldEnum = (typeof LabOrdersScalarFieldEnum)[keyof typeof LabOrdersScalarFieldEnum]


  export const LabResultsScalarFieldEnum: {
    result_id: 'result_id',
    patient_id: 'patient_id',
    technician_id: 'technician_id',
    order_id: 'order_id',
    test_date: 'test_date',
    test_type: 'test_type',
    result_value: 'result_value',
    unit: 'unit',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LabResultsScalarFieldEnum = (typeof LabResultsScalarFieldEnum)[keyof typeof LabResultsScalarFieldEnum]


  export const DiseasesScalarFieldEnum: {
    disease_id: 'disease_id',
    disease_name: 'disease_name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DiseasesScalarFieldEnum = (typeof DiseasesScalarFieldEnum)[keyof typeof DiseasesScalarFieldEnum]


  export const DiagnosesScalarFieldEnum: {
    diagnosis_id: 'diagnosis_id',
    patient_id: 'patient_id',
    disease_id: 'disease_id',
    diagnosis_date: 'diagnosis_date',
    status: 'status',
    recovery_date: 'recovery_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DiagnosesScalarFieldEnum = (typeof DiagnosesScalarFieldEnum)[keyof typeof DiagnosesScalarFieldEnum]


  export const CasesScalarFieldEnum: {
    case_id: 'case_id',
    patient_id: 'patient_id',
    doctor_id: 'doctor_id',
    diagnosis_id: 'diagnosis_id',
    case_date: 'case_date',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CasesScalarFieldEnum = (typeof CasesScalarFieldEnum)[keyof typeof CasesScalarFieldEnum]


  export const AccessLogsScalarFieldEnum: {
    log_id: 'log_id',
    user_id: 'user_id',
    patient_id: 'patient_id',
    access_time: 'access_time',
    action: 'action',
    resource_type: 'resource_type',
    resource_id: 'resource_id',
    created_at: 'created_at'
  };

  export type AccessLogsScalarFieldEnum = (typeof AccessLogsScalarFieldEnum)[keyof typeof AccessLogsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    password_hash?: StringFilter<"Users"> | string
    full_name?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    doctor?: XOR<DoctorsNullableScalarRelationFilter, DoctorsWhereInput> | null
    LabOrders?: LabOrdersListRelationFilter
    MedicalHistory?: MedicalHistoryListRelationFilter
    LabResults?: LabResultsListRelationFilter
    AccessLogs?: AccessLogsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    doctor?: DoctorsOrderByWithRelationInput
    LabOrders?: LabOrdersOrderByRelationAggregateInput
    MedicalHistory?: MedicalHistoryOrderByRelationAggregateInput
    LabResults?: LabResultsOrderByRelationAggregateInput
    AccessLogs?: AccessLogsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password_hash?: StringFilter<"Users"> | string
    full_name?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    doctor?: XOR<DoctorsNullableScalarRelationFilter, DoctorsWhereInput> | null
    LabOrders?: LabOrdersListRelationFilter
    MedicalHistory?: MedicalHistoryListRelationFilter
    LabResults?: LabResultsListRelationFilter
    AccessLogs?: AccessLogsListRelationFilter
  }, "user_id" | "username">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Users"> | number
    username?: StringWithAggregatesFilter<"Users"> | string
    password_hash?: StringWithAggregatesFilter<"Users"> | string
    full_name?: StringWithAggregatesFilter<"Users"> | string
    role?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type PatientsWhereInput = {
    AND?: PatientsWhereInput | PatientsWhereInput[]
    OR?: PatientsWhereInput[]
    NOT?: PatientsWhereInput | PatientsWhereInput[]
    patient_id?: IntFilter<"Patients"> | number
    full_name?: StringFilter<"Patients"> | string
    date_of_birth?: DateTimeFilter<"Patients"> | Date | string
    gender?: StringFilter<"Patients"> | string
    phone_number?: StringFilter<"Patients"> | string
    address?: StringFilter<"Patients"> | string
    allergies?: StringNullableFilter<"Patients"> | string | null
    is_active?: BoolFilter<"Patients"> | boolean
    created_at?: DateTimeFilter<"Patients"> | Date | string
    updated_at?: DateTimeFilter<"Patients"> | Date | string
    MedicalHistory?: MedicalHistoryListRelationFilter
    LabOrders?: LabOrdersListRelationFilter
    LabResults?: LabResultsListRelationFilter
    Diagnoses?: DiagnosesListRelationFilter
    Cases?: CasesListRelationFilter
    AccessLogs?: AccessLogsListRelationFilter
  }

  export type PatientsOrderByWithRelationInput = {
    patient_id?: SortOrder
    full_name?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    allergies?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    MedicalHistory?: MedicalHistoryOrderByRelationAggregateInput
    LabOrders?: LabOrdersOrderByRelationAggregateInput
    LabResults?: LabResultsOrderByRelationAggregateInput
    Diagnoses?: DiagnosesOrderByRelationAggregateInput
    Cases?: CasesOrderByRelationAggregateInput
    AccessLogs?: AccessLogsOrderByRelationAggregateInput
  }

  export type PatientsWhereUniqueInput = Prisma.AtLeast<{
    patient_id?: number
    phone_number?: string
    AND?: PatientsWhereInput | PatientsWhereInput[]
    OR?: PatientsWhereInput[]
    NOT?: PatientsWhereInput | PatientsWhereInput[]
    full_name?: StringFilter<"Patients"> | string
    date_of_birth?: DateTimeFilter<"Patients"> | Date | string
    gender?: StringFilter<"Patients"> | string
    address?: StringFilter<"Patients"> | string
    allergies?: StringNullableFilter<"Patients"> | string | null
    is_active?: BoolFilter<"Patients"> | boolean
    created_at?: DateTimeFilter<"Patients"> | Date | string
    updated_at?: DateTimeFilter<"Patients"> | Date | string
    MedicalHistory?: MedicalHistoryListRelationFilter
    LabOrders?: LabOrdersListRelationFilter
    LabResults?: LabResultsListRelationFilter
    Diagnoses?: DiagnosesListRelationFilter
    Cases?: CasesListRelationFilter
    AccessLogs?: AccessLogsListRelationFilter
  }, "patient_id" | "phone_number">

  export type PatientsOrderByWithAggregationInput = {
    patient_id?: SortOrder
    full_name?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    allergies?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PatientsCountOrderByAggregateInput
    _avg?: PatientsAvgOrderByAggregateInput
    _max?: PatientsMaxOrderByAggregateInput
    _min?: PatientsMinOrderByAggregateInput
    _sum?: PatientsSumOrderByAggregateInput
  }

  export type PatientsScalarWhereWithAggregatesInput = {
    AND?: PatientsScalarWhereWithAggregatesInput | PatientsScalarWhereWithAggregatesInput[]
    OR?: PatientsScalarWhereWithAggregatesInput[]
    NOT?: PatientsScalarWhereWithAggregatesInput | PatientsScalarWhereWithAggregatesInput[]
    patient_id?: IntWithAggregatesFilter<"Patients"> | number
    full_name?: StringWithAggregatesFilter<"Patients"> | string
    date_of_birth?: DateTimeWithAggregatesFilter<"Patients"> | Date | string
    gender?: StringWithAggregatesFilter<"Patients"> | string
    phone_number?: StringWithAggregatesFilter<"Patients"> | string
    address?: StringWithAggregatesFilter<"Patients"> | string
    allergies?: StringNullableWithAggregatesFilter<"Patients"> | string | null
    is_active?: BoolWithAggregatesFilter<"Patients"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Patients"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Patients"> | Date | string
  }

  export type DoctorsWhereInput = {
    AND?: DoctorsWhereInput | DoctorsWhereInput[]
    OR?: DoctorsWhereInput[]
    NOT?: DoctorsWhereInput | DoctorsWhereInput[]
    doctor_id?: IntFilter<"Doctors"> | number
    user_id?: IntFilter<"Doctors"> | number
    specialty?: StringFilter<"Doctors"> | string
    created_at?: DateTimeFilter<"Doctors"> | Date | string
    updated_at?: DateTimeFilter<"Doctors"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Cases?: CasesListRelationFilter
  }

  export type DoctorsOrderByWithRelationInput = {
    doctor_id?: SortOrder
    user_id?: SortOrder
    specialty?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    Cases?: CasesOrderByRelationAggregateInput
  }

  export type DoctorsWhereUniqueInput = Prisma.AtLeast<{
    doctor_id?: number
    user_id?: number
    AND?: DoctorsWhereInput | DoctorsWhereInput[]
    OR?: DoctorsWhereInput[]
    NOT?: DoctorsWhereInput | DoctorsWhereInput[]
    specialty?: StringFilter<"Doctors"> | string
    created_at?: DateTimeFilter<"Doctors"> | Date | string
    updated_at?: DateTimeFilter<"Doctors"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Cases?: CasesListRelationFilter
  }, "doctor_id" | "user_id">

  export type DoctorsOrderByWithAggregationInput = {
    doctor_id?: SortOrder
    user_id?: SortOrder
    specialty?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DoctorsCountOrderByAggregateInput
    _avg?: DoctorsAvgOrderByAggregateInput
    _max?: DoctorsMaxOrderByAggregateInput
    _min?: DoctorsMinOrderByAggregateInput
    _sum?: DoctorsSumOrderByAggregateInput
  }

  export type DoctorsScalarWhereWithAggregatesInput = {
    AND?: DoctorsScalarWhereWithAggregatesInput | DoctorsScalarWhereWithAggregatesInput[]
    OR?: DoctorsScalarWhereWithAggregatesInput[]
    NOT?: DoctorsScalarWhereWithAggregatesInput | DoctorsScalarWhereWithAggregatesInput[]
    doctor_id?: IntWithAggregatesFilter<"Doctors"> | number
    user_id?: IntWithAggregatesFilter<"Doctors"> | number
    specialty?: StringWithAggregatesFilter<"Doctors"> | string
    created_at?: DateTimeWithAggregatesFilter<"Doctors"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Doctors"> | Date | string
  }

  export type MedicalHistoryWhereInput = {
    AND?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    OR?: MedicalHistoryWhereInput[]
    NOT?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    history_id?: IntFilter<"MedicalHistory"> | number
    patient_id?: IntFilter<"MedicalHistory"> | number
    technician_id?: IntFilter<"MedicalHistory"> | number
    record_date?: DateTimeFilter<"MedicalHistory"> | Date | string
    description?: StringFilter<"MedicalHistory"> | string
    created_at?: DateTimeFilter<"MedicalHistory"> | Date | string
    updated_at?: DateTimeFilter<"MedicalHistory"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    technician?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type MedicalHistoryOrderByWithRelationInput = {
    history_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    record_date?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient?: PatientsOrderByWithRelationInput
    technician?: UsersOrderByWithRelationInput
  }

  export type MedicalHistoryWhereUniqueInput = Prisma.AtLeast<{
    history_id?: number
    AND?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    OR?: MedicalHistoryWhereInput[]
    NOT?: MedicalHistoryWhereInput | MedicalHistoryWhereInput[]
    patient_id?: IntFilter<"MedicalHistory"> | number
    technician_id?: IntFilter<"MedicalHistory"> | number
    record_date?: DateTimeFilter<"MedicalHistory"> | Date | string
    description?: StringFilter<"MedicalHistory"> | string
    created_at?: DateTimeFilter<"MedicalHistory"> | Date | string
    updated_at?: DateTimeFilter<"MedicalHistory"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    technician?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "history_id">

  export type MedicalHistoryOrderByWithAggregationInput = {
    history_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    record_date?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MedicalHistoryCountOrderByAggregateInput
    _avg?: MedicalHistoryAvgOrderByAggregateInput
    _max?: MedicalHistoryMaxOrderByAggregateInput
    _min?: MedicalHistoryMinOrderByAggregateInput
    _sum?: MedicalHistorySumOrderByAggregateInput
  }

  export type MedicalHistoryScalarWhereWithAggregatesInput = {
    AND?: MedicalHistoryScalarWhereWithAggregatesInput | MedicalHistoryScalarWhereWithAggregatesInput[]
    OR?: MedicalHistoryScalarWhereWithAggregatesInput[]
    NOT?: MedicalHistoryScalarWhereWithAggregatesInput | MedicalHistoryScalarWhereWithAggregatesInput[]
    history_id?: IntWithAggregatesFilter<"MedicalHistory"> | number
    patient_id?: IntWithAggregatesFilter<"MedicalHistory"> | number
    technician_id?: IntWithAggregatesFilter<"MedicalHistory"> | number
    record_date?: DateTimeWithAggregatesFilter<"MedicalHistory"> | Date | string
    description?: StringWithAggregatesFilter<"MedicalHistory"> | string
    created_at?: DateTimeWithAggregatesFilter<"MedicalHistory"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MedicalHistory"> | Date | string
  }

  export type LabOrdersWhereInput = {
    AND?: LabOrdersWhereInput | LabOrdersWhereInput[]
    OR?: LabOrdersWhereInput[]
    NOT?: LabOrdersWhereInput | LabOrdersWhereInput[]
    order_id?: IntFilter<"LabOrders"> | number
    patient_id?: IntFilter<"LabOrders"> | number
    ordered_by?: IntFilter<"LabOrders"> | number
    test_type?: StringFilter<"LabOrders"> | string
    order_date?: DateTimeFilter<"LabOrders"> | Date | string
    status?: StringFilter<"LabOrders"> | string
    created_at?: DateTimeFilter<"LabOrders"> | Date | string
    updated_at?: DateTimeFilter<"LabOrders"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    orderedBy?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    LabResults?: LabResultsListRelationFilter
  }

  export type LabOrdersOrderByWithRelationInput = {
    order_id?: SortOrder
    patient_id?: SortOrder
    ordered_by?: SortOrder
    test_type?: SortOrder
    order_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient?: PatientsOrderByWithRelationInput
    orderedBy?: UsersOrderByWithRelationInput
    LabResults?: LabResultsOrderByRelationAggregateInput
  }

  export type LabOrdersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: LabOrdersWhereInput | LabOrdersWhereInput[]
    OR?: LabOrdersWhereInput[]
    NOT?: LabOrdersWhereInput | LabOrdersWhereInput[]
    patient_id?: IntFilter<"LabOrders"> | number
    ordered_by?: IntFilter<"LabOrders"> | number
    test_type?: StringFilter<"LabOrders"> | string
    order_date?: DateTimeFilter<"LabOrders"> | Date | string
    status?: StringFilter<"LabOrders"> | string
    created_at?: DateTimeFilter<"LabOrders"> | Date | string
    updated_at?: DateTimeFilter<"LabOrders"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    orderedBy?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    LabResults?: LabResultsListRelationFilter
  }, "order_id">

  export type LabOrdersOrderByWithAggregationInput = {
    order_id?: SortOrder
    patient_id?: SortOrder
    ordered_by?: SortOrder
    test_type?: SortOrder
    order_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LabOrdersCountOrderByAggregateInput
    _avg?: LabOrdersAvgOrderByAggregateInput
    _max?: LabOrdersMaxOrderByAggregateInput
    _min?: LabOrdersMinOrderByAggregateInput
    _sum?: LabOrdersSumOrderByAggregateInput
  }

  export type LabOrdersScalarWhereWithAggregatesInput = {
    AND?: LabOrdersScalarWhereWithAggregatesInput | LabOrdersScalarWhereWithAggregatesInput[]
    OR?: LabOrdersScalarWhereWithAggregatesInput[]
    NOT?: LabOrdersScalarWhereWithAggregatesInput | LabOrdersScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"LabOrders"> | number
    patient_id?: IntWithAggregatesFilter<"LabOrders"> | number
    ordered_by?: IntWithAggregatesFilter<"LabOrders"> | number
    test_type?: StringWithAggregatesFilter<"LabOrders"> | string
    order_date?: DateTimeWithAggregatesFilter<"LabOrders"> | Date | string
    status?: StringWithAggregatesFilter<"LabOrders"> | string
    created_at?: DateTimeWithAggregatesFilter<"LabOrders"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"LabOrders"> | Date | string
  }

  export type LabResultsWhereInput = {
    AND?: LabResultsWhereInput | LabResultsWhereInput[]
    OR?: LabResultsWhereInput[]
    NOT?: LabResultsWhereInput | LabResultsWhereInput[]
    result_id?: IntFilter<"LabResults"> | number
    patient_id?: IntFilter<"LabResults"> | number
    technician_id?: IntFilter<"LabResults"> | number
    order_id?: IntFilter<"LabResults"> | number
    test_date?: DateTimeFilter<"LabResults"> | Date | string
    test_type?: StringFilter<"LabResults"> | string
    result_value?: FloatFilter<"LabResults"> | number
    unit?: StringFilter<"LabResults"> | string
    created_at?: DateTimeFilter<"LabResults"> | Date | string
    updated_at?: DateTimeFilter<"LabResults"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    technician?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    order?: XOR<LabOrdersScalarRelationFilter, LabOrdersWhereInput>
  }

  export type LabResultsOrderByWithRelationInput = {
    result_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    order_id?: SortOrder
    test_date?: SortOrder
    test_type?: SortOrder
    result_value?: SortOrder
    unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient?: PatientsOrderByWithRelationInput
    technician?: UsersOrderByWithRelationInput
    order?: LabOrdersOrderByWithRelationInput
  }

  export type LabResultsWhereUniqueInput = Prisma.AtLeast<{
    result_id?: number
    AND?: LabResultsWhereInput | LabResultsWhereInput[]
    OR?: LabResultsWhereInput[]
    NOT?: LabResultsWhereInput | LabResultsWhereInput[]
    patient_id?: IntFilter<"LabResults"> | number
    technician_id?: IntFilter<"LabResults"> | number
    order_id?: IntFilter<"LabResults"> | number
    test_date?: DateTimeFilter<"LabResults"> | Date | string
    test_type?: StringFilter<"LabResults"> | string
    result_value?: FloatFilter<"LabResults"> | number
    unit?: StringFilter<"LabResults"> | string
    created_at?: DateTimeFilter<"LabResults"> | Date | string
    updated_at?: DateTimeFilter<"LabResults"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    technician?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    order?: XOR<LabOrdersScalarRelationFilter, LabOrdersWhereInput>
  }, "result_id">

  export type LabResultsOrderByWithAggregationInput = {
    result_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    order_id?: SortOrder
    test_date?: SortOrder
    test_type?: SortOrder
    result_value?: SortOrder
    unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LabResultsCountOrderByAggregateInput
    _avg?: LabResultsAvgOrderByAggregateInput
    _max?: LabResultsMaxOrderByAggregateInput
    _min?: LabResultsMinOrderByAggregateInput
    _sum?: LabResultsSumOrderByAggregateInput
  }

  export type LabResultsScalarWhereWithAggregatesInput = {
    AND?: LabResultsScalarWhereWithAggregatesInput | LabResultsScalarWhereWithAggregatesInput[]
    OR?: LabResultsScalarWhereWithAggregatesInput[]
    NOT?: LabResultsScalarWhereWithAggregatesInput | LabResultsScalarWhereWithAggregatesInput[]
    result_id?: IntWithAggregatesFilter<"LabResults"> | number
    patient_id?: IntWithAggregatesFilter<"LabResults"> | number
    technician_id?: IntWithAggregatesFilter<"LabResults"> | number
    order_id?: IntWithAggregatesFilter<"LabResults"> | number
    test_date?: DateTimeWithAggregatesFilter<"LabResults"> | Date | string
    test_type?: StringWithAggregatesFilter<"LabResults"> | string
    result_value?: FloatWithAggregatesFilter<"LabResults"> | number
    unit?: StringWithAggregatesFilter<"LabResults"> | string
    created_at?: DateTimeWithAggregatesFilter<"LabResults"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"LabResults"> | Date | string
  }

  export type DiseasesWhereInput = {
    AND?: DiseasesWhereInput | DiseasesWhereInput[]
    OR?: DiseasesWhereInput[]
    NOT?: DiseasesWhereInput | DiseasesWhereInput[]
    disease_id?: IntFilter<"Diseases"> | number
    disease_name?: StringFilter<"Diseases"> | string
    description?: StringNullableFilter<"Diseases"> | string | null
    created_at?: DateTimeFilter<"Diseases"> | Date | string
    updated_at?: DateTimeFilter<"Diseases"> | Date | string
    Diagnoses?: DiagnosesListRelationFilter
  }

  export type DiseasesOrderByWithRelationInput = {
    disease_id?: SortOrder
    disease_name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Diagnoses?: DiagnosesOrderByRelationAggregateInput
  }

  export type DiseasesWhereUniqueInput = Prisma.AtLeast<{
    disease_id?: number
    disease_name?: string
    AND?: DiseasesWhereInput | DiseasesWhereInput[]
    OR?: DiseasesWhereInput[]
    NOT?: DiseasesWhereInput | DiseasesWhereInput[]
    description?: StringNullableFilter<"Diseases"> | string | null
    created_at?: DateTimeFilter<"Diseases"> | Date | string
    updated_at?: DateTimeFilter<"Diseases"> | Date | string
    Diagnoses?: DiagnosesListRelationFilter
  }, "disease_id" | "disease_name">

  export type DiseasesOrderByWithAggregationInput = {
    disease_id?: SortOrder
    disease_name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DiseasesCountOrderByAggregateInput
    _avg?: DiseasesAvgOrderByAggregateInput
    _max?: DiseasesMaxOrderByAggregateInput
    _min?: DiseasesMinOrderByAggregateInput
    _sum?: DiseasesSumOrderByAggregateInput
  }

  export type DiseasesScalarWhereWithAggregatesInput = {
    AND?: DiseasesScalarWhereWithAggregatesInput | DiseasesScalarWhereWithAggregatesInput[]
    OR?: DiseasesScalarWhereWithAggregatesInput[]
    NOT?: DiseasesScalarWhereWithAggregatesInput | DiseasesScalarWhereWithAggregatesInput[]
    disease_id?: IntWithAggregatesFilter<"Diseases"> | number
    disease_name?: StringWithAggregatesFilter<"Diseases"> | string
    description?: StringNullableWithAggregatesFilter<"Diseases"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Diseases"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Diseases"> | Date | string
  }

  export type DiagnosesWhereInput = {
    AND?: DiagnosesWhereInput | DiagnosesWhereInput[]
    OR?: DiagnosesWhereInput[]
    NOT?: DiagnosesWhereInput | DiagnosesWhereInput[]
    diagnosis_id?: IntFilter<"Diagnoses"> | number
    patient_id?: IntFilter<"Diagnoses"> | number
    disease_id?: IntFilter<"Diagnoses"> | number
    diagnosis_date?: DateTimeFilter<"Diagnoses"> | Date | string
    status?: StringFilter<"Diagnoses"> | string
    recovery_date?: DateTimeNullableFilter<"Diagnoses"> | Date | string | null
    created_at?: DateTimeFilter<"Diagnoses"> | Date | string
    updated_at?: DateTimeFilter<"Diagnoses"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    disease?: XOR<DiseasesScalarRelationFilter, DiseasesWhereInput>
    Cases?: CasesListRelationFilter
  }

  export type DiagnosesOrderByWithRelationInput = {
    diagnosis_id?: SortOrder
    patient_id?: SortOrder
    disease_id?: SortOrder
    diagnosis_date?: SortOrder
    status?: SortOrder
    recovery_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient?: PatientsOrderByWithRelationInput
    disease?: DiseasesOrderByWithRelationInput
    Cases?: CasesOrderByRelationAggregateInput
  }

  export type DiagnosesWhereUniqueInput = Prisma.AtLeast<{
    diagnosis_id?: number
    AND?: DiagnosesWhereInput | DiagnosesWhereInput[]
    OR?: DiagnosesWhereInput[]
    NOT?: DiagnosesWhereInput | DiagnosesWhereInput[]
    patient_id?: IntFilter<"Diagnoses"> | number
    disease_id?: IntFilter<"Diagnoses"> | number
    diagnosis_date?: DateTimeFilter<"Diagnoses"> | Date | string
    status?: StringFilter<"Diagnoses"> | string
    recovery_date?: DateTimeNullableFilter<"Diagnoses"> | Date | string | null
    created_at?: DateTimeFilter<"Diagnoses"> | Date | string
    updated_at?: DateTimeFilter<"Diagnoses"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    disease?: XOR<DiseasesScalarRelationFilter, DiseasesWhereInput>
    Cases?: CasesListRelationFilter
  }, "diagnosis_id">

  export type DiagnosesOrderByWithAggregationInput = {
    diagnosis_id?: SortOrder
    patient_id?: SortOrder
    disease_id?: SortOrder
    diagnosis_date?: SortOrder
    status?: SortOrder
    recovery_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DiagnosesCountOrderByAggregateInput
    _avg?: DiagnosesAvgOrderByAggregateInput
    _max?: DiagnosesMaxOrderByAggregateInput
    _min?: DiagnosesMinOrderByAggregateInput
    _sum?: DiagnosesSumOrderByAggregateInput
  }

  export type DiagnosesScalarWhereWithAggregatesInput = {
    AND?: DiagnosesScalarWhereWithAggregatesInput | DiagnosesScalarWhereWithAggregatesInput[]
    OR?: DiagnosesScalarWhereWithAggregatesInput[]
    NOT?: DiagnosesScalarWhereWithAggregatesInput | DiagnosesScalarWhereWithAggregatesInput[]
    diagnosis_id?: IntWithAggregatesFilter<"Diagnoses"> | number
    patient_id?: IntWithAggregatesFilter<"Diagnoses"> | number
    disease_id?: IntWithAggregatesFilter<"Diagnoses"> | number
    diagnosis_date?: DateTimeWithAggregatesFilter<"Diagnoses"> | Date | string
    status?: StringWithAggregatesFilter<"Diagnoses"> | string
    recovery_date?: DateTimeNullableWithAggregatesFilter<"Diagnoses"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Diagnoses"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Diagnoses"> | Date | string
  }

  export type CasesWhereInput = {
    AND?: CasesWhereInput | CasesWhereInput[]
    OR?: CasesWhereInput[]
    NOT?: CasesWhereInput | CasesWhereInput[]
    case_id?: IntFilter<"Cases"> | number
    patient_id?: IntFilter<"Cases"> | number
    doctor_id?: IntFilter<"Cases"> | number
    diagnosis_id?: IntFilter<"Cases"> | number
    case_date?: DateTimeFilter<"Cases"> | Date | string
    status?: StringFilter<"Cases"> | string
    created_at?: DateTimeFilter<"Cases"> | Date | string
    updated_at?: DateTimeFilter<"Cases"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    doctor?: XOR<DoctorsScalarRelationFilter, DoctorsWhereInput>
    diagnosis?: XOR<DiagnosesScalarRelationFilter, DiagnosesWhereInput>
  }

  export type CasesOrderByWithRelationInput = {
    case_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    diagnosis_id?: SortOrder
    case_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    patient?: PatientsOrderByWithRelationInput
    doctor?: DoctorsOrderByWithRelationInput
    diagnosis?: DiagnosesOrderByWithRelationInput
  }

  export type CasesWhereUniqueInput = Prisma.AtLeast<{
    case_id?: number
    AND?: CasesWhereInput | CasesWhereInput[]
    OR?: CasesWhereInput[]
    NOT?: CasesWhereInput | CasesWhereInput[]
    patient_id?: IntFilter<"Cases"> | number
    doctor_id?: IntFilter<"Cases"> | number
    diagnosis_id?: IntFilter<"Cases"> | number
    case_date?: DateTimeFilter<"Cases"> | Date | string
    status?: StringFilter<"Cases"> | string
    created_at?: DateTimeFilter<"Cases"> | Date | string
    updated_at?: DateTimeFilter<"Cases"> | Date | string
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    doctor?: XOR<DoctorsScalarRelationFilter, DoctorsWhereInput>
    diagnosis?: XOR<DiagnosesScalarRelationFilter, DiagnosesWhereInput>
  }, "case_id">

  export type CasesOrderByWithAggregationInput = {
    case_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    diagnosis_id?: SortOrder
    case_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CasesCountOrderByAggregateInput
    _avg?: CasesAvgOrderByAggregateInput
    _max?: CasesMaxOrderByAggregateInput
    _min?: CasesMinOrderByAggregateInput
    _sum?: CasesSumOrderByAggregateInput
  }

  export type CasesScalarWhereWithAggregatesInput = {
    AND?: CasesScalarWhereWithAggregatesInput | CasesScalarWhereWithAggregatesInput[]
    OR?: CasesScalarWhereWithAggregatesInput[]
    NOT?: CasesScalarWhereWithAggregatesInput | CasesScalarWhereWithAggregatesInput[]
    case_id?: IntWithAggregatesFilter<"Cases"> | number
    patient_id?: IntWithAggregatesFilter<"Cases"> | number
    doctor_id?: IntWithAggregatesFilter<"Cases"> | number
    diagnosis_id?: IntWithAggregatesFilter<"Cases"> | number
    case_date?: DateTimeWithAggregatesFilter<"Cases"> | Date | string
    status?: StringWithAggregatesFilter<"Cases"> | string
    created_at?: DateTimeWithAggregatesFilter<"Cases"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Cases"> | Date | string
  }

  export type AccessLogsWhereInput = {
    AND?: AccessLogsWhereInput | AccessLogsWhereInput[]
    OR?: AccessLogsWhereInput[]
    NOT?: AccessLogsWhereInput | AccessLogsWhereInput[]
    log_id?: IntFilter<"AccessLogs"> | number
    user_id?: IntFilter<"AccessLogs"> | number
    patient_id?: IntFilter<"AccessLogs"> | number
    access_time?: DateTimeFilter<"AccessLogs"> | Date | string
    action?: StringFilter<"AccessLogs"> | string
    resource_type?: StringFilter<"AccessLogs"> | string
    resource_id?: IntFilter<"AccessLogs"> | number
    created_at?: DateTimeFilter<"AccessLogs"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }

  export type AccessLogsOrderByWithRelationInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    patient_id?: SortOrder
    access_time?: SortOrder
    action?: SortOrder
    resource_type?: SortOrder
    resource_id?: SortOrder
    created_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    patient?: PatientsOrderByWithRelationInput
  }

  export type AccessLogsWhereUniqueInput = Prisma.AtLeast<{
    log_id?: number
    AND?: AccessLogsWhereInput | AccessLogsWhereInput[]
    OR?: AccessLogsWhereInput[]
    NOT?: AccessLogsWhereInput | AccessLogsWhereInput[]
    user_id?: IntFilter<"AccessLogs"> | number
    patient_id?: IntFilter<"AccessLogs"> | number
    access_time?: DateTimeFilter<"AccessLogs"> | Date | string
    action?: StringFilter<"AccessLogs"> | string
    resource_type?: StringFilter<"AccessLogs"> | string
    resource_id?: IntFilter<"AccessLogs"> | number
    created_at?: DateTimeFilter<"AccessLogs"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }, "log_id">

  export type AccessLogsOrderByWithAggregationInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    patient_id?: SortOrder
    access_time?: SortOrder
    action?: SortOrder
    resource_type?: SortOrder
    resource_id?: SortOrder
    created_at?: SortOrder
    _count?: AccessLogsCountOrderByAggregateInput
    _avg?: AccessLogsAvgOrderByAggregateInput
    _max?: AccessLogsMaxOrderByAggregateInput
    _min?: AccessLogsMinOrderByAggregateInput
    _sum?: AccessLogsSumOrderByAggregateInput
  }

  export type AccessLogsScalarWhereWithAggregatesInput = {
    AND?: AccessLogsScalarWhereWithAggregatesInput | AccessLogsScalarWhereWithAggregatesInput[]
    OR?: AccessLogsScalarWhereWithAggregatesInput[]
    NOT?: AccessLogsScalarWhereWithAggregatesInput | AccessLogsScalarWhereWithAggregatesInput[]
    log_id?: IntWithAggregatesFilter<"AccessLogs"> | number
    user_id?: IntWithAggregatesFilter<"AccessLogs"> | number
    patient_id?: IntWithAggregatesFilter<"AccessLogs"> | number
    access_time?: DateTimeWithAggregatesFilter<"AccessLogs"> | Date | string
    action?: StringWithAggregatesFilter<"AccessLogs"> | string
    resource_type?: StringWithAggregatesFilter<"AccessLogs"> | string
    resource_id?: IntWithAggregatesFilter<"AccessLogs"> | number
    created_at?: DateTimeWithAggregatesFilter<"AccessLogs"> | Date | string
  }

  export type UsersCreateInput = {
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    doctor?: DoctorsCreateNestedOneWithoutUserInput
    LabOrders?: LabOrdersCreateNestedManyWithoutOrderedByInput
    MedicalHistory?: MedicalHistoryCreateNestedManyWithoutTechnicianInput
    LabResults?: LabResultsCreateNestedManyWithoutTechnicianInput
    AccessLogs?: AccessLogsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    user_id?: number
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    doctor?: DoctorsUncheckedCreateNestedOneWithoutUserInput
    LabOrders?: LabOrdersUncheckedCreateNestedManyWithoutOrderedByInput
    MedicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutTechnicianInput
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutTechnicianInput
    AccessLogs?: AccessLogsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorsUpdateOneWithoutUserNestedInput
    LabOrders?: LabOrdersUpdateManyWithoutOrderedByNestedInput
    MedicalHistory?: MedicalHistoryUpdateManyWithoutTechnicianNestedInput
    LabResults?: LabResultsUpdateManyWithoutTechnicianNestedInput
    AccessLogs?: AccessLogsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorsUncheckedUpdateOneWithoutUserNestedInput
    LabOrders?: LabOrdersUncheckedUpdateManyWithoutOrderedByNestedInput
    MedicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutTechnicianNestedInput
    LabResults?: LabResultsUncheckedUpdateManyWithoutTechnicianNestedInput
    AccessLogs?: AccessLogsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    user_id?: number
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientsCreateInput = {
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryCreateNestedManyWithoutPatientInput
    LabOrders?: LabOrdersCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesCreateNestedManyWithoutPatientInput
    Cases?: CasesCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateInput = {
    patient_id?: number
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutPatientInput
    LabOrders?: LabOrdersUncheckedCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesUncheckedCreateNestedManyWithoutPatientInput
    Cases?: CasesUncheckedCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUpdateManyWithoutPatientNestedInput
    LabOrders?: LabOrdersUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUpdateManyWithoutPatientNestedInput
    Cases?: CasesUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutPatientNestedInput
    LabOrders?: LabOrdersUncheckedUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUncheckedUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUncheckedUpdateManyWithoutPatientNestedInput
    Cases?: CasesUncheckedUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsCreateManyInput = {
    patient_id?: number
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PatientsUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientsUncheckedUpdateManyInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorsCreateInput = {
    specialty: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutDoctorInput
    Cases?: CasesCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsUncheckedCreateInput = {
    doctor_id?: number
    user_id: number
    specialty: string
    created_at?: Date | string
    updated_at?: Date | string
    Cases?: CasesUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsUpdateInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutDoctorNestedInput
    Cases?: CasesUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorsUncheckedUpdateInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cases?: CasesUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorsCreateManyInput = {
    doctor_id?: number
    user_id: number
    specialty: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DoctorsUpdateManyMutationInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorsUncheckedUpdateManyInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryCreateInput = {
    record_date: Date | string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutMedicalHistoryInput
    technician: UsersCreateNestedOneWithoutMedicalHistoryInput
  }

  export type MedicalHistoryUncheckedCreateInput = {
    history_id?: number
    patient_id: number
    technician_id: number
    record_date: Date | string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MedicalHistoryUpdateInput = {
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutMedicalHistoryNestedInput
    technician?: UsersUpdateOneRequiredWithoutMedicalHistoryNestedInput
  }

  export type MedicalHistoryUncheckedUpdateInput = {
    history_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    technician_id?: IntFieldUpdateOperationsInput | number
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryCreateManyInput = {
    history_id?: number
    patient_id: number
    technician_id: number
    record_date: Date | string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MedicalHistoryUpdateManyMutationInput = {
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUncheckedUpdateManyInput = {
    history_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    technician_id?: IntFieldUpdateOperationsInput | number
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabOrdersCreateInput = {
    test_type: string
    order_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutLabOrdersInput
    orderedBy: UsersCreateNestedOneWithoutLabOrdersInput
    LabResults?: LabResultsCreateNestedManyWithoutOrderInput
  }

  export type LabOrdersUncheckedCreateInput = {
    order_id?: number
    patient_id: number
    ordered_by: number
    test_type: string
    order_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type LabOrdersUpdateInput = {
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutLabOrdersNestedInput
    orderedBy?: UsersUpdateOneRequiredWithoutLabOrdersNestedInput
    LabResults?: LabResultsUpdateManyWithoutOrderNestedInput
  }

  export type LabOrdersUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    ordered_by?: IntFieldUpdateOperationsInput | number
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    LabResults?: LabResultsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type LabOrdersCreateManyInput = {
    order_id?: number
    patient_id: number
    ordered_by: number
    test_type: string
    order_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LabOrdersUpdateManyMutationInput = {
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabOrdersUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    ordered_by?: IntFieldUpdateOperationsInput | number
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultsCreateInput = {
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutLabResultsInput
    technician: UsersCreateNestedOneWithoutLabResultsInput
    order: LabOrdersCreateNestedOneWithoutLabResultsInput
  }

  export type LabResultsUncheckedCreateInput = {
    result_id?: number
    patient_id: number
    technician_id: number
    order_id: number
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LabResultsUpdateInput = {
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutLabResultsNestedInput
    technician?: UsersUpdateOneRequiredWithoutLabResultsNestedInput
    order?: LabOrdersUpdateOneRequiredWithoutLabResultsNestedInput
  }

  export type LabResultsUncheckedUpdateInput = {
    result_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    technician_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultsCreateManyInput = {
    result_id?: number
    patient_id: number
    technician_id: number
    order_id: number
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LabResultsUpdateManyMutationInput = {
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultsUncheckedUpdateManyInput = {
    result_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    technician_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseasesCreateInput = {
    disease_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Diagnoses?: DiagnosesCreateNestedManyWithoutDiseaseInput
  }

  export type DiseasesUncheckedCreateInput = {
    disease_id?: number
    disease_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Diagnoses?: DiagnosesUncheckedCreateNestedManyWithoutDiseaseInput
  }

  export type DiseasesUpdateInput = {
    disease_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Diagnoses?: DiagnosesUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseasesUncheckedUpdateInput = {
    disease_id?: IntFieldUpdateOperationsInput | number
    disease_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Diagnoses?: DiagnosesUncheckedUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseasesCreateManyInput = {
    disease_id?: number
    disease_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DiseasesUpdateManyMutationInput = {
    disease_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseasesUncheckedUpdateManyInput = {
    disease_id?: IntFieldUpdateOperationsInput | number
    disease_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosesCreateInput = {
    diagnosis_date: Date | string
    status: string
    recovery_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutDiagnosesInput
    disease: DiseasesCreateNestedOneWithoutDiagnosesInput
    Cases?: CasesCreateNestedManyWithoutDiagnosisInput
  }

  export type DiagnosesUncheckedCreateInput = {
    diagnosis_id?: number
    patient_id: number
    disease_id: number
    diagnosis_date: Date | string
    status: string
    recovery_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Cases?: CasesUncheckedCreateNestedManyWithoutDiagnosisInput
  }

  export type DiagnosesUpdateInput = {
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutDiagnosesNestedInput
    disease?: DiseasesUpdateOneRequiredWithoutDiagnosesNestedInput
    Cases?: CasesUpdateManyWithoutDiagnosisNestedInput
  }

  export type DiagnosesUncheckedUpdateInput = {
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    disease_id?: IntFieldUpdateOperationsInput | number
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cases?: CasesUncheckedUpdateManyWithoutDiagnosisNestedInput
  }

  export type DiagnosesCreateManyInput = {
    diagnosis_id?: number
    patient_id: number
    disease_id: number
    diagnosis_date: Date | string
    status: string
    recovery_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DiagnosesUpdateManyMutationInput = {
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosesUncheckedUpdateManyInput = {
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    disease_id?: IntFieldUpdateOperationsInput | number
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesCreateInput = {
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutCasesInput
    doctor: DoctorsCreateNestedOneWithoutCasesInput
    diagnosis: DiagnosesCreateNestedOneWithoutCasesInput
  }

  export type CasesUncheckedCreateInput = {
    case_id?: number
    patient_id: number
    doctor_id: number
    diagnosis_id: number
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CasesUpdateInput = {
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutCasesNestedInput
    doctor?: DoctorsUpdateOneRequiredWithoutCasesNestedInput
    diagnosis?: DiagnosesUpdateOneRequiredWithoutCasesNestedInput
  }

  export type CasesUncheckedUpdateInput = {
    case_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesCreateManyInput = {
    case_id?: number
    patient_id: number
    doctor_id: number
    diagnosis_id: number
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CasesUpdateManyMutationInput = {
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesUncheckedUpdateManyInput = {
    case_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessLogsCreateInput = {
    access_time?: Date | string
    action: string
    resource_type: string
    resource_id: number
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutAccessLogsInput
    patient: PatientsCreateNestedOneWithoutAccessLogsInput
  }

  export type AccessLogsUncheckedCreateInput = {
    log_id?: number
    user_id: number
    patient_id: number
    access_time?: Date | string
    action: string
    resource_type: string
    resource_id: number
    created_at?: Date | string
  }

  export type AccessLogsUpdateInput = {
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccessLogsNestedInput
    patient?: PatientsUpdateOneRequiredWithoutAccessLogsNestedInput
  }

  export type AccessLogsUncheckedUpdateInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessLogsCreateManyInput = {
    log_id?: number
    user_id: number
    patient_id: number
    access_time?: Date | string
    action: string
    resource_type: string
    resource_id: number
    created_at?: Date | string
  }

  export type AccessLogsUpdateManyMutationInput = {
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessLogsUncheckedUpdateManyInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DoctorsNullableScalarRelationFilter = {
    is?: DoctorsWhereInput | null
    isNot?: DoctorsWhereInput | null
  }

  export type LabOrdersListRelationFilter = {
    every?: LabOrdersWhereInput
    some?: LabOrdersWhereInput
    none?: LabOrdersWhereInput
  }

  export type MedicalHistoryListRelationFilter = {
    every?: MedicalHistoryWhereInput
    some?: MedicalHistoryWhereInput
    none?: MedicalHistoryWhereInput
  }

  export type LabResultsListRelationFilter = {
    every?: LabResultsWhereInput
    some?: LabResultsWhereInput
    none?: LabResultsWhereInput
  }

  export type AccessLogsListRelationFilter = {
    every?: AccessLogsWhereInput
    some?: AccessLogsWhereInput
    none?: AccessLogsWhereInput
  }

  export type LabOrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabResultsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccessLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DiagnosesListRelationFilter = {
    every?: DiagnosesWhereInput
    some?: DiagnosesWhereInput
    none?: DiagnosesWhereInput
  }

  export type CasesListRelationFilter = {
    every?: CasesWhereInput
    some?: CasesWhereInput
    none?: CasesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DiagnosesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientsCountOrderByAggregateInput = {
    patient_id?: SortOrder
    full_name?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    allergies?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PatientsAvgOrderByAggregateInput = {
    patient_id?: SortOrder
  }

  export type PatientsMaxOrderByAggregateInput = {
    patient_id?: SortOrder
    full_name?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    allergies?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PatientsMinOrderByAggregateInput = {
    patient_id?: SortOrder
    full_name?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    allergies?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PatientsSumOrderByAggregateInput = {
    patient_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type DoctorsCountOrderByAggregateInput = {
    doctor_id?: SortOrder
    user_id?: SortOrder
    specialty?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DoctorsAvgOrderByAggregateInput = {
    doctor_id?: SortOrder
    user_id?: SortOrder
  }

  export type DoctorsMaxOrderByAggregateInput = {
    doctor_id?: SortOrder
    user_id?: SortOrder
    specialty?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DoctorsMinOrderByAggregateInput = {
    doctor_id?: SortOrder
    user_id?: SortOrder
    specialty?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DoctorsSumOrderByAggregateInput = {
    doctor_id?: SortOrder
    user_id?: SortOrder
  }

  export type PatientsScalarRelationFilter = {
    is?: PatientsWhereInput
    isNot?: PatientsWhereInput
  }

  export type MedicalHistoryCountOrderByAggregateInput = {
    history_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    record_date?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MedicalHistoryAvgOrderByAggregateInput = {
    history_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
  }

  export type MedicalHistoryMaxOrderByAggregateInput = {
    history_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    record_date?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MedicalHistoryMinOrderByAggregateInput = {
    history_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    record_date?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MedicalHistorySumOrderByAggregateInput = {
    history_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
  }

  export type LabOrdersCountOrderByAggregateInput = {
    order_id?: SortOrder
    patient_id?: SortOrder
    ordered_by?: SortOrder
    test_type?: SortOrder
    order_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LabOrdersAvgOrderByAggregateInput = {
    order_id?: SortOrder
    patient_id?: SortOrder
    ordered_by?: SortOrder
  }

  export type LabOrdersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    patient_id?: SortOrder
    ordered_by?: SortOrder
    test_type?: SortOrder
    order_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LabOrdersMinOrderByAggregateInput = {
    order_id?: SortOrder
    patient_id?: SortOrder
    ordered_by?: SortOrder
    test_type?: SortOrder
    order_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LabOrdersSumOrderByAggregateInput = {
    order_id?: SortOrder
    patient_id?: SortOrder
    ordered_by?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LabOrdersScalarRelationFilter = {
    is?: LabOrdersWhereInput
    isNot?: LabOrdersWhereInput
  }

  export type LabResultsCountOrderByAggregateInput = {
    result_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    order_id?: SortOrder
    test_date?: SortOrder
    test_type?: SortOrder
    result_value?: SortOrder
    unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LabResultsAvgOrderByAggregateInput = {
    result_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    order_id?: SortOrder
    result_value?: SortOrder
  }

  export type LabResultsMaxOrderByAggregateInput = {
    result_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    order_id?: SortOrder
    test_date?: SortOrder
    test_type?: SortOrder
    result_value?: SortOrder
    unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LabResultsMinOrderByAggregateInput = {
    result_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    order_id?: SortOrder
    test_date?: SortOrder
    test_type?: SortOrder
    result_value?: SortOrder
    unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LabResultsSumOrderByAggregateInput = {
    result_id?: SortOrder
    patient_id?: SortOrder
    technician_id?: SortOrder
    order_id?: SortOrder
    result_value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DiseasesCountOrderByAggregateInput = {
    disease_id?: SortOrder
    disease_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DiseasesAvgOrderByAggregateInput = {
    disease_id?: SortOrder
  }

  export type DiseasesMaxOrderByAggregateInput = {
    disease_id?: SortOrder
    disease_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DiseasesMinOrderByAggregateInput = {
    disease_id?: SortOrder
    disease_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DiseasesSumOrderByAggregateInput = {
    disease_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DiseasesScalarRelationFilter = {
    is?: DiseasesWhereInput
    isNot?: DiseasesWhereInput
  }

  export type DiagnosesCountOrderByAggregateInput = {
    diagnosis_id?: SortOrder
    patient_id?: SortOrder
    disease_id?: SortOrder
    diagnosis_date?: SortOrder
    status?: SortOrder
    recovery_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DiagnosesAvgOrderByAggregateInput = {
    diagnosis_id?: SortOrder
    patient_id?: SortOrder
    disease_id?: SortOrder
  }

  export type DiagnosesMaxOrderByAggregateInput = {
    diagnosis_id?: SortOrder
    patient_id?: SortOrder
    disease_id?: SortOrder
    diagnosis_date?: SortOrder
    status?: SortOrder
    recovery_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DiagnosesMinOrderByAggregateInput = {
    diagnosis_id?: SortOrder
    patient_id?: SortOrder
    disease_id?: SortOrder
    diagnosis_date?: SortOrder
    status?: SortOrder
    recovery_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DiagnosesSumOrderByAggregateInput = {
    diagnosis_id?: SortOrder
    patient_id?: SortOrder
    disease_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DoctorsScalarRelationFilter = {
    is?: DoctorsWhereInput
    isNot?: DoctorsWhereInput
  }

  export type DiagnosesScalarRelationFilter = {
    is?: DiagnosesWhereInput
    isNot?: DiagnosesWhereInput
  }

  export type CasesCountOrderByAggregateInput = {
    case_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    diagnosis_id?: SortOrder
    case_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CasesAvgOrderByAggregateInput = {
    case_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    diagnosis_id?: SortOrder
  }

  export type CasesMaxOrderByAggregateInput = {
    case_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    diagnosis_id?: SortOrder
    case_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CasesMinOrderByAggregateInput = {
    case_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    diagnosis_id?: SortOrder
    case_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CasesSumOrderByAggregateInput = {
    case_id?: SortOrder
    patient_id?: SortOrder
    doctor_id?: SortOrder
    diagnosis_id?: SortOrder
  }

  export type AccessLogsCountOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    patient_id?: SortOrder
    access_time?: SortOrder
    action?: SortOrder
    resource_type?: SortOrder
    resource_id?: SortOrder
    created_at?: SortOrder
  }

  export type AccessLogsAvgOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    patient_id?: SortOrder
    resource_id?: SortOrder
  }

  export type AccessLogsMaxOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    patient_id?: SortOrder
    access_time?: SortOrder
    action?: SortOrder
    resource_type?: SortOrder
    resource_id?: SortOrder
    created_at?: SortOrder
  }

  export type AccessLogsMinOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    patient_id?: SortOrder
    access_time?: SortOrder
    action?: SortOrder
    resource_type?: SortOrder
    resource_id?: SortOrder
    created_at?: SortOrder
  }

  export type AccessLogsSumOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    patient_id?: SortOrder
    resource_id?: SortOrder
  }

  export type DoctorsCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorsCreateWithoutUserInput, DoctorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutUserInput
    connect?: DoctorsWhereUniqueInput
  }

  export type LabOrdersCreateNestedManyWithoutOrderedByInput = {
    create?: XOR<LabOrdersCreateWithoutOrderedByInput, LabOrdersUncheckedCreateWithoutOrderedByInput> | LabOrdersCreateWithoutOrderedByInput[] | LabOrdersUncheckedCreateWithoutOrderedByInput[]
    connectOrCreate?: LabOrdersCreateOrConnectWithoutOrderedByInput | LabOrdersCreateOrConnectWithoutOrderedByInput[]
    createMany?: LabOrdersCreateManyOrderedByInputEnvelope
    connect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
  }

  export type MedicalHistoryCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<MedicalHistoryCreateWithoutTechnicianInput, MedicalHistoryUncheckedCreateWithoutTechnicianInput> | MedicalHistoryCreateWithoutTechnicianInput[] | MedicalHistoryUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutTechnicianInput | MedicalHistoryCreateOrConnectWithoutTechnicianInput[]
    createMany?: MedicalHistoryCreateManyTechnicianInputEnvelope
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
  }

  export type LabResultsCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<LabResultsCreateWithoutTechnicianInput, LabResultsUncheckedCreateWithoutTechnicianInput> | LabResultsCreateWithoutTechnicianInput[] | LabResultsUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutTechnicianInput | LabResultsCreateOrConnectWithoutTechnicianInput[]
    createMany?: LabResultsCreateManyTechnicianInputEnvelope
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
  }

  export type AccessLogsCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessLogsCreateWithoutUserInput, AccessLogsUncheckedCreateWithoutUserInput> | AccessLogsCreateWithoutUserInput[] | AccessLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessLogsCreateOrConnectWithoutUserInput | AccessLogsCreateOrConnectWithoutUserInput[]
    createMany?: AccessLogsCreateManyUserInputEnvelope
    connect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
  }

  export type DoctorsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorsCreateWithoutUserInput, DoctorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutUserInput
    connect?: DoctorsWhereUniqueInput
  }

  export type LabOrdersUncheckedCreateNestedManyWithoutOrderedByInput = {
    create?: XOR<LabOrdersCreateWithoutOrderedByInput, LabOrdersUncheckedCreateWithoutOrderedByInput> | LabOrdersCreateWithoutOrderedByInput[] | LabOrdersUncheckedCreateWithoutOrderedByInput[]
    connectOrCreate?: LabOrdersCreateOrConnectWithoutOrderedByInput | LabOrdersCreateOrConnectWithoutOrderedByInput[]
    createMany?: LabOrdersCreateManyOrderedByInputEnvelope
    connect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
  }

  export type MedicalHistoryUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<MedicalHistoryCreateWithoutTechnicianInput, MedicalHistoryUncheckedCreateWithoutTechnicianInput> | MedicalHistoryCreateWithoutTechnicianInput[] | MedicalHistoryUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutTechnicianInput | MedicalHistoryCreateOrConnectWithoutTechnicianInput[]
    createMany?: MedicalHistoryCreateManyTechnicianInputEnvelope
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
  }

  export type LabResultsUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<LabResultsCreateWithoutTechnicianInput, LabResultsUncheckedCreateWithoutTechnicianInput> | LabResultsCreateWithoutTechnicianInput[] | LabResultsUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutTechnicianInput | LabResultsCreateOrConnectWithoutTechnicianInput[]
    createMany?: LabResultsCreateManyTechnicianInputEnvelope
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
  }

  export type AccessLogsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessLogsCreateWithoutUserInput, AccessLogsUncheckedCreateWithoutUserInput> | AccessLogsCreateWithoutUserInput[] | AccessLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessLogsCreateOrConnectWithoutUserInput | AccessLogsCreateOrConnectWithoutUserInput[]
    createMany?: AccessLogsCreateManyUserInputEnvelope
    connect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DoctorsUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorsCreateWithoutUserInput, DoctorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutUserInput
    upsert?: DoctorsUpsertWithoutUserInput
    disconnect?: DoctorsWhereInput | boolean
    delete?: DoctorsWhereInput | boolean
    connect?: DoctorsWhereUniqueInput
    update?: XOR<XOR<DoctorsUpdateToOneWithWhereWithoutUserInput, DoctorsUpdateWithoutUserInput>, DoctorsUncheckedUpdateWithoutUserInput>
  }

  export type LabOrdersUpdateManyWithoutOrderedByNestedInput = {
    create?: XOR<LabOrdersCreateWithoutOrderedByInput, LabOrdersUncheckedCreateWithoutOrderedByInput> | LabOrdersCreateWithoutOrderedByInput[] | LabOrdersUncheckedCreateWithoutOrderedByInput[]
    connectOrCreate?: LabOrdersCreateOrConnectWithoutOrderedByInput | LabOrdersCreateOrConnectWithoutOrderedByInput[]
    upsert?: LabOrdersUpsertWithWhereUniqueWithoutOrderedByInput | LabOrdersUpsertWithWhereUniqueWithoutOrderedByInput[]
    createMany?: LabOrdersCreateManyOrderedByInputEnvelope
    set?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    disconnect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    delete?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    connect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    update?: LabOrdersUpdateWithWhereUniqueWithoutOrderedByInput | LabOrdersUpdateWithWhereUniqueWithoutOrderedByInput[]
    updateMany?: LabOrdersUpdateManyWithWhereWithoutOrderedByInput | LabOrdersUpdateManyWithWhereWithoutOrderedByInput[]
    deleteMany?: LabOrdersScalarWhereInput | LabOrdersScalarWhereInput[]
  }

  export type MedicalHistoryUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<MedicalHistoryCreateWithoutTechnicianInput, MedicalHistoryUncheckedCreateWithoutTechnicianInput> | MedicalHistoryCreateWithoutTechnicianInput[] | MedicalHistoryUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutTechnicianInput | MedicalHistoryCreateOrConnectWithoutTechnicianInput[]
    upsert?: MedicalHistoryUpsertWithWhereUniqueWithoutTechnicianInput | MedicalHistoryUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: MedicalHistoryCreateManyTechnicianInputEnvelope
    set?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    disconnect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    delete?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    update?: MedicalHistoryUpdateWithWhereUniqueWithoutTechnicianInput | MedicalHistoryUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: MedicalHistoryUpdateManyWithWhereWithoutTechnicianInput | MedicalHistoryUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
  }

  export type LabResultsUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<LabResultsCreateWithoutTechnicianInput, LabResultsUncheckedCreateWithoutTechnicianInput> | LabResultsCreateWithoutTechnicianInput[] | LabResultsUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutTechnicianInput | LabResultsCreateOrConnectWithoutTechnicianInput[]
    upsert?: LabResultsUpsertWithWhereUniqueWithoutTechnicianInput | LabResultsUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: LabResultsCreateManyTechnicianInputEnvelope
    set?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    disconnect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    delete?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    update?: LabResultsUpdateWithWhereUniqueWithoutTechnicianInput | LabResultsUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: LabResultsUpdateManyWithWhereWithoutTechnicianInput | LabResultsUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: LabResultsScalarWhereInput | LabResultsScalarWhereInput[]
  }

  export type AccessLogsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessLogsCreateWithoutUserInput, AccessLogsUncheckedCreateWithoutUserInput> | AccessLogsCreateWithoutUserInput[] | AccessLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessLogsCreateOrConnectWithoutUserInput | AccessLogsCreateOrConnectWithoutUserInput[]
    upsert?: AccessLogsUpsertWithWhereUniqueWithoutUserInput | AccessLogsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessLogsCreateManyUserInputEnvelope
    set?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    disconnect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    delete?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    connect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    update?: AccessLogsUpdateWithWhereUniqueWithoutUserInput | AccessLogsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessLogsUpdateManyWithWhereWithoutUserInput | AccessLogsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessLogsScalarWhereInput | AccessLogsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DoctorsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorsCreateWithoutUserInput, DoctorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutUserInput
    upsert?: DoctorsUpsertWithoutUserInput
    disconnect?: DoctorsWhereInput | boolean
    delete?: DoctorsWhereInput | boolean
    connect?: DoctorsWhereUniqueInput
    update?: XOR<XOR<DoctorsUpdateToOneWithWhereWithoutUserInput, DoctorsUpdateWithoutUserInput>, DoctorsUncheckedUpdateWithoutUserInput>
  }

  export type LabOrdersUncheckedUpdateManyWithoutOrderedByNestedInput = {
    create?: XOR<LabOrdersCreateWithoutOrderedByInput, LabOrdersUncheckedCreateWithoutOrderedByInput> | LabOrdersCreateWithoutOrderedByInput[] | LabOrdersUncheckedCreateWithoutOrderedByInput[]
    connectOrCreate?: LabOrdersCreateOrConnectWithoutOrderedByInput | LabOrdersCreateOrConnectWithoutOrderedByInput[]
    upsert?: LabOrdersUpsertWithWhereUniqueWithoutOrderedByInput | LabOrdersUpsertWithWhereUniqueWithoutOrderedByInput[]
    createMany?: LabOrdersCreateManyOrderedByInputEnvelope
    set?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    disconnect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    delete?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    connect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    update?: LabOrdersUpdateWithWhereUniqueWithoutOrderedByInput | LabOrdersUpdateWithWhereUniqueWithoutOrderedByInput[]
    updateMany?: LabOrdersUpdateManyWithWhereWithoutOrderedByInput | LabOrdersUpdateManyWithWhereWithoutOrderedByInput[]
    deleteMany?: LabOrdersScalarWhereInput | LabOrdersScalarWhereInput[]
  }

  export type MedicalHistoryUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<MedicalHistoryCreateWithoutTechnicianInput, MedicalHistoryUncheckedCreateWithoutTechnicianInput> | MedicalHistoryCreateWithoutTechnicianInput[] | MedicalHistoryUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutTechnicianInput | MedicalHistoryCreateOrConnectWithoutTechnicianInput[]
    upsert?: MedicalHistoryUpsertWithWhereUniqueWithoutTechnicianInput | MedicalHistoryUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: MedicalHistoryCreateManyTechnicianInputEnvelope
    set?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    disconnect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    delete?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    update?: MedicalHistoryUpdateWithWhereUniqueWithoutTechnicianInput | MedicalHistoryUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: MedicalHistoryUpdateManyWithWhereWithoutTechnicianInput | MedicalHistoryUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
  }

  export type LabResultsUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<LabResultsCreateWithoutTechnicianInput, LabResultsUncheckedCreateWithoutTechnicianInput> | LabResultsCreateWithoutTechnicianInput[] | LabResultsUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutTechnicianInput | LabResultsCreateOrConnectWithoutTechnicianInput[]
    upsert?: LabResultsUpsertWithWhereUniqueWithoutTechnicianInput | LabResultsUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: LabResultsCreateManyTechnicianInputEnvelope
    set?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    disconnect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    delete?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    update?: LabResultsUpdateWithWhereUniqueWithoutTechnicianInput | LabResultsUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: LabResultsUpdateManyWithWhereWithoutTechnicianInput | LabResultsUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: LabResultsScalarWhereInput | LabResultsScalarWhereInput[]
  }

  export type AccessLogsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessLogsCreateWithoutUserInput, AccessLogsUncheckedCreateWithoutUserInput> | AccessLogsCreateWithoutUserInput[] | AccessLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessLogsCreateOrConnectWithoutUserInput | AccessLogsCreateOrConnectWithoutUserInput[]
    upsert?: AccessLogsUpsertWithWhereUniqueWithoutUserInput | AccessLogsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessLogsCreateManyUserInputEnvelope
    set?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    disconnect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    delete?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    connect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    update?: AccessLogsUpdateWithWhereUniqueWithoutUserInput | AccessLogsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessLogsUpdateManyWithWhereWithoutUserInput | AccessLogsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessLogsScalarWhereInput | AccessLogsScalarWhereInput[]
  }

  export type MedicalHistoryCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput> | MedicalHistoryCreateWithoutPatientInput[] | MedicalHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutPatientInput | MedicalHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalHistoryCreateManyPatientInputEnvelope
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
  }

  export type LabOrdersCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabOrdersCreateWithoutPatientInput, LabOrdersUncheckedCreateWithoutPatientInput> | LabOrdersCreateWithoutPatientInput[] | LabOrdersUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabOrdersCreateOrConnectWithoutPatientInput | LabOrdersCreateOrConnectWithoutPatientInput[]
    createMany?: LabOrdersCreateManyPatientInputEnvelope
    connect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
  }

  export type LabResultsCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabResultsCreateWithoutPatientInput, LabResultsUncheckedCreateWithoutPatientInput> | LabResultsCreateWithoutPatientInput[] | LabResultsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutPatientInput | LabResultsCreateOrConnectWithoutPatientInput[]
    createMany?: LabResultsCreateManyPatientInputEnvelope
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
  }

  export type DiagnosesCreateNestedManyWithoutPatientInput = {
    create?: XOR<DiagnosesCreateWithoutPatientInput, DiagnosesUncheckedCreateWithoutPatientInput> | DiagnosesCreateWithoutPatientInput[] | DiagnosesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutPatientInput | DiagnosesCreateOrConnectWithoutPatientInput[]
    createMany?: DiagnosesCreateManyPatientInputEnvelope
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
  }

  export type CasesCreateNestedManyWithoutPatientInput = {
    create?: XOR<CasesCreateWithoutPatientInput, CasesUncheckedCreateWithoutPatientInput> | CasesCreateWithoutPatientInput[] | CasesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutPatientInput | CasesCreateOrConnectWithoutPatientInput[]
    createMany?: CasesCreateManyPatientInputEnvelope
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
  }

  export type AccessLogsCreateNestedManyWithoutPatientInput = {
    create?: XOR<AccessLogsCreateWithoutPatientInput, AccessLogsUncheckedCreateWithoutPatientInput> | AccessLogsCreateWithoutPatientInput[] | AccessLogsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AccessLogsCreateOrConnectWithoutPatientInput | AccessLogsCreateOrConnectWithoutPatientInput[]
    createMany?: AccessLogsCreateManyPatientInputEnvelope
    connect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
  }

  export type MedicalHistoryUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput> | MedicalHistoryCreateWithoutPatientInput[] | MedicalHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutPatientInput | MedicalHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalHistoryCreateManyPatientInputEnvelope
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
  }

  export type LabOrdersUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabOrdersCreateWithoutPatientInput, LabOrdersUncheckedCreateWithoutPatientInput> | LabOrdersCreateWithoutPatientInput[] | LabOrdersUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabOrdersCreateOrConnectWithoutPatientInput | LabOrdersCreateOrConnectWithoutPatientInput[]
    createMany?: LabOrdersCreateManyPatientInputEnvelope
    connect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
  }

  export type LabResultsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<LabResultsCreateWithoutPatientInput, LabResultsUncheckedCreateWithoutPatientInput> | LabResultsCreateWithoutPatientInput[] | LabResultsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutPatientInput | LabResultsCreateOrConnectWithoutPatientInput[]
    createMany?: LabResultsCreateManyPatientInputEnvelope
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
  }

  export type DiagnosesUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<DiagnosesCreateWithoutPatientInput, DiagnosesUncheckedCreateWithoutPatientInput> | DiagnosesCreateWithoutPatientInput[] | DiagnosesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutPatientInput | DiagnosesCreateOrConnectWithoutPatientInput[]
    createMany?: DiagnosesCreateManyPatientInputEnvelope
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
  }

  export type CasesUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<CasesCreateWithoutPatientInput, CasesUncheckedCreateWithoutPatientInput> | CasesCreateWithoutPatientInput[] | CasesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutPatientInput | CasesCreateOrConnectWithoutPatientInput[]
    createMany?: CasesCreateManyPatientInputEnvelope
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
  }

  export type AccessLogsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AccessLogsCreateWithoutPatientInput, AccessLogsUncheckedCreateWithoutPatientInput> | AccessLogsCreateWithoutPatientInput[] | AccessLogsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AccessLogsCreateOrConnectWithoutPatientInput | AccessLogsCreateOrConnectWithoutPatientInput[]
    createMany?: AccessLogsCreateManyPatientInputEnvelope
    connect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MedicalHistoryUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput> | MedicalHistoryCreateWithoutPatientInput[] | MedicalHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutPatientInput | MedicalHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalHistoryUpsertWithWhereUniqueWithoutPatientInput | MedicalHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalHistoryCreateManyPatientInputEnvelope
    set?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    disconnect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    delete?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    update?: MedicalHistoryUpdateWithWhereUniqueWithoutPatientInput | MedicalHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalHistoryUpdateManyWithWhereWithoutPatientInput | MedicalHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
  }

  export type LabOrdersUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabOrdersCreateWithoutPatientInput, LabOrdersUncheckedCreateWithoutPatientInput> | LabOrdersCreateWithoutPatientInput[] | LabOrdersUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabOrdersCreateOrConnectWithoutPatientInput | LabOrdersCreateOrConnectWithoutPatientInput[]
    upsert?: LabOrdersUpsertWithWhereUniqueWithoutPatientInput | LabOrdersUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabOrdersCreateManyPatientInputEnvelope
    set?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    disconnect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    delete?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    connect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    update?: LabOrdersUpdateWithWhereUniqueWithoutPatientInput | LabOrdersUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabOrdersUpdateManyWithWhereWithoutPatientInput | LabOrdersUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabOrdersScalarWhereInput | LabOrdersScalarWhereInput[]
  }

  export type LabResultsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabResultsCreateWithoutPatientInput, LabResultsUncheckedCreateWithoutPatientInput> | LabResultsCreateWithoutPatientInput[] | LabResultsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutPatientInput | LabResultsCreateOrConnectWithoutPatientInput[]
    upsert?: LabResultsUpsertWithWhereUniqueWithoutPatientInput | LabResultsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabResultsCreateManyPatientInputEnvelope
    set?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    disconnect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    delete?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    update?: LabResultsUpdateWithWhereUniqueWithoutPatientInput | LabResultsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabResultsUpdateManyWithWhereWithoutPatientInput | LabResultsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabResultsScalarWhereInput | LabResultsScalarWhereInput[]
  }

  export type DiagnosesUpdateManyWithoutPatientNestedInput = {
    create?: XOR<DiagnosesCreateWithoutPatientInput, DiagnosesUncheckedCreateWithoutPatientInput> | DiagnosesCreateWithoutPatientInput[] | DiagnosesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutPatientInput | DiagnosesCreateOrConnectWithoutPatientInput[]
    upsert?: DiagnosesUpsertWithWhereUniqueWithoutPatientInput | DiagnosesUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: DiagnosesCreateManyPatientInputEnvelope
    set?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    disconnect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    delete?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    update?: DiagnosesUpdateWithWhereUniqueWithoutPatientInput | DiagnosesUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: DiagnosesUpdateManyWithWhereWithoutPatientInput | DiagnosesUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: DiagnosesScalarWhereInput | DiagnosesScalarWhereInput[]
  }

  export type CasesUpdateManyWithoutPatientNestedInput = {
    create?: XOR<CasesCreateWithoutPatientInput, CasesUncheckedCreateWithoutPatientInput> | CasesCreateWithoutPatientInput[] | CasesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutPatientInput | CasesCreateOrConnectWithoutPatientInput[]
    upsert?: CasesUpsertWithWhereUniqueWithoutPatientInput | CasesUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: CasesCreateManyPatientInputEnvelope
    set?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    disconnect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    delete?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    update?: CasesUpdateWithWhereUniqueWithoutPatientInput | CasesUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: CasesUpdateManyWithWhereWithoutPatientInput | CasesUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: CasesScalarWhereInput | CasesScalarWhereInput[]
  }

  export type AccessLogsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AccessLogsCreateWithoutPatientInput, AccessLogsUncheckedCreateWithoutPatientInput> | AccessLogsCreateWithoutPatientInput[] | AccessLogsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AccessLogsCreateOrConnectWithoutPatientInput | AccessLogsCreateOrConnectWithoutPatientInput[]
    upsert?: AccessLogsUpsertWithWhereUniqueWithoutPatientInput | AccessLogsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AccessLogsCreateManyPatientInputEnvelope
    set?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    disconnect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    delete?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    connect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    update?: AccessLogsUpdateWithWhereUniqueWithoutPatientInput | AccessLogsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AccessLogsUpdateManyWithWhereWithoutPatientInput | AccessLogsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AccessLogsScalarWhereInput | AccessLogsScalarWhereInput[]
  }

  export type MedicalHistoryUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput> | MedicalHistoryCreateWithoutPatientInput[] | MedicalHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalHistoryCreateOrConnectWithoutPatientInput | MedicalHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalHistoryUpsertWithWhereUniqueWithoutPatientInput | MedicalHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalHistoryCreateManyPatientInputEnvelope
    set?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    disconnect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    delete?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    connect?: MedicalHistoryWhereUniqueInput | MedicalHistoryWhereUniqueInput[]
    update?: MedicalHistoryUpdateWithWhereUniqueWithoutPatientInput | MedicalHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalHistoryUpdateManyWithWhereWithoutPatientInput | MedicalHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
  }

  export type LabOrdersUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabOrdersCreateWithoutPatientInput, LabOrdersUncheckedCreateWithoutPatientInput> | LabOrdersCreateWithoutPatientInput[] | LabOrdersUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabOrdersCreateOrConnectWithoutPatientInput | LabOrdersCreateOrConnectWithoutPatientInput[]
    upsert?: LabOrdersUpsertWithWhereUniqueWithoutPatientInput | LabOrdersUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabOrdersCreateManyPatientInputEnvelope
    set?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    disconnect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    delete?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    connect?: LabOrdersWhereUniqueInput | LabOrdersWhereUniqueInput[]
    update?: LabOrdersUpdateWithWhereUniqueWithoutPatientInput | LabOrdersUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabOrdersUpdateManyWithWhereWithoutPatientInput | LabOrdersUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabOrdersScalarWhereInput | LabOrdersScalarWhereInput[]
  }

  export type LabResultsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LabResultsCreateWithoutPatientInput, LabResultsUncheckedCreateWithoutPatientInput> | LabResultsCreateWithoutPatientInput[] | LabResultsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutPatientInput | LabResultsCreateOrConnectWithoutPatientInput[]
    upsert?: LabResultsUpsertWithWhereUniqueWithoutPatientInput | LabResultsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LabResultsCreateManyPatientInputEnvelope
    set?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    disconnect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    delete?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    update?: LabResultsUpdateWithWhereUniqueWithoutPatientInput | LabResultsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LabResultsUpdateManyWithWhereWithoutPatientInput | LabResultsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LabResultsScalarWhereInput | LabResultsScalarWhereInput[]
  }

  export type DiagnosesUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<DiagnosesCreateWithoutPatientInput, DiagnosesUncheckedCreateWithoutPatientInput> | DiagnosesCreateWithoutPatientInput[] | DiagnosesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutPatientInput | DiagnosesCreateOrConnectWithoutPatientInput[]
    upsert?: DiagnosesUpsertWithWhereUniqueWithoutPatientInput | DiagnosesUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: DiagnosesCreateManyPatientInputEnvelope
    set?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    disconnect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    delete?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    update?: DiagnosesUpdateWithWhereUniqueWithoutPatientInput | DiagnosesUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: DiagnosesUpdateManyWithWhereWithoutPatientInput | DiagnosesUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: DiagnosesScalarWhereInput | DiagnosesScalarWhereInput[]
  }

  export type CasesUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<CasesCreateWithoutPatientInput, CasesUncheckedCreateWithoutPatientInput> | CasesCreateWithoutPatientInput[] | CasesUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutPatientInput | CasesCreateOrConnectWithoutPatientInput[]
    upsert?: CasesUpsertWithWhereUniqueWithoutPatientInput | CasesUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: CasesCreateManyPatientInputEnvelope
    set?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    disconnect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    delete?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    update?: CasesUpdateWithWhereUniqueWithoutPatientInput | CasesUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: CasesUpdateManyWithWhereWithoutPatientInput | CasesUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: CasesScalarWhereInput | CasesScalarWhereInput[]
  }

  export type AccessLogsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AccessLogsCreateWithoutPatientInput, AccessLogsUncheckedCreateWithoutPatientInput> | AccessLogsCreateWithoutPatientInput[] | AccessLogsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AccessLogsCreateOrConnectWithoutPatientInput | AccessLogsCreateOrConnectWithoutPatientInput[]
    upsert?: AccessLogsUpsertWithWhereUniqueWithoutPatientInput | AccessLogsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AccessLogsCreateManyPatientInputEnvelope
    set?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    disconnect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    delete?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    connect?: AccessLogsWhereUniqueInput | AccessLogsWhereUniqueInput[]
    update?: AccessLogsUpdateWithWhereUniqueWithoutPatientInput | AccessLogsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AccessLogsUpdateManyWithWhereWithoutPatientInput | AccessLogsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AccessLogsScalarWhereInput | AccessLogsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UsersCreateWithoutDoctorInput, UsersUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDoctorInput
    connect?: UsersWhereUniqueInput
  }

  export type CasesCreateNestedManyWithoutDoctorInput = {
    create?: XOR<CasesCreateWithoutDoctorInput, CasesUncheckedCreateWithoutDoctorInput> | CasesCreateWithoutDoctorInput[] | CasesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutDoctorInput | CasesCreateOrConnectWithoutDoctorInput[]
    createMany?: CasesCreateManyDoctorInputEnvelope
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
  }

  export type CasesUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<CasesCreateWithoutDoctorInput, CasesUncheckedCreateWithoutDoctorInput> | CasesCreateWithoutDoctorInput[] | CasesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutDoctorInput | CasesCreateOrConnectWithoutDoctorInput[]
    createMany?: CasesCreateManyDoctorInputEnvelope
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<UsersCreateWithoutDoctorInput, UsersUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDoctorInput
    upsert?: UsersUpsertWithoutDoctorInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutDoctorInput, UsersUpdateWithoutDoctorInput>, UsersUncheckedUpdateWithoutDoctorInput>
  }

  export type CasesUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<CasesCreateWithoutDoctorInput, CasesUncheckedCreateWithoutDoctorInput> | CasesCreateWithoutDoctorInput[] | CasesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutDoctorInput | CasesCreateOrConnectWithoutDoctorInput[]
    upsert?: CasesUpsertWithWhereUniqueWithoutDoctorInput | CasesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: CasesCreateManyDoctorInputEnvelope
    set?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    disconnect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    delete?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    update?: CasesUpdateWithWhereUniqueWithoutDoctorInput | CasesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: CasesUpdateManyWithWhereWithoutDoctorInput | CasesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: CasesScalarWhereInput | CasesScalarWhereInput[]
  }

  export type CasesUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<CasesCreateWithoutDoctorInput, CasesUncheckedCreateWithoutDoctorInput> | CasesCreateWithoutDoctorInput[] | CasesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutDoctorInput | CasesCreateOrConnectWithoutDoctorInput[]
    upsert?: CasesUpsertWithWhereUniqueWithoutDoctorInput | CasesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: CasesCreateManyDoctorInputEnvelope
    set?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    disconnect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    delete?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    update?: CasesUpdateWithWhereUniqueWithoutDoctorInput | CasesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: CasesUpdateManyWithWhereWithoutDoctorInput | CasesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: CasesScalarWhereInput | CasesScalarWhereInput[]
  }

  export type PatientsCreateNestedOneWithoutMedicalHistoryInput = {
    create?: XOR<PatientsCreateWithoutMedicalHistoryInput, PatientsUncheckedCreateWithoutMedicalHistoryInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutMedicalHistoryInput
    connect?: PatientsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutMedicalHistoryInput = {
    create?: XOR<UsersCreateWithoutMedicalHistoryInput, UsersUncheckedCreateWithoutMedicalHistoryInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMedicalHistoryInput
    connect?: UsersWhereUniqueInput
  }

  export type PatientsUpdateOneRequiredWithoutMedicalHistoryNestedInput = {
    create?: XOR<PatientsCreateWithoutMedicalHistoryInput, PatientsUncheckedCreateWithoutMedicalHistoryInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutMedicalHistoryInput
    upsert?: PatientsUpsertWithoutMedicalHistoryInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutMedicalHistoryInput, PatientsUpdateWithoutMedicalHistoryInput>, PatientsUncheckedUpdateWithoutMedicalHistoryInput>
  }

  export type UsersUpdateOneRequiredWithoutMedicalHistoryNestedInput = {
    create?: XOR<UsersCreateWithoutMedicalHistoryInput, UsersUncheckedCreateWithoutMedicalHistoryInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMedicalHistoryInput
    upsert?: UsersUpsertWithoutMedicalHistoryInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMedicalHistoryInput, UsersUpdateWithoutMedicalHistoryInput>, UsersUncheckedUpdateWithoutMedicalHistoryInput>
  }

  export type PatientsCreateNestedOneWithoutLabOrdersInput = {
    create?: XOR<PatientsCreateWithoutLabOrdersInput, PatientsUncheckedCreateWithoutLabOrdersInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutLabOrdersInput
    connect?: PatientsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutLabOrdersInput = {
    create?: XOR<UsersCreateWithoutLabOrdersInput, UsersUncheckedCreateWithoutLabOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLabOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type LabResultsCreateNestedManyWithoutOrderInput = {
    create?: XOR<LabResultsCreateWithoutOrderInput, LabResultsUncheckedCreateWithoutOrderInput> | LabResultsCreateWithoutOrderInput[] | LabResultsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutOrderInput | LabResultsCreateOrConnectWithoutOrderInput[]
    createMany?: LabResultsCreateManyOrderInputEnvelope
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
  }

  export type LabResultsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<LabResultsCreateWithoutOrderInput, LabResultsUncheckedCreateWithoutOrderInput> | LabResultsCreateWithoutOrderInput[] | LabResultsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutOrderInput | LabResultsCreateOrConnectWithoutOrderInput[]
    createMany?: LabResultsCreateManyOrderInputEnvelope
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
  }

  export type PatientsUpdateOneRequiredWithoutLabOrdersNestedInput = {
    create?: XOR<PatientsCreateWithoutLabOrdersInput, PatientsUncheckedCreateWithoutLabOrdersInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutLabOrdersInput
    upsert?: PatientsUpsertWithoutLabOrdersInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutLabOrdersInput, PatientsUpdateWithoutLabOrdersInput>, PatientsUncheckedUpdateWithoutLabOrdersInput>
  }

  export type UsersUpdateOneRequiredWithoutLabOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutLabOrdersInput, UsersUncheckedCreateWithoutLabOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLabOrdersInput
    upsert?: UsersUpsertWithoutLabOrdersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLabOrdersInput, UsersUpdateWithoutLabOrdersInput>, UsersUncheckedUpdateWithoutLabOrdersInput>
  }

  export type LabResultsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<LabResultsCreateWithoutOrderInput, LabResultsUncheckedCreateWithoutOrderInput> | LabResultsCreateWithoutOrderInput[] | LabResultsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutOrderInput | LabResultsCreateOrConnectWithoutOrderInput[]
    upsert?: LabResultsUpsertWithWhereUniqueWithoutOrderInput | LabResultsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: LabResultsCreateManyOrderInputEnvelope
    set?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    disconnect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    delete?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    update?: LabResultsUpdateWithWhereUniqueWithoutOrderInput | LabResultsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: LabResultsUpdateManyWithWhereWithoutOrderInput | LabResultsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: LabResultsScalarWhereInput | LabResultsScalarWhereInput[]
  }

  export type LabResultsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<LabResultsCreateWithoutOrderInput, LabResultsUncheckedCreateWithoutOrderInput> | LabResultsCreateWithoutOrderInput[] | LabResultsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LabResultsCreateOrConnectWithoutOrderInput | LabResultsCreateOrConnectWithoutOrderInput[]
    upsert?: LabResultsUpsertWithWhereUniqueWithoutOrderInput | LabResultsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: LabResultsCreateManyOrderInputEnvelope
    set?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    disconnect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    delete?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    connect?: LabResultsWhereUniqueInput | LabResultsWhereUniqueInput[]
    update?: LabResultsUpdateWithWhereUniqueWithoutOrderInput | LabResultsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: LabResultsUpdateManyWithWhereWithoutOrderInput | LabResultsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: LabResultsScalarWhereInput | LabResultsScalarWhereInput[]
  }

  export type PatientsCreateNestedOneWithoutLabResultsInput = {
    create?: XOR<PatientsCreateWithoutLabResultsInput, PatientsUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutLabResultsInput
    connect?: PatientsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutLabResultsInput = {
    create?: XOR<UsersCreateWithoutLabResultsInput, UsersUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLabResultsInput
    connect?: UsersWhereUniqueInput
  }

  export type LabOrdersCreateNestedOneWithoutLabResultsInput = {
    create?: XOR<LabOrdersCreateWithoutLabResultsInput, LabOrdersUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: LabOrdersCreateOrConnectWithoutLabResultsInput
    connect?: LabOrdersWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientsUpdateOneRequiredWithoutLabResultsNestedInput = {
    create?: XOR<PatientsCreateWithoutLabResultsInput, PatientsUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutLabResultsInput
    upsert?: PatientsUpsertWithoutLabResultsInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutLabResultsInput, PatientsUpdateWithoutLabResultsInput>, PatientsUncheckedUpdateWithoutLabResultsInput>
  }

  export type UsersUpdateOneRequiredWithoutLabResultsNestedInput = {
    create?: XOR<UsersCreateWithoutLabResultsInput, UsersUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLabResultsInput
    upsert?: UsersUpsertWithoutLabResultsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLabResultsInput, UsersUpdateWithoutLabResultsInput>, UsersUncheckedUpdateWithoutLabResultsInput>
  }

  export type LabOrdersUpdateOneRequiredWithoutLabResultsNestedInput = {
    create?: XOR<LabOrdersCreateWithoutLabResultsInput, LabOrdersUncheckedCreateWithoutLabResultsInput>
    connectOrCreate?: LabOrdersCreateOrConnectWithoutLabResultsInput
    upsert?: LabOrdersUpsertWithoutLabResultsInput
    connect?: LabOrdersWhereUniqueInput
    update?: XOR<XOR<LabOrdersUpdateToOneWithWhereWithoutLabResultsInput, LabOrdersUpdateWithoutLabResultsInput>, LabOrdersUncheckedUpdateWithoutLabResultsInput>
  }

  export type DiagnosesCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<DiagnosesCreateWithoutDiseaseInput, DiagnosesUncheckedCreateWithoutDiseaseInput> | DiagnosesCreateWithoutDiseaseInput[] | DiagnosesUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutDiseaseInput | DiagnosesCreateOrConnectWithoutDiseaseInput[]
    createMany?: DiagnosesCreateManyDiseaseInputEnvelope
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
  }

  export type DiagnosesUncheckedCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<DiagnosesCreateWithoutDiseaseInput, DiagnosesUncheckedCreateWithoutDiseaseInput> | DiagnosesCreateWithoutDiseaseInput[] | DiagnosesUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutDiseaseInput | DiagnosesCreateOrConnectWithoutDiseaseInput[]
    createMany?: DiagnosesCreateManyDiseaseInputEnvelope
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
  }

  export type DiagnosesUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<DiagnosesCreateWithoutDiseaseInput, DiagnosesUncheckedCreateWithoutDiseaseInput> | DiagnosesCreateWithoutDiseaseInput[] | DiagnosesUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutDiseaseInput | DiagnosesCreateOrConnectWithoutDiseaseInput[]
    upsert?: DiagnosesUpsertWithWhereUniqueWithoutDiseaseInput | DiagnosesUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: DiagnosesCreateManyDiseaseInputEnvelope
    set?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    disconnect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    delete?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    update?: DiagnosesUpdateWithWhereUniqueWithoutDiseaseInput | DiagnosesUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: DiagnosesUpdateManyWithWhereWithoutDiseaseInput | DiagnosesUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: DiagnosesScalarWhereInput | DiagnosesScalarWhereInput[]
  }

  export type DiagnosesUncheckedUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<DiagnosesCreateWithoutDiseaseInput, DiagnosesUncheckedCreateWithoutDiseaseInput> | DiagnosesCreateWithoutDiseaseInput[] | DiagnosesUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutDiseaseInput | DiagnosesCreateOrConnectWithoutDiseaseInput[]
    upsert?: DiagnosesUpsertWithWhereUniqueWithoutDiseaseInput | DiagnosesUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: DiagnosesCreateManyDiseaseInputEnvelope
    set?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    disconnect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    delete?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    update?: DiagnosesUpdateWithWhereUniqueWithoutDiseaseInput | DiagnosesUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: DiagnosesUpdateManyWithWhereWithoutDiseaseInput | DiagnosesUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: DiagnosesScalarWhereInput | DiagnosesScalarWhereInput[]
  }

  export type PatientsCreateNestedOneWithoutDiagnosesInput = {
    create?: XOR<PatientsCreateWithoutDiagnosesInput, PatientsUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutDiagnosesInput
    connect?: PatientsWhereUniqueInput
  }

  export type DiseasesCreateNestedOneWithoutDiagnosesInput = {
    create?: XOR<DiseasesCreateWithoutDiagnosesInput, DiseasesUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: DiseasesCreateOrConnectWithoutDiagnosesInput
    connect?: DiseasesWhereUniqueInput
  }

  export type CasesCreateNestedManyWithoutDiagnosisInput = {
    create?: XOR<CasesCreateWithoutDiagnosisInput, CasesUncheckedCreateWithoutDiagnosisInput> | CasesCreateWithoutDiagnosisInput[] | CasesUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutDiagnosisInput | CasesCreateOrConnectWithoutDiagnosisInput[]
    createMany?: CasesCreateManyDiagnosisInputEnvelope
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
  }

  export type CasesUncheckedCreateNestedManyWithoutDiagnosisInput = {
    create?: XOR<CasesCreateWithoutDiagnosisInput, CasesUncheckedCreateWithoutDiagnosisInput> | CasesCreateWithoutDiagnosisInput[] | CasesUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutDiagnosisInput | CasesCreateOrConnectWithoutDiagnosisInput[]
    createMany?: CasesCreateManyDiagnosisInputEnvelope
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatientsUpdateOneRequiredWithoutDiagnosesNestedInput = {
    create?: XOR<PatientsCreateWithoutDiagnosesInput, PatientsUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutDiagnosesInput
    upsert?: PatientsUpsertWithoutDiagnosesInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutDiagnosesInput, PatientsUpdateWithoutDiagnosesInput>, PatientsUncheckedUpdateWithoutDiagnosesInput>
  }

  export type DiseasesUpdateOneRequiredWithoutDiagnosesNestedInput = {
    create?: XOR<DiseasesCreateWithoutDiagnosesInput, DiseasesUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: DiseasesCreateOrConnectWithoutDiagnosesInput
    upsert?: DiseasesUpsertWithoutDiagnosesInput
    connect?: DiseasesWhereUniqueInput
    update?: XOR<XOR<DiseasesUpdateToOneWithWhereWithoutDiagnosesInput, DiseasesUpdateWithoutDiagnosesInput>, DiseasesUncheckedUpdateWithoutDiagnosesInput>
  }

  export type CasesUpdateManyWithoutDiagnosisNestedInput = {
    create?: XOR<CasesCreateWithoutDiagnosisInput, CasesUncheckedCreateWithoutDiagnosisInput> | CasesCreateWithoutDiagnosisInput[] | CasesUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutDiagnosisInput | CasesCreateOrConnectWithoutDiagnosisInput[]
    upsert?: CasesUpsertWithWhereUniqueWithoutDiagnosisInput | CasesUpsertWithWhereUniqueWithoutDiagnosisInput[]
    createMany?: CasesCreateManyDiagnosisInputEnvelope
    set?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    disconnect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    delete?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    update?: CasesUpdateWithWhereUniqueWithoutDiagnosisInput | CasesUpdateWithWhereUniqueWithoutDiagnosisInput[]
    updateMany?: CasesUpdateManyWithWhereWithoutDiagnosisInput | CasesUpdateManyWithWhereWithoutDiagnosisInput[]
    deleteMany?: CasesScalarWhereInput | CasesScalarWhereInput[]
  }

  export type CasesUncheckedUpdateManyWithoutDiagnosisNestedInput = {
    create?: XOR<CasesCreateWithoutDiagnosisInput, CasesUncheckedCreateWithoutDiagnosisInput> | CasesCreateWithoutDiagnosisInput[] | CasesUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: CasesCreateOrConnectWithoutDiagnosisInput | CasesCreateOrConnectWithoutDiagnosisInput[]
    upsert?: CasesUpsertWithWhereUniqueWithoutDiagnosisInput | CasesUpsertWithWhereUniqueWithoutDiagnosisInput[]
    createMany?: CasesCreateManyDiagnosisInputEnvelope
    set?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    disconnect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    delete?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    connect?: CasesWhereUniqueInput | CasesWhereUniqueInput[]
    update?: CasesUpdateWithWhereUniqueWithoutDiagnosisInput | CasesUpdateWithWhereUniqueWithoutDiagnosisInput[]
    updateMany?: CasesUpdateManyWithWhereWithoutDiagnosisInput | CasesUpdateManyWithWhereWithoutDiagnosisInput[]
    deleteMany?: CasesScalarWhereInput | CasesScalarWhereInput[]
  }

  export type PatientsCreateNestedOneWithoutCasesInput = {
    create?: XOR<PatientsCreateWithoutCasesInput, PatientsUncheckedCreateWithoutCasesInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutCasesInput
    connect?: PatientsWhereUniqueInput
  }

  export type DoctorsCreateNestedOneWithoutCasesInput = {
    create?: XOR<DoctorsCreateWithoutCasesInput, DoctorsUncheckedCreateWithoutCasesInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutCasesInput
    connect?: DoctorsWhereUniqueInput
  }

  export type DiagnosesCreateNestedOneWithoutCasesInput = {
    create?: XOR<DiagnosesCreateWithoutCasesInput, DiagnosesUncheckedCreateWithoutCasesInput>
    connectOrCreate?: DiagnosesCreateOrConnectWithoutCasesInput
    connect?: DiagnosesWhereUniqueInput
  }

  export type PatientsUpdateOneRequiredWithoutCasesNestedInput = {
    create?: XOR<PatientsCreateWithoutCasesInput, PatientsUncheckedCreateWithoutCasesInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutCasesInput
    upsert?: PatientsUpsertWithoutCasesInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutCasesInput, PatientsUpdateWithoutCasesInput>, PatientsUncheckedUpdateWithoutCasesInput>
  }

  export type DoctorsUpdateOneRequiredWithoutCasesNestedInput = {
    create?: XOR<DoctorsCreateWithoutCasesInput, DoctorsUncheckedCreateWithoutCasesInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutCasesInput
    upsert?: DoctorsUpsertWithoutCasesInput
    connect?: DoctorsWhereUniqueInput
    update?: XOR<XOR<DoctorsUpdateToOneWithWhereWithoutCasesInput, DoctorsUpdateWithoutCasesInput>, DoctorsUncheckedUpdateWithoutCasesInput>
  }

  export type DiagnosesUpdateOneRequiredWithoutCasesNestedInput = {
    create?: XOR<DiagnosesCreateWithoutCasesInput, DiagnosesUncheckedCreateWithoutCasesInput>
    connectOrCreate?: DiagnosesCreateOrConnectWithoutCasesInput
    upsert?: DiagnosesUpsertWithoutCasesInput
    connect?: DiagnosesWhereUniqueInput
    update?: XOR<XOR<DiagnosesUpdateToOneWithWhereWithoutCasesInput, DiagnosesUpdateWithoutCasesInput>, DiagnosesUncheckedUpdateWithoutCasesInput>
  }

  export type UsersCreateNestedOneWithoutAccessLogsInput = {
    create?: XOR<UsersCreateWithoutAccessLogsInput, UsersUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccessLogsInput
    connect?: UsersWhereUniqueInput
  }

  export type PatientsCreateNestedOneWithoutAccessLogsInput = {
    create?: XOR<PatientsCreateWithoutAccessLogsInput, PatientsUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutAccessLogsInput
    connect?: PatientsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutAccessLogsNestedInput = {
    create?: XOR<UsersCreateWithoutAccessLogsInput, UsersUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAccessLogsInput
    upsert?: UsersUpsertWithoutAccessLogsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAccessLogsInput, UsersUpdateWithoutAccessLogsInput>, UsersUncheckedUpdateWithoutAccessLogsInput>
  }

  export type PatientsUpdateOneRequiredWithoutAccessLogsNestedInput = {
    create?: XOR<PatientsCreateWithoutAccessLogsInput, PatientsUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutAccessLogsInput
    upsert?: PatientsUpsertWithoutAccessLogsInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutAccessLogsInput, PatientsUpdateWithoutAccessLogsInput>, PatientsUncheckedUpdateWithoutAccessLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DoctorsCreateWithoutUserInput = {
    specialty: string
    created_at?: Date | string
    updated_at?: Date | string
    Cases?: CasesCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsUncheckedCreateWithoutUserInput = {
    doctor_id?: number
    specialty: string
    created_at?: Date | string
    updated_at?: Date | string
    Cases?: CasesUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorsCreateOrConnectWithoutUserInput = {
    where: DoctorsWhereUniqueInput
    create: XOR<DoctorsCreateWithoutUserInput, DoctorsUncheckedCreateWithoutUserInput>
  }

  export type LabOrdersCreateWithoutOrderedByInput = {
    test_type: string
    order_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutLabOrdersInput
    LabResults?: LabResultsCreateNestedManyWithoutOrderInput
  }

  export type LabOrdersUncheckedCreateWithoutOrderedByInput = {
    order_id?: number
    patient_id: number
    test_type: string
    order_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type LabOrdersCreateOrConnectWithoutOrderedByInput = {
    where: LabOrdersWhereUniqueInput
    create: XOR<LabOrdersCreateWithoutOrderedByInput, LabOrdersUncheckedCreateWithoutOrderedByInput>
  }

  export type LabOrdersCreateManyOrderedByInputEnvelope = {
    data: LabOrdersCreateManyOrderedByInput | LabOrdersCreateManyOrderedByInput[]
  }

  export type MedicalHistoryCreateWithoutTechnicianInput = {
    record_date: Date | string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutMedicalHistoryInput
  }

  export type MedicalHistoryUncheckedCreateWithoutTechnicianInput = {
    history_id?: number
    patient_id: number
    record_date: Date | string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MedicalHistoryCreateOrConnectWithoutTechnicianInput = {
    where: MedicalHistoryWhereUniqueInput
    create: XOR<MedicalHistoryCreateWithoutTechnicianInput, MedicalHistoryUncheckedCreateWithoutTechnicianInput>
  }

  export type MedicalHistoryCreateManyTechnicianInputEnvelope = {
    data: MedicalHistoryCreateManyTechnicianInput | MedicalHistoryCreateManyTechnicianInput[]
  }

  export type LabResultsCreateWithoutTechnicianInput = {
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutLabResultsInput
    order: LabOrdersCreateNestedOneWithoutLabResultsInput
  }

  export type LabResultsUncheckedCreateWithoutTechnicianInput = {
    result_id?: number
    patient_id: number
    order_id: number
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LabResultsCreateOrConnectWithoutTechnicianInput = {
    where: LabResultsWhereUniqueInput
    create: XOR<LabResultsCreateWithoutTechnicianInput, LabResultsUncheckedCreateWithoutTechnicianInput>
  }

  export type LabResultsCreateManyTechnicianInputEnvelope = {
    data: LabResultsCreateManyTechnicianInput | LabResultsCreateManyTechnicianInput[]
  }

  export type AccessLogsCreateWithoutUserInput = {
    access_time?: Date | string
    action: string
    resource_type: string
    resource_id: number
    created_at?: Date | string
    patient: PatientsCreateNestedOneWithoutAccessLogsInput
  }

  export type AccessLogsUncheckedCreateWithoutUserInput = {
    log_id?: number
    patient_id: number
    access_time?: Date | string
    action: string
    resource_type: string
    resource_id: number
    created_at?: Date | string
  }

  export type AccessLogsCreateOrConnectWithoutUserInput = {
    where: AccessLogsWhereUniqueInput
    create: XOR<AccessLogsCreateWithoutUserInput, AccessLogsUncheckedCreateWithoutUserInput>
  }

  export type AccessLogsCreateManyUserInputEnvelope = {
    data: AccessLogsCreateManyUserInput | AccessLogsCreateManyUserInput[]
  }

  export type DoctorsUpsertWithoutUserInput = {
    update: XOR<DoctorsUpdateWithoutUserInput, DoctorsUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorsCreateWithoutUserInput, DoctorsUncheckedCreateWithoutUserInput>
    where?: DoctorsWhereInput
  }

  export type DoctorsUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorsWhereInput
    data: XOR<DoctorsUpdateWithoutUserInput, DoctorsUncheckedUpdateWithoutUserInput>
  }

  export type DoctorsUpdateWithoutUserInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cases?: CasesUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorsUncheckedUpdateWithoutUserInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cases?: CasesUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type LabOrdersUpsertWithWhereUniqueWithoutOrderedByInput = {
    where: LabOrdersWhereUniqueInput
    update: XOR<LabOrdersUpdateWithoutOrderedByInput, LabOrdersUncheckedUpdateWithoutOrderedByInput>
    create: XOR<LabOrdersCreateWithoutOrderedByInput, LabOrdersUncheckedCreateWithoutOrderedByInput>
  }

  export type LabOrdersUpdateWithWhereUniqueWithoutOrderedByInput = {
    where: LabOrdersWhereUniqueInput
    data: XOR<LabOrdersUpdateWithoutOrderedByInput, LabOrdersUncheckedUpdateWithoutOrderedByInput>
  }

  export type LabOrdersUpdateManyWithWhereWithoutOrderedByInput = {
    where: LabOrdersScalarWhereInput
    data: XOR<LabOrdersUpdateManyMutationInput, LabOrdersUncheckedUpdateManyWithoutOrderedByInput>
  }

  export type LabOrdersScalarWhereInput = {
    AND?: LabOrdersScalarWhereInput | LabOrdersScalarWhereInput[]
    OR?: LabOrdersScalarWhereInput[]
    NOT?: LabOrdersScalarWhereInput | LabOrdersScalarWhereInput[]
    order_id?: IntFilter<"LabOrders"> | number
    patient_id?: IntFilter<"LabOrders"> | number
    ordered_by?: IntFilter<"LabOrders"> | number
    test_type?: StringFilter<"LabOrders"> | string
    order_date?: DateTimeFilter<"LabOrders"> | Date | string
    status?: StringFilter<"LabOrders"> | string
    created_at?: DateTimeFilter<"LabOrders"> | Date | string
    updated_at?: DateTimeFilter<"LabOrders"> | Date | string
  }

  export type MedicalHistoryUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: MedicalHistoryWhereUniqueInput
    update: XOR<MedicalHistoryUpdateWithoutTechnicianInput, MedicalHistoryUncheckedUpdateWithoutTechnicianInput>
    create: XOR<MedicalHistoryCreateWithoutTechnicianInput, MedicalHistoryUncheckedCreateWithoutTechnicianInput>
  }

  export type MedicalHistoryUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: MedicalHistoryWhereUniqueInput
    data: XOR<MedicalHistoryUpdateWithoutTechnicianInput, MedicalHistoryUncheckedUpdateWithoutTechnicianInput>
  }

  export type MedicalHistoryUpdateManyWithWhereWithoutTechnicianInput = {
    where: MedicalHistoryScalarWhereInput
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type MedicalHistoryScalarWhereInput = {
    AND?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
    OR?: MedicalHistoryScalarWhereInput[]
    NOT?: MedicalHistoryScalarWhereInput | MedicalHistoryScalarWhereInput[]
    history_id?: IntFilter<"MedicalHistory"> | number
    patient_id?: IntFilter<"MedicalHistory"> | number
    technician_id?: IntFilter<"MedicalHistory"> | number
    record_date?: DateTimeFilter<"MedicalHistory"> | Date | string
    description?: StringFilter<"MedicalHistory"> | string
    created_at?: DateTimeFilter<"MedicalHistory"> | Date | string
    updated_at?: DateTimeFilter<"MedicalHistory"> | Date | string
  }

  export type LabResultsUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: LabResultsWhereUniqueInput
    update: XOR<LabResultsUpdateWithoutTechnicianInput, LabResultsUncheckedUpdateWithoutTechnicianInput>
    create: XOR<LabResultsCreateWithoutTechnicianInput, LabResultsUncheckedCreateWithoutTechnicianInput>
  }

  export type LabResultsUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: LabResultsWhereUniqueInput
    data: XOR<LabResultsUpdateWithoutTechnicianInput, LabResultsUncheckedUpdateWithoutTechnicianInput>
  }

  export type LabResultsUpdateManyWithWhereWithoutTechnicianInput = {
    where: LabResultsScalarWhereInput
    data: XOR<LabResultsUpdateManyMutationInput, LabResultsUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type LabResultsScalarWhereInput = {
    AND?: LabResultsScalarWhereInput | LabResultsScalarWhereInput[]
    OR?: LabResultsScalarWhereInput[]
    NOT?: LabResultsScalarWhereInput | LabResultsScalarWhereInput[]
    result_id?: IntFilter<"LabResults"> | number
    patient_id?: IntFilter<"LabResults"> | number
    technician_id?: IntFilter<"LabResults"> | number
    order_id?: IntFilter<"LabResults"> | number
    test_date?: DateTimeFilter<"LabResults"> | Date | string
    test_type?: StringFilter<"LabResults"> | string
    result_value?: FloatFilter<"LabResults"> | number
    unit?: StringFilter<"LabResults"> | string
    created_at?: DateTimeFilter<"LabResults"> | Date | string
    updated_at?: DateTimeFilter<"LabResults"> | Date | string
  }

  export type AccessLogsUpsertWithWhereUniqueWithoutUserInput = {
    where: AccessLogsWhereUniqueInput
    update: XOR<AccessLogsUpdateWithoutUserInput, AccessLogsUncheckedUpdateWithoutUserInput>
    create: XOR<AccessLogsCreateWithoutUserInput, AccessLogsUncheckedCreateWithoutUserInput>
  }

  export type AccessLogsUpdateWithWhereUniqueWithoutUserInput = {
    where: AccessLogsWhereUniqueInput
    data: XOR<AccessLogsUpdateWithoutUserInput, AccessLogsUncheckedUpdateWithoutUserInput>
  }

  export type AccessLogsUpdateManyWithWhereWithoutUserInput = {
    where: AccessLogsScalarWhereInput
    data: XOR<AccessLogsUpdateManyMutationInput, AccessLogsUncheckedUpdateManyWithoutUserInput>
  }

  export type AccessLogsScalarWhereInput = {
    AND?: AccessLogsScalarWhereInput | AccessLogsScalarWhereInput[]
    OR?: AccessLogsScalarWhereInput[]
    NOT?: AccessLogsScalarWhereInput | AccessLogsScalarWhereInput[]
    log_id?: IntFilter<"AccessLogs"> | number
    user_id?: IntFilter<"AccessLogs"> | number
    patient_id?: IntFilter<"AccessLogs"> | number
    access_time?: DateTimeFilter<"AccessLogs"> | Date | string
    action?: StringFilter<"AccessLogs"> | string
    resource_type?: StringFilter<"AccessLogs"> | string
    resource_id?: IntFilter<"AccessLogs"> | number
    created_at?: DateTimeFilter<"AccessLogs"> | Date | string
  }

  export type MedicalHistoryCreateWithoutPatientInput = {
    record_date: Date | string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    technician: UsersCreateNestedOneWithoutMedicalHistoryInput
  }

  export type MedicalHistoryUncheckedCreateWithoutPatientInput = {
    history_id?: number
    technician_id: number
    record_date: Date | string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MedicalHistoryCreateOrConnectWithoutPatientInput = {
    where: MedicalHistoryWhereUniqueInput
    create: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput>
  }

  export type MedicalHistoryCreateManyPatientInputEnvelope = {
    data: MedicalHistoryCreateManyPatientInput | MedicalHistoryCreateManyPatientInput[]
  }

  export type LabOrdersCreateWithoutPatientInput = {
    test_type: string
    order_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    orderedBy: UsersCreateNestedOneWithoutLabOrdersInput
    LabResults?: LabResultsCreateNestedManyWithoutOrderInput
  }

  export type LabOrdersUncheckedCreateWithoutPatientInput = {
    order_id?: number
    ordered_by: number
    test_type: string
    order_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type LabOrdersCreateOrConnectWithoutPatientInput = {
    where: LabOrdersWhereUniqueInput
    create: XOR<LabOrdersCreateWithoutPatientInput, LabOrdersUncheckedCreateWithoutPatientInput>
  }

  export type LabOrdersCreateManyPatientInputEnvelope = {
    data: LabOrdersCreateManyPatientInput | LabOrdersCreateManyPatientInput[]
  }

  export type LabResultsCreateWithoutPatientInput = {
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
    technician: UsersCreateNestedOneWithoutLabResultsInput
    order: LabOrdersCreateNestedOneWithoutLabResultsInput
  }

  export type LabResultsUncheckedCreateWithoutPatientInput = {
    result_id?: number
    technician_id: number
    order_id: number
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LabResultsCreateOrConnectWithoutPatientInput = {
    where: LabResultsWhereUniqueInput
    create: XOR<LabResultsCreateWithoutPatientInput, LabResultsUncheckedCreateWithoutPatientInput>
  }

  export type LabResultsCreateManyPatientInputEnvelope = {
    data: LabResultsCreateManyPatientInput | LabResultsCreateManyPatientInput[]
  }

  export type DiagnosesCreateWithoutPatientInput = {
    diagnosis_date: Date | string
    status: string
    recovery_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    disease: DiseasesCreateNestedOneWithoutDiagnosesInput
    Cases?: CasesCreateNestedManyWithoutDiagnosisInput
  }

  export type DiagnosesUncheckedCreateWithoutPatientInput = {
    diagnosis_id?: number
    disease_id: number
    diagnosis_date: Date | string
    status: string
    recovery_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Cases?: CasesUncheckedCreateNestedManyWithoutDiagnosisInput
  }

  export type DiagnosesCreateOrConnectWithoutPatientInput = {
    where: DiagnosesWhereUniqueInput
    create: XOR<DiagnosesCreateWithoutPatientInput, DiagnosesUncheckedCreateWithoutPatientInput>
  }

  export type DiagnosesCreateManyPatientInputEnvelope = {
    data: DiagnosesCreateManyPatientInput | DiagnosesCreateManyPatientInput[]
  }

  export type CasesCreateWithoutPatientInput = {
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    doctor: DoctorsCreateNestedOneWithoutCasesInput
    diagnosis: DiagnosesCreateNestedOneWithoutCasesInput
  }

  export type CasesUncheckedCreateWithoutPatientInput = {
    case_id?: number
    doctor_id: number
    diagnosis_id: number
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CasesCreateOrConnectWithoutPatientInput = {
    where: CasesWhereUniqueInput
    create: XOR<CasesCreateWithoutPatientInput, CasesUncheckedCreateWithoutPatientInput>
  }

  export type CasesCreateManyPatientInputEnvelope = {
    data: CasesCreateManyPatientInput | CasesCreateManyPatientInput[]
  }

  export type AccessLogsCreateWithoutPatientInput = {
    access_time?: Date | string
    action: string
    resource_type: string
    resource_id: number
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutAccessLogsInput
  }

  export type AccessLogsUncheckedCreateWithoutPatientInput = {
    log_id?: number
    user_id: number
    access_time?: Date | string
    action: string
    resource_type: string
    resource_id: number
    created_at?: Date | string
  }

  export type AccessLogsCreateOrConnectWithoutPatientInput = {
    where: AccessLogsWhereUniqueInput
    create: XOR<AccessLogsCreateWithoutPatientInput, AccessLogsUncheckedCreateWithoutPatientInput>
  }

  export type AccessLogsCreateManyPatientInputEnvelope = {
    data: AccessLogsCreateManyPatientInput | AccessLogsCreateManyPatientInput[]
  }

  export type MedicalHistoryUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicalHistoryWhereUniqueInput
    update: XOR<MedicalHistoryUpdateWithoutPatientInput, MedicalHistoryUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalHistoryCreateWithoutPatientInput, MedicalHistoryUncheckedCreateWithoutPatientInput>
  }

  export type MedicalHistoryUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicalHistoryWhereUniqueInput
    data: XOR<MedicalHistoryUpdateWithoutPatientInput, MedicalHistoryUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalHistoryUpdateManyWithWhereWithoutPatientInput = {
    where: MedicalHistoryScalarWhereInput
    data: XOR<MedicalHistoryUpdateManyMutationInput, MedicalHistoryUncheckedUpdateManyWithoutPatientInput>
  }

  export type LabOrdersUpsertWithWhereUniqueWithoutPatientInput = {
    where: LabOrdersWhereUniqueInput
    update: XOR<LabOrdersUpdateWithoutPatientInput, LabOrdersUncheckedUpdateWithoutPatientInput>
    create: XOR<LabOrdersCreateWithoutPatientInput, LabOrdersUncheckedCreateWithoutPatientInput>
  }

  export type LabOrdersUpdateWithWhereUniqueWithoutPatientInput = {
    where: LabOrdersWhereUniqueInput
    data: XOR<LabOrdersUpdateWithoutPatientInput, LabOrdersUncheckedUpdateWithoutPatientInput>
  }

  export type LabOrdersUpdateManyWithWhereWithoutPatientInput = {
    where: LabOrdersScalarWhereInput
    data: XOR<LabOrdersUpdateManyMutationInput, LabOrdersUncheckedUpdateManyWithoutPatientInput>
  }

  export type LabResultsUpsertWithWhereUniqueWithoutPatientInput = {
    where: LabResultsWhereUniqueInput
    update: XOR<LabResultsUpdateWithoutPatientInput, LabResultsUncheckedUpdateWithoutPatientInput>
    create: XOR<LabResultsCreateWithoutPatientInput, LabResultsUncheckedCreateWithoutPatientInput>
  }

  export type LabResultsUpdateWithWhereUniqueWithoutPatientInput = {
    where: LabResultsWhereUniqueInput
    data: XOR<LabResultsUpdateWithoutPatientInput, LabResultsUncheckedUpdateWithoutPatientInput>
  }

  export type LabResultsUpdateManyWithWhereWithoutPatientInput = {
    where: LabResultsScalarWhereInput
    data: XOR<LabResultsUpdateManyMutationInput, LabResultsUncheckedUpdateManyWithoutPatientInput>
  }

  export type DiagnosesUpsertWithWhereUniqueWithoutPatientInput = {
    where: DiagnosesWhereUniqueInput
    update: XOR<DiagnosesUpdateWithoutPatientInput, DiagnosesUncheckedUpdateWithoutPatientInput>
    create: XOR<DiagnosesCreateWithoutPatientInput, DiagnosesUncheckedCreateWithoutPatientInput>
  }

  export type DiagnosesUpdateWithWhereUniqueWithoutPatientInput = {
    where: DiagnosesWhereUniqueInput
    data: XOR<DiagnosesUpdateWithoutPatientInput, DiagnosesUncheckedUpdateWithoutPatientInput>
  }

  export type DiagnosesUpdateManyWithWhereWithoutPatientInput = {
    where: DiagnosesScalarWhereInput
    data: XOR<DiagnosesUpdateManyMutationInput, DiagnosesUncheckedUpdateManyWithoutPatientInput>
  }

  export type DiagnosesScalarWhereInput = {
    AND?: DiagnosesScalarWhereInput | DiagnosesScalarWhereInput[]
    OR?: DiagnosesScalarWhereInput[]
    NOT?: DiagnosesScalarWhereInput | DiagnosesScalarWhereInput[]
    diagnosis_id?: IntFilter<"Diagnoses"> | number
    patient_id?: IntFilter<"Diagnoses"> | number
    disease_id?: IntFilter<"Diagnoses"> | number
    diagnosis_date?: DateTimeFilter<"Diagnoses"> | Date | string
    status?: StringFilter<"Diagnoses"> | string
    recovery_date?: DateTimeNullableFilter<"Diagnoses"> | Date | string | null
    created_at?: DateTimeFilter<"Diagnoses"> | Date | string
    updated_at?: DateTimeFilter<"Diagnoses"> | Date | string
  }

  export type CasesUpsertWithWhereUniqueWithoutPatientInput = {
    where: CasesWhereUniqueInput
    update: XOR<CasesUpdateWithoutPatientInput, CasesUncheckedUpdateWithoutPatientInput>
    create: XOR<CasesCreateWithoutPatientInput, CasesUncheckedCreateWithoutPatientInput>
  }

  export type CasesUpdateWithWhereUniqueWithoutPatientInput = {
    where: CasesWhereUniqueInput
    data: XOR<CasesUpdateWithoutPatientInput, CasesUncheckedUpdateWithoutPatientInput>
  }

  export type CasesUpdateManyWithWhereWithoutPatientInput = {
    where: CasesScalarWhereInput
    data: XOR<CasesUpdateManyMutationInput, CasesUncheckedUpdateManyWithoutPatientInput>
  }

  export type CasesScalarWhereInput = {
    AND?: CasesScalarWhereInput | CasesScalarWhereInput[]
    OR?: CasesScalarWhereInput[]
    NOT?: CasesScalarWhereInput | CasesScalarWhereInput[]
    case_id?: IntFilter<"Cases"> | number
    patient_id?: IntFilter<"Cases"> | number
    doctor_id?: IntFilter<"Cases"> | number
    diagnosis_id?: IntFilter<"Cases"> | number
    case_date?: DateTimeFilter<"Cases"> | Date | string
    status?: StringFilter<"Cases"> | string
    created_at?: DateTimeFilter<"Cases"> | Date | string
    updated_at?: DateTimeFilter<"Cases"> | Date | string
  }

  export type AccessLogsUpsertWithWhereUniqueWithoutPatientInput = {
    where: AccessLogsWhereUniqueInput
    update: XOR<AccessLogsUpdateWithoutPatientInput, AccessLogsUncheckedUpdateWithoutPatientInput>
    create: XOR<AccessLogsCreateWithoutPatientInput, AccessLogsUncheckedCreateWithoutPatientInput>
  }

  export type AccessLogsUpdateWithWhereUniqueWithoutPatientInput = {
    where: AccessLogsWhereUniqueInput
    data: XOR<AccessLogsUpdateWithoutPatientInput, AccessLogsUncheckedUpdateWithoutPatientInput>
  }

  export type AccessLogsUpdateManyWithWhereWithoutPatientInput = {
    where: AccessLogsScalarWhereInput
    data: XOR<AccessLogsUpdateManyMutationInput, AccessLogsUncheckedUpdateManyWithoutPatientInput>
  }

  export type UsersCreateWithoutDoctorInput = {
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    LabOrders?: LabOrdersCreateNestedManyWithoutOrderedByInput
    MedicalHistory?: MedicalHistoryCreateNestedManyWithoutTechnicianInput
    LabResults?: LabResultsCreateNestedManyWithoutTechnicianInput
    AccessLogs?: AccessLogsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutDoctorInput = {
    user_id?: number
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    LabOrders?: LabOrdersUncheckedCreateNestedManyWithoutOrderedByInput
    MedicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutTechnicianInput
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutTechnicianInput
    AccessLogs?: AccessLogsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutDoctorInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDoctorInput, UsersUncheckedCreateWithoutDoctorInput>
  }

  export type CasesCreateWithoutDoctorInput = {
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutCasesInput
    diagnosis: DiagnosesCreateNestedOneWithoutCasesInput
  }

  export type CasesUncheckedCreateWithoutDoctorInput = {
    case_id?: number
    patient_id: number
    diagnosis_id: number
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CasesCreateOrConnectWithoutDoctorInput = {
    where: CasesWhereUniqueInput
    create: XOR<CasesCreateWithoutDoctorInput, CasesUncheckedCreateWithoutDoctorInput>
  }

  export type CasesCreateManyDoctorInputEnvelope = {
    data: CasesCreateManyDoctorInput | CasesCreateManyDoctorInput[]
  }

  export type UsersUpsertWithoutDoctorInput = {
    update: XOR<UsersUpdateWithoutDoctorInput, UsersUncheckedUpdateWithoutDoctorInput>
    create: XOR<UsersCreateWithoutDoctorInput, UsersUncheckedCreateWithoutDoctorInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutDoctorInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutDoctorInput, UsersUncheckedUpdateWithoutDoctorInput>
  }

  export type UsersUpdateWithoutDoctorInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    LabOrders?: LabOrdersUpdateManyWithoutOrderedByNestedInput
    MedicalHistory?: MedicalHistoryUpdateManyWithoutTechnicianNestedInput
    LabResults?: LabResultsUpdateManyWithoutTechnicianNestedInput
    AccessLogs?: AccessLogsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutDoctorInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    LabOrders?: LabOrdersUncheckedUpdateManyWithoutOrderedByNestedInput
    MedicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutTechnicianNestedInput
    LabResults?: LabResultsUncheckedUpdateManyWithoutTechnicianNestedInput
    AccessLogs?: AccessLogsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CasesUpsertWithWhereUniqueWithoutDoctorInput = {
    where: CasesWhereUniqueInput
    update: XOR<CasesUpdateWithoutDoctorInput, CasesUncheckedUpdateWithoutDoctorInput>
    create: XOR<CasesCreateWithoutDoctorInput, CasesUncheckedCreateWithoutDoctorInput>
  }

  export type CasesUpdateWithWhereUniqueWithoutDoctorInput = {
    where: CasesWhereUniqueInput
    data: XOR<CasesUpdateWithoutDoctorInput, CasesUncheckedUpdateWithoutDoctorInput>
  }

  export type CasesUpdateManyWithWhereWithoutDoctorInput = {
    where: CasesScalarWhereInput
    data: XOR<CasesUpdateManyMutationInput, CasesUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PatientsCreateWithoutMedicalHistoryInput = {
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    LabOrders?: LabOrdersCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesCreateNestedManyWithoutPatientInput
    Cases?: CasesCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutMedicalHistoryInput = {
    patient_id?: number
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    LabOrders?: LabOrdersUncheckedCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesUncheckedCreateNestedManyWithoutPatientInput
    Cases?: CasesUncheckedCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutMedicalHistoryInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutMedicalHistoryInput, PatientsUncheckedCreateWithoutMedicalHistoryInput>
  }

  export type UsersCreateWithoutMedicalHistoryInput = {
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    doctor?: DoctorsCreateNestedOneWithoutUserInput
    LabOrders?: LabOrdersCreateNestedManyWithoutOrderedByInput
    LabResults?: LabResultsCreateNestedManyWithoutTechnicianInput
    AccessLogs?: AccessLogsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMedicalHistoryInput = {
    user_id?: number
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    doctor?: DoctorsUncheckedCreateNestedOneWithoutUserInput
    LabOrders?: LabOrdersUncheckedCreateNestedManyWithoutOrderedByInput
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutTechnicianInput
    AccessLogs?: AccessLogsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMedicalHistoryInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMedicalHistoryInput, UsersUncheckedCreateWithoutMedicalHistoryInput>
  }

  export type PatientsUpsertWithoutMedicalHistoryInput = {
    update: XOR<PatientsUpdateWithoutMedicalHistoryInput, PatientsUncheckedUpdateWithoutMedicalHistoryInput>
    create: XOR<PatientsCreateWithoutMedicalHistoryInput, PatientsUncheckedCreateWithoutMedicalHistoryInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutMedicalHistoryInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutMedicalHistoryInput, PatientsUncheckedUpdateWithoutMedicalHistoryInput>
  }

  export type PatientsUpdateWithoutMedicalHistoryInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    LabOrders?: LabOrdersUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUpdateManyWithoutPatientNestedInput
    Cases?: CasesUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutMedicalHistoryInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    LabOrders?: LabOrdersUncheckedUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUncheckedUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUncheckedUpdateManyWithoutPatientNestedInput
    Cases?: CasesUncheckedUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UsersUpsertWithoutMedicalHistoryInput = {
    update: XOR<UsersUpdateWithoutMedicalHistoryInput, UsersUncheckedUpdateWithoutMedicalHistoryInput>
    create: XOR<UsersCreateWithoutMedicalHistoryInput, UsersUncheckedCreateWithoutMedicalHistoryInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMedicalHistoryInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMedicalHistoryInput, UsersUncheckedUpdateWithoutMedicalHistoryInput>
  }

  export type UsersUpdateWithoutMedicalHistoryInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorsUpdateOneWithoutUserNestedInput
    LabOrders?: LabOrdersUpdateManyWithoutOrderedByNestedInput
    LabResults?: LabResultsUpdateManyWithoutTechnicianNestedInput
    AccessLogs?: AccessLogsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMedicalHistoryInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorsUncheckedUpdateOneWithoutUserNestedInput
    LabOrders?: LabOrdersUncheckedUpdateManyWithoutOrderedByNestedInput
    LabResults?: LabResultsUncheckedUpdateManyWithoutTechnicianNestedInput
    AccessLogs?: AccessLogsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PatientsCreateWithoutLabOrdersInput = {
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesCreateNestedManyWithoutPatientInput
    Cases?: CasesCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutLabOrdersInput = {
    patient_id?: number
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesUncheckedCreateNestedManyWithoutPatientInput
    Cases?: CasesUncheckedCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutLabOrdersInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutLabOrdersInput, PatientsUncheckedCreateWithoutLabOrdersInput>
  }

  export type UsersCreateWithoutLabOrdersInput = {
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    doctor?: DoctorsCreateNestedOneWithoutUserInput
    MedicalHistory?: MedicalHistoryCreateNestedManyWithoutTechnicianInput
    LabResults?: LabResultsCreateNestedManyWithoutTechnicianInput
    AccessLogs?: AccessLogsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLabOrdersInput = {
    user_id?: number
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    doctor?: DoctorsUncheckedCreateNestedOneWithoutUserInput
    MedicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutTechnicianInput
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutTechnicianInput
    AccessLogs?: AccessLogsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutLabOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLabOrdersInput, UsersUncheckedCreateWithoutLabOrdersInput>
  }

  export type LabResultsCreateWithoutOrderInput = {
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutLabResultsInput
    technician: UsersCreateNestedOneWithoutLabResultsInput
  }

  export type LabResultsUncheckedCreateWithoutOrderInput = {
    result_id?: number
    patient_id: number
    technician_id: number
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LabResultsCreateOrConnectWithoutOrderInput = {
    where: LabResultsWhereUniqueInput
    create: XOR<LabResultsCreateWithoutOrderInput, LabResultsUncheckedCreateWithoutOrderInput>
  }

  export type LabResultsCreateManyOrderInputEnvelope = {
    data: LabResultsCreateManyOrderInput | LabResultsCreateManyOrderInput[]
  }

  export type PatientsUpsertWithoutLabOrdersInput = {
    update: XOR<PatientsUpdateWithoutLabOrdersInput, PatientsUncheckedUpdateWithoutLabOrdersInput>
    create: XOR<PatientsCreateWithoutLabOrdersInput, PatientsUncheckedCreateWithoutLabOrdersInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutLabOrdersInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutLabOrdersInput, PatientsUncheckedUpdateWithoutLabOrdersInput>
  }

  export type PatientsUpdateWithoutLabOrdersInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUpdateManyWithoutPatientNestedInput
    Cases?: CasesUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutLabOrdersInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUncheckedUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUncheckedUpdateManyWithoutPatientNestedInput
    Cases?: CasesUncheckedUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UsersUpsertWithoutLabOrdersInput = {
    update: XOR<UsersUpdateWithoutLabOrdersInput, UsersUncheckedUpdateWithoutLabOrdersInput>
    create: XOR<UsersCreateWithoutLabOrdersInput, UsersUncheckedCreateWithoutLabOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLabOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLabOrdersInput, UsersUncheckedUpdateWithoutLabOrdersInput>
  }

  export type UsersUpdateWithoutLabOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorsUpdateOneWithoutUserNestedInput
    MedicalHistory?: MedicalHistoryUpdateManyWithoutTechnicianNestedInput
    LabResults?: LabResultsUpdateManyWithoutTechnicianNestedInput
    AccessLogs?: AccessLogsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLabOrdersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorsUncheckedUpdateOneWithoutUserNestedInput
    MedicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutTechnicianNestedInput
    LabResults?: LabResultsUncheckedUpdateManyWithoutTechnicianNestedInput
    AccessLogs?: AccessLogsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LabResultsUpsertWithWhereUniqueWithoutOrderInput = {
    where: LabResultsWhereUniqueInput
    update: XOR<LabResultsUpdateWithoutOrderInput, LabResultsUncheckedUpdateWithoutOrderInput>
    create: XOR<LabResultsCreateWithoutOrderInput, LabResultsUncheckedCreateWithoutOrderInput>
  }

  export type LabResultsUpdateWithWhereUniqueWithoutOrderInput = {
    where: LabResultsWhereUniqueInput
    data: XOR<LabResultsUpdateWithoutOrderInput, LabResultsUncheckedUpdateWithoutOrderInput>
  }

  export type LabResultsUpdateManyWithWhereWithoutOrderInput = {
    where: LabResultsScalarWhereInput
    data: XOR<LabResultsUpdateManyMutationInput, LabResultsUncheckedUpdateManyWithoutOrderInput>
  }

  export type PatientsCreateWithoutLabResultsInput = {
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryCreateNestedManyWithoutPatientInput
    LabOrders?: LabOrdersCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesCreateNestedManyWithoutPatientInput
    Cases?: CasesCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutLabResultsInput = {
    patient_id?: number
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutPatientInput
    LabOrders?: LabOrdersUncheckedCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesUncheckedCreateNestedManyWithoutPatientInput
    Cases?: CasesUncheckedCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutLabResultsInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutLabResultsInput, PatientsUncheckedCreateWithoutLabResultsInput>
  }

  export type UsersCreateWithoutLabResultsInput = {
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    doctor?: DoctorsCreateNestedOneWithoutUserInput
    LabOrders?: LabOrdersCreateNestedManyWithoutOrderedByInput
    MedicalHistory?: MedicalHistoryCreateNestedManyWithoutTechnicianInput
    AccessLogs?: AccessLogsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLabResultsInput = {
    user_id?: number
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    doctor?: DoctorsUncheckedCreateNestedOneWithoutUserInput
    LabOrders?: LabOrdersUncheckedCreateNestedManyWithoutOrderedByInput
    MedicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutTechnicianInput
    AccessLogs?: AccessLogsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutLabResultsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLabResultsInput, UsersUncheckedCreateWithoutLabResultsInput>
  }

  export type LabOrdersCreateWithoutLabResultsInput = {
    test_type: string
    order_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutLabOrdersInput
    orderedBy: UsersCreateNestedOneWithoutLabOrdersInput
  }

  export type LabOrdersUncheckedCreateWithoutLabResultsInput = {
    order_id?: number
    patient_id: number
    ordered_by: number
    test_type: string
    order_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LabOrdersCreateOrConnectWithoutLabResultsInput = {
    where: LabOrdersWhereUniqueInput
    create: XOR<LabOrdersCreateWithoutLabResultsInput, LabOrdersUncheckedCreateWithoutLabResultsInput>
  }

  export type PatientsUpsertWithoutLabResultsInput = {
    update: XOR<PatientsUpdateWithoutLabResultsInput, PatientsUncheckedUpdateWithoutLabResultsInput>
    create: XOR<PatientsCreateWithoutLabResultsInput, PatientsUncheckedCreateWithoutLabResultsInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutLabResultsInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutLabResultsInput, PatientsUncheckedUpdateWithoutLabResultsInput>
  }

  export type PatientsUpdateWithoutLabResultsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUpdateManyWithoutPatientNestedInput
    LabOrders?: LabOrdersUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUpdateManyWithoutPatientNestedInput
    Cases?: CasesUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutLabResultsInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutPatientNestedInput
    LabOrders?: LabOrdersUncheckedUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUncheckedUpdateManyWithoutPatientNestedInput
    Cases?: CasesUncheckedUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UsersUpsertWithoutLabResultsInput = {
    update: XOR<UsersUpdateWithoutLabResultsInput, UsersUncheckedUpdateWithoutLabResultsInput>
    create: XOR<UsersCreateWithoutLabResultsInput, UsersUncheckedCreateWithoutLabResultsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLabResultsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLabResultsInput, UsersUncheckedUpdateWithoutLabResultsInput>
  }

  export type UsersUpdateWithoutLabResultsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorsUpdateOneWithoutUserNestedInput
    LabOrders?: LabOrdersUpdateManyWithoutOrderedByNestedInput
    MedicalHistory?: MedicalHistoryUpdateManyWithoutTechnicianNestedInput
    AccessLogs?: AccessLogsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLabResultsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorsUncheckedUpdateOneWithoutUserNestedInput
    LabOrders?: LabOrdersUncheckedUpdateManyWithoutOrderedByNestedInput
    MedicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutTechnicianNestedInput
    AccessLogs?: AccessLogsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LabOrdersUpsertWithoutLabResultsInput = {
    update: XOR<LabOrdersUpdateWithoutLabResultsInput, LabOrdersUncheckedUpdateWithoutLabResultsInput>
    create: XOR<LabOrdersCreateWithoutLabResultsInput, LabOrdersUncheckedCreateWithoutLabResultsInput>
    where?: LabOrdersWhereInput
  }

  export type LabOrdersUpdateToOneWithWhereWithoutLabResultsInput = {
    where?: LabOrdersWhereInput
    data: XOR<LabOrdersUpdateWithoutLabResultsInput, LabOrdersUncheckedUpdateWithoutLabResultsInput>
  }

  export type LabOrdersUpdateWithoutLabResultsInput = {
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutLabOrdersNestedInput
    orderedBy?: UsersUpdateOneRequiredWithoutLabOrdersNestedInput
  }

  export type LabOrdersUncheckedUpdateWithoutLabResultsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    ordered_by?: IntFieldUpdateOperationsInput | number
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosesCreateWithoutDiseaseInput = {
    diagnosis_date: Date | string
    status: string
    recovery_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutDiagnosesInput
    Cases?: CasesCreateNestedManyWithoutDiagnosisInput
  }

  export type DiagnosesUncheckedCreateWithoutDiseaseInput = {
    diagnosis_id?: number
    patient_id: number
    diagnosis_date: Date | string
    status: string
    recovery_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    Cases?: CasesUncheckedCreateNestedManyWithoutDiagnosisInput
  }

  export type DiagnosesCreateOrConnectWithoutDiseaseInput = {
    where: DiagnosesWhereUniqueInput
    create: XOR<DiagnosesCreateWithoutDiseaseInput, DiagnosesUncheckedCreateWithoutDiseaseInput>
  }

  export type DiagnosesCreateManyDiseaseInputEnvelope = {
    data: DiagnosesCreateManyDiseaseInput | DiagnosesCreateManyDiseaseInput[]
  }

  export type DiagnosesUpsertWithWhereUniqueWithoutDiseaseInput = {
    where: DiagnosesWhereUniqueInput
    update: XOR<DiagnosesUpdateWithoutDiseaseInput, DiagnosesUncheckedUpdateWithoutDiseaseInput>
    create: XOR<DiagnosesCreateWithoutDiseaseInput, DiagnosesUncheckedCreateWithoutDiseaseInput>
  }

  export type DiagnosesUpdateWithWhereUniqueWithoutDiseaseInput = {
    where: DiagnosesWhereUniqueInput
    data: XOR<DiagnosesUpdateWithoutDiseaseInput, DiagnosesUncheckedUpdateWithoutDiseaseInput>
  }

  export type DiagnosesUpdateManyWithWhereWithoutDiseaseInput = {
    where: DiagnosesScalarWhereInput
    data: XOR<DiagnosesUpdateManyMutationInput, DiagnosesUncheckedUpdateManyWithoutDiseaseInput>
  }

  export type PatientsCreateWithoutDiagnosesInput = {
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryCreateNestedManyWithoutPatientInput
    LabOrders?: LabOrdersCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsCreateNestedManyWithoutPatientInput
    Cases?: CasesCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutDiagnosesInput = {
    patient_id?: number
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutPatientInput
    LabOrders?: LabOrdersUncheckedCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutPatientInput
    Cases?: CasesUncheckedCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutDiagnosesInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutDiagnosesInput, PatientsUncheckedCreateWithoutDiagnosesInput>
  }

  export type DiseasesCreateWithoutDiagnosesInput = {
    disease_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DiseasesUncheckedCreateWithoutDiagnosesInput = {
    disease_id?: number
    disease_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DiseasesCreateOrConnectWithoutDiagnosesInput = {
    where: DiseasesWhereUniqueInput
    create: XOR<DiseasesCreateWithoutDiagnosesInput, DiseasesUncheckedCreateWithoutDiagnosesInput>
  }

  export type CasesCreateWithoutDiagnosisInput = {
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutCasesInput
    doctor: DoctorsCreateNestedOneWithoutCasesInput
  }

  export type CasesUncheckedCreateWithoutDiagnosisInput = {
    case_id?: number
    patient_id: number
    doctor_id: number
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CasesCreateOrConnectWithoutDiagnosisInput = {
    where: CasesWhereUniqueInput
    create: XOR<CasesCreateWithoutDiagnosisInput, CasesUncheckedCreateWithoutDiagnosisInput>
  }

  export type CasesCreateManyDiagnosisInputEnvelope = {
    data: CasesCreateManyDiagnosisInput | CasesCreateManyDiagnosisInput[]
  }

  export type PatientsUpsertWithoutDiagnosesInput = {
    update: XOR<PatientsUpdateWithoutDiagnosesInput, PatientsUncheckedUpdateWithoutDiagnosesInput>
    create: XOR<PatientsCreateWithoutDiagnosesInput, PatientsUncheckedCreateWithoutDiagnosesInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutDiagnosesInput, PatientsUncheckedUpdateWithoutDiagnosesInput>
  }

  export type PatientsUpdateWithoutDiagnosesInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUpdateManyWithoutPatientNestedInput
    LabOrders?: LabOrdersUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUpdateManyWithoutPatientNestedInput
    Cases?: CasesUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutDiagnosesInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutPatientNestedInput
    LabOrders?: LabOrdersUncheckedUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUncheckedUpdateManyWithoutPatientNestedInput
    Cases?: CasesUncheckedUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DiseasesUpsertWithoutDiagnosesInput = {
    update: XOR<DiseasesUpdateWithoutDiagnosesInput, DiseasesUncheckedUpdateWithoutDiagnosesInput>
    create: XOR<DiseasesCreateWithoutDiagnosesInput, DiseasesUncheckedCreateWithoutDiagnosesInput>
    where?: DiseasesWhereInput
  }

  export type DiseasesUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: DiseasesWhereInput
    data: XOR<DiseasesUpdateWithoutDiagnosesInput, DiseasesUncheckedUpdateWithoutDiagnosesInput>
  }

  export type DiseasesUpdateWithoutDiagnosesInput = {
    disease_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseasesUncheckedUpdateWithoutDiagnosesInput = {
    disease_id?: IntFieldUpdateOperationsInput | number
    disease_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesUpsertWithWhereUniqueWithoutDiagnosisInput = {
    where: CasesWhereUniqueInput
    update: XOR<CasesUpdateWithoutDiagnosisInput, CasesUncheckedUpdateWithoutDiagnosisInput>
    create: XOR<CasesCreateWithoutDiagnosisInput, CasesUncheckedCreateWithoutDiagnosisInput>
  }

  export type CasesUpdateWithWhereUniqueWithoutDiagnosisInput = {
    where: CasesWhereUniqueInput
    data: XOR<CasesUpdateWithoutDiagnosisInput, CasesUncheckedUpdateWithoutDiagnosisInput>
  }

  export type CasesUpdateManyWithWhereWithoutDiagnosisInput = {
    where: CasesScalarWhereInput
    data: XOR<CasesUpdateManyMutationInput, CasesUncheckedUpdateManyWithoutDiagnosisInput>
  }

  export type PatientsCreateWithoutCasesInput = {
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryCreateNestedManyWithoutPatientInput
    LabOrders?: LabOrdersCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutCasesInput = {
    patient_id?: number
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutPatientInput
    LabOrders?: LabOrdersUncheckedCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesUncheckedCreateNestedManyWithoutPatientInput
    AccessLogs?: AccessLogsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutCasesInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutCasesInput, PatientsUncheckedCreateWithoutCasesInput>
  }

  export type DoctorsCreateWithoutCasesInput = {
    specialty: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutDoctorInput
  }

  export type DoctorsUncheckedCreateWithoutCasesInput = {
    doctor_id?: number
    user_id: number
    specialty: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DoctorsCreateOrConnectWithoutCasesInput = {
    where: DoctorsWhereUniqueInput
    create: XOR<DoctorsCreateWithoutCasesInput, DoctorsUncheckedCreateWithoutCasesInput>
  }

  export type DiagnosesCreateWithoutCasesInput = {
    diagnosis_date: Date | string
    status: string
    recovery_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    patient: PatientsCreateNestedOneWithoutDiagnosesInput
    disease: DiseasesCreateNestedOneWithoutDiagnosesInput
  }

  export type DiagnosesUncheckedCreateWithoutCasesInput = {
    diagnosis_id?: number
    patient_id: number
    disease_id: number
    diagnosis_date: Date | string
    status: string
    recovery_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DiagnosesCreateOrConnectWithoutCasesInput = {
    where: DiagnosesWhereUniqueInput
    create: XOR<DiagnosesCreateWithoutCasesInput, DiagnosesUncheckedCreateWithoutCasesInput>
  }

  export type PatientsUpsertWithoutCasesInput = {
    update: XOR<PatientsUpdateWithoutCasesInput, PatientsUncheckedUpdateWithoutCasesInput>
    create: XOR<PatientsCreateWithoutCasesInput, PatientsUncheckedCreateWithoutCasesInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutCasesInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutCasesInput, PatientsUncheckedUpdateWithoutCasesInput>
  }

  export type PatientsUpdateWithoutCasesInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUpdateManyWithoutPatientNestedInput
    LabOrders?: LabOrdersUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutCasesInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutPatientNestedInput
    LabOrders?: LabOrdersUncheckedUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUncheckedUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUncheckedUpdateManyWithoutPatientNestedInput
    AccessLogs?: AccessLogsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorsUpsertWithoutCasesInput = {
    update: XOR<DoctorsUpdateWithoutCasesInput, DoctorsUncheckedUpdateWithoutCasesInput>
    create: XOR<DoctorsCreateWithoutCasesInput, DoctorsUncheckedCreateWithoutCasesInput>
    where?: DoctorsWhereInput
  }

  export type DoctorsUpdateToOneWithWhereWithoutCasesInput = {
    where?: DoctorsWhereInput
    data: XOR<DoctorsUpdateWithoutCasesInput, DoctorsUncheckedUpdateWithoutCasesInput>
  }

  export type DoctorsUpdateWithoutCasesInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutDoctorNestedInput
  }

  export type DoctorsUncheckedUpdateWithoutCasesInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    specialty?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosesUpsertWithoutCasesInput = {
    update: XOR<DiagnosesUpdateWithoutCasesInput, DiagnosesUncheckedUpdateWithoutCasesInput>
    create: XOR<DiagnosesCreateWithoutCasesInput, DiagnosesUncheckedCreateWithoutCasesInput>
    where?: DiagnosesWhereInput
  }

  export type DiagnosesUpdateToOneWithWhereWithoutCasesInput = {
    where?: DiagnosesWhereInput
    data: XOR<DiagnosesUpdateWithoutCasesInput, DiagnosesUncheckedUpdateWithoutCasesInput>
  }

  export type DiagnosesUpdateWithoutCasesInput = {
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutDiagnosesNestedInput
    disease?: DiseasesUpdateOneRequiredWithoutDiagnosesNestedInput
  }

  export type DiagnosesUncheckedUpdateWithoutCasesInput = {
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    disease_id?: IntFieldUpdateOperationsInput | number
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateWithoutAccessLogsInput = {
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    doctor?: DoctorsCreateNestedOneWithoutUserInput
    LabOrders?: LabOrdersCreateNestedManyWithoutOrderedByInput
    MedicalHistory?: MedicalHistoryCreateNestedManyWithoutTechnicianInput
    LabResults?: LabResultsCreateNestedManyWithoutTechnicianInput
  }

  export type UsersUncheckedCreateWithoutAccessLogsInput = {
    user_id?: number
    username: string
    password_hash: string
    full_name: string
    role: string
    created_at?: Date | string
    updated_at?: Date | string
    doctor?: DoctorsUncheckedCreateNestedOneWithoutUserInput
    LabOrders?: LabOrdersUncheckedCreateNestedManyWithoutOrderedByInput
    MedicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutTechnicianInput
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type UsersCreateOrConnectWithoutAccessLogsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAccessLogsInput, UsersUncheckedCreateWithoutAccessLogsInput>
  }

  export type PatientsCreateWithoutAccessLogsInput = {
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryCreateNestedManyWithoutPatientInput
    LabOrders?: LabOrdersCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesCreateNestedManyWithoutPatientInput
    Cases?: CasesCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutAccessLogsInput = {
    patient_id?: number
    full_name: string
    date_of_birth: Date | string
    gender: string
    phone_number: string
    address: string
    allergies?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    MedicalHistory?: MedicalHistoryUncheckedCreateNestedManyWithoutPatientInput
    LabOrders?: LabOrdersUncheckedCreateNestedManyWithoutPatientInput
    LabResults?: LabResultsUncheckedCreateNestedManyWithoutPatientInput
    Diagnoses?: DiagnosesUncheckedCreateNestedManyWithoutPatientInput
    Cases?: CasesUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutAccessLogsInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutAccessLogsInput, PatientsUncheckedCreateWithoutAccessLogsInput>
  }

  export type UsersUpsertWithoutAccessLogsInput = {
    update: XOR<UsersUpdateWithoutAccessLogsInput, UsersUncheckedUpdateWithoutAccessLogsInput>
    create: XOR<UsersCreateWithoutAccessLogsInput, UsersUncheckedCreateWithoutAccessLogsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAccessLogsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAccessLogsInput, UsersUncheckedUpdateWithoutAccessLogsInput>
  }

  export type UsersUpdateWithoutAccessLogsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorsUpdateOneWithoutUserNestedInput
    LabOrders?: LabOrdersUpdateManyWithoutOrderedByNestedInput
    MedicalHistory?: MedicalHistoryUpdateManyWithoutTechnicianNestedInput
    LabResults?: LabResultsUpdateManyWithoutTechnicianNestedInput
  }

  export type UsersUncheckedUpdateWithoutAccessLogsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorsUncheckedUpdateOneWithoutUserNestedInput
    LabOrders?: LabOrdersUncheckedUpdateManyWithoutOrderedByNestedInput
    MedicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutTechnicianNestedInput
    LabResults?: LabResultsUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type PatientsUpsertWithoutAccessLogsInput = {
    update: XOR<PatientsUpdateWithoutAccessLogsInput, PatientsUncheckedUpdateWithoutAccessLogsInput>
    create: XOR<PatientsCreateWithoutAccessLogsInput, PatientsUncheckedCreateWithoutAccessLogsInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutAccessLogsInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutAccessLogsInput, PatientsUncheckedUpdateWithoutAccessLogsInput>
  }

  export type PatientsUpdateWithoutAccessLogsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUpdateManyWithoutPatientNestedInput
    LabOrders?: LabOrdersUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUpdateManyWithoutPatientNestedInput
    Cases?: CasesUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutAccessLogsInput = {
    patient_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    MedicalHistory?: MedicalHistoryUncheckedUpdateManyWithoutPatientNestedInput
    LabOrders?: LabOrdersUncheckedUpdateManyWithoutPatientNestedInput
    LabResults?: LabResultsUncheckedUpdateManyWithoutPatientNestedInput
    Diagnoses?: DiagnosesUncheckedUpdateManyWithoutPatientNestedInput
    Cases?: CasesUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type LabOrdersCreateManyOrderedByInput = {
    order_id?: number
    patient_id: number
    test_type: string
    order_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MedicalHistoryCreateManyTechnicianInput = {
    history_id?: number
    patient_id: number
    record_date: Date | string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LabResultsCreateManyTechnicianInput = {
    result_id?: number
    patient_id: number
    order_id: number
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AccessLogsCreateManyUserInput = {
    log_id?: number
    patient_id: number
    access_time?: Date | string
    action: string
    resource_type: string
    resource_id: number
    created_at?: Date | string
  }

  export type LabOrdersUpdateWithoutOrderedByInput = {
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutLabOrdersNestedInput
    LabResults?: LabResultsUpdateManyWithoutOrderNestedInput
  }

  export type LabOrdersUncheckedUpdateWithoutOrderedByInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    LabResults?: LabResultsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type LabOrdersUncheckedUpdateManyWithoutOrderedByInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUpdateWithoutTechnicianInput = {
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutMedicalHistoryNestedInput
  }

  export type MedicalHistoryUncheckedUpdateWithoutTechnicianInput = {
    history_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUncheckedUpdateManyWithoutTechnicianInput = {
    history_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultsUpdateWithoutTechnicianInput = {
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutLabResultsNestedInput
    order?: LabOrdersUpdateOneRequiredWithoutLabResultsNestedInput
  }

  export type LabResultsUncheckedUpdateWithoutTechnicianInput = {
    result_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultsUncheckedUpdateManyWithoutTechnicianInput = {
    result_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessLogsUpdateWithoutUserInput = {
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutAccessLogsNestedInput
  }

  export type AccessLogsUncheckedUpdateWithoutUserInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessLogsUncheckedUpdateManyWithoutUserInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryCreateManyPatientInput = {
    history_id?: number
    technician_id: number
    record_date: Date | string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LabOrdersCreateManyPatientInput = {
    order_id?: number
    ordered_by: number
    test_type: string
    order_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LabResultsCreateManyPatientInput = {
    result_id?: number
    technician_id: number
    order_id: number
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DiagnosesCreateManyPatientInput = {
    diagnosis_id?: number
    disease_id: number
    diagnosis_date: Date | string
    status: string
    recovery_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CasesCreateManyPatientInput = {
    case_id?: number
    doctor_id: number
    diagnosis_id: number
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AccessLogsCreateManyPatientInput = {
    log_id?: number
    user_id: number
    access_time?: Date | string
    action: string
    resource_type: string
    resource_id: number
    created_at?: Date | string
  }

  export type MedicalHistoryUpdateWithoutPatientInput = {
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UsersUpdateOneRequiredWithoutMedicalHistoryNestedInput
  }

  export type MedicalHistoryUncheckedUpdateWithoutPatientInput = {
    history_id?: IntFieldUpdateOperationsInput | number
    technician_id?: IntFieldUpdateOperationsInput | number
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalHistoryUncheckedUpdateManyWithoutPatientInput = {
    history_id?: IntFieldUpdateOperationsInput | number
    technician_id?: IntFieldUpdateOperationsInput | number
    record_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabOrdersUpdateWithoutPatientInput = {
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orderedBy?: UsersUpdateOneRequiredWithoutLabOrdersNestedInput
    LabResults?: LabResultsUpdateManyWithoutOrderNestedInput
  }

  export type LabOrdersUncheckedUpdateWithoutPatientInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    ordered_by?: IntFieldUpdateOperationsInput | number
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    LabResults?: LabResultsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type LabOrdersUncheckedUpdateManyWithoutPatientInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    ordered_by?: IntFieldUpdateOperationsInput | number
    test_type?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultsUpdateWithoutPatientInput = {
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UsersUpdateOneRequiredWithoutLabResultsNestedInput
    order?: LabOrdersUpdateOneRequiredWithoutLabResultsNestedInput
  }

  export type LabResultsUncheckedUpdateWithoutPatientInput = {
    result_id?: IntFieldUpdateOperationsInput | number
    technician_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultsUncheckedUpdateManyWithoutPatientInput = {
    result_id?: IntFieldUpdateOperationsInput | number
    technician_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosesUpdateWithoutPatientInput = {
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    disease?: DiseasesUpdateOneRequiredWithoutDiagnosesNestedInput
    Cases?: CasesUpdateManyWithoutDiagnosisNestedInput
  }

  export type DiagnosesUncheckedUpdateWithoutPatientInput = {
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    disease_id?: IntFieldUpdateOperationsInput | number
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cases?: CasesUncheckedUpdateManyWithoutDiagnosisNestedInput
  }

  export type DiagnosesUncheckedUpdateManyWithoutPatientInput = {
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    disease_id?: IntFieldUpdateOperationsInput | number
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesUpdateWithoutPatientInput = {
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorsUpdateOneRequiredWithoutCasesNestedInput
    diagnosis?: DiagnosesUpdateOneRequiredWithoutCasesNestedInput
  }

  export type CasesUncheckedUpdateWithoutPatientInput = {
    case_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesUncheckedUpdateManyWithoutPatientInput = {
    case_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessLogsUpdateWithoutPatientInput = {
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutAccessLogsNestedInput
  }

  export type AccessLogsUncheckedUpdateWithoutPatientInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessLogsUncheckedUpdateManyWithoutPatientInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    resource_type?: StringFieldUpdateOperationsInput | string
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesCreateManyDoctorInput = {
    case_id?: number
    patient_id: number
    diagnosis_id: number
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CasesUpdateWithoutDoctorInput = {
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutCasesNestedInput
    diagnosis?: DiagnosesUpdateOneRequiredWithoutCasesNestedInput
  }

  export type CasesUncheckedUpdateWithoutDoctorInput = {
    case_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesUncheckedUpdateManyWithoutDoctorInput = {
    case_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultsCreateManyOrderInput = {
    result_id?: number
    patient_id: number
    technician_id: number
    test_date: Date | string
    test_type: string
    result_value: number
    unit: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LabResultsUpdateWithoutOrderInput = {
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutLabResultsNestedInput
    technician?: UsersUpdateOneRequiredWithoutLabResultsNestedInput
  }

  export type LabResultsUncheckedUpdateWithoutOrderInput = {
    result_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    technician_id?: IntFieldUpdateOperationsInput | number
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabResultsUncheckedUpdateManyWithoutOrderInput = {
    result_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    technician_id?: IntFieldUpdateOperationsInput | number
    test_date?: DateTimeFieldUpdateOperationsInput | Date | string
    test_type?: StringFieldUpdateOperationsInput | string
    result_value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosesCreateManyDiseaseInput = {
    diagnosis_id?: number
    patient_id: number
    diagnosis_date: Date | string
    status: string
    recovery_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DiagnosesUpdateWithoutDiseaseInput = {
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutDiagnosesNestedInput
    Cases?: CasesUpdateManyWithoutDiagnosisNestedInput
  }

  export type DiagnosesUncheckedUpdateWithoutDiseaseInput = {
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cases?: CasesUncheckedUpdateManyWithoutDiagnosisNestedInput
  }

  export type DiagnosesUncheckedUpdateManyWithoutDiseaseInput = {
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    diagnosis_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    recovery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesCreateManyDiagnosisInput = {
    case_id?: number
    patient_id: number
    doctor_id: number
    case_date: Date | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CasesUpdateWithoutDiagnosisInput = {
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientsUpdateOneRequiredWithoutCasesNestedInput
    doctor?: DoctorsUpdateOneRequiredWithoutCasesNestedInput
  }

  export type CasesUncheckedUpdateWithoutDiagnosisInput = {
    case_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: IntFieldUpdateOperationsInput | number
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasesUncheckedUpdateManyWithoutDiagnosisInput = {
    case_id?: IntFieldUpdateOperationsInput | number
    patient_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: IntFieldUpdateOperationsInput | number
    case_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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