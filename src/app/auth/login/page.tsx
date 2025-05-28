'use client'
import React, { useState } from 'react'
import { supabase } from 'utils/supabaseClient'

export default function RegisterPage() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!login || !password) {
      setMessage('Все поля обязательны для заполнения.')
      return
    }
  
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('login', login)
      .eq('password', password)
      .single()
  
    if (error) {
      console.error(error)
      setMessage('Ошибка при входе.')
    } else {
      setMessage(JSON.stringify(data, null, 2))
      setLogin('')
      setPassword('')
    }
  }
  
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Вход</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit" style={{ marginTop: '10px' }}>Вход</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}