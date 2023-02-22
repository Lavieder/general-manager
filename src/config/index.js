/**
 * 环境配置封装
 */
const env =
  import.meta.env.mode || 'prod';
const EnvConfig = {
  // 开发环境接口地址
  dev: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/a674f9dede781286fa10f89cdf43ae38/api'
  },
  // 测试环境接口地址
  test: {
    baseApi: '/test.xxx.com/api',
    mockApi: 'https://www.fastmock.site/mock/a674f9dede781286fa10f89cdf43ae38/api'
  },
  // 生产环境接口地址
  prod: {
    baseApi: '/xxx.com/api',
    mockApi: 'https://www.fastmock.site/mock/a674f9dede781286fa10f89cdf43ae38/api'
  }
}
export default {
  env: 'dev',
  mock: true,
  namespace: 'manager',
  ...EnvConfig[env]
}
