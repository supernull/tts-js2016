var course = {
name: 'JavaScript Applications',
awesome: true,
teachers: ['Assaf', 'Shane'],
students: [
    {
        name: 'Steve',
        computer: {
            OS: 'Linux',
            type: 'laptop'
        }
    },
    {
        name: 'Katy',
        computer: {
            OS: 'OSX',
            type: 'macbook'
        }
    },
    {
        name: 'Chuck',
        computer: {
            OS: 'OSX',
            type: 'macbook'
        }
    }

],
preReqs : {
    skills : ['html', 'css', 'git'],
    equipment: {
        laptop: true,
        OSOptions: ['linux', 'osx']
    }
}
};


//STEP 1
console.log(course.name);

//STEP 2
console.log(course.teachers[1] );

//STEP 3
console.log(course.students[0].name)

//step4
console.log(course.students[1].computer.type);

//step5
console.log(course.preReqs)

//step6
console.log(course.preReqs.equipment.OSOptions[1])

//ste7
console.log(course.preReqs.equipment.OSOptions.join(" or " ))

//step8
var studentsUsingMacs = ["Katy","Chuck"];

console.log(studentsUsingMacs)
