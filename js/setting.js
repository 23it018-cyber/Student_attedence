// Load saved settings on page load
window.onload = function () {
    const settings = JSON.parse(localStorage.getItem("settings"));

    if (settings) {
        schoolName.value = settings.schoolName;
        academicYear.value = settings.academicYear;
        schoolEmail.value = settings.schoolEmail;
        closeTime.value = settings.closeTime;
        minAttendance.value = settings.minAttendance;
        lateEntry.value = settings.lateEntry;
        maxLeave.value = settings.maxLeave;
        medicalAfter.value = settings.medicalAfter;
        fineAmount.value = settings.fineAmount;
        emailNotify.value = settings.emailNotify;
        hodNotify.value = settings.hodNotify;
    }
};

// Save settings
function saveSettings() {
    if (schoolName.value === "" || schoolEmail.value === "") {
        alert("School Name and Email are required!");
        return;
    }

    const settings = {
        schoolName: schoolName.value,
        academicYear: academicYear.value,
        schoolEmail: schoolEmail.value,
        closeTime: closeTime.value,
        minAttendance: minAttendance.value,
        lateEntry: lateEntry.value,
        maxLeave: maxLeave.value,
        medicalAfter: medicalAfter.value,
        fineAmount: fineAmount.value,
        emailNotify: emailNotify.value,
        hodNotify: hodNotify.value
    };

    localStorage.setItem("settings", JSON.stringify(settings));
    alert("Settings saved successfully ✅");
}
