import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    
  ]);

  const addNewGoalHandler = (newGoal) => {
    
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  }

  return(
    <div className='course-goals'>
      <h1>Goals List</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  ) 
};

export default App;
