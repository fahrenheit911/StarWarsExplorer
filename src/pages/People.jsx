import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Person from '../components/Person';
import Button from '../components/Button';
import ModalWindow from '../components/ModalWindow';
import {loadData, nextLoadData} from '../redux/dataLoad';

import './page.css';

export const People = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [personInfo, setPersonInfo] = useState([]);

  const people = useSelector(state => state?.people?.data?.results);
  const loading = useSelector(state => state?.people?.isLoading);
  const nextUrl = useSelector(state => state?.people?.data?.next);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const loadMore = () => {
    dispatch(nextLoadData(nextUrl));
  };

  const clickPerson = (name, index) => {
    if (people[index].name === name) {
      setPersonInfo(people[index]);
      setIsOpen(true);
    }
  };

  return (
    <article>
      <section className="container">
        {people.map((person, index) => (
          <Person key={index} index={index} {...person} clickPerson={clickPerson} />
        ))}
      </section>
      {nextUrl && (
        <Button
          title={loading ? 'Loading...' : 'Load more'}
          onClick={loadMore}
          disabled={loading}
        />
      )}
      {isOpen && <ModalWindow onClose={() => setIsOpen(false)} {...personInfo} />}
    </article>
  );
};
