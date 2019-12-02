export const state = () => ({
  _promise: undefined
})

export const actions = {
  isSupported(context) {
    if (process.browser && !context.state._promise) {
      context.state._promise = new Promise((resolve, reject) => {
        /**
         * Асинхронно пытается загрузить два файла формата WebP: с потерей и без потери качества.
         * Возвращает Promise.all который гарантирует только полную поддержку обоих типов.
         */
        Promise.all([
          new Promise((resolve, reject) => {
            const img = new Image()
            img.addEventListener('load', () => {
              if (!!(img.height > 0 && img.width > 0)) {
                resolve()
              } else {
                reject()
              }
            })
            img.addEventListener('error', () => {
              reject()
            })
            img.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=='
          }),
          new Promise((resolve, reject) => {
            const img = new Image()
            img.addEventListener('load', () => {
              if (!!(img.height > 0 && img.width > 0)) {
                resolve()
              } else {
                reject()
              }
            })
            img.addEventListener('error', () => {
              reject()
            })
            img.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA='
          })
        ])
          .then(() => {
            resolve()
          })
          .catch(error => {
            reject()
          })
      })
    }
    return context.state._promise
  }
}
