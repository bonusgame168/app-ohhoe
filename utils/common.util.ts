export const deleteUndefinedFromObject = (obj: any) => {
  const newObj = JSON.parse(JSON.stringify(obj))
  Object.keys(newObj).forEach((key) => {
    if (newObj[key] === 'undefined' || newObj[key] === undefined) {
      delete newObj[key]
    }
  })

  return newObj
}

export const isEmptyObject = (obj: any) => {
  return Object.keys(obj).length === 0
}

export const strapiMediaURL = (url?: string): string => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
}

export const popupWindows = (url: string, title: string): Window | null => {
  const config = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${500} height=${320}`
  return window.open(url, title, config)
}
