export default function Page() {
    return (
        <table className="w-full">
            <thead>
                <tr className="bg-blue-darker pd-8" style={{ top: 40 }}>
                    <th
                        className="py-3 border-r border-l border-black text-white text-left font-normal bg-blue-darker px-8"
                        style={{ top: 40 }}
                    >
                        <div>Специальности</div>
                    </th>
                    <th
                        className="py-3 border-r border-l border-black text-white font-normal bg-blue-darker"
                        style={{ top: 40 }}
                    >
                        <div>Код</div>
                    </th>
                    <th
                        className="py-3 border-r border-l border-black text-white font-normal bg-blue-darker"
                        style={{ top: 40 }}
                    >
                        <div>Стоимость за год</div>
                    </th>
                    <th
                        className="py-3 border-r border-l border-black text-white font-normal bg-blue-darker"
                        style={{ top: 40 }}
                    >
                        <div>Срок обучения</div>
                    </th>
                </tr>
            </thead>
            <tbody className="college-specialty-table-body">
                <tr className="bg-brown-light">
                    <td colSpan={5} className="py-1 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/vychislitelnaya-tekhnika-i-programmnoe-obespechenie"
                            className="block no-underline"
                        >
                            Вычислительная техника и информационные сети (по видам) (06120100)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/naladchik-elektronno-vychislitelnykh-mashin"
                            className="no-underline"
                        >
                            Оператор компьютерного аппаратного обеспечения
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">06120101</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/tekhnik-14"
                            className="no-underline"
                        >
                            Техник сетевого и системного администрирования
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">06120102</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/prikladnoy-bakalavr-vychislitelnoy-tehniki-i-informacionnyh-setey"
                            className="no-underline"
                        >
                            Прикладной бакалавр вычислительной техники и информационных сетей
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">5АВ06120101</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr className="bg-brown-light">
                    <td colSpan={5} className="py-1 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/distancionno-pilotiruemaya-aviacionnaya-sistema"
                            className="block no-underline"
                        >
                            Дистанционно пилотируемая авиационная система (07161100)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/operator-bespilotnyh-letatelnyh-apparatov"
                            className="no-underline"
                        >
                            Оператор беспилотных летательных аппаратов
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07161101</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr className="bg-brown-light">
                    <td colSpan={5} className="py-1 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/montazh-tekhnicheskoe-obsluzhivanie-i-remont-meditsinskoy-tekhniki"
                            className="block no-underline"
                        >
                            Монтаж, техническое обслуживание и ремонт медицинской техники
                            (07140400)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/elektromekhanik-po-remontu-i-obsluzhivaniyu-meditsinskogo-oborudovaniya"
                            className="no-underline"
                        >
                            Электромеханик по ремонту и обслуживанию медицинского оборудования
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140401</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/tekhnik-po-ekspluatatsii-i-remontu-oborudovaniya-2"
                            className="no-underline"
                        >
                            Техник по эксплуатации и ремонту медицинского оборудования
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140402</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/tekhnik-elektronik-2"
                            className="no-underline"
                        >
                            Техник-электроник
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140403</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr className="bg-brown-light">
                    <td colSpan={5} className="py-1 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/pochtovaya-svyaz"
                            className="block no-underline"
                        >
                            Почтовая связь (07141000)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/operator-pochtovoy-svyazi"
                            className="no-underline"
                        >
                            Оператор почтовой связи
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07141001</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/tekhnik-pochtovoy-svyazi"
                            className="no-underline"
                        >
                            Техник почтовой связи
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07141002</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr className="bg-brown-light">
                    <td colSpan={5} className="py-1 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/informatsionnye-sistemy"
                            className="block no-underline"
                        >
                            Программное обеспечение (06130100)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/operator-programmnogo-kompleksa"
                            className="no-underline"
                        >
                            Оператор программного комплекса
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">06130101</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/dizayner-2"
                            className="no-underline"
                        >
                            Web-дизайнер
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">06130102</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/razrabotchik-programmnogo-obespecheniya"
                            className="no-underline"
                        >
                            Разработчик программного обеспечения
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">06130103</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/prikladnoy-bakalavr-programmnogo-obespecheniya"
                            className="no-underline"
                        >
                            Прикладной бакалавр программного обеспечения
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">06130109</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr className="bg-brown-light">
                    <td colSpan={5} className="py-1 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/radioelektronika-i-svyaz"
                            className="block no-underline"
                        >
                            Радиотехника, электроника и телекоммуникации (07140900)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/elektromonter-po-telekommunikatsionnym-setyam-i-sistemam"
                            className="no-underline"
                        >
                            Электромонтажник-наладчик телекоммуникационного оборудования и каналов
                            связи
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140901</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/tekhnik-po-svyazi-1"
                            className="no-underline"
                        >
                            Техник телекоммуникационных систем связи
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140902</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/tekhnik-radiotekhnik"
                            className="no-underline"
                        >
                            Техник-радиотехник
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140906</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/tehnik-besprovodnoy-i-mobilnoy-svyazi"
                            className="no-underline"
                        >
                            Техник беспроводной и мобильной связи
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140907</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr className="bg-brown-light">
                    <td colSpan={5} className="py-1 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/robototehnika-i-vstraivaemye-sistemy"
                            className="block no-underline"
                        >
                            Робототехника и встраиваемые системы (07140400)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/montazhnik-naladchik-robototehnicheskih-sistem-i-kompleksov"
                            className="no-underline"
                        >
                            Монтажник-наладчик робототехнических систем и комплексов
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140401</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/montazhnik-naladchik-vstraivaemyh-sistem"
                            className="no-underline"
                        >
                            Монтажник-наладчик встраиваемых систем
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140402</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/tehnik-mobilnoy-robototehniki"
                            className="no-underline"
                        >
                            Техник мобильной робототехники
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140403</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/tehnik-vstraivaemyh-sistem"
                            className="no-underline"
                        >
                            Техник встраиваемых систем
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140405</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr className="bg-brown-light">
                    <td colSpan={5} className="py-1 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/sistemy-informacionnoy-bezopasnosti-1"
                            className="block no-underline"
                        >
                            Системы информационной безопасности (06120200)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/operator-programmno-apparatnoy-zashchity"
                            className="no-underline"
                        >
                            Оператор программно-аппаратной защиты
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">06120201</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/tekhnik-po-zashchite-informatsii"
                            className="no-underline"
                        >
                            Техник информационной безопасности
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">06120202</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr className="bg-brown-light">
                    <td colSpan={5} className="py-1 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/cifrovaya-tehnika"
                            className="block no-underline"
                        >
                            Цифровая техника (07140500)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/montazhnik-naladchik-cifrovoy-tehniki"
                            className="no-underline"
                        >
                            Монтажник-наладчик цифровой техники
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140501</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/mehanik-po-obsluzhivaniyu-i-remontu-elektronnoy-i-cifrovoy-tehniki"
                            className="no-underline"
                        >
                            Механик по обслуживанию и ремонту электронной и цифровой техники
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140502</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
                <tr>
                    <td className="py-3 px-8">
                        <a
                            // href="https://vipusknik.kz/specialties/tehnik-elektronshchik"
                            className="no-underline"
                        >
                            Техник-электронщик
                        </a>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">07140504</div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3"></div>
                    </td>
                    <td className="text-center border-r border-l border-brown-light">
                        <div className="py-3">--</div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td colSpan={5} className="py-1 px-8"></td>
                </tr>
            </tbody>
        </table>
    );
}