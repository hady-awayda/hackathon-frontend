import React from 'react';
import './dashboard.css';

const dummyIdeas = [
  { name: 'Idea 1', successRate: 98, tips: 'Keep it up!' },
  { name: 'Idea 2', successRate: 32, tips: 'Need New Idea' },
  { name: 'Idea 3', successRate: 65, tips: 'Need more Budget' },
  { name: 'Idea 4', successRate: 50, tips: 'Consider market research' },
  { name: 'Idea 5', successRate: 75, tips: 'Expand your team' },
];

const Dashboard = ({ ideas = dummyIdeas, deleteIdea }) => {
  return (
    <div className="idea-list">
      <h2>Welcome back Mohammad</h2>
      <table>
        <thead>
          <tr>
            <th>Idea Name</th>
            <th>Success rate</th>
            <th>Tips</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ideas.map((idea, index) => (
            <tr key={index}>
              <td>{idea.name}</td>
              <td className={idea.successRate >= 80 ? 'success' : idea.successRate < 50 ? 'danger' : 'warning'}>
                {idea.successRate}%
              </td>
              <td>{idea.tips}</td>
              <td><button onClick={() => deleteIdea ? deleteIdea(index) : null} className="delete-btn">🗑</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
