import React from 'react';

type GreetingWithFunctionProps = {
  name?: string;
};

// Functional component menggunakan React.FC untuk memberikan type safety
export const GreetingWithFunction: React.FC<GreetingWithFunctionProps> = ({
  name = 'John',
}) => {
  return <h1>Hello, {name}</h1>;
};