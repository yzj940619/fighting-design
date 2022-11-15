export type { PaginationPropsType } from './pagination'

/**
 * 修改页码(current)回调事件
 */
export interface HandleCurrentChange {
  (current: number, pageSize): void
}

/**
 * 修改每页条数触发回调(pageSize)事件
 */
export interface HandlePageChange {
  (current: number, pageSize): void
}

/**
 * 点击上一页触发的回调事件
 */

export interface HandlePrevClick {
  (current: number, pageSize): void
}

/**
 * 点击下一页触发的回调事件
 */

export interface HandleNextClick {
  (current: number, pageSize): void
}