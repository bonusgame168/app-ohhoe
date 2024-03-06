import dayjs from 'dayjs'

import { DEFAULT_DATE_FORMAT } from './constant.util'

export const dateFormat = (date?: string | Date, format = DEFAULT_DATE_FORMAT): string => {
  if (!date) return ''

  return dayjs(date).format(format)
}
