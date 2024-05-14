"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FadeUpOnScroll from '../../../components/FadeUpOnScroll';

type TeamMember = {
  name: string;
  position: string;
  picture: string;
};

const Team: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        const data = await response.json();
        const customPositions = ['Manager', 'Developer', 'Designer', 'Marketing', 'Sales', 'Support'];
        const members: TeamMember[] = data.results.map((result: any, index: number) => ({
          name: `${result.name.first} ${result.name.last}`,
          position: customPositions[index],
          picture: result.picture.large,
        }));
        setTeamMembers(members);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <section className="p-4 md:p-12 flex justify-center">
      <FadeUpOnScroll>
        <h1 className="text-4xl md:text-6xl text-pink-600 text-center font-bold mb-8">Pimpinan</h1>
        <div className="overflow-x-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">Board of Directors</h2>
          <div className="gap-4 md:gap-16 flex flex-wrap md:flex-no-wrap overflow-x-auto">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div key={member.name} className="flex-none bg-white rounded-lg shadow-md p-4 md:mr-4 mb-6 md:mb-0 w-full md:w-auto">
                <Image src={member.picture} alt={member.name} width={256} height={256} className="w-64 h-64 mx-auto rounded-full mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <h2 className="text-4xl md:text-6xl font-bold my-8 text-center">Board of Commissioners</h2>
          <div className="gap-4 md:gap-16 flex flex-wrap md:flex-no-wrap overflow-x-auto">
            {teamMembers.slice(3, 6).map((member, index) => (
              <div key={member.name} className="flex-none bg-white rounded-lg shadow-md p-4 md:mr-4 mb-6 md:mb-0 w-full md:w-auto">
                <Image src={member.picture} alt={member.name} width={256} height={256} className="w-64 h-64 mx-auto rounded-full mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeUpOnScroll>
    </section>
  );
};

export default Team;
