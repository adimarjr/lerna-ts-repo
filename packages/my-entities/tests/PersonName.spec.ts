import { describe, it, expect } from 'vitest'
import { IPerson } from '../src/index'

describe('IPerson', () => {
  it('creates instance', () => {
    const person: IPerson = {
      firstName: 'a',
      lastName: 'b'
    }
    expect(person.firstName).toEqual('a')
    expect(person.lastName).toEqual('b')
  })
})
