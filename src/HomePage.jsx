import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #1a1b26;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: system-ui, -apple-system, sans-serif;
`;

const Header = styled.header`
  margin-bottom: 40px;
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #00ffd0;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 0 20px;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 280px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 255, 208, 0.15);
    border-color: #00ffd0;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #00ffd0;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #ffffff;
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
        <Card onClick={() => navigate('/built-in-LED')}>
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
