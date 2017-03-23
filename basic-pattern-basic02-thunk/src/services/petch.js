import request from '../helpers/request';

export const testinfo = () => {
  return request({
    url: 'http://jsonplaceholder.typicode.com/posts/'
  })
}
