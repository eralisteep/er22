'use client'
import React, { useState } from 'react'
import { supabase } from 'utils/supabaseClient'

export default function RegisterPage() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!login || !password || !role) {
      setMessage('Все поля обязательны для заполнения.')
      return
    }

    const { error } = await supabase.from('users').insert([{ login, password, role }])

    if (error) {
      console.error(error)
      setMessage('Ошибка при создании пользователя.')
    } else {
      setMessage('Пользователь успешно создан!')
      setLogin('')
      setPassword('')
      setRole('')
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Регистрация</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>
            Логин:
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
              style={{ display: 'block', width: '100%', marginBottom: '10px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ display: 'block', width: '100%', marginBottom: '10px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Роль:
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              style={{ display: 'block', width: '100%', marginBottom: '10px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Зарегистрировать</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}