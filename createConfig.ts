import type { FlatESLintConfig } from 'eslint-define-config'

export type ESLintConfig = FlatESLintConfig;

export type Promisable<T> = T | Promise<T>

export type Arrayable<T> = T | T[]

export type CreateConfigFunction<
  O extends any = any,
  E extends ESLintConfig = ESLintConfig
> = (
  options?: O
) => Promisable<Arrayable<E>>;


export function createConfig<
  E extends ESLintConfig = ESLintConfig
>(config: Arrayable<E>): E[]

export function createConfig<
  O extends any = any,
  E extends ESLintConfig = ESLintConfig
>(config: CreateConfigFunction<O, ESLintConfig>): CreateConfigFunction<O, ESLintConfig>

export function createConfig<
  O extends any = any,
  E extends ESLintConfig = ESLintConfig,
  F extends CreateConfigFunction<O, E> = CreateConfigFunction<O, E>
>(
  config: Arrayable<E> | CreateConfigFunction<O, ESLintConfig> = []
): E[] | F {

  if (typeof config === 'function') config;

  return (Array.isArray(config) ? config : [config]) as E[]
}