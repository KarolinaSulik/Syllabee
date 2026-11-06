
# Syllabee 🐝

## Screenshots

### Screenshot 1
![Syllabee Screenshot 1](Bildschirmfoto%202026-11-06%20um%2022.08.36.png)

### Screenshot 2
![Syllabee Screenshot 2](Bildschirmfoto%202026-11-06%20um%2022.08.46.png)

### Screenshot 3
![Syllabee Screenshot 3](Bildschirmfoto%202026-11-06%20um%2022.09.01.png)


### A Web-Based Reading App for Children

Syllabee is a multilingual educational web application designed to help young children learn letters, syllables, words, and simple sentences through interactive exercises.

The project focuses on making early reading practice simple, accessible, and enjoyable. Children can practice at their own pace, with support from their parents.

🌐 **Live Demo:** https://syllabee.online

## Technologies

- HTML5
- CSS3
- JavaScript
- Web Speech API
- Responsive Web Design
- Git & GitHub
- GitHub Pages

The project also includes an integration for user authentication and paid access using Supabase and Stripe.

## Features

### Interactive Reading Exercises

Syllabee offers several types of learning activities:

- **Letter Recognition:** Practice identifying and typing individual letters.
- **Word Building:** Type words letter by letter.
- **Syllable Exercises:** Recognize and arrange syllables in the correct order.
- **Sentence Building:** Create simple sentences from words.
- **Picture-Based Exercises:** Match illustrations with words and practice spelling.
- **Creative Sentences:** Build sentences using visual elements.

### Multilingual Support

The application supports three languages:

- German
- English
- Polish

### Audio Feedback

- Letter and syllable pronunciation using the Web Speech API
- Language-specific speech synthesis
- Simple audio feedback for user interactions

### Child-Friendly Design

- Simple and intuitive interface
- Interactive exercises using keyboard and touch input
- No advertisements
- Designed for short learning sessions

## How to Run

The application runs directly in a modern web browser.

**Option 1 – Online**

Open https://syllabee.online

**Option 2 – Locally**

1. Clone or download this repository.
2. Open `index.html` in Chrome, Safari, or Firefox.
3. Select a language and start practicing.

Some online services, such as authentication and payments, require additional configuration.

## Project Structure

- `index.html` – Main application entry point
- `script.js` – Learning logic and interactive exercises
- `assets/` – Images and other resources
- `docs/` – Additional technical documentation
- `supabase/` – Backend functions and database migrations

## Backend & Payments

The repository also contains an implementation for optional premium access.

Technologies include:

- Supabase Authentication
- Supabase Edge Functions
- PostgreSQL
- Stripe Checkout
- Stripe Webhooks

Paid access is managed through server-side verification rather than client-side payment confirmation.

For setup instructions and implementation details, see the documentation in the `docs/` directory.

## About the Project

Syllabee is a personal software development project created to combine my interest in programming with educational applications for children.

It has allowed me to gain practical experience in frontend development, interactive user interfaces, multilingual applications, and web technologies.

The application is being developed and improved continuously.
