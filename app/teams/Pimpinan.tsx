"use client"
import React, { useState, useEffect, useRef } from 'react';

type TeamMember = {
  name: string;
  position: string;
  picture: string;
};

const Team: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto'; // Enable scrolling
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <img src={member.picture} alt={member.name} className="w-48 h-48 mx-auto rounded-full mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
          <p className="text-gray-600">{member.position}</p>
          <button
            onClick={() => openModal(member)}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            View Profile
          </button>
        </div>
      ))}
      {selectedMember && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={handleModalClick}
        >
          <div className="max-w-screen-xl mx-auto p-4 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">{selectedMember.name}</h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              >
                &#10005;
              </button>
            </div>
            <p className="text-gray-600">{selectedMember.position}</p>
            <img src={selectedMember.picture} alt={selectedMember.name} className="w-64 h-64 mx-auto mt-4 rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
