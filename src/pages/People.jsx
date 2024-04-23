import React, {useEffect} from 'react';
import {Person} from '../components/Person/Person';
import {useDispatch, useSelector} from 'react-redux';
import {dataLoad} from '../redux/dataLoad.js';

//import people from "../people.json";
import './page.css';

export const People = () => {
  const people = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    function load() {
      dispatch(dataLoad);
    }
    load();
  }, [dispatch]);

  console.log(people);

  return (
    <section className="container">
      {people.map((person, i) => (
        <Person key={person[i]} {...person} />
      ))}
    </section>
  );
};
