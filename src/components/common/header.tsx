import React, { useState } from 'react';
import { Anchor, Drawer, Button, Row } from 'antd';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
const { Link } = Anchor;

import logo from '../../assets/srdi_logo.svg';
import menuBars  from '../../assets/menu-outline.svg';

import '../../App.css';
import Icon, {BarsOutlined, CloseOutlined} from '@ant-design/icons';

const MenuSvg = () => (
  menuBars
);

const MenuIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon src={menuBars} width={75} height={75} {...props} />
);

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
            <img width={75} height={75} src={logo}></img>
          </a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={100}>
            <Link href="#acasa" title="Acasa" />
            <Link href="#despre_noi" title="Despre Noi" />
            <Link href="#servicii" title="Servicii" />
            <Link href="#tarife" title="Tarife" />
            <Link href="#galerie" title="Galerie" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button onClick={showDrawer} style={{}}>
            <BarsOutlined style={{color: '#003f5c'}} width={75} height={75}/>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            open={visible}
          >
            <Row>
              <div className="flex-1"/>
              <Button onClick={() => onClose()}><CloseOutlined/></Button>
            </Row>
            <Anchor targetOffset={100}>
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