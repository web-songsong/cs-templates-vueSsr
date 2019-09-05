import axios from 'utils/axios'

/**
 * test api
 *
 * @export
 * @param {*} params
 * @returns
 */
export function activity_test(params) {
  return axios.post('/activity/test', params)
}
