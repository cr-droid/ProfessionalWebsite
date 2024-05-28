import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  padding: 20px;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
`;


const Experience = () => (
  <Section id="experience">
    <h2>Experience</h2>
    <div>
      <h3>Flight Booking System</h3>
      <p>
        System, using C++, that allows companies to securely store user login credentials, manage user itineraries, and manage flight
        booking data. Offers encryption and decryption of user data, while also offering smooth user itinerary management.
        Allows companies to store, filter or update flight booking data conveniently.
      </p>
      <p>Responsibilities and achievements: Handled user login credentials for confidentiality using encryption and
          decryption. Safely updating seating data for each plane. Saved this information on CSVs.</p>
      <h3>Amazon Store Management System</h3>
      <p>
        System, using java and SQL, that allows Amazon users to buy or manage inventory depending on who is logging in.
        Managers and admins can manage inventory. While customers can only make purchases, as well as admins and managers. 
      </p>
      <p>Responsibilities and achievements: Handled user login, to ensure that the correct permissions were given to
        each user. Created SQL queries to retrieve the necessary information or update the necessary information.</p>
      <h3>Project in Database Systems</h3>
      <p>
        System, using python and SQL, that analyzed crime data across 5 different cities (LA, NYC, Austin, Chicago, and Philadelphia).
        Used pySpark and Hadoop to make these analysis. The analysis gave you information such as the top 3 most common
        crimes in each zip code, along with the racial demographics of the respective zip code. 
      </p>
      <p>Responsibilities and achievements: Match each crime record (roughly 22 million records) with a zip code. Created scripts
        that found the top 3 most common crimes in each zip code.
      </p>
    </div>
  </Section>
);

export default Experience;
