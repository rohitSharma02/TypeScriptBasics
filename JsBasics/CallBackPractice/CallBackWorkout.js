const missedWorkOut = true;
const attendedWorkout = false;


function CallBackWorkout(callback, error) {
    if (missedWorkOut) {
        error({
            name:'error1: shouldNot',
            message: 'missed Workout'
        });
     } else if (attendedWorkout) {
            error({
                name:'error2: Good',
                message: 'you attended the workout'
            });
        } 
        else {
            callback('Success: Workout and live healthy life');
        }
}

CallBackWorkout((msg) =>{
    console.log("Success"+msg);
}, (error) =>{
    console.log(error.name + error.message);
} )

