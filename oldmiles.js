<script>
/**
 * GLOBAL MILESTONES LIBRARY
 * Author: Your Team
 * Usage: window.Milestones.render(containerId, month)
 */

window.Milestones = (function () {

  /* =========================
     MILESTONE DATA
     ========================= */

  const DATA = [
    // ---- 2 MONTHS ----
    { month: 2, label: "Startled by loud noise" },
    { month: 2, label: "Smile responsively" },
    { month: 2, label: "Holds head up" },
    { month: 2, label: "Make simple sounds e.g. aah/ooh" },
    { month: 2, label: "Wiggles and kicks with arms and legs" },
    { month: 2, label: "Communicate hunger, fear, discomfort" },

    // ---- 4 MONTHS ----
    { month: 4, label: "Sits with some support" },
    { month: 4, label: "Eyes track moving object 180 degrees" },
    { month: 4, label: "Roll over" },
    { month: 4, label: "Turns head to sounds" },
    { month: 4, label: "Reach and grasp objects" },

    // ---- 6 MONTHS ----
    { month: 6, label: "Sits well without support" },
    { month: 6, label: "Passes objects from hand to hand" },
    { month: 6, label: "Stands holding on" },
    { month: 6, label: "Imitate simple speech sounds" },

    // ---- 9 MONTHS ----
    { month: 9, label: "Pull to standing position without help" },
    { month: 9, label: "Begins placing objects in and out of a container" },
    { month: 9, label: "Plays simple game like peek-a-boo" },
    { month: 9, label: "Copies simple gestures" },
    { month: 9, label: "Crawls on hands and knees" },

    // ---- 12 MONTHS ----
    { month: 12, label: "Stand without support" },
    { month: 12, label: "Says Mamma/Bappa specifically" },
    { month: 12, label: "Wave bye-bye" },
    { month: 12, label: "Asks for things by pointing or using one word" },

    // ---- 15 MONTHS ----
    { month: 15, label: "Walks alone" },
    { month: 15, label: "Drink from cup" },
    { month: 15, label: "Build a tower of 2 cubes" },
    { month: 15, label: "Kicks ball forward" },

    // ---- 18 MONTHS ----
    { month: 18, label: "Point to 2 pictures" },
    { month: 18, label: "Combine 2 words/simple sentences e.g. play ball" },
    { month: 18, label: "Name 1 picture" },
    { month: 18, label: "Points to body parts" },

    // ---- 24 MONTHS ----
    { month: 24, label: "Throw ball" },
    { month: 24, label: "Carries on a conversation using 2–3 sentences" },
    { month: 24, label: "Sorts objects by shape and colour" },
    { month: 24, label: "Runs easily" },
    { month: 24, label: "Pretend play" },

    // ---- 36 MONTHS ----
    { month: 36, label: "Names 4 pictures" },
    { month: 36, label: "Name friend/sibling" },
    { month: 36, label: "Can say own age/sex/name" },
    { month: 36, label: "Name 1 colour" },

    // ---- 48 MONTHS ----
    { month: 48, label: "Walks up and down stairs one foot each step" },
    { month: 48, label: "Catches a bouncing ball most of the time" },
    { month: 48, label: "Scribble on paper" },
    { month: 48, label: "Retells a familiar story" },
    { month: 48, label: "Copies a circle" },

    // ---- 60 MONTHS ----
    { month: 60, label: "Hops" },
    { month: 60, label: "Speech fully understandable" },
    { month: 60, label: "Counts 1–10 in correct sequence" },
    { month: 60, label: "Dresses on their own or with little help" },
    { month: 60, label: "Draw a person" },
    { month: 60, label: "Brushes teeth without help" }
  ];

  /* =========================
     RENDER FUNCTION
     ========================= */

  function render(containerId, month) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    const filtered = DATA.filter(m => m.month === Number(month));

    filtered.forEach((item, index) => {
      const name = `milestone_${month}_${index}`;

      container.insertAdjacentHTML("beforeend", `
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">
            ${item.label}
          </label>

          <select
            name="${name}"
            required
            class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   bg-white"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="undef">undef</option>
          </select>
        </div>
      `);
    });
  }

  /* =========================
     PUBLIC API
     ========================= */

  return {
    render,
    data: DATA
  };

})();
</script>

