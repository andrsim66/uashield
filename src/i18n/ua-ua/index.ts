export default {
  language: 'Мова',
  ddos: {
    description: 'Атака DDoS робить величезну кількість запитів на ворожі сайти і спричиняє їх надмірну завантаженість. Як наслідок, сервери не встигають обробляти всі запити, тому не можуть працювати в штатному режимі, лагають або взагалі не працюють. Деталі тут: https://help-ukraine-win.com.ua/',
    coordinators: 'Для координацій цілей: https://discord.gg/7BfJ9JKQ98 ',
    counter: {
      attackedTimes: 'Атаковано разів:',
      currentTarget: 'Теперішня ціль: '
    },
    efficiency: 'Ефективність',
    enable: {
      name: 'Атака DDoS',
      description: 'Вмикає атаку DDoS по основних ресурсах ворога: урядові сайти, банківські системи, пропагандистські ресурси, тощо. Поточні цілі відображються на сторінці.'
    },
    proxy: {
      name: 'Атакувати тільки через проксі',
      description: 'Під час атаки без проксі, програма зможе використовувати реальну IP-адресу Вашого компʼютера. Це дозволить зробити атаку більш ефективною, але водночас Ваша IP-адреса буде видима ворогові.'
    },
    advanced: {
      header: 'Розширені налаштування',
      description: 'Якщо ви недосвідчений користувач і не розумієте частини понять, будь ласка, не змінюйте розширених налаштувань. Це може погано вплинути на роботу програми.',
      maxWorkersCount: {
        name: 'Максимальна поточність',
        description: 'Максимально можлива кількість потоків'
      },
      automaticMode: {
        name: 'Автоматичний режим',
        description: 'Коли включений, програма аналізує свою ефективність і автоматично вибирає рівень паралельності.'
      },
      masDosersCount: {
        name: 'Кількість потоків',
        description: 'Задає кількість паралельних процесів. Використовуються асинхронні механізми (не потокові), тому це не сильно впливає на CPU/RAM. Після зміни, треба почекати ~10 cекунд поки стартують додаткові паралельні досери'
      }
    },
    update: {
      title: 'Оновлення доступне',
      cancel: 'Відміна',
      confirm: 'Встановити оновлення'
    }
  }
}
