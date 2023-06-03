/**
 * 与后端连接时存储后端返回的用户数据
 * 以便全局可用
 */

import { defineStore } from 'pinia'

export const useAccountStore = defineStore({
  id: 'account',
  state: () => ({
    account: {
      code: 999,
      data: {},
    },
    defaultAccount: {
      code: 999,
      data: {},
    },
  }),
  actions: {
    setAccount(account) {
      this.account = account
      localStorage.setItem('account', JSON.stringify(account))
    },
    getAccount() {
      const cachedAccount = localStorage.getItem('account')
      if (cachedAccount) {
        return JSON.parse(cachedAccount)
      }
      return this.account
    },
    setDefaultAccount() {
      this.account = this.defaultAccount
      localStorage.removeItem('account')
    },
    restoreFromLocalStorage() {
      const account = localStorage.getItem('account')
      if (account) {
        this.account = JSON.parse(account)
      }
    },
    clearCacheAndRestoreDefault() {
      this.setDefaultAccount()
      this.restoreFromLocalStorage()
        caches.keys().then(function(cacheNames) {
          cacheNames.forEach(function(cacheName) {
            caches.delete(cacheName);
          });
        });
    },
  },
})



