import React from 'react';
import Macaron from './Macaron';
import Macaron_c from './Macaron_c';
import cakes from  './cakes.json';
import PropTypes from 'prop-types';

//서버에서 가져온 데이터를 저장하는 변수
//const foodLike = [];
// const cakes = [
//   {
//     id: 1,
//     name: 'Macarons',
//     image: 'https://i.pinimg.com/564x/82/18/a4/8218a40cf4b9a575878a4c864dbbcc68.jpg'
//   },
//   {
//     id: 2,
//     name: 'Cute Macarons',
//     image: 'https://i.pinimg.com/564x/19/ca/4e/19ca4ef6a0163d72c19b9c67d3ade848.jpg'
//   },
//   {
//     id: 3,
//     name: 'Floral Macaron',
//     image: 'https://i.pinimg.com/564x/82/5a/37/825a37b52ec57c19a4c6346340867997.jpg'
//   }
// ];



// function Food(props){ //자식컴포넌트
//   return (
        //<>
        //<h1>I Like {props.propsName}</h1>
        //<h2>{props.propsid}</h2>
        //<h3>{props.propsimage}</h3>
        //</>
//   );
// }

// function Food(props){ //자식컴포넌트  //구조 분해 할당
//   const {propsName,propsid,propsimage} = props;
//   return (
        //<>
        //<h1>I Like {propsName}</h1>
        //<h2>{propsid}</h2>
        //<h3>{propsimage}</h3>
        //</>
//   );
// }

// function Food({propsName}){ //자식컴포넌트  //구조 분해 할당
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }

function Food({propsid,propsname,propsimage}){ //자식컴포넌트
  return (
    <div>
      <h1>cake No. {propsid}</h1>
      <h2>{propsname}</h2>
      <img src={propsimage} alt={propsname} />
    </div>
    
  );
}

function App_1() { //부모컴포넌트
  return (
    <>
      <div>안녕하세요!!</div>
      <Macaron />
      <Macaron_c />
      {/* <Food propsName = {"macaron"} /> */}
      {cakes.map(cake => (
                            <Food 
                              propsid = {cake.id}
                              propsname = {cake.name}
                              propsimage = {cake.image}
                            />
                          )
                )
      }
    </>
  );
}

//npm install prop-types
Food.propTypes = {
  propsid: PropTypes.number.isRequired,
  propsname: PropTypes.string.isRequired,
  propsimage: PropTypes.string
}

export default App_1;
