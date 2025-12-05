// newCHR_Milestones.js
/**
 * newCHR_Milestones Library
 * Version: 2.1
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

    {month: 4, category: "Social/Emotional Milestones", label: "Smiles on his own to get your attention", name: "smiles_to_get_attention"},
{month: 4, category: "Social/Emotional Milestones", label: "Chuckles when you try to make her laugh", name: "chuckles_when_trying_to_laugh"},
{month: 4, category: "Social/Emotional Milestones", label: "Looks at you, moves, or makes sounds to get or keep your attention", name: "seeks_attention"},
{month: 4, category: "Language/Communication Milestones", label: "Makes sounds like “mamamama” and “babababa”", name: "babbles_mamamama_babababa"},
{month: 4, category: "Language/Communication Milestones", label: "Lifts arms up to be picked up", name: "lifts_arms_to_be_picked_up"},
{month: 4, category: "Cognitive Milestones", label: "Looks for objects when dropped out of sight", name: "looks_for_hidden_objects"},
{month: 4, category: "Movement/Physical Development", label: "Holds head steady without support when you are holding her", name: "holds_head_steady"},
{month: 4, category: "Movement/Physical Development", label: "Holds a toy when you put it in his hands", name: "holds_toy"},
{month: 4, category: "Movement/Physical Development", label: "Uses her arms to swing at toys", name: "swings_at_toys"},
{month: 4, category: "Movement/Physical Development", label: "Brings hands to mouth", name: "hands_to_mouth"},
{month: 4, category: "Movement/Physical Development", label: "Pushes up onto elbows/forearms when on tummy", name: "pushes_up_on_forearms"},

    {month: 6, category: "Social/Emotional Milestones", label: "Knows familiar people", name: "knows_familiar_people"},
{month: 6, category: "Social/Emotional Milestones", label: "Likes to look at himself in a mirror", name: "likes_mirror"},
{month: 6, category: "Social/Emotional Milestones", label: "Laughs", name: "laughs"},

{month: 6, category: "Language/Communication Milestones", label: "Takes turns making sounds with you", name: "takes_turns_making_sounds"},
{month: 6, category: "Language/Communication Milestones", label: "Blows “raspberries” (sticks tongue out and blows)", name: "blows_raspberries"},
{month: 6, category: "Language/Communication Milestones", label: "Makes squealing noises", name: "makes_squealing_noises"},

{month: 6, category: "Cognitive Milestones", label: "Puts things in her mouth to explore them", name: "puts_things_in_mouth"},
{month: 6, category: "Cognitive Milestones", label: "Reaches to grab a toy he wants", name: "reaches_for_toy"},
{month: 6, category: "Cognitive Milestones", label: "Closes lips to show she doesn’t want more food", name: "closes_lips_not_want_food"},

{month: 6, category: "Movement/Physical Development", label: "Rolls from tummy to back", name: "rolls_tummy_to_back"},
{month: 6, category: "Movement/Physical Development", label: "Pushes up with straight arms when on tummy", name: "pushes_up_straight_arms"},
{month: 6, category: "Movement/Physical Development", label: "Leans on hands to support himself when sitting", name: "leans_on_hands_sitting"},


{month: 9, category: "Social/Emotional Milestones", label: "Is shy, clingy, or fearful around strangers", name: "shy_or_fearful_strangers"},
{month: 9, category: "Social/Emotional Milestones", label: "Shows several facial expressions", name: "shows_facial_expressions"},
{month: 9, category: "Social/Emotional Milestones", label: "Looks when you call her name", name: "looks_when_called"},
{month: 9, category: "Social/Emotional Milestones", label: "Reacts when you leave", name: "reacts_when_you_leave"},

{month: 9, category: "Language/Communication Milestones", label: "Makes a lot of different sounds", name: "makes_various_sounds"},
{month: 9, category: "Language/Communication Milestones", label: "Looks at you when you say \"no\"", name: "looks_when_said_no"},
{month: 9, category: "Language/Communication Milestones", label: "Lifts arms to be picked up", name: "lifts_arms_to_pick_up"},

{month: 9, category: "Cognitive Milestones", label: "Looks for objects when dropped out of sight", name: "looks_for_hidden_objects"},
{month: 9, category: "Cognitive Milestones", label: "Bangs two things together", name: "bangs_two_objects"},

{month: 9, category: "Movement/Physical Development", label: "Gets to a sitting position by himself", name: "gets_to_sitting"},
{month: 9, category: "Movement/Physical Development", label: "Moves things from one hand to the other", name: "transfers_objects_between_hands"},
{month: 9, category: "Movement/Physical Development", label: "Uses fingers to rake food toward himself", name: "rakes_food_with_fingers"},
{month: 9, category: "Movement/Physical Development", label: "Sits without support", name: "sits_without_support"},
    
{month: 12, category: "Social/Emotional Milestones", label: "Plays games like “peek-a-boo”", name: "plays_peekaboo"},
{month: 12, category: "Social/Emotional Milestones", label: "Hands you a book when he wants to hear a story", name: "hands_book_to_hear_story"},
{month: 12, category: "Social/Emotional Milestones", label: "Cries when parents leave", name: "cries_when_parents_leave"},

{month: 12, category: "Language/Communication Milestones", label: "Waves “bye-bye”", name: "waves_bye"},
{month: 12, category: "Language/Communication Milestones", label: "Calls a parent “mama” or “dada” or another special name", name: "says_mama_dada"},
{month: 12, category: "Language/Communication Milestones", label: "Understands “no”", name: "understands_no"},

{month: 12, category: "Cognitive Milestones", label: "Puts things in a container", name: "puts_things_in_container"},
{month: 12, category: "Cognitive Milestones", label: "Looks for things he sees you hide", name: "looks_for_hidden_items"},

{month: 12, category: "Movement/Physical Development", label: "Pulls up to stand", name: "pulls_up_to_stand"},
{month: 12, category: "Movement/Physical Development", label: "Cruises by holding onto furniture", name: "cruises_on_furniture"},
{month: 12, category: "Movement/Physical Development", label: "Drinks from a cup without a lid with help", name: "drinks_from_cup_with_help"},

{month: 15, category: "Social/Emotional Milestones", label: "Copies other children while playing, like taking toys out of a box when another child does", name: "copies_other_children"},
{month: 15, category: "Social/Emotional Milestones", label: "Shows you an object they like", name: "shows_you_object_liked"},
{month: 15, category: "Social/Emotional Milestones", label: "Claps when excited", name: "claps_when_excited"},
{month: 15, category: "Social/Emotional Milestones", label: "Hugs stuffed doll or toy", name: "hugs_toy"},

{month: 15, category: "Language/Communication Milestones", label: "Tries to say one or two words besides “mama” or “dada”", name: "tries_to_say_new_words"},
{month: 15, category: "Language/Communication Milestones", label: "Looks at familiar objects when you name them", name: "looks_at_named_objects"},
{month: 15, category: "Language/Communication Milestones", label: "Follows directions given with both a gesture and words", name: "follows_gesture_and_word"},

{month: 15, category: "Cognitive Milestones", label: "Tries to use things the right way, like a phone or book", name: "tries_to_use_things_correctly"},
{month: 15, category: "Cognitive Milestones", label: "Stacks at least 2 small objects", name: "stacks_two_small_objects"},

{month: 15, category: "Movement/Physical Development", label: "Takes a few steps on his own", name: "takes_few_steps"},
{month: 15, category: "Movement/Physical Development", label: "Uses fingers to feed herself small pieces of food", name: "uses_fingers_to_feed"},
    

{month: 18, category: "Social/Emotional Milestones", label: "Moves away from you, but looks to make sure you are close by", name: "moves_away_but_checks_back"},
{month: 18, category: "Social/Emotional Milestones", label: "Points to show you something interesting", name: "points_at_things"},
{month: 18, category: "Social/Emotional Milestones", label: "Puts hands out for you to wash them", name: "puts_hands_out_to_wash"},
{month: 18, category: "Social/Emotional Milestones", label: "Looks at a few pages in a book with you", name: "looks_at_book_pages"},

{month: 18, category: "Language/Communication Milestones", label: "Says at least 3 words besides “mama” or “dada”", name: "says_three_words"},
{month: 18, category: "Language/Communication Milestones", label: "Follows one-step directions without gestures", name: "follows_one_step_no_gesture"},

{month: 18, category: "Cognitive Milestones", label: "Copies you doing chores, like sweeping", name: "copies_chores"},
{month: 18, category: "Cognitive Milestones", label: "Plays with toys in a simple way", name: "simple_toy_play"},

{month: 18, category: "Movement/Physical Development", label: "Walks without holding on to anyone or anything", name: "walks_independently"},
{month: 18, category: "Movement/Physical Development", label: "Climbs on and off a couch or chair without help", name: "climbs_without_help"},
{month: 18, category: "Movement/Physical Development", label: "Drinks from a cup without a lid and may spill", name: "drinks_from_open_cup"},


{month: 24, category: "Social/Emotional Milestones", label: "Notices when others are hurt or upset", name: "notices_others_upset"},
{month: 24, category: "Social/Emotional Milestones", label: "Looks at your face to see how to react to a new situation", name: "looks_at_your_face_for_reaction"},

{month: 24, category: "Language/Communication Milestones", label: "Says at least two words together like 'More milk'", name: "two_word_phrases"},
{month: 24, category: "Language/Communication Milestones", label: "Points to things in a book when you ask", name: "points_in_book_when_asked"},
{month: 24, category: "Language/Communication Milestones", label: "Uses gestures like blowing a kiss or nodding yes", name: "uses_gestures"},

{month: 24, category: "Cognitive Milestones", label: "Holds something in one hand while using the other", name: "holds_in_one_hand_uses_other"},
{month: 24, category: "Cognitive Milestones", label: "Tries to use switches, knobs, or buttons on a toy", name: "uses_switches_knobs_buttons"},
{month: 24, category: "Cognitive Milestones", label: "Plays with more than one toy at the same time", name: "plays_with_multiple_toys"},

{month: 24, category: "Movement/Physical Development", label: "Kicks a ball", name: "kicks_ball"},
{month: 24, category: "Movement/Physical Development", label: "Runs", name: "runs"},
{month: 24, category: "Movement/Physical Development", label: "Walks (not climbs) up a few stairs with or without help", name: "walks_up_stairs"},
    
 {month: 30, category: "Social/Emotional Milestones", label: "Plays next to other children and sometimes plays with them", name: "parallel_play"},
{month: 30, category: "Social/Emotional Milestones", label: "Shows you what she can do by saying 'Look at me!'", name: "shows_what_they_can_do"},
{month: 30, category: "Social/Emotional Milestones", label: "Follows simple routines like cleaning up toys", name: "follows_simple_routines"},

{month: 30, category: "Language/Communication Milestones", label: "Says about 50 words", name: "says_50_words"},
{month: 30, category: "Language/Communication Milestones", label: "Says two or more words together with an action word", name: "two_or_more_words_with_action"},
{month: 30, category: "Language/Communication Milestones", label: "Names things in a book when you point to them", name: "names_book_items"},

{month: 30, category: "Cognitive Milestones", label: "Uses things to pretend", name: "pretend_uses_things"},
{month: 30, category: "Cognitive Milestones", label: "Shows simple problem-solving skills", name: "simple_problem_solving"},
{month: 30, category: "Cognitive Milestones", label: "Builds a tower of more than 4 blocks", name: "builds_tower_over_4"},

{month: 30, category: "Movement/Physical Development", label: "Uses hands to twist things like turning doorknobs", name: "twists_doorknobs"},
{month: 30, category: "Movement/Physical Development", label: "Takes some clothes off by himself", name: "takes_clothes_off"},
{month: 30, category: "Movement/Physical Development", label: "Jumps off the ground with both feet", name: "jumps_with_both_feet"},

    {month: 36, category: "Social/Emotional Milestones", label: "Calms down within 10 minutes after you leave", name: "calms_after_parent_leaves"},
{month: 36, category: "Social/Emotional Milestones", label: "Notices other children and joins them to play", name: "joins_others_to_play"},

{month: 36, category: "Language/Communication Milestones", label: "Talks with you in conversation using at least 2 back-and-forth exchanges", name: "two_way_conversation"},
{month: 36, category: "Language/Communication Milestones", label: "Asks 'who', 'what', 'where', or 'why' questions", name: "asks_questions"},
{month: 36, category: "Language/Communication Milestones", label: "Says first name when asked", name: "says_first_name"},

{month: 36, category: "Cognitive Milestones", label: "Draws a circle when you show him how", name: "draws_circle"},
{month: 36, category: "Cognitive Milestones", label: "Puts something where it belongs", name: "puts_things_where_they_belong"},
{month: 36, category: "Cognitive Milestones", label: "Screws and unscrews jar lids or turns door handles", name: "screws_unscrews_objects"},

{month: 36, category: "Movement/Physical Development", label: "Strings items together like large beads or pasta", name: "strings_items"},
{month: 36, category: "Movement/Physical Development", label: "Uses a fork", name: "uses_fork"},
{month: 36, category: "Movement/Physical Development", label: "Puts on some clothes by himself", name: "puts_on_clothes"},

{month: 48, category: "Social/Emotional Milestones", label: "Pretends to be something else during play (teacher, dog, superhero)", name: "pretend_play_roles"},
{month: 48, category: "Social/Emotional Milestones", label: "Comforts others who are hurt or sad, like hugging a crying friend", name: "comforts_others"},
{month: 48, category: "Social/Emotional Milestones", label: "Avoids danger, like not jumping from tall heights", name: "avoids_danger"},
{month: 48, category: "Social/Emotional Milestones", label: "Likes to be a “helper”", name: "likes_to_help"},
{month: 48, category: "Social/Emotional Milestones", label: "Talks about what he likes and what he is interested in", name: "talks_about_interests"},

{month: 48, category: "Language/Communication Milestones", label: "Says sentences with 4 or more words", name: "sentences_four_words"},
{month: 48, category: "Language/Communication Milestones", label: "Says some words from a song, story, or nursery rhyme", name: "says_song_rhyme_words"},
{month: 48, category: "Language/Communication Milestones", label: "Talks about at least one thing that happened during the day", name: "talks_about_daily_events"},
{month: 48, category: "Language/Communication Milestones", label: "Answers simple questions like 'What is a coat for?'", name: "answers_simple_questions"},

{month: 48, category: "Cognitive Milestones", label: "Names a few colors of objects", name: "names_colors"},
{month: 48, category: "Cognitive Milestones", label: "Tells what comes next in a known story", name: "tells_what_comes_next"},
{month: 48, category: "Cognitive Milestones", label: "Draws a person with 3 or more body parts", name: "draws_person_three_parts"},

{month: 48, category: "Movement/Physical Development", label: "Catches a large ball most of the time", name: "catches_large_ball"},
{month: 48, category: "Movement/Physical Development", label: "Serves herself food or pours water with adult supervision", name: "serves_food_pours_water"},
{month: 48, category: "Movement/Physical Development", label: "Unbuttons some buttons", name: "unbuttons_buttons"},
{month: 48, category: "Movement/Physical Development", label: "Holds crayon/pencil between fingers and thumb", name: "tripod_crayon_hold"},

{month: 60, category: "Social/Emotional Milestones", label: "Follows rules or takes turns when playing games", name: "follows_rules_takes_turns"},
{month: 60, category: "Social/Emotional Milestones", label: "Sings, dances, or acts for you", name: "performs_for_others"},
{month: 60, category: "Social/Emotional Milestones", label: "Does simple chores like matching socks or clearing the table with help", name: "does_simple_chores"},

{month: 60, category: "Language/Communication Milestones", label: "Tells a story with at least 2 events", name: "tells_story_two_events"},
{month: 60, category: "Language/Communication Milestones", label: "Keeps a conversation going with at least 3 back-and-forth exchanges", name: "three_exchange_conversation"},
{month: 60, category: "Language/Communication Milestones", label: "Uses or recognizes simple rhymes", name: "uses_recognizes_rhymes"},

{month: 60, category: "Cognitive Milestones", label: "Counts to 10", name: "counts_to_ten"},
{month: 60, category: "Cognitive Milestones", label: "Names some numbers between 1 and 5 when asked", name: "names_numbers_1_to_5"},
{month: 60, category: "Cognitive Milestones", label: "Uses words like 'yesterday' or 'tomorrow' correctly", name: "uses_time_words"},

{month: 60, category: "Movement/Physical Development", label: "Hops on one foot", name: "hops_on_one_foot"},
{month: 60, category: "Movement/Physical Development", label: "Buttons some buttons", name: "buttons_buttons"},
{month: 60, category: "Movement/Physical Development", label: "Pours, cuts with supervision, and mashes own food", name: "pours_cuts_mashes_food"},

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
