'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from 'utils/supabaseClient'

export default function Page() {
  const [news, setNews] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('news').select()
      if (error) console.error(error)
      else setNews(data)
    }
    fetchData()
  }, [])

  return (
    <div style={{ padding: 10 }}>
      <h1>Новости</h1>
      {news.length === 0 ? (
        <p>Загрузка...</p>
      ) : (
        news.map((item, index) => (
            <div key={index} style={{ marginBottom: 30 }}>
              <a href={"/novosti-kolledzha/" + item.id}>
                <h2 style={{ maxWidth: '100%'}}>{item.title}</h2>
              </a>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
              {/* Проверка типа файла */}
              {item.file && item.file.match(/\.(jpeg|jpg|png|gif|webp)$/i) ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/news-files/${item.file}`}
                  alt="preview"
                  style={{ maxWidth: '100%', borderRadius: 8 }}
                />
              ) : item.file && item.file.match(/\.(mp4|webm|ogg)$/i) ? (
                <video
                  controls
                  style={{ maxWidth: '100%', borderRadius: 8 }}
                >
                  <source
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/news-files/${item.file}`}
                    type={`video/${item.file.split('.').pop()}`}
                  />
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
              ) : item.file ? (
                <a
                  href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/news-files/${item.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📎 Открыть файл
                </a>
              ) : null}
              <p><i>{new Date(item.created_at).toLocaleString()}</i></p>
            </div>
        ))
      )}
    </div>
  )
}
