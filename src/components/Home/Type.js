import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Frontend Разработчик',
          'Фрилансер',
          'Вебмастер',
          'Создание сайта под ключ',
          'Доработка сайта',
          'Оптимизация',
          'Разработка UI/UX',
          'Создание логотипа',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
