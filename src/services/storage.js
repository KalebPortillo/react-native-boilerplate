/* eslint-disable no-console */
import { AsyncStorage } from 'react-native'

const STATE_STORAGE_KEY = `BoilerplateAppState:1.0`

export default class Storage {
  constructor(key) {
    this.STATE_STORAGE_KEY = `${STATE_STORAGE_KEY}${key}`
  }

  static keys = {
    example: 'example'
  }

  get = async () => {
    const state = await this.rehydrate()
    if (state) {
      return state
    }

    return null
  }

  save = state => this.persist(state)

  clear = () => {
    this.clearStorage()
  }

  /**
   * Saves provided state object to async storage
   *
   * @returns {Promise}
   */
  persist = async state => {
    try {
      await AsyncStorage.setItem(`${this.STATE_STORAGE_KEY}`, JSON.stringify(state))
    } catch (e) {
      console.error('Error persisting application state', e)
    }
  }

  /**
   * Reads state object from async storage
   *
   * @returns {Promise}
   */
  rehydrate = async () => {
    try {
      const state = await AsyncStorage.getItem(`${this.STATE_STORAGE_KEY}`)
      return state ? JSON.parse(state) : null
    } catch (e) {
      console.error('Error reading persisted application state', e)
      return null
    }
  }

  clearStorage = async () => {
    try {
      await AsyncStorage.removeItem(`${this.STATE_STORAGE_KEY}`)
    } catch (e) {
      console.error('Error clearing peristed application state', e)
    }
  }
}
