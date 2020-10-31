 student = {
         name: 'Ram',
         age: 10,
         hobby: ['Sport', 'Music', 'Read'],
         address: {
             city: 'mumbai',
             state: 'maharashtra'
         }
     }
     // {
     //     name: 'Shyam',
     //     age: 10,
     //     hobby: ['Sport', 'Music', 'Read'],
     //     address: {
     //         city: 'mumbai',
     //         state: 'maharashtra'
     //     }
     // } {
     //     name: 'Krishna',
     //     age: 10,
     //     hobby: ['Sport', 'Music', 'Read'],
     //     address: {
     //         city: 'mumbai',
     //         state: 'maharashtra'
     //     }
     // },
     // {
     //     name: 'Shrikant',
     //     age: 10,
     //     hobby: ['Sport', 'Music', 'Read'],
     //     address: {
     //         city: 'mumbai',
     //         state: 'maharashtra'
     //     }
     // }

 //console.log(student);

 for (const prop in student) {
     var stud = student[prop];
     if (stud instanceof Array) {
         for (const i in stud)
             console.log('hobby: ' + stud[i]);
     } else if (typeof stud == 'object') {
         for (const key in stud) {
             console.log(key + ':' + stud[key])
         }
     } else if (typeof stud == 'function') {
         stud();
     } else
         console.log(stud);
 }