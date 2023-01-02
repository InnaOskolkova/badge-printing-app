import { FC, useState } from 'react';
import { Input, Select } from './components/field';
import { Button } from './components/button';
import { Badge } from './components/badge';
import './App.css';

const ROLES = [
  { value: "1", label: "Программист" },
  { value: "2", label: "Тестировщик" },
  { value: "3", label: "Аналитик" },
  { value: "4", label: "Менеджер" }
];

const App: FC = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [roleValue, setRoleValue] = useState("");

  const roleLabel = ROLES.find((role) => role.value === roleValue)?.label;

  return (
    <div className="App">
      <Input
        label="Фамилия"
        value={lastName}
        placeholder="Введите фамилию"
        onChange={setLastName} />
      <Input
        label="Имя"
        value={firstName}
        placeholder="Введите имя"
        onChange={setFirstName} />
      <Input
        label="Отчество"
        value={patronymic}
        placeholder="Введите отчество"
        onChange={setPatronymic} />
      <Select 
        label="Должность"
        value={roleValue}
        options={ROLES}
        placeholder="Выберите должность"
        onChange={setRoleValue} />
      <Button onClick={() => ({})}>
        Создать
      </Button>
      <Badge 
        photo='https://via.placeholder.com/150'
        fullName={{
          lastName,
          firstName,
          patronymic
        }}
        position={{
          role: roleLabel || '',
          level: 1
        }}/>
    </div>
  );
};

export default App;
