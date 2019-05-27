const testUserData = {
  'id': 1,
  'email': 'villainmeng@gmail.com',
  'password': '356a192b7913b04c54574d18c28d46e6395428ab',
  'firstName': 'John',
  'lastName': 'Smith',
  'lists': [
    {
      'title': 'Books to read',
      'items': [
        {'text': 'Clean code', 'isDone': false},
        {'text': 'Test Driven Development: By Example', 'isDone': false},
        {'text': 'Don\'t Make Me Think', 'isDone': false},
        {'text': 'The Pragmatic Programmer: From Journeyman to Master', 'isDone': false},
        {'text': 'Working Effectively With Legacy Code', 'isDone': false},
        {'text': 'Refactoring', 'isDone': false},
        {'text': 'Soft Skills: The Software Developer\'s Life Manual', 'isDone': false},
        {'text': 'Head First Design Patterns', 'isDone': false},
      ],
    },
    {
      'title': 'Movies to watch',
      'items': [
        {'text': 'The Matrix', 'isDone': false},
        {'text': 'The Social Network', 'isDone': true},
        {'text': 'Source Code', 'isDone': false},
        {'text': 'Pirates of Silicon Valley', 'isDone': false},
      ],
    },
    {'title': 'Things to buy',
      'items': [
        {'text': 'Keyboard', 'isDone': true},
        {'text': 'Mouse', 'isDone': true},
        {'text': 'Monitor', 'isDone': true},
        {'text': 'iPhone', 'isDone': true},
        {'text': 'iPad', 'isDone': true},
        {'text': 'MacBook', 'isDone': false},
      ],
    },
    {'title': 'Food to eat',
      'items': [
        {'text': 'Avocados', 'isDone': false},
        {'text': 'Eggs', 'isDone': false},
        {'text': 'Beans', 'isDone': false},
        {'text': 'Yogurt', 'isDone': false},
        {'text': 'Salmon', 'isDone': false},
        {'text': 'Popcorn', 'isDone': false},
        {'text': 'Almonds', 'isDone': false},
      ],
    },
    {'title': 'Courses to take',
      'items': [
        {'text': 'Frontend Fundamentals', 'isDone': true},
        {'text': 'Keeping Up with the Javascripts: ES6', 'isDone': true},
        {'text': 'The Node.js Master Class', 'isDone': false},
        {'text': 'Complete Python Bootcamp', 'isDone': false},
        {'text': 'Graphic Design Bootcamp', 'isDone': false},
        {'text': 'Hands-On Artificial Neural Networks', 'isDone': false},
      ],
    },
  ],
};

new Storage().storeUserData(testUserData);
