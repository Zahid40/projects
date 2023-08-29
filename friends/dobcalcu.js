let arr = {dob: "2004-09-04T18:30:00.000Z"};

const db = arr["dob"];
for(const key in arr){
    const value = arr[key];
    console.log(value);
}

function mindob() {
    let currenttime = new Date();
    let dobTime = new Date(db);
    let timeDiff = currenttime.getTime() - dobTime.getTime();
    let total_minutes = timeDiff / (1000 * 60); // converting milliseconds to minutes
    console.log(total_minutes);
}
mindob();
