(function (global) {
    // 1. configuration Data extracted from your HTML
    const MILESTONE_DATA = [
        { month: 1, milestones: [{ label: "Startled by loud noises", name: "Startled by loud noise" }] },
        { month: 2, milestones: [{ label: "Smile Responsively", name: "Smile responsively" }] },
        { month: 3, milestones: [
            { label: "Holds Head Up", name: "Holds head up" },
            { label: "Make Simple Sounds (e.g., aah/ooh)", name: "Make simple sounds e.g. aah/ooh" }
        ]},
        { month: 4, milestones: [
            { label: "Wiggles and Kicks with Arms and Legs", name: "Wiggles and kicks with arms and legs" },
            { label: "Communicate hunger, fear, discomfort (through crying or facial expression)", name: "Communicate hunger, fear, discomfort" },
            { label: "Sits with some support", name: "Sits with some support" }
        ]},
        { month: 5, milestones: [
            { label: "Eyes track moving object 180 degrees", name: "Eyes track moving object 180 degrees" },
            { label: "Roll Over", name: "Roll over" }
        ]},
        { month: 6, milestones: [
            { label: "Turns Head to Sounds", name: "Turns head to sounds" },
            { label: "Reach and Grasp Objects", name: "Reach and grasp objects" }
        ]},
        { month: 7, milestones: [{ label: "Sits Well Without Support", name: "Sits well without support" }] },
        { month: 8, milestones: [{ label: "Passes Objects from Hand to Hand (e.g., cube/block)", name: "Passes objects from hand to hand" }] },
        { month: 9, milestones: [
            { label: "Stands Holding On (e.g., hold onto chair)", name: "Stands holding on" },
            { label: "Imitate Simple Speech Sounds (e.g., Baba)", name: "Imitate simple speech sounds" }
        ]},
        { month: 10, milestones: [{ label: "Pull to Standing Position Without Help", name: "Pull to standing position without help" }] },
        { month: 11, milestones: [
            { label: "Begins Placing Objects In and Out of a Container", name: "Begins placing objects in and out of a container" },
            { label: "Plays Simple Game Like Peek-a-Boo", name: "Plays simple game like peek-a-boo" },
            { label: "Copies Simple Gestures (e.g., clap)", name: "Copies simple gestures" },
            { label: "Crawls on Hands and Knees", name: "Crawls on hands and knees" }
        ]},
        { month: 14, milestones: [
            { label: "Stand Without Support", name: "Stand without support" },
            { label: "Says Mamma/Bappa Specifically", name: "Says Mamma/Bappa specifically" },
            { label: "Wave Bye-Bye", name: "Wave bye-bye" }
        ]},
        { month: 15, milestones: [{ label: "Asks for Things by Pointing or Using One Word", name: "Asks for things by pointing at or by using one word" }] },
        { month: 16, milestones: [{ label: "Walks Alone", name: "Walks alone" }] },
        { month: 17, milestones: [{ label: "Drink from Cup", name: "Drink from cup" }] },
        { month: 21, milestones: [{ label: "Build a Tower of 2 Cubes (e.g., 1 cube on top of the other)", name: "Build a tower of 2 cubes" }] },
        { month: 24, milestones: [{ label: "Kicks Ball Forward", name: "Kicks ball forward" }] },
        { month: 25, milestones: [{ label: "Point to 2 Pictures", name: "Point to 2 pictures" }] },
        { month: 27, milestones: [{ label: "Combine 2 Words/Simple Sentences (e.g., play ball)", name: "Combine 2 words/simple sentences e.g. play ball" }] },
        { month: 29, milestones: [{ label: "Name 1 Picture", name: "Name 1 picture" }] },
        { month: 30, milestones: [{ label: "Points to Body Parts", name: "Points to body parts" }] },
        { month: 34, milestones: [{ label: "Throw Ball", name: "Throw ball" }] },
        { month: 36, milestones: [
            { label: "Carries on a Conversation Using 2 to 3 Sentences", name: "Carries on a conversation using 2 to 3 sentences" },
            { label: "Sorts Out Objects by Shape and Color", name: "Sorts out objects by shape and colour" },
            { label: "Runs Easily", name: "Runs easily" },
            { label: "Pretend Play", name: "Pretend play" }
        ]},
        { month: 37, milestones: [{ label: "Names 4 Pictures", name: "Names 4 pictures" }] },
        { month: 38, milestones: [{ label: "Name Friend/Sibling", name: "Name friend/sibling" }] },
        { month: 40, milestones: [{ label: "Can Say Own Age/Sex/Name", name: "Can say own age/sex/name" }] },
        { month: 45, milestones: [{ label: "Name 1 Colour", name: "Name 1 colour" }] },
        { month: 48, milestones: [
            { label: "Walks Up and Down Stairs, One Foot on Each Step", name: "Walks up and down stairs, one foot on each step" },
            { label: "Catches a Bouncing Ball Most of the Time", name: "Catches a bouncing ball most of the time" },
            { label: "Scribble on Paper", name: "Scribble on paper" }
        ]},
        { month: 49, milestones: [
            { label: "Retells a Familiar Story", name: "Retells a familiar story" },
            { label: "Copies a Circle", name: "Copies a circle" }
        ]},
        { month: 51, milestones: [{ label: "Hops", name: "Hops" }] },
        { month: 52, milestones: [{ label: "Speech Fully Understandable", name: "Speech fully understandable" }] },
        { month: 53, milestones: [{ label: "Counts 1 to 10 in Correct Sequence", name: "Counts 1 to 10 in correct sequencee" }] },
        { month: 54, milestones: [{ label: "Dresses on Their Own or with Little Help", name: "Dresses on their own or with little help" }] },
        { month: 56, milestones: [{ label: "Draw a Person", name: "Draw a person" }] },
        { month: 60, milestones: [{ label: "Brushes Teeth Without Help", name: "Brushes teeth without help" }] }
    ];

    class MilestoneTracker {
        constructor(containerId) {
            this.container = document.getElementById(containerId);
            if (!this.container) {
                console.error(`MilestoneTracker: Container with ID '${containerId}' not found.`);
                return;
            }
            this.init();
        }

        init() {
            this.render();
            this.attachEvents();
        }

        render() {
            let html = '';

            MILESTONE_DATA.forEach(group => {
                html += `
                <div class="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm" data-month="${group.month}">
                    <h5 class="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
                        ${group.month} Months Milestones
                    </h5>
                    <div class="space-y-4">
                `;

                group.milestones.forEach(item => {
                    // Generate unique ID for accessibility
                    const inputId = `ms-${group.month}-${item.name.replace(/\s+/g, '-').toLowerCase()}`;
                    
                    html += `
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <label class="text-sm font-medium text-gray-700 italic sm:w-2/3" for="${inputId}">
                            ${item.label}
                        </label>
                        <div class="sm:w-1/3">
                            <select 
                                id="${inputId}" 
                                name="${item.name}" 
                                required
                                class="milestone-select block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3 border bg-white"
                            >
                                <option value="" disabled selected>No/Yes</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="Undef">Undef</option>
                                <option value="reset">Reset</option>
                            </select>
                        </div>
                    </div>
                    `;
                });

                html += `
                    </div>
                </div>
                `;
            });

            this.container.innerHTML = html;
        }

        attachEvents() {
            // Handle the "Reset" option logic specifically
            this.container.addEventListener('change', (e) => {
                if (e.target.classList.contains('milestone-select')) {
                    if (e.target.value === 'reset') {
                        e.target.value = ""; // Reset to placeholder
                    }
                    this.updateProgress(e.target);
                }
            });
        }

        // Utility to get all data as a JSON object
        getData() {
            const formData = {};
            const selects = this.container.querySelectorAll('select');
            selects.forEach(select => {
                if (select.value && select.value !== 'reset') {
                    formData[select.name] = select.value;
                }
            });
            return formData;
        }

        // Visual feedback helper (Optional)
        updateProgress(element) {
            // Add visual logic here if needed (e.g. turn border green if Yes)
            if(element.value === 'Yes') {
                element.classList.add('border-green-500', 'bg-green-50');
            } else {
                element.classList.remove('border-green-500', 'bg-green-50');
            }
        }
    }

    // Expose to global scope
    global.MilestoneTracker = MilestoneTracker;

})(window);
