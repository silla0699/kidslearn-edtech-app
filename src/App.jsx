// Parent Corner Screen
  const ParentCornerScreen = () => (
    <div className="p-4 pb-20 bg-gradient-to-b from-green-50 to-teal-50 min-h-screen">
      <div className="flex items-center mb-6">
        <button onClick={() => setCurrentScreen('home')} 
                className="bg-white p-2 rounded-full shadow-md mr-4">
          <ChevronRight className="rotate-180" size={20} />
        </button>
        <h2 className="text-2xl font-bold text-gray-800">Parent Dashboard 👨‍👩‍👧</h2>
      </div>

      {/* Child Progress Overview */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Emma's Weekly Progress</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-xl">
            <div className="text-2xl font-bold text-blue-600">45</div>
            <div className="text-sm text-blue-700">Stars Earned</div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <div className="text-2xl font-bold text-green-600">7</div>
            <div className="text-sm text-green-700">Day Streak</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">25</div>
            <div className="text-sm text-purple-700">Minutes/Day</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-xl">
            <div className="text-2xl font-bold text-orange-600">12</div>
            <div className="text-sm text-orange-700">Lessons Done</div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-xl">
          <h4 className="font-semibold text-gray-800 mb-2">Subject Performance</h4>
          {subjects.slice(0, 4).map(subject => (
            <div key={subject.id} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="mr-2">{subject.icon}</span>
                <span className="text-sm text-gray-700">{subject.name}</span>
              </div>
              <div className="flex items-center">
                <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${subject.progress}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-600">{subject.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Recommendations */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Recommendations for You</h3>
        <div className="space-y-3">
          <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-800">💡 Focus Area</h4>
            <p className="text-sm text-yellow-700">Emma could benefit from more geometry practice. Try shape-hunting games at home!</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-400">
            <h4 className="font-semibold text-green-800">🌟 Strength</h4>
            <p className="text-sm text-green-700">Excellent progress in multiplication! Consider introducing division word problems.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400">
            <h4 className="font-semibold text-blue-800">📚 Reading Together</h4>
            <p className="text-sm text-blue-700">Read science books about plant life cycles to reinforce learning.</p>
          </div>
        </div>
      </div>

      {/* Screen Time & Settings */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Settings & Controls</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Daily Time Limit</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">30 minutes</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Chat History with AI</span>
            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">View</button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Weekly Report</span>
            <button className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Download</button>
          </div>
        </div>
      </div>
    </div>
  );

  // Teacher Corner Screen
  const TeacherCornerScreen = () => (
    <div className="p-4 pb-20 bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">
      <div className="flex items-center mb-6">
        <button onClick={() => setCurrentScreen('home')} 
                className="bg-white p-2 rounded-full shadow-md mr-4">
          <ChevronRight className="rotate-180" size={20} />
        </button>
        <h2 className="text-2xl font-bold text-gray-800">Teacher Dashboard 👩‍🏫</h2>
      </div>

      {/* Classroom Overview */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Class 3A Overview</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-blue-600">24</div>
            <div className="text-xs text-blue-700">Active Students</div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-green-600">89%</div>
            <div className="text-xs text-green-700">Avg. Completion</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-purple-600">156</div>
            <div className="text-xs text-purple-700">Lessons Assigned</div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-xl">
          <h4 className="font-semibold text-gray-800 mb-3">Subject Performance Trends</h4>
          {subjects.slice(0, 4).map(subject => (
            <div key={subject.id} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="mr-2">{subject.icon}</span>
                <span className="text-sm text-gray-700">{subject.name}</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-gray-500 mr-2">Class Avg:</span>
                <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${subject.progress - 5}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-600">{subject.progress - 5}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Tools */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Curriculum Management</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl text-left hover:shadow-lg transition-all">
            <div className="text-lg font-semibold">📝 Create Assignment</div>
            <div className="text-xs opacity-90">Custom lessons & quizzes</div>
          </button>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl text-left hover:shadow-lg transition-all">
            <div className="text-lg font-semibold">📊 Grade Reports</div>
            <div className="text-xs opacity-90">Student progress analytics</div>
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl text-left hover:shadow-lg transition-all">
            <div className="text-lg font-semibold">👥 Group Students</div>
            <div className="text-xs opacity-90">Differentiated learning</div>
          </button>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-xl text-left hover:shadow-lg transition-all">
            <div className="text-lg font-semibold">🎯 Set Goals</div>
            <div className="text-xs opacity-90">Individual targets</div>
          </button>
        </div>
      </div>

      {/* Student Alerts */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Student Alerts</h3>
        <div className="space-y-3">
          <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-400">
            <h4 className="font-semibold text-red-800">⚠️ Attention Needed</h4>
            <p className="text-sm text-red-700">3 students haven't completed this week's math assignments</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-800">📈 Improvement</h4>
            <p className="text-sm text-yellow-700">Emma J. showed 25% improvement in geometry this week</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-400">
            <h4 className="font-semibold text-green-800">🌟 Achievements</h4>
            <p className="text-sm text-green-700">5 students earned multiplication master badges today!</p>
          </div>
        </div>
      </div>
    </div>
  );import React, { useState, useEffect } from 'react';
import { Star, Trophy, Heart, Home, BookOpen, Gamepad2, User, ChevronRight, Volume2, MessageCircle, Send, HelpCircle, X, Menu, Lock, Users, GraduationCap, Sparkles, BookMarked } from 'lucide-react';

const KidsLearnApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [userProgress, setUserProgress] = useState({
    level: 3,
    stars: 45,
    hearts: 3,
    streak: 7,
    completedLessons: 12
  });
  
  // Math Game States
  const [mathAnswer, setMathAnswer] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({ a: 6, b: 4, answer: 24, operation: '×' });
  
  // Chatbot States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: "Hi there! I'm Buddy, your learning helper! 🤖 Ask me anything about math, science, or geography!" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Side Panel States
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [passwordModal, setPasswordModal] = useState({ isOpen: false, type: '' });
  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState({ parent: false, teacher: false });

  // Generate random multiplication question
  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 9) + 2; // 2-10
    const b = Math.floor(Math.random() * 9) + 2; // 2-10
    const operations = [
      { op: '×', answer: a * b },
      { op: '÷', answer: Math.floor(a * b / b) } // Ensure clean division
    ];
    const selected = operations[Math.floor(Math.random() * operations.length)];
    
    if (selected.op === '÷') {
      const dividend = a * b;
      setCurrentQuestion({ a: dividend, b: a, answer: b, operation: '÷' });
    } else {
      setCurrentQuestion({ a, b, answer: a * b, operation: '×' });
    }
    setMathAnswer('');
  };

  const checkMathAnswer = () => {
    if (parseInt(mathAnswer) === currentQuestion.answer) {
      setShowCelebration(true);
      setUserProgress(prev => ({ ...prev, stars: prev.stars + 1 }));
      setTimeout(() => {
        setShowCelebration(false);
        generateQuestion();
      }, 2000);
    } else {
      setMathAnswer('');
    }
  };

  // Password validation
  const handlePasswordSubmit = () => {
    const passwords = { parent: 'parent123', teacher: 'teach456' };
    if (passwordInput === passwords[passwordModal.type]) {
      setIsAuthenticated(prev => ({ ...prev, [passwordModal.type]: true }));
      setPasswordModal({ isOpen: false, type: '' });
      setPasswordInput('');
    } else {
      alert('Incorrect password. Please try again.');
      setPasswordInput('');
    }
  };
  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMessage = chatInput;
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Mock AI Response - Replace with actual Gemini API call
    setTimeout(() => {
      let response = "That's a great question! 🌟 ";
      
      if (userMessage.toLowerCase().includes('math') || userMessage.toLowerCase().includes('multiply')) {
        response += "For multiplication, think of it as repeated addition! Like 3 × 4 means adding 3 four times: 3 + 3 + 3 + 3 = 12! 🔢";
      } else if (userMessage.toLowerCase().includes('fraction')) {
        response += "Fractions are like sharing pizza! 🍕 If you have 1 pizza cut into 4 pieces, each piece is 1/4 of the whole pizza!";
      } else if (userMessage.toLowerCase().includes('plant') || userMessage.toLowerCase().includes('life cycle')) {
        response += "Plants start as tiny seeds! 🌱 First they sprout, then grow leaves, then flowers, and finally make new seeds. It's like nature's magic circle!";
      } else if (userMessage.toLowerCase().includes('shape') || userMessage.toLowerCase().includes('triangle')) {
        response += "Shapes are everywhere! 📐 A triangle has 3 sides and 3 corners (angles). Can you find triangles around your house?";
      } else {
        response += "I love helping you learn! Try asking me about math, shapes, plants, or maps. What interests you most? 🤔";
      }
      
      setChatMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const subjects = [
    { 
      id: 'math', 
      name: 'Math Facts', 
      icon: '🔢', 
      color: 'bg-blue-400', 
      progress: 75,
      description: '× ÷ Fractions',
      topics: ['Multiplication Tables', 'Division Facts', 'Fractions as Parts', 'Word Problems']
    },
    { 
      id: 'science', 
      name: 'Life Science', 
      icon: '🌱', 
      color: 'bg-green-400', 
      progress: 60,
      description: 'Plants & Animals',
      topics: ['Plant Life Cycles', 'Animal Life Cycles', 'Habitats', 'Food Chains']
    },
    { 
      id: 'geometry', 
      name: 'Shapes & Space', 
      icon: '📐', 
      color: 'bg-purple-400', 
      progress: 40,
      description: 'Geometry Fun',
      topics: ['2D & 3D Shapes', 'Angles', 'Perimeter', 'Area Basics']
    },
    { 
      id: 'geography', 
      name: 'Our World', 
      icon: '🗺️', 
      color: 'bg-orange-400', 
      progress: 55,
      description: 'Maps & History',
      topics: ['Reading Maps', 'Landforms', 'Community History', 'Famous Explorers']
    },
    {
      id: 'reading',
      name: 'Reading & Writing',
      icon: '📚',
      color: 'bg-red-400',
      progress: 70,
      description: 'Language Arts',
      topics: ['Reading Comprehension', 'Vocabulary', 'Grammar', 'Creative Writing']
    },
    {
      id: 'art',
      name: 'Art & Music',
      icon: '🎨',
      color: 'bg-pink-400',
      progress: 85,
      description: 'Creative Arts',
      topics: ['Drawing & Painting', 'Music Theory', 'Crafts', 'Drama']
    }
  ];

  const extraTopics = [
    {
      category: 'STEM Adventures',
      icon: '🚀',
      color: 'bg-gradient-to-r from-blue-500 to-purple-600',
      topics: ['Basic Coding', 'Simple Robotics', 'Space Exploration', 'Weather Science']
    },
    {
      category: 'Life Skills',
      icon: '🌟',
      color: 'bg-gradient-to-r from-green-500 to-teal-600',
      topics: ['Time Management', 'Money Basics', 'Healthy Habits', 'Safety Rules']
    },
    {
      category: 'World Cultures',
      icon: '🌍',
      color: 'bg-gradient-to-r from-orange-500 to-red-600',
      topics: ['Different Countries', 'Languages', 'Festivals', 'Traditional Games']
    },
    {
      category: 'Creative Thinking',
      icon: '💡',
      color: 'bg-gradient-to-r from-purple-500 to-pink-600',
      topics: ['Problem Solving', 'Inventions', 'Storytelling', 'Critical Thinking']
    }
  ];

  const achievements = [
    { name: 'Multiplication Master', icon: '🧮', unlocked: true },
    { name: 'Fraction Friend', icon: '🍕', unlocked: true },
    { name: 'Shape Detective', icon: '🔍', unlocked: false },
    { name: 'Life Cycle Expert', icon: '🦋', unlocked: false },
    { name: 'Geography Explorer', icon: '🌍', unlocked: false },
    { name: 'History Helper', icon: '📚', unlocked: false }
  ];

  // Side Panel Component
  const SidePanel = () => (
    <>
      {/* Overlay */}
      {isSidePanelOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidePanelOpen(false)}
        />
      )}
      
      {/* Side Panel */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 overflow-y-auto ${
        isSidePanelOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Learning Center</h2>
            <button onClick={() => setIsSidePanelOpen(false)} className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded">
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-4">
          {/* Grade 3 Core Subjects */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <BookMarked className="mr-2 text-blue-600" size={20} />
              Grade 3 Core Subjects
            </h3>
            <div className="space-y-3">
              {subjects.map(subject => (
                <div key={subject.id} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center mb-2">
                    <span className="text-xl mr-2">{subject.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{subject.name}</h4>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div 
                          className="bg-blue-500 h-1.5 rounded-full transition-all"
                          style={{ width: `${subject.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-7">
                    {subject.topics.map((topic, index) => (
                      <div key={index} className="text-xs text-gray-600 py-1 hover:text-blue-600 cursor-pointer">
                        • {topic}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Extra Learning Topics */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <Sparkles className="mr-2 text-purple-600" size={20} />
              Beyond School Curriculum
            </h3>
            <div className="space-y-3">
              {extraTopics.map((category, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <div className={`${category.color} text-white p-3`}>
                    <div className="flex items-center">
                      <span className="text-xl mr-2">{category.icon}</span>
                      <h4 className="font-semibold">{category.category}</h4>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="text-sm text-gray-700 py-1 hover:text-purple-600 cursor-pointer">
                        • {topic}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parent & Teacher Corners */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <Users className="mr-2 text-green-600" size={20} />
              Adult Access
            </h3>
            
            {/* Parent Corner */}
            <button
              onClick={() => isAuthenticated.parent ? setCurrentScreen('parentCorner') : setPasswordModal({ isOpen: true, type: 'parent' })}
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white p-4 rounded-lg flex items-center justify-between hover:shadow-lg transition-all"
            >
              <div className="flex items-center">
                <Heart className="mr-3" size={20} />
                <div className="text-left">
                  <div className="font-semibold">Parent Corner</div>
                  <div className="text-xs opacity-90">Track your child's progress</div>
                </div>
              </div>
              {!isAuthenticated.parent && <Lock size={16} />}
            </button>

            {/* Teacher Corner */}
            <button
              onClick={() => isAuthenticated.teacher ? setCurrentScreen('teacherCorner') : setPasswordModal({ isOpen: true, type: 'teacher' })}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-lg flex items-center justify-between hover:shadow-lg transition-all"
            >
              <div className="flex items-center">
                <GraduationCap className="mr-3" size={20} />
                <div className="text-left">
                  <div className="font-semibold">Teacher Corner</div>
                  <div className="text-xs opacity-90">Classroom management tools</div>
                </div>
              </div>
              {!isAuthenticated.teacher && <Lock size={16} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );

  // Password Modal
  const PasswordModal = () => (
    passwordModal.isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
        <div className="bg-white rounded-2xl p-6 w-80 mx-4">
          <div className="text-center mb-4">
            <Lock className="mx-auto text-gray-400 mb-2" size={32} />
            <h3 className="text-lg font-bold text-gray-800">
              {passwordModal.type === 'parent' ? 'Parent' : 'Teacher'} Access
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Please enter the {passwordModal.type} password
            </p>
          </div>
          
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
            placeholder="Enter password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
          />
          
          <div className="flex space-x-3">
            <button
              onClick={() => {
                setPasswordModal({ isOpen: false, type: '' });
                setPasswordInput('');
              }}
              className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handlePasswordSubmit}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Access
            </button>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            Demo passwords: parent123 | teach456
          </div>
        </div>
      </div>
    )
  );
  const Chatbot = () => (
    <>
      {/* Chat Toggle Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-20 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all z-40"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-2xl shadow-2xl border-2 border-purple-200 z-50 flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                🤖
              </div>
              <span className="font-bold">Buddy</span>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {chatMessages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-2xl ${
                  message.role === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                placeholder="Ask me anything..."
                className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={sendChatMessage}
                disabled={!chatInput.trim() || isLoading}
                className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
            {/* Quick Suggestions */}
            <div className="flex space-x-2 mt-2">
              {['Help with math', 'What are fractions?', 'Plant life cycle'].map(suggestion => (
                <button
                  key={suggestion}
                  onClick={() => {
                    setChatInput(suggestion);
                    setTimeout(sendChatMessage, 100);
                  }}
                  className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-200 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );

  // Navigation Component
  const Navigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        {[
          { id: 'home', icon: Home, label: 'Home' },
          { id: 'lessons', icon: BookOpen, label: 'Learn' },
          { id: 'games', icon: Gamepad2, label: 'Games' },
          { id: 'profile', icon: User, label: 'Profile' }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id)}
            className={`flex flex-col items-center p-2 rounded-lg transition-all ${
              currentScreen === item.id ? 'bg-blue-100 text-blue-600' : 'text-gray-500'
            }`}
          >
            <item.icon size={24} />
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  // Home Screen
  const HomeScreen = () => (
    <div className="p-4 pb-20 bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <button 
            onClick={() => setIsSidePanelOpen(true)}
            className="bg-white p-2 rounded-full shadow-md mr-3 hover:shadow-lg transition-all"
          >
            <Menu size={20} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Hi, Emma! 👋</h1>
            <p className="text-gray-600">Grade 3 Learning Adventure!</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
            <Star className="text-yellow-500 mr-1" size={16} />
            <span className="text-yellow-700 font-semibold">{userProgress.stars}</span>
          </div>
          <div className="flex items-center bg-red-100 px-3 py-1 rounded-full">
            <Heart className="text-red-500 mr-1" size={16} />
            <span className="text-red-700 font-semibold">{userProgress.hearts}</span>
          </div>
        </div>
      </div>

      {/* Daily Challenge Card */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 mb-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold mb-1">🏆 Daily Challenge</h3>
            <p className="text-sm opacity-90">Complete 5 multiplication problems!</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">3/5</div>
            <div className="text-xs opacity-90">problems done</div>
          </div>
        </div>
        <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mt-3">
          <div className="bg-white h-2 rounded-full transition-all" style={{ width: '60%' }}></div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-2xl p-4 mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800">Your Progress</h3>
          <div className="bg-green-100 px-3 py-1 rounded-full">
            <span className="text-green-700 font-semibold">Grade {userProgress.level}</span>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Learning Streak: {userProgress.streak} days 🔥</span>
          <span>Lessons: {userProgress.completedLessons}/25</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-500" 
               style={{ width: `${(userProgress.completedLessons / 25) * 100}%` }}></div>
        </div>
      </div>

      {/* Subjects Grid */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">Grade 3 Subjects</h3>
      <div className="grid grid-cols-2 gap-4">
        {subjects.slice(0, 4).map(subject => (
          <div key={subject.id} 
               className={`${subject.color} rounded-2xl p-4 text-white shadow-lg transform hover:scale-105 transition-all cursor-pointer`}
               onClick={() => subject.id === 'math' ? setCurrentScreen('mathGame') : null}>
            <div className="text-3xl mb-2">{subject.icon}</div>
            <h4 className="font-bold text-lg mb-1">{subject.name}</h4>
            <p className="text-xs opacity-80 mb-2">{subject.description}</p>
            <div className="bg-white bg-opacity-30 rounded-full h-2 mb-2">
              <div className="bg-white h-2 rounded-full" style={{ width: `${subject.progress}%` }}></div>
            </div>
            <p className="text-sm opacity-90">{subject.progress}% Complete</p>
          </div>
        ))}
      </div>

      {/* Help Hint */}
      <div className="mt-6 bg-purple-100 rounded-2xl p-4 border-2 border-purple-200">
        <div className="flex items-center">
          <HelpCircle className="text-purple-600 mr-3" size={20} />
          <div>
            <p className="text-purple-800 font-medium">Need help?</p>
            <p className="text-purple-600 text-sm">Ask Buddy anything by clicking the chat button! 🤖</p>
          </div>
        </div>
      </div>

      {/* Quick Access to More Subjects */}
      <div className="mt-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-4 border-2 border-pink-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-800 font-medium">Explore More!</p>
            <p className="text-purple-600 text-sm">Check out all subjects & extra topics</p>
          </div>
          <button 
            onClick={() => setIsSidePanelOpen(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );

  // Math Game Screen
  const MathGameScreen = () => (
    <div className="p-4 pb-20 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <div className="flex items-center mb-6">
        <button onClick={() => setCurrentScreen('home')} 
                className="bg-white p-2 rounded-full shadow-md mr-4">
          <ChevronRight className="rotate-180" size={20} />
        </button>
        <h2 className="text-2xl font-bold text-gray-800">Multiplication & Division! 🧮</h2>
      </div>

      {showCelebration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 text-center animate-bounce">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">Fantastic!</h3>
            <p className="text-gray-600">You're a math star! +1 ⭐</p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
        <div className="text-6xl mb-6">🤔</div>
        <h3 className="text-3xl font-bold text-gray-800 mb-8">
          What is {currentQuestion.a} {currentQuestion.operation} {currentQuestion.b}?
        </h3>
        
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="text-4xl font-bold text-blue-600 bg-blue-100 rounded-xl w-20 h-16 flex items-center justify-center">
            {currentQuestion.a}
          </div>
          <div className="text-3xl font-bold text-gray-600">{currentQuestion.operation}</div>
          <div className="text-4xl font-bold text-green-600 bg-green-100 rounded-xl w-20 h-16 flex items-center justify-center">
            {currentQuestion.b}
          </div>
          <div className="text-3xl font-bold text-gray-600">=</div>
          <input
            type="number"
            value={mathAnswer}
            onChange={(e) => setMathAnswer(e.target.value)}
            className="text-4xl font-bold text-center w-24 h-16 border-4 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none"
            placeholder="?"
          />
        </div>

        <button
          onClick={checkMathAnswer}
          disabled={!mathAnswer}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:transform-none"
        >
          Check Answer! ✨
        </button>

        {/* Math Tips */}
        <div className="mt-6 bg-yellow-50 rounded-2xl p-4 border-2 border-yellow-200">
          <p className="text-yellow-800 text-sm">
            💡 <strong>Tip:</strong> For multiplication, think "groups of"! 
            6 × 4 means "6 groups of 4" or "4 groups of 6"
          </p>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-2xl p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Today's Progress:</span>
          <span className="font-bold text-blue-600">3/5 problems</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );

  // Profile Screen
  const ProfileScreen = () => (
    <div className="p-4 pb-20 bg-gradient-to-b from-purple-50 to-pink-50 min-h-screen">
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
          👧
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Emma Johnson</h2>
        <p className="text-gray-600">Grade 3 Super Learner!</p>
      </div>

      <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <Trophy className="text-yellow-500 mr-2" size={24} />
          Grade 3 Achievements
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} 
                 className={`p-3 rounded-xl text-center ${
                   achievement.unlocked ? 'bg-yellow-50 border-2 border-yellow-200' : 'bg-gray-50 border-2 border-gray-200'
                 }`}>
              <div className={`text-2xl mb-1 ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
                {achievement.icon}
              </div>
              <p className={`font-semibold text-xs ${achievement.unlocked ? 'text-yellow-700' : 'text-gray-500'}`}>
                {achievement.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Learning Stats</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Total Stars Earned:</span>
            <span className="font-bold text-yellow-600">{userProgress.stars}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Current Grade:</span>
            <span className="font-bold text-blue-600">Grade {userProgress.level}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Learning Streak:</span>
            <span className="font-bold text-orange-600">{userProgress.streak} days</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Subjects Mastered:</span>
            <span className="font-bold text-green-600">2/4</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Chat Sessions:</span>
            <span className="font-bold text-purple-600">12 with Buddy 🤖</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <HomeScreen />;
      case 'mathGame': return <MathGameScreen />;
      case 'profile': return <ProfileScreen />;
      case 'parentCorner': return <ParentCornerScreen />;
      case 'teacherCorner': return <TeacherCornerScreen />;
      case 'lessons': return <HomeScreen />; // Simplified for prototype
      case 'games': return <HomeScreen />; // Simplified for prototype
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      {renderScreen()}
      <Navigation />
      <Chatbot />
      <SidePanel />
      <PasswordModal />
    </div>
  );
};

export default KidsLearnApp;