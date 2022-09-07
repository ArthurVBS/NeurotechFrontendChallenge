import axios from 'axios'

import { RequestType } from '../types/request'
import { BASE_URL } from '../utils/env_sample'

export const api = axios.create({
  baseURL: BASE_URL,
})

export const getAllTodos = async () => {
  return await api.get(`/todos`).catch(err => {
    return err.response
  })
}

export const getTodoById = async (id: string) => {
  return await api.get(`/todos/${id}`).catch(err => {
    return err.response
  })
}

export const createTodo = async (todo: RequestType) => {
  return await api.post(`/todos`, { todo }).catch(err => {
    return err.response
  })
}

export const updateTodo = async (id: string, todo: RequestType) => {
  return await api.patch(`/todos/${id}`, { todo }).catch(err => {
    return err.response
  })
}

export const deleteTodo = async (id: string) => {
  return await api.delete(`/todos/${id}`).catch(err => {
    return err.response
  })
}
