import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './homeindex.module.css';
import NavbarItem from '../../components/Navbar/navbarIndex';
import AppMovies from '../../components/services/service';
import Header from '../../components/Header/headerIndex'
import axios from 'axios';

export function HomeItem() {
  const navigate = useNavigate();

  return (
    <div className="logoimg">
      <Header />
      <NavbarItem />
      <AppMovies />
    </div>
  );
}

export default HomeItem;
