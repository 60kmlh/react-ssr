export function getInitCount() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10)
    }, 3000)
  })
}