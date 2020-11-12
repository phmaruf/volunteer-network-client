import React from 'react';
import Task from '../Task/Task';

export const tasks = [
    {
        name: 'Animal Shelter',
        pic: 'animalShelter.png',
        id: 1
    },
    {
        name: 'Baby Sit',
        pic: 'babySit.png',
        id: 2
    },
    {
        name: 'Bird House',
        pic: 'birdHouse.png',
        id: 3
    },
    {
        name: 'Child Support',
        pic: 'childSupport.png', 
        id: 4
    },
    {
        name: 'Clean Park',
        pic: 'cleanPark.png',
        id: 5
    },
    {
        name: 'Clean Water',
        pic: 'cleanWater.png',
        id: 6 
    },
    {
        name: 'Cloth Shop',
        pic: 'clothShop.png',
        id: 7
    },
    {
        name: 'Drive Safety',
        pic: 'driveSafety.png',
        id: 8
    },
    {
        name: 'Food Charity',
        pic: 'foodCharity.png',
        id: 9
    },
    {
        name: 'Good Education',
        pic: 'goodEducation.png',
        id: 10
    },
    {
        name: 'IT Help for Adult',
        pic: 'ITHelp.png',
        id: 11
    },
    {
        name: 'Library Books',
        pic: 'libraryBooks.png',
        id: 12
    },
    {
        name: 'Music Lesson',
        pic: 'musicLessons.png',
        id: 13
    },
    {
        name: 'New Books for Children',
        pic: 'newBooks.png',
        id: 14
    },
    {
        name: 'Refuse Shelter',
        pic: 'refuseShelter.png',
        id: 15
    },
    {
        name: 'River Clean',
        pic: 'riverClean.png',
        id: 16
    },
    {
        name: 'School Supplies',
        pic: 'schoolSupplies.png',
        id: 17
    },
    {
        name: 'Study Group',
        pic: 'studyGroup.png',
        id: 18
    },
    {
        name: 'Stuffed Animals',
        pic: 'stuffedAnimals.png',
        id: 19
    },
    {
        name: 'Vote Register',
        pic: 'voteRegister.png',
        id: 20
    },
    
]


const Card = () => {
    return (
        <div className="row">
            {
                tasks.map(task => <Task task={task}></Task>)
            } 
        </div>
    );
};

export default Card;