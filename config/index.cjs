/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  APP_ID: '',
  APP_SECRET: '',
  IS_SHOW_COLOR: true,
  CALLBACK_TEMPLATE_ID: '0-HIOIipj9tmjLqoLsMlvKx_cbYnTksnSXCcr3Cp0KE',
  CALLBACK_USERS: [{ name: '自己', id: 'ok4Ta5_3jaGzlTETHX3v6NtM5FQc' }],
  USERS: [
    {
      name: 'EmiyaGm',
      id: 'ok4Ta5_3jaGzlTETHX3v6NtM5FQc',
      useTemplateId: 'b_Q9JBza_SseajvfiCbdNiGglQDsiUmouzRGbbKkrPE',
      province: '江苏',
      city: '南京',
      horoscopeDate: '12-14',
      horoscopeDateType: '今日',
      openUrl: 'https://github.com/EmiyaGm',
      festivals: [{ type: '生日', name: '生日', date: '12-14', year: '1994' }],
      customizedDateList: [{ keyword: '在一起的日子', date: '2022-07-30' }],
    },
    {
      name: '66',
      id: 'ok4Ta50JKShWbJwIe9pQ-nE4xRas',
      useTemplateId: 'fNSsFKl01Ymg7NzYWN3rCqECLVDHTIBuO_-5f-Sb-pI',
      province: '江苏',
      city: '南京',
      horoscopeDate: '08-16',
      horoscopeDateType: '今日',
      openUrl: 'https://github.com/EmiyaGm',
      festivals: [{ type: '生日', name: '生日', date: '08-16', year: '1994' }],
      customizedDateList: [{ keyword: '在一起的日子', date: '2022-07-30' }],
    },
  ],
  SWITCH: {
    weather: true,
    holidaytts: true,
    CIBA: false,
    oneTalk: false,
    earthyLoveWords: false,
    momentCopyrighting: false,
    poisonChickenSoup: false,
    poetry: false,
    horoscope: false,
    birthdayMessage: true,
  },
}

module.exports = USER_CONFIG
