/**
 * 存储localStorage
 * @param {string} name key name
 * @param {string} content value
 */
export function setLocalStore(name, content) {
  if (!name) return
  if (content === undefined) {
    localStorage.removeItem(name)
    return
  }
  try {
    window.localStorage.setItem(name, JSON.stringify(content));
  } catch (e) {
    console.error(`set local Storage fail. ${e}`)
  }
}

/**
 * 获取localStorage
 * @param {string} name key name
 */
export function getLocalStore(name) {
  if (!name) return
  let value = localStorage.getItem(name)
  if (value !== undefined) {
    try {
      value = JSON.parse(value)
    } catch (e) {
      if (e.name === 'SyntaxError') {
        console.error(`can't parse [${name}]: ${value}`)
        localStorage.removeItem(name)
      } else {
        console.error(e)
      }
      value = undefined
    }
  }
  return value
}

/**
 * 删除localStorage
 */
export function removeLocalStore(name) {
  if (!name) return;
  try {
    window.localStorage.removeItem(name)
  } catch (e) {
    console.error(e)
  }
}

export function getType(data) {
  // t:Object Array Null Undefined Date RegExp Function Number Boolean String
  const t = Object.prototype.toString.call(data)
  return t.slice(8, -1)
}

export function getCookie(name) {
  let arr
  const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  if (arr = document.cookie.match(reg))
    return unescape(arr[2])
  else
    return null
}

// 删除cookie
export function delCookie(name) {
  const cVal = getCookie(name)
  if (cVal != null)
    document.cookie = name + "=" + cVal + ";expires=Thu, 01 Jan 1970 00:00:00 GMT"
}