'use client'

import React, { useState } from 'react'
import { supabase } from 'utils/supabaseClient'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import FontSize from 'tiptap-extension-font-size'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Toolbar from '@/app/components/tollbar'

export default function RegisterPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

    const editor = useEditor({
      extensions: [
        StarterKit,
        Underline,
        TextStyle,
        Color,
        FontSize,
        Image,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      ],
      content: '',
    onUpdate: ({ editor }) => {
      setDescription(editor.getHTML())
    },
  })

  const sanitizeFileName = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9.-]/g, '-')
  }

const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!title || !description) {
    setMessage('Название и описание обязательны для заполнения.')
    return
  }

  if (file && file.size > 50 * 1024 * 1024) {
    setMessage('Файл превышает лимит 50 МБ.')
    return
  }

  setLoading(true)
  setMessage('')

  let filePath: string | null = null

  if (file) {
    const sanitizedFileName = sanitizeFileName(file.name)
    filePath = `news/${Date.now()}_${sanitizedFileName}`

    const { error: uploadError } = await supabase.storage.from('news-files').upload(filePath, file)

    if (uploadError) {
      console.error(uploadError)
      setMessage('Ошибка при загрузке файла.')
      setLoading(false)
      return
    }
  }

  const { error: insertError } = await supabase.from('news').insert([
    { title, description, file: filePath },
  ])

  if (insertError) {
    console.error(insertError)
    setMessage('Ошибка при добавлении новости.')
  } else {
    setMessage('Новость успешно добавлена!')
    setTitle('')
    setDescription('')
    setFile(null)
    editor?.commands.setContent('')
  }

  setLoading(false)
}

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <h1>Добавить новость</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>
            Название:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ display: 'block', width: '100%', marginBottom: '10px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Описание:
            <Toolbar editor={editor}/>
            <div className="border rounded p-2 min-h-[150px]">
              <EditorContent editor={editor} />
            </div>
          </label>
        </div>
        <div>
          <label>
            Файл (максимум 50 МБ):
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{ display: 'block', width: '100%', marginBottom: '10px' }}
            />
          </label>
        </div>
        <button type="submit" disabled={loading} style={{ marginTop: '10px' }}>
          {loading ? 'Загрузка...' : 'Добавить новость'}
        </button>
      </form>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  )
}
