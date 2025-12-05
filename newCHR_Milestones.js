//newCHR_Milestones.js
/**
 * newCHR_Milestones Library
 * Version: 2.1
 * Description: Render milestones by month with required milestone fields.
 * Adds ONE optional additional note per month.
 * License: MIT
 *
 * Author: Ahmed Shareef
 * Mobile: +960 7412365
 * GitHub: @AhmedSharyph
 * Website: https://www.ahmedsharyph.mv
 */

const newCHR_Milestones = (() => {

  // --- Milestones Data ---
  const milestonesData = [
const MILESTONES = [
  // ================== 2 Months ==================
  { month: 2, category: "MILESTONE I - Social/Emotional Milestones", label: "Calms down when spoken to or picked up", name: "calms_down" },
  { month: 2, category: "MILESTONE I - Social/Emotional Milestones", label: "Looks at your face", name: "looks_face" },
  { month: 2, category: "MILESTONE I - Social/Emotional Milestones", label: "Seems happy to see you when you walk up to her", name: "happy_see" },
  { month: 2, category: "MILESTONE I - Social/Emotional Milestones", label: "Smiles when you talk to or smile at her", name: "smiles_talk" },
  { month: 2, category: "MILESTONE II - Language/Communication Milestones", label: "Makes sounds other than crying", name: "makes_sounds" },
  { month: 2, category: "MILESTONE II - Language/Communication Milestones", label: "Reacts to loud sounds", name: "reacts_sounds" },
  { month: 2, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Watches you as you move", name: "watches_move" },
  { month: 2, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Looks at a toy for several seconds", name: "looks_toy" },
  { month: 2, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Holds head up when on tummy", name: "holds_head" },
  { month: 2, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Moves both arms and both legs", name: "moves_limbs" },
  { month: 2, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Opens hands briefly", name: "opens_hands" },

  // ================== 4 Months ==================
  { month: 4, category: "MILESTONE I - Social/Emotional Milestones", label: "Smiles on his own to get your attention", name: "smiles_attention" },
  { month: 4, category: "MILESTONE I - Social/Emotional Milestones", label: "Chuckles (not yet a full laugh) when you try to make her laugh", name: "chuckles" },
  { month: 4, category: "MILESTONE I - Social/Emotional Milestones", label: "Looks at you, moves, or makes sounds to get or keep your attention", name: "looks_moves" },
  { month: 4, category: "MILESTONE II - Language/Communication Milestones", label: "Makes sounds like 'oooo', 'aahh' (cooing)", name: "cooing_sounds" },
  { month: 4, category: "MILESTONE II - Language/Communication Milestones", label: "Makes sounds back when you talk to him", name: "respond_sounds" },
  { month: 4, category: "MILESTONE II - Language/Communication Milestones", label: "Turns head towards the sound of your voice", name: "turns_head" },
  { month: 4, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "If hungry, opens mouth when she sees breast", name: "opens_mouth" },
  { month: 4, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Looks at his hands with interest", name: "looks_hands" },
  { month: 4, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Holds head steady without support when you are holding her", name: "steady_head" },
  { month: 4, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Holds a toy when you put it in his hands", name: "holds_toy" },
  { month: 4, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Uses her arms to swing at toys", name: "swing_arms" },
  { month: 4, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Brings hands to mouth", name: "hands_to_mouth" },
  { month: 4, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Pushes up onto elbows/forearms when on tummy", name: "pushes_elbows" },

  // ================== 6 Months ==================
  { month: 6, category: "MILESTONE I - Social/Emotional Milestones", label: "Knows familiar people", name: "knows_people" },
  { month: 6, category: "MILESTONE I - Social/Emotional Milestones", label: "Likes to look at himself in a mirror", name: "looks_mirror" },
  { month: 6, category: "MILESTONE I - Social/Emotional Milestones", label: "Laughs", name: "laughs" },
  { month: 6, category: "MILESTONE II - Language/Communication Milestones", label: "Takes turns making sounds with you", name: "takes_turns" },
  { month: 6, category: "MILESTONE II - Language/Communication Milestones", label: "Blows 'raspberries' (sticks tongue out and blows)", name: "blows_raspberry" },
  { month: 6, category: "MILESTONE II - Language/Communication Milestones", label: "Makes squealing noise", name: "squeals" },
  { month: 6, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Puts things in her mouth to explore them", name: "mouth_explore" },
  { month: 6, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Reaches to grab a toy he wants", name: "reaches_toy" },
  { month: 6, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Closes lips to show she doesn't want more food", name: "closes_lips" },
  { month: 6, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Rolls from tummy to back", name: "rolls" },
  { month: 6, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Pushes up with straight arms when on tummy", name: "pushes_arms" },
  { month: 6, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Leans on hands to support himself when sitting", name: "leans_hands" },

  // ================== 9 Months ==================
  { month: 9, category: "MILESTONE I - Social/Emotional Milestones", label: "Is shy, clingy, or fearful around strangers", name: "shy_stranger" },
  { month: 9, category: "MILESTONE I - Social/Emotional Milestones", label: "Shows several facial expressions, like happy, sad, angry, and surprised", name: "facial_expressions" },
  { month: 9, category: "MILESTONE I - Social/Emotional Milestones", label: "Looks when you call her name", name: "looks_name" },
  { month: 9, category: "MILESTONE I - Social/Emotional Milestones", label: "Reacts when you leave (looks, reaches for you, or cries)", name: "reacts_leave" },
  { month: 9, category: "MILESTONE I - Social/Emotional Milestones", label: "Smiles or laughs when you play peek-a-boo", name: "peekaboo" },
  { month: 9, category: "MILESTONE II - Language/Communication Milestones", label: "Makes different sounds like 'mamamama' and 'babababa'", name: "babbling" },
  { month: 9, category: "MILESTONE II - Language/Communication Milestones", label: "Lifts arms up to be picked up", name: "lifts_arms" },
  { month: 9, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Looks for objects when dropped out of sight (like his spoon or toy)", name: "search_objects" },
  { month: 9, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Bangs two things together", name: "bangs_objects" },

  // ================== 12 Months ==================
  { month: 12, category: "MILESTONE I - Social/Emotional Milestones", label: "Gets to a sitting position by herself", name: "sits_alone" },
  { month: 12, category: "MILESTONE I - Social/Emotional Milestones", label: "Moves things from one hand to another hand", name: "transfer_hands" },
  { month: 12, category: "MILESTONE I - Social/Emotional Milestones", label: "Uses fingers to 'rake' food towards himself", name: "rakes_food" },
  { month: 12, category: "MILESTONE I - Social/Emotional Milestones", label: "Sits without support", name: "sits_no_support" },
  { month: 12, category: "MILESTONE II - Language/Communication Milestones", label: "Plays games with you, like hide and seek", name: "plays_hide_seek" },
  { month: 12, category: "MILESTONE II - Language/Communication Milestones", label: "Waves 'bye-bye'", name: "waves_bye" },
  { month: 12, category: "MILESTONE II - Language/Communication Milestones", label: "Calls a parent by special name eg: mom, dad", name: "calls_parent" },
  { month: 12, category: "MILESTONE II - Language/Communication Milestones", label: "Understands 'no' (pauses briefly or stops when you say it)", name: "understands_no" },
  { month: 12, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Puts something in a container, like a block in a cup", name: "puts_container" },
  { month: 12, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Looks for things he sees you hide, like a toy under a blanket", name: "finds_hidden" },
  { month: 12, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Pulls up to stand", name: "pulls_stand" },
  { month: 12, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Walks, holding onto furniture", name: "walks_hold_furniture" },
  { month: 12, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Drinks from a cup without a lid, as soon as you hold it", name: "drinks_cup" },
  { month: 12, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Picks things up between thumb and pointer finger, like small bits of food", name: "picks_thumb_index" },

  // ================== 15 Months ==================
{ month: 15, category: "MILESTONE I - Social/Emotional Milestones", label: "Copies other children while playing, like taking toys out of a container when another child does", name: "copies_children" },
{ month: 15, category: "MILESTONE I - Social/Emotional Milestones", label: "Shows you an object she likes", name: "shows_object" },
{ month: 15, category: "MILESTONE I - Social/Emotional Milestones", label: "Claps when excited", name: "claps" },
{ month: 15, category: "MILESTONE I - Social/Emotional Milestones", label: "Hugs stuffed doll or other toys", name: "hugs_toy" },
{ month: 15, category: "MILESTONE I - Social/Emotional Milestones", label: "Shows you affection (hugs, cuddles, or kisses you)", name: "shows_affection" },
{ month: 15, category: "MILESTONE II - Language/Communication Milestones", label: "Tries to use things the right way, like a cup, or book", name: "uses_right_way" },
{ month: 15, category: "MILESTONE II - Language/Communication Milestones", label: "Stacks at least two small objects, like blocks", name: "stacks_blocks" },
{ month: 15, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Tries to say one or two words besides 'mama' or 'dada' like 'ba' for ball or 'da' for dog", name: "says_words" },
{ month: 15, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Looks at a familiar object when you name it", name: "recognizes_object" },
{ month: 15, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Follows directions given with both a gesture and words", name: "follows_gesture" },
{ month: 15, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Points to ask for something or to get help", name: "points_for_help" },
{ month: 15, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Takes a few steps on his own", name: "walks_steps" },
{ month: 15, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Uses fingers to feed herself some food", name: "feeds_fingers" },

// ================== 18 Months ==================
{ month: 18, category: "MILESTONE I - Social/Emotional Milestones", label: "Moves away from you but looks to make sure you are close by", name: "moves_away" },
{ month: 18, category: "MILESTONE I - Social/Emotional Milestones", label: "Points to show you something interesting", name: "points_show" },
{ month: 18, category: "MILESTONE I - Social/Emotional Milestones", label: "Puts hands out for you to wash them", name: "hands_wash" },
{ month: 18, category: "MILESTONE I - Social/Emotional Milestones", label: "Looks at a few pages in a book with you", name: "looks_book" },
{ month: 18, category: "MILESTONE I - Social/Emotional Milestones", label: "Helps you dress him by pushing arm through sleeve or lifting up foot", name: "helps_dress" },
{ month: 18, category: "MILESTONE II - Language/Communication Milestones", label: "Tries to say three or more words besides 'mama' or 'dada'", name: "says_3words" },
{ month: 18, category: "MILESTONE II - Language/Communication Milestones", label: "Follows one-step directions without any gestures", name: "follows_1step" },
{ month: 18, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Copies you doing chores, like pushing with a broom", name: "copies_chores" },
{ month: 18, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Plays with toys in a simple way, like pushing a toy", name: "plays_simple" },
{ month: 18, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Walks without holding onto anyone or anything", name: "walks_alone" },
{ month: 18, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Scribbles", name: "scribbles" },
{ month: 18, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Drinks from a cup without a lid and may spill sometimes", name: "drinks_cup_spill" },
{ month: 18, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Feeds herself with her fingers", name: "feeds_fingers_2" },
{ month: 18, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Tries to use a spoon", name: "uses_spoon" },
{ month: 18, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Climbs on and off a couch or chair without help", name: "climbs_couch" },

// ================== 24 Months ==================
{ month: 24, category: "MILESTONE I - Social/Emotional Milestones", label: "Notices when others are hurt or upset, like pausing or looking sad when someone is crying", name: "notices_others" },
{ month: 24, category: "MILESTONE I - Social/Emotional Milestones", label: "Looks at your face to see how to react in a new situation", name: "looks_face_react" },
{ month: 24, category: "MILESTONE II - Language/Communication Milestones", label: "Points to things in a book when you ask, like 'Where is the cat?'", name: "points_book" },
{ month: 24, category: "MILESTONE II - Language/Communication Milestones", label: "Says at least 2 words together", name: "says_2words" },
{ month: 24, category: "MILESTONE II - Language/Communication Milestones", label: "Points to at least two body parts when you ask him to show you", name: "points_body" },
{ month: 24, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Uses more gestures than just waving and pointing, like blowing a kiss/nodding", name: "gestures_more" },
{ month: 24, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Holds something in one hand while using the other hand; for example, holding a container and taking the lid off", name: "holds_and_uses" },
{ month: 24, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Tries to use switches, knobs, or buttons on a toy", name: "uses_switches" },
{ month: 24, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Plays with more than one toy at the same time, like putting toy food on a toy plate", name: "plays_multiple" },
{ month: 24, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Kicks a ball", name: "kicks_ball" },
{ month: 24, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Runs", name: "runs" },
{ month: 24, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Walks (not climbs) up a few stairs with or without help", name: "walks_stairs" },
{ month: 24, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Eats with a spoon", name: "eats_spoon" },

// ================== 30 Months ==================
{ month: 30, category: "MILESTONE I - Social/Emotional Milestones", label: "Plays next to other children and sometimes plays with them", name: "plays_next" },
{ month: 30, category: "MILESTONE I - Social/Emotional Milestones", label: "Shows you what she can do by saying 'look at me'", name: "shows_look" },
{ month: 30, category: "MILESTONE I - Social/Emotional Milestones", label: "Follows simple routines when told like helping to pick up toys", name: "follows_routines" },
{ month: 30, category: "MILESTONE II - Language/Communication Milestones", label: "Says about 50 words", name: "says_50words" },
{ month: 30, category: "MILESTONE II - Language/Communication Milestones", label: "Says two or more words together, with one action word, like 'Cat run'", name: "says_action_words" },
{ month: 30, category: "MILESTONE II - Language/Communication Milestones", label: "Names things in a book when you point and ask, 'what is this?'", name: "names_objects" },
{ month: 30, category: "MILESTONE II - Language/Communication Milestones", label: "Says words like 'I', 'me', or 'we'", name: "says_i_me_we" },
{ month: 30, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Uses things to pretend, like feeding a block to a doll as if it were food", name: "pretend_play" },
{ month: 30, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Shows simple problem-solving skills, eg: standing on stool to reach something", name: "problem_solve" },
{ month: 30, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Follows two-step instructions like 'put the toy down and close the door'", name: "follows_2step" },
{ month: 30, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Shows he knows at least one color, like pointing to a red crayon when you ask 'which one is red?'", name: "knows_color" },
{ month: 30, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Uses hands to twist things, like turning door knobs or unscrewing lids", name: "twist_hands" },
{ month: 30, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Takes some clothes off by himself, like loose pants or an open jacket", name: "undress_self" },
{ month: 30, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Jumps off the ground with both feet", name: "jumps" },
{ month: 30, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Turns book pages, one at a time, when read to her", name: "turns_pages" },

// ================== 36 Months ==================
{ month: 36, category: "MILESTONE I - Social/Emotional Milestones", label: "Calms down within 10 minutes after you leave her, like a childcare drop off", name: "calms_quickly" },
{ month: 36, category: "MILESTONE I - Social/Emotional Milestones", label: "Notices other children and joins them to play", name: "joins_play" },
{ month: 36, category: "MILESTONE II - Language/Communication Milestones", label: "Talks with you in conversation using at least two back-and-forth exchanges", name: "talks_backforth" },
{ month: 36, category: "MILESTONE II - Language/Communication Milestones", label: "Asks 'who', 'what', 'where', or 'why' questions, like 'Where is mommy/daddy?'", name: "asks_questions" },
{ month: 36, category: "MILESTONE II - Language/Communication Milestones", label: "Says what action is happening in a picture or book when asked, like 'running,' 'eating,' or 'playing'", name: "names_actions" },
{ month: 36, category: "MILESTONE II - Language/Communication Milestones", label: "Says first name, when asked", name: "says_first_name" },
{ month: 36, category: "MILESTONE II - Language/Communication Milestones", label: "Talks well enough for others to understand, most of the time", name: "talks_clear" },
{ month: 36, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Draws a circle, when you show him how", name: "draws_circle" },
{ month: 36, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Avoids touching hot objects, like a stove, when you warn her", name: "avoids_hot" },
{ month: 36, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Strings items together, like large beads or macaroni", name: "strings_items" },
{ month: 36, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Puts on some clothes by himself, like loose pants or jackets", name: "dresses_self" },
{ month: 36, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Uses a fork", name: "uses_fork" },

// ================== 48 Months ==================
{ month: 48, category: "MILESTONE I - Social/Emotional Milestones", label: "Pretends to be something else during play (teachers, superhero, cat)", name: "pretend_play_2" },
{ month: 48, category: "MILESTONE I - Social/Emotional Milestones", label: "Asks to go play with children if none are around, like 'Can I play with Ali?'", name: "asks_play" },
{ month: 48, category: "MILESTONE I - Social/Emotional Milestones", label: "Comforts others who are hurt or sad, like hugging a crying friend", name: "comforts_others" },
{ month: 48, category: "MILESTONE I - Social/Emotional Milestones", label: "Avoids danger, like not jumping from tall heights at the playground", name: "avoids_danger" },
{ month: 48, category: "MILESTONE I - Social/Emotional Milestones", label: "Likes to be a 'helper'", name: "likes_helper" },
{ month: 48, category: "MILESTONE I - Social/Emotional Milestones", label: "Changes behavior based on where she is (place of worship, library, playground)", name: "changes_behavior" },
{ month: 48, category: "MILESTONE II - Language/Communication Milestones", label: "Names few colors of items", name: "names_colors" },
{ month: 48, category: "MILESTONE II - Language/Communication Milestones", label: "Tells what is next in a well-known story", name: "predict_story" },
{ month: 48, category: "MILESTONE II - Language/Communication Milestones", label: "Draws a person with 3 or more body parts", name: "draws_person" },
{ month: 48, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Says sentences with four or more words", name: "says_sentences" },
{ month: 48, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Says some words from song, story, or nursery rhyme", name: "sings_words" },
{ month: 48, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Talks about at least one thing that happened during his day, like 'I played soccer'", name: "talks_day" },
{ month: 48, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Answers simple questions like 'What is a coat for?' or 'What is a crayon for?'", name: "answers_questions" },
{ month: 48, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Catches a large ball most of the time", name: "catches_ball" },
{ month: 48, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Serves himself food or pours water, with adult supervision", name: "serves_food" },
{ month: 48, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Unbuttons some buttons", name: "unbuttons" },
{ month: 48, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Holds crayon or pencil between fingers and thumb (not a fist)", name: "holds_crayon" },

// ================== 60 Months ==================
{ month: 60, category: "MILESTONE I - Social/Emotional Milestones", label: "Follows rules or take turns when playing games with other children", name: "follows_rules" },
{ month: 60, category: "MILESTONE I - Social/Emotional Milestones", label: "Sings, dances, or acts for you", name: "performs" },
{ month: 60, category: "MILESTONE I - Social/Emotional Milestones", label: "Does simple chores at home, like matching socks", name: "chores_home" },
{ month: 60, category: "MILESTONE II - Language/Communication Milestones", label: "Tells a story she heard or made up with at least two events", name: "tells_story" },
{ month: 60, category: "MILESTONE II - Language/Communication Milestones", label: "Answers simple questions about a book or story after you read it or tell it to him", name: "answers_story" },
{ month: 60, category: "MILESTONE II - Language/Communication Milestones", label: "Keeps conversation going with more than three back-and-forth exchanges", name: "conversation" },
{ month: 60, category: "MILESTONE II - Language/Communication Milestones", label: "Uses or recognizes simple rhymes (bat-cat, ball-tall)", name: "recognizes_rhymes" },
{ month: 60, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Counts to 10", name: "counts_10" },
{ month: 60, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Names some numbers between 1 and 5 when you point to them", name: "names_numbers" },
{ month: 60, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Uses words about time, like 'yesterday', 'tomorrow', 'morning', or 'night'", name: "time_words" },
{ month: 60, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Pays attention for 5 to 10 minutes during activities", name: "attention_span" },
{ month: 60, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Writes some letters in her name", name: "writes_name" },
{ month: 60, category: "MILESTONE III - Cognitive Milestones (Learning, Thinking, Problem-Solving)", label: "Names some letters when you point to them", name: "names_letters" },
{ month: 60, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Buttons some buttons", name: "buttons" },
{ month: 60, category: "MILESTONE IV - Movement/Physical Development Milestones", label: "Hops on one foot", name: "hops_one_foot" },
];


  ];

  // --- Category color mapping ---
  const categoryColors = {
    "MILESTONE I - Social/Emotional Milestones": "bg-blue-100 border-blue-400",
    "MILESTONE II - Language/Communication Milestones": "bg-green-100 border-green-400",
    "MILESTONE III - Cognitive Milestones (learning, thinking, problem-solving)": "bg-yellow-100 border-yellow-400",
    "MILESTONE IV - Movement/Physical Development Milestones": "bg-pink-100 border-pink-400"
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
