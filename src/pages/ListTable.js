import React from 'react';
import { useLocation } from 'react-router-dom';
import FilmsList from '../components/Films';
import PeopleList from '../components/People';
import VehiclesList from '../components/Vehicles';

export default function ListTable() {
  const currentRoute = useLocation();

  if (currentRoute.pathname === '/films') {
    return (
      <FilmsList />
    );
  } else if (currentRoute.pathname === '/people') {
    return (
      <PeopleList />
    );
  } else if (currentRoute.pathname === '/vehicles') {
    return (
      <VehiclesList />
    );
  }
}
