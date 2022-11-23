import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Navbar, NavbarToggler, NavbarBrand, Offcanvas, OffcanvasHeader, OffcanvasBody, Button, } from 'reactstrap';

export default function Navb() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        fixed='top' 
        className={styles.header}
      >
        <NavbarBrand href="/">
          <img className={styles.img} src='logolt.png'/>
        </NavbarBrand>
        <NavbarToggler 
          style={{
            border:"none",
          }}
          onClick={toggle}
        />
          <Offcanvas 
            direction="end"
            scrollable
            isOpen={isOpen}
          >
          <Navbar>
            <OffcanvasHeader>
              Menu
            </OffcanvasHeader>
              <Button
                size='sm'
                close
                onClick={toggle}
              />
          </Navbar>
          <OffcanvasBody>
            <ul className={styles.list}>
              <li>Home</li>
            </ul>
          </OffcanvasBody>
        </Offcanvas>
      </Navbar>
    </div>
  )
}