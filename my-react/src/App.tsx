import React from 'react';

// Definisikan tipe untuk alamat (Address)
type Address = {
  street: string;
  city: string;
  zip: string;
};

// Definisikan tipe untuk props UserProfile
type UserProfileProps = {
  name?: string; // ? berarti opsional, jadi bisa tidak diberikan
  age: number; // age adalah wajib
  address: Address; // Address adalah tipe custom yang mengikuti struktur yang didefinisikan di atas
};

// Functional component UserProfile
export const UserProfile: React.FC<UserProfileProps> = ({
  name = 'Guest', // Nilai default untuk name adalah 'Guest'
  age,
  address: { street, city, zip }, // Destructuring langsung pada props
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <h2>Address:</h2>
      <p>
        {street}, {city}, {zip}
      </p>
    </div>
  );
};