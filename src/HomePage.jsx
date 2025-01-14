import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 280px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 15px;
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Header>
        <Title>TRIOE Electronics Hub</Title>
        <Subtitle>Explore our tools and resources for electronics enthusiasts</Subtitle>
      </Header>
      <CardContainer>
      <Card onClick={() => navigate('/serial-monitor')}>
          <CardTitle>TRIOE and the Arduino IDE Serial Monitor</CardTitle>
          <CardDescription>Make the TRIOE board communicate with you via the Serial Monitor.</CardDescription>
        </Card>
        <Card>
          <CardTitle>TRIOE and its Built-in LED</CardTitle>
          <CardDescription>Learn about using the built-in LED on the TRIOE board with arduino IDEs loop function</CardDescription>
        </Card>
        <Card>
          <CardTitle>TRIOE and LEDs</CardTitle>
          <CardDescription>Learn about using the a 5mm LED hooked up to the TRIOE board with arduino IDEs loop function</CardDescription>
        </Card>
        <Card onClick={() => navigate('/table')}>
          <CardTitle>Developer Tools</CardTitle>
          <CardDescription>Access our suite of development tools.</CardDescription>
        </Card>
        
        {/* Add more cards as needed */}
      </CardContainer>
    </PageContainer>
  );
};

export default HomePage;
