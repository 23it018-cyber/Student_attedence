// attendance.js

// Auto mark absent after 10 minutes (600000 ms)
let autoAbsentTimer = null;

document.getElementById("autoAbsent").addEventListener("change", function () {
    if (this.checked) {
        autoAbsentTimer = setTimeout(markAllAbsent, 600000);
        alert("Auto Absent enabled. Students will be marked absent after 10 minutes.");
    } else {
        clearTimeout(autoAbsentTimer);
    }
});

// Mark all unmarked students as Absent
function markAllAbsent() {
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        const radios = row.querySelectorAll("input[type='radio']");
        const isMarked = Array.from(radios).some(radio => radio.checked);

        if (!isMarked) {
            row.querySelector(".absent").checked = true;
        }
    });

    alert("Auto Absent applied!");
}

// Save attendance
function saveAttendance() {
    const rows = document.querySelectorAll("tbody tr");
    let attendanceData = [];
    let valid = true;

    rows.forEach(row => {
        const name = row.children[0].innerText;
        const roll = row.children[1].innerText;

        const present = row.querySelector(".present").checked;
        const absent = row.querySelector(".absent").checked;
        const late = row.querySelector(".late").checked;

        if (!present && !absent && !late) {
            valid = false;
        }

        let status = present ? "Present" : absent ? "Absent" : "Late";

        attendanceData.push({
            name,
            roll,
            status
        });
    });

    if (!valid) {
        alert("⚠ Please mark attendance for all students!");
        return;
    }

    console.log("Attendance Saved:", attendanceData);
    alert("✅ Attendance saved successfully!");

    // Example: localStorage (optional)
    localStorage.setItem("attendance", JSON.stringify(attendanceData));
}
