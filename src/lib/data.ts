import type { Lesson, Student, Badge, Activity } from '@/lib/types';
import { Trophy, BookMarked, Star, Sparkles, Medal, Award } from 'lucide-react';

export const lessons: Lesson[] = [
  {
    id: '1',
    title: 'Intro to Digital World',
    subject: 'Digital Literacy',
    description: 'Learn the basics of computers and the internet in Punjabi.',
    content: `
**Introduction to Computers (ਕੰਪਿਊਟਰ ਦੀ ਜਾਣ-ਪਛਾਣ)**

A computer is an electronic machine that can store, find, and arrange information, calculate amounts, and control other machines. It takes input, processes it, and gives output.

**Parts of a Computer (ਕੰਪਿਊਟਰ ਦੇ ਹਿੱਸੇ):**
- **Monitor (ਮਾਨੀਟਰ):** Looks like a TV screen and shows you what you are doing.
- **CPU (Central Processing Unit):** The brain of the computer.
- **Keyboard (ਕੀ-ਬੋਰਡ):** Used for typing text.
- **Mouse (ਮਾਊਸ):** Used to point and click on things on the screen.

**Using the Internet (ਇੰਟਰਨੈੱਟ ਦੀ ਵਰਤੋਂ)**
The internet connects computers all over the world. You can use it to:
- Find information using search engines like Google.
- Send emails.
- Watch videos and listen to music.
`,
    thumbnailUrl: 'https://picsum.photos/seed/lesson1/600/400',
    videoUrl: 'https://www.youtube.com/embed/5DqTuW3421w',
    downloadUrl: '/pdfs/lesson1_intro_to_digital_world.pdf',
    chapters: [
      { id: 'ch1', title: 'Chapter 1: Introduction to Computers', downloadUrl: '/pdfs/lesson1_chapter1.pdf' },
      { id: 'ch2', title: 'Chapter 2: Parts of a Computer', downloadUrl: '/pdfs/lesson1_chapter2.pdf' },
      { id: 'ch3', title: 'Chapter 3: Using the Internet', downloadUrl: '/pdfs/lesson1_chapter3.pdf' },
    ],
    completion: 75,
    quiz: {
      questions: [
        {
          question: 'What is the "brain" of the computer?',
          options: ['Monitor', 'CPU', 'Keyboard', 'Mouse'],
          correctAnswer: 'CPU',
        },
        {
          question: 'Which part is used for typing?',
          options: ['Mouse', 'Screen', 'Keyboard', 'Speaker'],
          correctAnswer: 'Keyboard',
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Basic Algebra',
    subject: 'Math',
    description: 'A quiz to test your basic algebra skills.',
    content: 'This lesson focuses on solving simple algebraic equations. Practice the questions in the quiz to master the concepts.',
    thumbnailUrl: 'https://picsum.photos/seed/lesson2/600/400',
    completion: 40,
    quiz: {
      questions: [
        {
          question: 'Solve for x: x + 5 = 10',
          options: ['2', '5', '10', '15'],
          correctAnswer: '5',
        },
        {
          question: 'Solve for y: 2y = 12',
          options: ['4', '6', '8', '24'],
          correctAnswer: '6',
        },
        {
          question: 'What is 3 squared (3^2)?',
          options: ['3', '6', '9', '12'],
          correctAnswer: '9',
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Reading Comprehension',
    subject: 'English',
    description: 'Read a short passage and answer the questions.',
    content: `
**The Clever Fox**

A fox was boasting to a cat of its clever devices for escaping its enemies. "I have a whole bag of tricks," he said, "which contains a hundred ways of escaping my enemies."

"I have only one," said the cat; "but I can generally manage with that."

Just at that moment they heard the cry of a pack of hounds coming towards them, and the cat immediately scampered up a tree and hid herself in the boughs.

"This is my plan," said the cat. "What are you going to do?"

The fox thought first of one way, then of another, and while he was debating the hounds came nearer and nearer, and at last the fox in his confusion was caught up by the hounds and soon killed by the huntsmen.

*Moral: One sure plan is better than a hundred doubtful ones.*
`,
    thumbnailUrl: 'https://picsum.photos/seed/lesson3/600/400',
    completion: 100,
    quiz: {
      questions: [
        {
          question: 'Who was the fox boasting to?',
          options: ['A dog', 'A cat', 'A mouse', 'A hunter'],
          correctAnswer: 'A cat',
        },
        {
          question: 'How did the cat escape?',
          options: ['It ran away', 'It hid in a bush', 'It climbed a tree', 'It fought the hounds'],
          correctAnswer: 'It climbed a tree',
        },
        {
          question: 'What happened to the fox?',
          options: ['It escaped', 'It climbed a tree too', 'It was caught by the hounds', 'It hid'],
          correctAnswer: 'It was caught by the hounds',
        },
      ],
    },
  },
  {
    id: '4',
    title: 'The Water Cycle',
    subject: 'Science',
    description: 'Learn about evaporation, condensation, and precipitation.',
    content: 'This lesson explains the complete water cycle, a fundamental concept in environmental science. It covers how water moves around our planet.',
    thumbnailUrl: 'https://picsum.photos/seed/lesson4/600/400',
    completion: 0,
    quiz: {
      questions: [
        {
          question: 'What is the process of water turning into vapor?',
          options: ['Condensation', 'Precipitation', 'Evaporation', 'Collection'],
          correctAnswer: 'Evaporation',
        },
        {
          question: 'What are clouds made of?',
          options: ['Smoke', 'Air', 'Water droplets', 'Light'],
          correctAnswer: 'Water droplets',
        },
      ],
    },
  },
];

export const students: Student[] = [
  { id: 'S001', name: 'Gurpreet Singh', class: '10th', lessonsCompleted: 8, totalLessons: 12, averageScore: 85, avatarUrl: 'https://picsum.photos/seed/student1/100/100' },
  { id: 'S002', name: 'Priya Kaur', class: '9th', lessonsCompleted: 11, totalLessons: 12, averageScore: 92, avatarUrl: 'https://picsum.photos/seed/student2/100/100' },
  { id: 'S003', name: 'Manjeet Kumar', class: '10th', lessonsCompleted: 5, totalLessons: 12, averageScore: 71, avatarUrl: 'https://picsum.photos/seed/student3/100/100' },
  { id: 'S004', name: 'Simranjeet Kaur', class: '8th', lessonsCompleted: 12, totalLessons: 12, averageScore: 95, avatarUrl: 'https://picsum.photos/seed/student4/100/100' },
  { id: 'S005', name: 'Rahul Verma', class: '9th', lessonsCompleted: 6, totalLessons: 12, averageScore: 78, avatarUrl: 'https://picsum.photos/seed/student5/100/100' },
];

export const badges: Badge[] = [
    { id: 'b01', name: 'First Steps', description: 'Complete your first lesson', icon: Star },
    { id: 'b02', name: 'Bookworm', description: 'Complete 5 lessons', icon: BookMarked },
    { id: 'b03', name: 'Subject Pro', description: 'Master a subject', icon: Medal },
    { id: 'b04', name: 'Quiz Whiz', description: 'Score 100% on a quiz', icon: Sparkles },
    { id: 'b05', name: 'Top Learner', description: 'Complete all lessons', icon: Trophy },
    { id: 'b06', name: 'Perfect Streak', description: 'Complete 3 lessons in a row', icon: Award },
];

export const earnedBadges = [badges[0], badges[3], badges[1]];

export const recentActivities: Activity[] = [
  { id: 'a1', studentName: 'Priya Kaur', action: 'completed "Basic Algebra"', timestamp: '2 hours ago', avatarUrl: 'https://picsum.photos/seed/student2/100/100' },
  { id: 'a2', studentName: 'Gurpreet Singh', action: 'earned the "Quiz Whiz" badge', timestamp: '5 hours ago', avatarUrl: 'https://picsum.photos/seed/student1/100/100' },
  { id: 'a3', studentName: 'Simranjeet Kaur', action: 'completed "Reading Comprehension"', timestamp: '1 day ago', avatarUrl: 'https://picsum.photos/seed/student4/100/100' },
  { id: 'a4', studentName: 'Manjeet Kumar', action: 'started "Intro to Digital World"', timestamp: '2 days ago', avatarUrl: 'https://picsum.photos/seed/student3/100/100' },
];
