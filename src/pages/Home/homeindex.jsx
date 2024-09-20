import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './homeindex.module.css';
import NavbarItem from '../../components/Navbar/navbarIndex';
import AppMovies from '../../components/services/service';
import axios from 'axios';

function HomeItem() {
  const navigate = useNavigate();

  return (
    <div className="logoimg">
      <NavbarItem />
      <AppMovies />
    </div>
  );
}

export default HomeItem;
