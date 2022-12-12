import React from 'react';
import '../css/index.css'
import { Navbar } from '../components/header/Navbar';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

export default {
  title: 'Навбар',
  component: Navbar,
};

const Template = (args) => (
  <BrowserRouter>
    <Navbar {...args} />
  </BrowserRouter>
);

export const Options = Template.bind({});
Options.args = {
  
}
