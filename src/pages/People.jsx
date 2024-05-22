import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Person from '../components/Person';
import Button from '../components/Button';
import PersonWindowContent from '../components/WindowContent/PersonWindowContent';
import ModalWindow from '../components/ModalWindow';
import {loadData, nextLoadData, getPersonData} from '../Utils/dataLoad';
import {closeModal} from '../Utils/closeModal';
import {updateLoadStatePeople, updateDataPeople, updateNewDataPeople} from '../redux/peopleSlice';

import './page.css';

export const People = () => {
  const [personUrlId, setPersonUrlId] = useState(null);

  const params = useParams();
  const dispatch = useDispatch();

  const people = useSelector(state => state?.people?.data?.results);
  const loading = useSelector(state => state?.people?.isLoading);
  const nextUrl = useSelector(state => state?.people?.data?.next);

  const loadingPerson = useSelector(state => state?.person?.isLoading);
  const person = useSelector(state => state?.person?.data);

  useEffect(() => {
    setPersonUrlId(params.personId);
    if (personUrlId) dispatch(getPersonData(personUrlId));
  }, [dispatch, params.personId, personUrlId]);

  useEffect(() => {
    dispatch(
      loadData('https://swapi.py4e.com/api/people', updateLoadStatePeople, updateDataPeople)
    );
  }, [dispatch]);

  const loadMore = () => {
    dispatch(nextLoadData(nextUrl, updateLoadStatePeople, updateNewDataPeople));
  };

  return (
    <article>
      <section className="container">
        {people.map((person, index) => (
          <Person key={index} index={index} {...person} />
        ))}
      </section>
      {nextUrl && (
        <Button
          title={loading ? 'Loading...' : 'Load more'}
          disabled={loading}
          onClick={loadMore}
        />
      )}
      {personUrlId && (
        <ModalWindow loading={loadingPerson} onWrapperClick={closeModal}>
          <PersonWindowContent person={person} />
        </ModalWindow>
      )}
    </article>
  );
};
