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
    <div>
      <section className="grid grid-cols-[4fr_1fr] p-4">
        <article>
          <h2 className="text-2xl font-bold mb-4">Высший колледж IT и новых технологий</h2>
          <p>Колледж радиотехники и связи — одно из старейших учебных заведений Семея, которое входит в число ведущих организаций технического и профессионального образования Республики Казахстан.</p>
          <p>Сегодня колледж представляет собой образец современного учебного заведения, ориентированного на использование новых инновационных технологий, выполняющего подготовку специалистов в условиях максимального сближения образовательных и производственных целей.</p>
          <p>Студенты колледжа активно принимают участие в региональных, национальных и мировых чемпионатах профессионального мастерства WorldSkills.</p>
          <p>Колледж ведет прием выпускников школ на базе 9 и 11 классов средней школы. По заочной форме обучения – на базе 11 классов, на базе ТиПО и ВУЗов.</p>
          <p>Обучение ведется на бюджетной и платной основах.</p>
          <p>По окончании обучения выпускнику выдается диплом государственного образца.</p>
        </article>
        <article className="flex flex-col items-center gap-2">
          <img className="w-32 h-auto" src="ChatGPT Image 15 мая 2025 г., 09_09_41.png" alt="logo" />
          <div className="text-sm text-gray-600">Основан в 1940 г.</div>
          <div className="text-lg font-medium">г. Семей, ул. Затаевича 4</div>
        </article>
      </section>
      <iframe
        src="https://yandex.kz/map-widget/v1/?indoorLevel=1&ll=80.226998%2C50.394266&tab=overview&z=18.4"
        width="100%"
        height="300"
        frameBorder="0"
        allowFullScreen
        className="mt-2 rounded-lg shadow-md"
      ></iframe>
      <section>
        <h2 className="text-2xl font-bold mt-4">Новости колледжа</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {news.map((item) => (
            <a href={'novosti-kolledzha/' + item.id} key={item.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="text-sm text-gray-500 mt-2 block">{new Date(item.created_at).toLocaleDateString()}</span>
            </a>
          ))}
        </div>
        {news.length === 0 && <p className="text-gray-500 mt-4">Загрузка...</p>}
      </section>
    </div>
  )
}