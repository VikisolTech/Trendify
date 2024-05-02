import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { increment, decrement, incrementByAmount } from '../redux/feature/feature-counter';

const MotionBox = motion(Box); 
function Home() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <MotionBox p={4} 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>Counter: {count}</Text>
      <Button onClick={() => dispatch(increment())} mr={2}>Increment</Button>
      <Button onClick={() => dispatch(decrement())} mr={2}>Decrement</Button>
      <Button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</Button>
    </MotionBox>
  );
}

export default Home;
