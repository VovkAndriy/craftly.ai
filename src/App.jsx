import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout } from 'antd';

import Header from './components/Header';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import Posts from './components/Posts';

import 'antd/dist/antd.min.css';
import './styles/app.css';

const { Content } = Layout;

export const App = () => {
  const [tools, setTools] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [current, setCurrent] = useState('');

  const handleCategory = (id) => setCurrent(id);
  const handleSearch = (value) => setCurrent(value);

  useEffect(() => {
    axios('https://craftly.free.beeceptor.com/tools')
      .then((res) => setTools(res.data.tools))
      .then(() =>
        axios('https://craftly.proxy.beeceptor.com/blogs')
          .then((res) => {
            setPosts(res.data.blogs);
            setCurrent(res.data.blogs[0].toolID);
          })
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setActiveData(posts.filter((item) => item.toolID.includes(current)));
  }, [posts, current]);

  return (
    <Layout>
      <Header />
      <Banner onSearch={handleSearch} />
      <Content className='main_content'>
        <Layout>
          <Navigation />
          <Categories tabs={tools} onClick={handleCategory} />
          <Posts list={activeData} />
        </Layout>
      </Content>
    </Layout>
  );
};
