const logindb = {
  nick: 'zhiyual',
  pwd: '123456'
}

export const Verify = function (db) {
  return new Promise((resolve, reject) => {
    let [_nick, _pwd] = [db.nick + '', db.pwd + '']
    if (_nick === logindb.nick && _pwd === logindb.pwd) {
      resolve(1)
    } else {
      reject(new Error(0))
    }
  })
}
