export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Пресс-центр</h1>

      <p className="text-lg mb-4">
        Пресс-центр Высшего колледжа IT и новых технологий предоставляет свежие новости, важные объявления и информацию о мероприятиях, проходящих в колледже.
      </p>
      
      <a href="/novosti-kolledzha">
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">Новости колледжа</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Регулярные обновления о достижениях студентов и преподавателей.</li>
          <li>Публикации о внедрении новых программ и инициатив.</li>
          <li>Информация о партнерских проектах и международных взаимодействиях.</li>
        </ul>
      </a>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">Объявления и мероприятия</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Анонсы будущих событий, форумов и конференций.</li>
        <li>Внутренние объявления для студентов и преподавателей.</li>
        <li>Информация о приёме, стипендиях, расписании и других важных аспектах студенческой жизни.</li>
      </ul>

      <p className="text-lg mt-8">
        Следите за обновлениями пресс-центра, чтобы быть в курсе всех событий и изменений в колледже.
      </p>
    </div>
  );
}
