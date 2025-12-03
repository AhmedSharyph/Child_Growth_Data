// newCHR_Milestones.js
/**
 * newCHR_Milestones Library
 * Version: 1.3.0
 * Description: Render milestones by month with required milestone fields.
 * Adds ONE optional additional note per month.
 * License: MIT
 */

const newCHR_Milestones = (() => {

  // --- Milestones Data ---
  const milestonesData = [
    {month: 2, category: "Social/Emotional Milestones", label: "Calms down when spoken to or picked up", name: "calms_down_when_spoken_or_picked_up"},
    {month: 2, category: "Social/Emotional Milestones", label: "Looks at your face", name: "looks_at_your_face"},
    {month: 2, category: "Language/Communication Milestones", label: "Makes sounds other than crying", name: "makes_sounds_other_than_crying"},
    {month: 2, category: "Language/Communication Milestones", label: "Reacts to loud sounds", name: "reacts_to_loud_sounds"},
    {month: 2, category: "Cognitive Milestones", label: "Watches you as you move", name: "watches_you_as_you_move"},
    {month: 2, category: "Cognitive Milestones", label: "Looks at a toy for several seconds", name: "looks_at_toy_for_several_seconds"},
    {month: 2, category: "Movement/Physical Development", label: "Holds head up when on tummy", name: "holds_head_up_on_tummy"},
    {month: 2, category: "Movement/Physical Development", label: "Moves both arms and both legs", name: "moves_both_arms_and_legs"},
    {month: 2, category: "Movement/Physical Development", label: "Opens hands briefly", name: "opens_hands_briefly"},
  ];

  // --- Category color mapping ---
  const categoryColors = {
    "Social/Emotional Milestones": "bg-blue-100 border-blue-400",
    "Language/Communication Milestones": "bg-green-100 border-green-400",
    "Cognitive Milestones": "bg-yellow-100 border-yellow-400",
    "Movement/Physical Development": "bg-pink-100 border-pink-400"
  };

  // --- Get milestones by month ---
  const getByMonth = (month) => milestonesData.filter(m => m.month === month);

  // --- Create Yes/No select (required) ---
  function createSelect(name) {
    const select = document.createElement("select");
    select.id = name;
    select.name = name;
    select.required = true; // REQUIRED
    select.className = "border border-gray-300 rounded px-2 py-1 w-full";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select";
    select.appendChild(defaultOption);

    ["Yes", "No"].forEach(val => {
      const opt = document.createElement("option");
      opt.value = val;
      opt.textContent = val;
      select.appendChild(opt);
    });

    return select;
  }

  // --- Render milestones form ---
  function renderForm(month, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    const milestones = getByMonth(month);
    if (!milestones.length) {
      container.innerHTML = `<p class="text-gray-500">No milestones available for ${month} month(s)</p>`;
      return;
    }

    const categories = [...new Set(milestones.map(m => m.category))];

    categories.forEach(category => {
      const catBox = document.createElement("div");
      catBox.className = "mb-6 p-3 rounded shadow bg-white";

      const title = document.createElement("h3");
      title.className = "font-semibold text-lg mb-3";
      title.textContent = category;
      catBox.appendChild(title);

      const filtered = milestones.filter(m => m.category === category);
      const colorClass = categoryColors[category] || "bg-gray-100 border-gray-300";

      filtered.forEach((m, index) => {
        const row = document.createElement("div");
        row.className = `mb-2 p-2 rounded border ${colorClass} ${index % 2 ? "opacity-80" : "opacity-95"}`;

        const label = document.createElement("label");
        label.className = "block mb-1 font-medium";
        label.htmlFor = m.name;
        label.textContent = m.label;

        const select = createSelect(m.name);

        row.appendChild(label);
        row.appendChild(select);
        catBox.appendChild(row);
      });

      container.appendChild(catBox);
    });

    // --- ONE OPTIONAL ADDITIONAL NOTE FIELD FOR THE MONTH ---
    const noteWrapper = document.createElement("div");
    noteWrapper.className = "mt-6 bg-white p-4 rounded shadow";

    const noteLabel = document.createElement("label");
    noteLabel.className = "block mb-1 font-semibold";
    noteLabel.textContent = `Additional Notes for Month ${month} (Optional)`;

    const noteInput = document.createElement("textarea");
    noteInput.className = "w-full border border-gray-300 rounded p-2";
    noteInput.rows = 3;
    noteInput.name = `${month}_additional_note`;
    noteInput.required = false; // optional

    noteWrapper.appendChild(noteLabel);
    noteWrapper.appendChild(noteInput);

    container.appendChild(noteWrapper);
  }

  return {
    getByMonth,
    createSelect,
    renderForm
  };

})();
