import React from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

// types



// Задания из класса

type Users = Array<User>

type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
  age: number
}

const users: Users = [
  {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      age: 23
  },
  {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      age: 20
  }
];

type Products = Array<Product>

type Product = {
  id: number
  name: string
  price: number
  currency: string
  ingredients: string[]
  type: string
  available: boolean
}

const products = [
  {
      id: 1,
      name: "Burger Premium",
      price: 6,
      currency: "euro",
      ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
      type: "burger",
      available: true
  },
  {
      id: 2,
      name: "Burger Lite",
      price: 2.3,
      currency: "euro",
      ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
      type: "burger",
      available: true
  },
];

type GetUser = (id: number, user: Users) => User | undefined

const getUser: GetUser = (id, users) => users.find((user) => user.id === id);



type Countries = Array<Country>

type Country = {
  country: string
  abbreviation: string
  city: string
  currency_name: string
  population: number
}

const countries: Countries = [
  {
    country: "United Arab Emirates",
    abbreviation: "AE",
    city: "Abu Dhabi",
    currency_name: "Arab Emirates Dirham",
    population: 9630959
      
  },
  {
    country: "Poland",
    abbreviation: "PL",
    city: "Warszawa",
    currency_name: "Polish Zloty",
    population: 37974750
  },
  {
    country: "Russian Federation",
    abbreviation: "RU",
    city: "Moscow",
    currency_name: "Russian Ruble",
    population: 144478050
  }
]

// С выше приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     1. Создать строку из названий стран через запятую
//     2. Посчитать общее количнство людей в данном массиве стран.
//     3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//     4. Получить массив валют.
//     5. Получить массив городов, отсортированных в алвавитном порядке.
//     6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

// 1. Создать строку из названий стран через запятую

type CountriesString = (countries: Countries) => string

const countriesString: CountriesString = (countries) => {
  let result = ''
  countries.forEach((item: Country) => result += `${item.country},`)
  return result
}

console.log(countriesString(countries))

// 2. Посчитать общее количнство людей в данном массиве стран.

type PeopleSum = (countries: Countries) => number

const peopleSum: PeopleSum = (countries) => countries.reduce((acc: number, cur: Country) => acc + cur.population, 0)

console.log(peopleSum(countries))

// 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.

type SortCountries = (countries: Countries) => Countries

const sortCountries: SortCountries = (countries) => countries.sort((a: Country, b: Country) => a.country > b.country ? 1 : -1)

console.log(sortCountries(countries))

// 4. Получить массив валют.

type CurrenciesArray = (countries: Countries) => string[]

const currenciesArray: CurrenciesArray = (countries) => countries.reduce((acc: string[], cur: Country) => [...acc, cur.currency_name],[])

console.log(currenciesArray(countries))

// 5. Получить массив городов, отсортированных в алвавитном порядке.

type CitiesArray = (countries: Countries) => string[]

const citiesArray: CitiesArray = (countries) => countries.reduce((acc: string[], cur: Country) => [...acc, cur.city],[]).sort()

console.log(citiesArray(countries))

// 6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

type AverageNumberOfPeople = (countries: Countries) => number

const averageNumberOfPeople: AverageNumberOfPeople = (countries) => countries.reduce((acc: number, cur: Country) => acc + cur.population, 0) / countries.length

console.log(averageNumberOfPeople(countries))




// ДЗ:

type Users2 = Array<User2>

type User2 = {
  name: string
  phone: string
  email: string
  animals?: string[]
  cars?: string[]
  hasChildren: boolean
  hasEducation: boolean
}

const users2: Users2 = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true
      
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false
  }
]

// С выше приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     1. Создать строку из имен пользователей через запятую
//     2. Посчитать общее количнство машин у пользователей
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

// 1. Создать строку из имен пользователей через запятую

type NamesString = (users: Users2) => string

const namesString: NamesString = (users) => {
  let result = ''
  users.forEach((item: User2) => result += `${item.name},`)
  return result
}

console.log(namesString(users2))

// 2. Посчитать общее количнство машин у пользователей

type TotalNumberOfCars = (users: Users2) => number

const totalNumberOfCars: TotalNumberOfCars = (users) => users.filter((item: User2) => item.cars).reduce((acc: string[], cur: any) => [...acc, ...(cur.cars)], []).length

console.log(totalNumberOfCars(users2))

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

type EducationFilter = (users: Users2) => Users2

const educationFilter: EducationFilter = (users) => users.filter((item: User2) => item.hasEducation)

console.log(educationFilter(users2))

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

type PetsFilter = (users: Users2) => Users2

const petsFilter: PetsFilter = (users) => users.filter((item: User2) => item.animals)

console.log(petsFilter(users2))

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

type CarsString = (users: Users2) => string

const carsString: CarsString = (users) => users.filter((item: User2) => item.cars).reduce((acc: string[], cur: any) => [...acc, ...(cur.cars)], []).join(',')

console.log(carsString(users2))

export default App;