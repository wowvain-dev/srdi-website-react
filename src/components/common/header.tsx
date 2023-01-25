import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';
const { Link } = Anchor;

import logo from '../../assets/srdi_logo.svg';

import '../../App.css';

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <a href="/">
            <img src={logo}></img>
          </a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={65}>
            <Link href="#acasa" title="Acasa" />
            <Link href="#despre_noi" title="Despre Noi" />
            <Link href="#servicii" title="Servicii" />
            <Link href="#tarife" title="Tarife" />
            <Link href="#galerie" title="Galerie" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset={65}>
              <Link href="#acasa" title="Acasa" />
              <Link href="#despre_noi" title="Despre Noi" />
              <Link href="#servicii" title="Servicii" />
              <Link href="#tarife" title="Tarife" />
              <Link href="#galerie" title="Galerie" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;