import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './component/Customer';

const customer = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '문지윤',
    'birthday': '820527',
    'gender': '여자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍병윤',
    'birthday': '850129',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '임옥순',
    'birthday': '510727',
    'gender': '여자',
    'job': '대학생'
  }
]

function App() {
  return (
    <div>
      {
        customer.map(user => {
          return (
            <Customer
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              birthday={user.birthday}
              gender={user.gender}
              job={user.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
