function renderMalla(subjects) {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";
  let doneCount = 0;

  subjects.forEach(subject => {
    const div = document.createElement("div");
    div.className = "subject";
    div.textContent = subject.name;

    const prerequisitesMet = subject.prerequisites.every(p =>
      subjects.find(s => s.name === p)?.done
    );

    if (subject.done) {
      div.classList.add("done");
      doneCount++;
    } else if (!prerequisitesMet) {
      div.classList.add("locked");
    }

    div.addEventListener("click", () => {
      if (!div.classList.contains("locked")) {
        subject.done = !subject.done;
        localStorage.setItem("malla-industrial", JSON.stringify(subjects));
        renderMalla(subjects);
      }
    });

    malla.appendChild(div);
  });

  const progress = Math.round((doneCount / subjects.length) * 100);
  document.getElementById("progress").textContent = `Avance: ${progress}%`;
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("malla-industrial");
  const subjects = saved ? JSON.parse(saved) : SUBJECTS;
  renderMalla(subjects);
});
