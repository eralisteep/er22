export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Контакты</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Адрес и контактная информация</h2>
      <ul className="text-lg mb-6 space-y-1">
        <li><strong>Адрес:</strong> г.Семей ул.Затаевича 4</li>
        <li><strong>Телефон:</strong> 8(7222)36-05-07</li>
        <li><strong>Email:</strong> info@collegeit.edu.kz</li>
        <li>
          <strong>Социальные сети:</strong>
          <ul className="list-disc list-inside ml-4">
            <li><a href="https://www.instagram.com/college_communication" className="text-blue-600 underline">Instagram</a></li>
            <li><a href="https://www.youtube.com/@itcolledge" className="text-blue-600 underline">Youtube</a></li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-blue-600">Карта проезда</h2>
      <div className="mb-8">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1069.4073681679722!2d80.2268335812315!3d50.39463608460264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42f2652445e21b45%3A0x94e2ddf0c72ae3fc!2z0JLRi9GB0YjQuNC5INC60L7Qu9C70LXQtNC2IElUINC4INC90L7QstGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40Lk!5e0!3m2!1sru!2skz!4v1749104333476!5m2!1sru!2skz"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen
            className="mt-2 rounded-lg shadow-md"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold mb-2 text-blue-600">Форма обратной связи</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Ваше имя"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Ваш email"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <textarea
          placeholder="Ваше сообщение"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}
