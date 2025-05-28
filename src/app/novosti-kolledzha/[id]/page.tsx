'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from 'utils/supabaseClient';

export default function Page() {
  const { id } = useParams(); // Получаем id из параметров маршрута
  const [newsItem, setNewsItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchNewsItem = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('id', id)
        .single(); // Получаем одну запись

      if (error) {
        console.error(error);
        setNewsItem(null);
      } else {
        setNewsItem(data);
      }
      setLoading(false);
    };

    fetchNewsItem();
  }, [id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!newsItem) {
    return <p>Новость не найдена</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{newsItem.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: newsItem.description }} />


      {newsItem.file && newsItem.file.match(/\.(jpeg|jpg|png|gif|webp)$/i) ? (
        <img
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/news-files/${newsItem.file}`}
          alt="preview"
          style={{ maxWidth: '100%', borderRadius: 8 }}
        />
      ) : newsItem.file && newsItem.file.match(/\.(mp4|webm|ogg)$/i) ? (
        <video controls style={{ maxWidth: '100%', borderRadius: 8 }}>
          <source
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/news-files/${newsItem.file}`}
            type={`video/${newsItem.file.split('.').pop()}`}
          />
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
      ) : newsItem.file ? (
        <a
          href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/news-files/${newsItem.file}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          📎 Открыть файл
        </a>
      ) : null}
      <p>
        <i>{new Date(newsItem.created_at).toLocaleString()}</i>
      </p>
    </div>
  );
}